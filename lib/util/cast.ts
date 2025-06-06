/**
 * Cast
 */
import { Color } from "./color";

declare type RGBColorArray = number[];

declare type RGBObject = {
    r: number,
    g: number,
    b: number,
    a?: number,
}
declare type HSVObject = {
    h: number, 
    s: number,
    v: number,
}
/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */

export class Cast {
    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * @param {any} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */
    static toNumber (value: any): number {
        // If value is already a number we don't need to coerce it with
        // Number().
        if (typeof value === 'number') {
            // Scratch treats NaN as 0, when needed as a number.
            // E.g., 0 + NaN -> 0.
            if (Number.isNaN(value)) {
                return 0;
            }
            return value;
        }
        const n = Number(value);
        if (Number.isNaN(n)) {
            // Scratch treats NaN as 0, when needed as a number.
            // E.g., 0 + NaN -> 0.
            return 0;
        }
        return n;
    }

    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {any} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */
    static toBoolean (value: any): boolean {
        // Already a boolean?
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'string') {
            // These specific strings are treated as false in Scratch.
            if ((value === '') ||
                (value === '0') ||
                (value.toLowerCase() === 'false')) {
                return false;
            }
            // All other strings treated as true.
            return true;
        }
        // Coerce other values and numbers.
        return Boolean(value);
    }

    /**
     * Scratch cast to string.
     * @param {any} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */
    static toString (value: any): string {
        return String(value);
    }
    /**
     * Convert an RGB color to HSV format. 
     * ref: scratch-vm, util/color.js
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */
    static rgbToHsv (rgb: RGBObject): HSVObject {
        const r = rgb.r / 255;
        const g = rgb.g / 255;
        const b = rgb.b / 255;
        const x = Math.min(Math.min(r, g), b);
        const v = Math.max(Math.max(r, g), b);

        // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
        let h = 0;
        let s = 0;
        if (x !== v) {
            const f = (r === x) ? g - b : ((g === x) ? b - r : r - g);
            const i = (r === x) ? 3 : ((g === x) ? 5 : 1);
            h = ((i - (f / (v - x))) * 60) % 360;
            s = (v - x) / v;
        }

        return {h: h, s: s, v: v};
    }

    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {any} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */
    static toRgbColorList (value: any) : RGBColorArray {
        const color = Cast.toRgbColorObject(value);
        return [color.r, color.g, color.b];
    }

    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */
    static toRgbColorObject (value: any): RGBObject {
        let color;
        if (typeof value === 'string' && value.substring(0, 1) === '#') {
            color = Color.hexToRgb(value);

            // If the color wasn't *actually* a hex color, cast to black
            if (!color) color = {r: 0, g: 0, b: 0, a: 255};
        } else {
            color = Color.decimalToRgb(Cast.toNumber(value));
        }
        return color;
    }

    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */
    static isWhiteSpace (val: any): boolean {
        return val === null || (typeof val === 'string' && val.trim().length === 0);
    }

    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */
    static compare (v1: any, v2: any): number {
        let n1 = Number(v1);
        let n2 = Number(v2);
        if (n1 === 0 && Cast.isWhiteSpace(v1)) {
            n1 = NaN;
        } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
            n2 = NaN;
        }
        if (isNaN(n1) || isNaN(n2)) {
            // At least one argument can't be converted to a number.
            // Scratch compares strings as case insensitive.
            const s1 = String(v1).toLowerCase();
            const s2 = String(v2).toLowerCase();
            if (s1 < s2) {
                return -1;
            } else if (s1 > s2) {
                return 1;
            }
            return 0;
        }
        // Handle the special case of Infinity
        if (
            (n1 === Infinity && n2 === Infinity) ||
            (n1 === -Infinity && n2 === -Infinity)
        ) {
            return 0;
        }
        // Compare as numbers.
        return n1 - n2;
    }

    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */
    static isInt (val: any): boolean {
        // Values that are already numbers.
        if (typeof val === 'number') {
            if (isNaN(val)) { // NaN is considered an integer.
                return true;
            }
            // True if it's "round" (e.g., 2.0 and 2).
            const _val = `${val}`;
            return val === parseInt(_val, 10);
        } else if (typeof val === 'boolean') {
            // `True` and `false` always represent integer after Scratch cast.
            return true;
        } else if (typeof val === 'string') {
            // If it contains a decimal point, don't consider it an int.
            return val.indexOf('.') < 0;
        }
        return false;
    }

    static get LIST_INVALID (): string {
        return 'INVALID';
    }

    static get LIST_ALL (): string {
        return 'ALL';
    }

    /**
     * Compute a 1-based index into a list, based on a Scratch argument.
     * Two special cases may be returned:
     * LIST_ALL: if the block is referring to all of the items in the list.
     * LIST_INVALID: if the index was invalid in any way.
     * @param {*} index Scratch arg, including 1-based numbers or special cases.
     * @param {number} length Length of the list.
     * @param {boolean} acceptAll Whether it should accept "all" or not.
     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
     */
    static toListIndex (index: any, length: number, acceptAll: boolean): number|string {
        if (typeof index !== 'number') {
            if (index === 'all') {
                return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
            }
            if (index === 'last') {
                if (length > 0) {
                    return length;
                }
                return Cast.LIST_INVALID;
            } else if (index === 'random' || index === 'any') {
                if (length > 0) {
                    return 1 + Math.floor(Math.random() * length);
                }
                return Cast.LIST_INVALID;
            }
        }
        index = Math.floor(Cast.toNumber(index));
        if (index < 1 || index > length) {
            return Cast.LIST_INVALID;
        }
        return index;
    }
};