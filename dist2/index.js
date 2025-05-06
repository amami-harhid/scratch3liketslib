import "core-js/modules/esnext.array.last-index.js";
import "core-js/modules/esnext.array.last-item.js";
import "core-js/modules/esnext.composite-key.js";
import "core-js/modules/esnext.composite-symbol.js";
import "core-js/modules/esnext.map.delete-all.js";
import "core-js/modules/esnext.map.every.js";
import "core-js/modules/esnext.map.filter.js";
import "core-js/modules/esnext.map.find.js";
import "core-js/modules/esnext.map.find-key.js";
import "core-js/modules/esnext.map.from.js";
import "core-js/modules/esnext.map.includes.js";
import "core-js/modules/esnext.map.key-by.js";
import "core-js/modules/esnext.map.key-of.js";
import "core-js/modules/esnext.map.map-keys.js";
import "core-js/modules/esnext.map.map-values.js";
import "core-js/modules/esnext.map.merge.js";
import "core-js/modules/esnext.map.of.js";
import "core-js/modules/esnext.map.reduce.js";
import "core-js/modules/esnext.map.some.js";
import "core-js/modules/esnext.map.update.js";
import "core-js/modules/esnext.math.clamp.js";
import "core-js/modules/esnext.math.deg-per-rad.js";
import "core-js/modules/esnext.math.degrees.js";
import "core-js/modules/esnext.math.fscale.js";
import "core-js/modules/esnext.math.iaddh.js";
import "core-js/modules/esnext.math.imulh.js";
import "core-js/modules/esnext.math.isubh.js";
import "core-js/modules/esnext.math.rad-per-deg.js";
import "core-js/modules/esnext.math.radians.js";
import "core-js/modules/esnext.math.scale.js";
import "core-js/modules/esnext.math.seeded-prng.js";
import "core-js/modules/esnext.math.signbit.js";
import "core-js/modules/esnext.math.umulh.js";
import "core-js/modules/esnext.number.from-string.js";
import "core-js/modules/esnext.observable.js";
import "core-js/modules/esnext.promise.try.js";
import "core-js/modules/esnext.reflect.define-metadata.js";
import "core-js/modules/esnext.reflect.delete-metadata.js";
import "core-js/modules/esnext.reflect.get-metadata.js";
import "core-js/modules/esnext.reflect.get-metadata-keys.js";
import "core-js/modules/esnext.reflect.get-own-metadata.js";
import "core-js/modules/esnext.reflect.get-own-metadata-keys.js";
import "core-js/modules/esnext.reflect.has-metadata.js";
import "core-js/modules/esnext.reflect.has-own-metadata.js";
import "core-js/modules/esnext.reflect.metadata.js";
import "core-js/modules/esnext.set.add-all.js";
import "core-js/modules/esnext.set.delete-all.js";
import "core-js/modules/esnext.set.difference.js";
import "core-js/modules/esnext.set.every.js";
import "core-js/modules/esnext.set.filter.js";
import "core-js/modules/esnext.set.find.js";
import "core-js/modules/esnext.set.from.js";
import "core-js/modules/esnext.set.intersection.js";
import "core-js/modules/esnext.set.is-disjoint-from.js";
import "core-js/modules/esnext.set.is-subset-of.js";
import "core-js/modules/esnext.set.is-superset-of.js";
import "core-js/modules/esnext.set.join.js";
import "core-js/modules/esnext.set.map.js";
import "core-js/modules/esnext.set.of.js";
import "core-js/modules/esnext.set.reduce.js";
import "core-js/modules/esnext.set.some.js";
import "core-js/modules/esnext.set.symmetric-difference.js";
import "core-js/modules/esnext.set.union.js";
import "core-js/modules/esnext.string.at.js";
import "core-js/modules/esnext.string.code-points.js";
import "core-js/modules/esnext.symbol.dispose.js";
import "core-js/modules/esnext.symbol.observable.js";
import "core-js/modules/esnext.symbol.pattern-match.js";
import "core-js/modules/esnext.weak-map.delete-all.js";
import "core-js/modules/esnext.weak-map.from.js";
import "core-js/modules/esnext.weak-map.of.js";
import "core-js/modules/esnext.weak-set.add-all.js";
import "core-js/modules/esnext.weak-set.delete-all.js";
import "core-js/modules/esnext.weak-set.from.js";
import "core-js/modules/esnext.weak-set.of.js";
import "core-js/modules/web.immediate.js";
import "regenerator-runtime";
import {Buffer as $bmdED$Buffer} from "buffer";
import {EventEmitter as $bmdED$EventEmitter} from "events";
import {ScratchRender as $bmdED$ScratchRender} from "scratch-render/dist/node/scratch-render.js";
import {parse as $bmdED$parse} from "@babel/parser";
import $bmdED$scratchaudio from "scratch-audio";
import {v3 as $bmdED$v3, createTexture as $bmdED$createTexture} from "twgl.js";

var $149c1bd638913645$exports = {};














































































const $aa5c463d8e2daad8$export$6c0517834721cef7 = {
    pace: 33,
    bubbleScaleLinkedToSprite: false,
    WindowSize: {
        w: innerWidth,
        h: innerHeight
    }
};


class $0f30b8d6a4dd3c3e$export$2cc2aaca18109aab {
    static{
        this.instance = null;
    }
    static getInstance() {
        if ($0f30b8d6a4dd3c3e$export$2cc2aaca18109aab.instance) return $0f30b8d6a4dd3c3e$export$2cc2aaca18109aab.instance;
        return new $0f30b8d6a4dd3c3e$export$2cc2aaca18109aab();
    }
    /**
     * @constructor
     */ constructor(){
        this.domParser = new DOMParser();
        this.serializer = new XMLSerializer();
        this.svgDoc = null;
    }
    /**
     * SVG Text をパースする
     * 
     * @param {string} svgText 
     * @return {Element} 
     */ parseFromString(svgText) {
        const parsedSVGDoc = this.domParser.parseFromString(svgText, 'image/svg+xml');
        this.svgDoc = parsedSVGDoc.childNodes[0];
        return this.svgDoc;
    }
    /**
     * 
     * @return {{w:number,h:number}}
     */ getSize() {
        if (this.svgDoc) {
            const element = this.svgDoc;
            const w = element.getAttribute('width');
            const h = element.getAttribute('height');
            const _w = `${w}`.replace('px', '');
            const _h = `${h}`.replace('px', '');
            return {
                w: Number(_w),
                h: Number(_h)
            };
        }
        return {
            w: 0,
            h: 0
        };
    }
    /**
     * 
     * @param {Element} svgDoc 
     * @param {number} w 
     * @param {number} h 
     * @param {object} translate 
     * @return {string} 変更後のsvgDoc文字列
     */ sizeChange(svgDoc, w = 480, h = 360, translate = {
        x: 0,
        y: 0
    }) {
        // svgタグ
        svgDoc.setAttribute('width', `${w}px`);
        svgDoc.setAttribute('height', `${h}px`);
        svgDoc.setAttribute('viewBox', `0 0 ${w} ${h}`);
        // transformをもつgTag
        const gTagTransform = svgDoc.querySelectorAll('g[transform]');
        if (gTagTransform && gTagTransform.length && gTagTransform.length > 0) {
            const translateX = translate.x;
            const translateY = translate.y;
            gTagTransform[0].setAttribute('transform', `translate(${translateX}, ${translateY})`);
        }
        const changed = this.serializer.serializeToString(svgDoc);
        return changed;
    }
}
const $0f30b8d6a4dd3c3e$export$3fe07aa4fdb4340d = $0f30b8d6a4dd3c3e$export$2cc2aaca18109aab.getInstance();


class $682308166500cfe9$export$8905ce1c7a2464a1 {
    static get REGEX_DATA_IMAGE_URL() {
        return /^data:image\\/;
    }
    static get REGEX_SVG_DATA_IMAGE_URL() {
        return /^<svg\s/;
    }
    static get REGEX_SVG_DATA_IMAGE_FILE() {
        return /^.+\.svg$/;
    }
    static isSVG(image) {
        if (typeof image === 'string') {
            const dataImageUrl = image;
            if (dataImageUrl.match($682308166500cfe9$export$8905ce1c7a2464a1.REGEX_SVG_DATA_IMAGE_URL)) return true;
        }
        return false;
    }
    /**
     * 
     * @param {string} image 
     * @param {string} name 
     * @param {{x:number,y:number}} translate 
     * @return {Promise<{name:string,data: any}>} 
     */ static async loadImage(image, name, translate = {
        x: 0,
        y: 0
    }) {
        if (image) {
            if (typeof image === 'string') {
                if (image.match($682308166500cfe9$export$8905ce1c7a2464a1.REGEX_SVG_DATA_IMAGE_FILE)) {
                    let _text = await $682308166500cfe9$export$8905ce1c7a2464a1._svgText(image);
                    if (_text == "ERROR") throw "\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u30A8\u30E9\u30FC\u3002SVG\u753B\u50CF\u30C7\u30FC\u30BF\u306E\u6307\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002(" + image + ")";
                    const parser = (0, $0f30b8d6a4dd3c3e$export$3fe07aa4fdb4340d);
                    const svgDoc = parser.parseFromString(_text);
                    const size = parser.getSize();
                    if (size.w > 480 && size.h > 360) {
                        const changed = parser.sizeChange(svgDoc, 480, 360, translate);
                        return {
                            name: name,
                            data: changed
                        };
                    } else return {
                        name: name,
                        data: _text
                    };
                } else {
                    const localUrl = image;
                    let _img = await $682308166500cfe9$export$8905ce1c7a2464a1._loadImage(localUrl);
                    if (_img == "ERROR") throw "\u30A4\u30E1\u30FC\u30B8\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u30A8\u30E9\u30FC\u3002\u753B\u50CF\u30C7\u30FC\u30BF\u306E\u6307\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002(" + localUrl + ")";
                    return {
                        name: name,
                        data: _img
                    };
                }
            }
        }
        throw "\u30A4\u30E1\u30FC\u30B8\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u30A8\u30E9\u30FC\u3002\u753B\u50CF\u30C7\u30FC\u30BF\u306E\u6307\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002";
    }
    static async _loadImage(src) {
        return new Promise((resolve, reject)=>{
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = ()=>resolve(img);
            img.onerror = (e)=>{
                //reject(e);
                resolve("ERROR");
            };
            img.src = src;
        });
    }
    static async _svgText(image) {
        let svg = await fetch(image);
        let _text = await svg.text();
        if (_text.substring(0, 4) != "<svg") return "ERROR";
        return _text;
    }
}


class $fa849af9eaa7552a$export$cdbe365d8c7d477d {
    /**
     * Convert a value from degrees to radians.
     * @param {!number} deg Value in degrees.
     * @return {!number} Equivalent value in radians.
     */ static degToRad(deg) {
        return deg * Math.PI / 180;
    }
    /**
     * Convert a value from radians to degrees.
     * @param {!number} rad Value in radians.
     * @return {!number} Equivalent value in degrees.
     */ static radToDeg(rad) {
        return rad * 180 / Math.PI;
    }
    /**
     * Clamp a number between two limits.
     * If n < min, return min. If n > max, return max. Else, return n.
     * @param {!number} n Number to clamp.
     * @param {!number} min Minimum limit.
     * @param {!number} max Maximum limit.
     * @return {!number} Value of n clamped to min and max.
     */ static clamp(n, min, max) {
        return Math.min(Math.max(n, min), max);
    }
    /**
     * Keep a number between two limits, wrapping "extra" into the range.
     * e.g., wrapClamp(7, 1, 5) == 2
     * wrapClamp(0, 1, 5) == 5
     * wrapClamp(-11, -10, 6) == 6, etc.
     * @param {!number} n Number to wrap.
     * @param {!number} min Minimum limit.
     * @param {!number} max Maximum limit.
     * @return {!number} Value of n wrapped between min and max.
     */ static wrapClamp(n, min, max) {
        const range = max - min + 1;
        return n - Math.floor((n - min) / range) * range;
    }
    /**
     * Convert a value from tan function in degrees.
     * @param {!number} angle in degrees
     * @return {!number} Correct tan value
     */ static tan(angle) {
        angle = angle % 360;
        switch(angle){
            case -270:
            case 90:
                return Infinity;
            case -90:
            case 270:
                return -Infinity;
            default:
                return parseFloat(Math.tan(Math.PI * angle / 180).toFixed(10));
        }
    }
    /**
     * Given an array of unique numbers,
     * returns a reduced array such that each element of the reduced array
     * represents the position of that element in a sorted version of the
     * original array.
     * E.g. [5, 19. 13, 1] => [1, 3, 2, 0]
     * @param {Array<number>} elts The elements to sort and reduce
     * @return {Array<number>} The array of reduced orderings
     */ static reducedSortOrdering(elts) {
        const sorted = elts.slice(0).sort((a, b)=>a - b);
        return elts.map((e)=>sorted.indexOf(e));
    }
    /**
     * Return a random number given an inclusive range and a number in that
     * range that should be excluded.
     *
     * For instance, (1, 5, 3) will only pick 1, 2, 4, or 5 (with equal
     * probability)
     *
     * @param {number} lower - The lower bound (inlcusive)
     * @param {number} upper - The upper bound (inclusive), such that lower <= upper
     * @param {number} excluded - The number to exclude (MUST be in the range)
     * @return {number} A random integer in the range [lower, upper] that is not "excluded"
     */ static inclusiveRandIntWithout(lower, upper, excluded) {
        // Note that subtraction is the number of items in the
        // inclusive range [lower, upper] minus 1 already
        // (e.g. in the set {3, 4, 5}, 5 - 3 = 2).
        const possibleOptions = upper - lower;
        const randInt = lower + Math.floor(Math.random() * possibleOptions);
        if (randInt >= excluded) return randInt + 1;
        return randInt;
    }
    /**
     * Scales a number from one range to another.
     * @param {number} i number to be scaled
     * @param {number} iMin input range minimum
     * @param {number} iMax input range maximum
     * @param {number} oMin output range minimum
     * @param {number} oMax output range maximum
     * @return {number} scaled number
     */ static scale(i, iMin, iMax, oMin, oMax) {
        const p = (i - iMin) / (iMax - iMin);
        return p * (oMax - oMin) + oMin;
    }
}


const $57ac7e9ecbc5361f$var$StageCanvasWrapperID = "stageCanvasWrapper";
const $57ac7e9ecbc5361f$var$CanvasText2dId = "canvas-text2D";
const $57ac7e9ecbc5361f$var$CanvasText2dClassName = "likeScratch-text-canvas";
const $57ac7e9ecbc5361f$var$CanvasText2dZIndex = 90;
const $57ac7e9ecbc5361f$var$CanvasMonitor2dClassName = 'likeScratch-monitor-canvas';
const $57ac7e9ecbc5361f$var$CanvasMonitor2dZIndex = 100;
class $57ac7e9ecbc5361f$export$8d01c972ee8b14a9 {
    static CanvasMonitor2dClassName() {
        return $57ac7e9ecbc5361f$var$CanvasMonitor2dClassName;
    }
    static StageCanvasWrapperID() {
        return $57ac7e9ecbc5361f$var$StageCanvasWrapperID;
    }
    // static CanvasText2D ( ) {
    //     return CanvasText2D;
    // }
    static createCanvas() {
        if ($57ac7e9ecbc5361f$export$8d01c972ee8b14a9.canvas) return $57ac7e9ecbc5361f$export$8d01c972ee8b14a9.canvas;
        //        const stageCanvasWrapper = Canvas.getStageCanvasWrapper();
        const canvasDiv = $57ac7e9ecbc5361f$export$8d01c972ee8b14a9.getLikeScratchCanvas();
        let canvas = document.getElementById('canvas');
        if (canvas == undefined) {
            canvas = document.createElement('canvas');
            canvas.id = 'canvas';
            canvasDiv.appendChild(canvas);
        }
        $57ac7e9ecbc5361f$export$8d01c972ee8b14a9.canvas = canvas;
        $57ac7e9ecbc5361f$export$8d01c972ee8b14a9.createTextCanvas();
        return canvas;
    }
    static createTextCanvas() {
        let canvasText2D = document.getElementById($57ac7e9ecbc5361f$var$CanvasText2dId);
        if (canvasText2D) return canvasText2D;
        //        const stageCanvasWrapper = Canvas.getStageCanvasWrapper();
        const canvasDiv = $57ac7e9ecbc5361f$export$8d01c972ee8b14a9.getLikeScratchCanvas();
        canvasText2D = document.createElement('canvas');
        canvasDiv.appendChild(canvasText2D);
        canvasText2D.id = $57ac7e9ecbc5361f$var$CanvasText2dId;
        canvasText2D.className = $57ac7e9ecbc5361f$var$CanvasText2dClassName;
        canvasText2D.style.position = 'absolute';
        canvasText2D.style.border = 'none';
        canvasText2D.style.zIndex = `${$57ac7e9ecbc5361f$var$CanvasText2dZIndex}`;
        $57ac7e9ecbc5361f$export$8d01c972ee8b14a9.textCanvas = canvasText2D;
        return canvasText2D;
    }
    static resize2DContext(width, height) {
        const textCanvas = $57ac7e9ecbc5361f$export$8d01c972ee8b14a9.textCanvas;
        if (textCanvas != null) {
            const _textCanvas = textCanvas;
            _textCanvas.style.left = '0px';
            _textCanvas.style.top = '0px';
            _textCanvas.width = width;
            _textCanvas.height = height;
        }
    }
    static createMonitorCanvas() {
        const canvasArr = document.getElementsByClassName($57ac7e9ecbc5361f$var$CanvasMonitor2dClassName);
        if (canvasArr && canvasArr.length > 0) return canvasArr[0];
        const canvasDiv = $57ac7e9ecbc5361f$export$8d01c972ee8b14a9.getLikeScratchCanvas();
        const canvasMonitor2D = document.createElement('canvas');
        canvasMonitor2D.className = $57ac7e9ecbc5361f$var$CanvasMonitor2dClassName;
        canvasMonitor2D.style.position = 'absolute';
        canvasMonitor2D.style.border = 'none';
        canvasMonitor2D.style.zIndex = `${$57ac7e9ecbc5361f$var$CanvasMonitor2dZIndex}`;
        canvasMonitor2D.style.left = '0px';
        canvasMonitor2D.style.top = '0px';
        canvasDiv.appendChild(canvasMonitor2D);
        return canvasMonitor2D;
    }
    static resizeMonitorCanvas(width, height) {
        const canvasArr = document.getElementsByClassName($57ac7e9ecbc5361f$var$CanvasMonitor2dClassName);
        //console.log(`canvasArr.length=${canvasArr.length}`)
        for (const canvas of canvasArr){
            const _canvas = canvas;
            _canvas.width = width;
            _canvas.height = height;
        }
    }
    static getStageCanvasWrapper() {
        let stageCanvasWrapper = document.getElementById($57ac7e9ecbc5361f$var$StageCanvasWrapperID);
        if (stageCanvasWrapper) return stageCanvasWrapper;
        stageCanvasWrapper = document.createElement('div');
        stageCanvasWrapper.id = $57ac7e9ecbc5361f$var$StageCanvasWrapperID;
        stageCanvasWrapper.classList.add($57ac7e9ecbc5361f$var$StageCanvasWrapperID);
        //stageCanvasWrapper.style.position = 'relative';
        const main = document.getElementById('main');
        if (main) main.appendChild(stageCanvasWrapper);
        return stageCanvasWrapper;
    }
    static getLikeScratchCanvas() {
        let canvasDiv = document.getElementById('canvasDiv');
        if (canvasDiv) return canvasDiv;
        const stageCanvasWrapper = $57ac7e9ecbc5361f$export$8d01c972ee8b14a9.getStageCanvasWrapper();
        canvasDiv = document.createElement('div');
        canvasDiv.classList.add('likeScratch-canvas');
        canvasDiv.id = 'canvasDiv';
        stageCanvasWrapper.appendChild(canvasDiv);
        return canvasDiv;
    }
}


const $80fb1bbfe728e011$export$c4ffa16951855e28 = {
    documentCss: `
* { 
        box-sizing: border-box;
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-touch-callout:none;                /* prevent callout to copy image, etc when tap to hold */
        -webkit-tap-highlight-color:rgba(0,0,0,0); /* prevent tap highlight color / shadow */
  }
html, body{
        margin:0;
        padding:0;
        width:100%;
        height:100%;
        overflow-x: hidden;
        overflow-y: hidden;
  }
.displayNone {
        display:none;
  }
`,
    flagCss: `
.disableClick {
        pointer-events: none;
}
.enableClick {
    filter:brightness(1.2);
    transform:none;
}
#start-flag{
        z-index:2147483647;
  }
.likeScratch-flag {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 75px;
        line-height: 65px;
        padding: 32px;
        color: #005e00;
        background: #2eff2e;
        border: 2px solid #007900;
        border-radius: 65px;
        cursor: pointer;
  }

.green-flag.is-active {
    background-color: $looks-transparent;
}
#main {
        position: absolute;
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e0ffff;
  }
`,
    scratch3Header: `
.scratch3Header {
        position: fixed;
        background-color: rgb(232, 237, 241);
        top: 0;
        left: 0;
        right: 0;
        z-index: 5000;
        width: 100%;
  }
.scratch3HeaderMenu {
    display: flex;
    margin: auto;
    justify-content: space-between;
    flex-shrink: 0;
    align-items: center;
    height: 2.0rem;
    padding-top: 0;
    padding-bottom: 0;
}
.controls_controls-container {
    display: flex;
}
.green-flag_green-flag {
    width: 2rem;
    height: 2rem;
    padding: 0.375rem;
    border-radius: 0.25rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    user-drag: none;
    cursor: pointer;
}
.green-flag_green-flag:hover {
    background-color: hsla(260, 60%, 60%, 0.15);
}
.green-flag_green-flag.running {
    background-color: hsla(260, 60%, 60%, 0.55);
    opacity: 0.5;
    filter:brightness(1.2);
    transform:none;
}
.green-flag_green-flag.not-running {
    opacity: 1.0;
}


.pause-button {
    width: 2rem;
    height: 2rem;
    padding: 0.375rem;
    border-radius: 0.25rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    user-drag: none;
    cursor: pointer;
}
.stop-all_stop-all_pluqe {
    width: 2rem;
    height: 2rem;
    padding: 0.375rem;
    border-radius: 0.25rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
}
.stop-all_stop-all_pluqe:hover {
    background-color: hsla(260, 60%, 60%, 0.15);
}
.stop-all_stop-all_pluqe.is-not-active {
    opacity: 0.5;
    filter:brightness(1.2);
    transform:none;
}
.stop-all_stop-all_pluqe.is-active {
    opacity: 1.0;
}
.title-field {
    padding-left: 0.65rem;
    padding-top: 0.375rem;
    padding-right: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 0.8rem  
}

`,
    canvasCss: `
.stageCanvasWrapper {
    position: fixed;
    top: 2rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5000;
    background-color: hsla(0, 100%, 100%, 1);
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.likeScratch-canvas {
        display: block;
        border: 1px solid #141414;
        border-radius: 15px;
  }  
`,
    textCanvasCss: `
.likeScratch-text-canvas {
        pointer-events: none;
  }
`,
    mainTmpCss: `
.nowLoading {
    background-image: url(https://amami-harhid.github.io/scratch3LikeJs/web/assets/NowLoading.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f0f0f0;
}
`,
    askCss: `
.stage_stage-overlays {
    position: absolute;
    top: 0.0625rem;
    left: 0.0625rem;
    pointer-events: none;
    width: 100%;
    height: 100%;
    z-index: 9999;
}
.stage_stage-bottom-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    top: 0;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    width:100%;
    height:100%;
}
.stage_question-wrapper {
    width:100%;
    pointer-events: auto;
    z-index:99999;
}
.question_question-container {
    margin: 0.5rem;
    border: 1px solid hsla(0, 0%, 0%, 0.15);
    border-radius: 0.5rem;
    border-width: 2px;
    padding: 1rem;
    background: white;
}
.question_question-label {
    font-size: 0.75rem;
    font-weight: bold;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: hsla(225, 15%, 40%, 1);
    padding-bottom: 0.5rem;
}
.question_question-input {
    display: flex;
    position: relative;
    width:100%;
}
.question_question-input > input {
    padding: 0 2rem 0 .75rem;
    width:100%;
    font-weight: normal;
}
.question_question-input > input:focus {
    box-shadow: 0px 0px 0px 3px hsla(260, 60%, 60%, 0.35);
}
.input_input-form {
    height: 2rem;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    color: hsla(225, 15%, 40%, 1);
    border-width: 1px;
    border-style: solid;
    border-color: hsla(0, 0%, 0%, 0.15);
    border-radius: 2rem;
    outline: none;
    cursor: text;
    transition: 0.25s ease-out;
    box-shadow: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    width:100%;
}
.input_input-form : hover {
    border-color : hsla( 260, 60%, 60%, 1);
}
.question_question-submit-button{
    position: absolute;
    top: calc(0.5rem / 2);
    right: calc(0.5rem /2);
    width: calc(2rem - 0.5rem);
    height: calc(2rem - 0.5rem);
    border: none;
    border-radius: 100%;
    color: white;
    background: hsla(260, 60%, 60%, 1);
}
.question_question-submit-button-icon {
    width: calc(2rem - 0.5rem);
    height: calc(2rem - 0.5rem);
    position: relative;
    right: -7px;
    left: -7px;
}    
    `
};





class $cb9f3b1eaba280e9$export$d2ca453b913dcdea {
    /**
     * 距離を計算する
     * @param {*} obj1 {x:number, y:number}
     * @param {*} obj2 {x:number, y:number}
     * @returns distance
     */ static distance(obj1, obj2) {
        if (obj1 && obj2 && obj1.x != undefined && obj1.y != undefined && obj2.x != undefined && obj2.y != undefined) {
            const x1 = obj1.x;
            const y1 = obj1.y;
            const x2 = obj2.x;
            const y2 = obj2.y;
            if ($cb9f3b1eaba280e9$export$d2ca453b913dcdea.isNumber(x1) && $cb9f3b1eaba280e9$export$d2ca453b913dcdea.isNumber(y1) && $cb9f3b1eaba280e9$export$d2ca453b913dcdea.isNumber(x2) && $cb9f3b1eaba280e9$export$d2ca453b913dcdea.isNumber(y2)) {
                const x = x1 - x2;
                const y = y1 - y2;
                const distanceSquare = x * x + y * y;
                const distance = Math.sqrt(distanceSquare);
                return distance;
            }
        }
        return -1;
    }
    /**
     * min,max の範囲でランダム値を取得する
     * min,max 両方とも整数の場合、min,maxを含む整数のランダム値を返す
     * 上記以外の場合は minを含みmaxを含まない範囲で小数値のランダム値を返す。
     * min,max のどちらかが数値でない場合は 0 を返す
     * 
     * @param {Number} min 
     * @param {Number} max 
     * @param {Boolean} forceAsDecimal　True時には強制的に小数値として扱う。省略時はFalse。
     * @returns 
     */ static randomizeInRange(min, max, forceAsDecimal = false) {
        if ($cb9f3b1eaba280e9$export$d2ca453b913dcdea.isNumber(min) && $cb9f3b1eaba280e9$export$d2ca453b913dcdea.isNumber(max)) {
            const _max = max;
            const _min = min;
            if (forceAsDecimal === false && $cb9f3b1eaba280e9$export$d2ca453b913dcdea.isInteger(min) && $cb9f3b1eaba280e9$export$d2ca453b913dcdea.isInteger(max)) {
                // 両方とも整数のとき
                const diff = _max - _min + 1;
                const randomValue = Math.random() * diff + _min;
                return Math.floor(randomValue);
            } else // 小数を含むとき（答えにMaxを含めない)
            if (_min < _max) {
                const diff = _max - _min;
                const randomValue = Math.random() * diff + _min;
                return randomValue;
            }
        }
        return 0;
    }
    static isNumber(val) {
        if (val != undefined && (typeof val === 'number' || $cb9f3b1eaba280e9$export$d2ca453b913dcdea.isInteger(val)) && isFinite(Number(val))) return true;
        return false;
    }
    static isInteger(val) {
        if (Number.isInteger(val)) return true;
        return false;
    }
    /*
    static _waitRapperRewrited(milliSecond = Utils.WAIT_TIME) {
        return Utils.wait(milliSecond);
    }
*/ static wait(milliSecond = 0) {
        return new Promise((resolve)=>setTimeout(resolve, milliSecond));
    }
    static waitUntil(_condition, _pace, _bind) {
        return new Promise(async (resolve)=>{
            let condition;
            if (_bind) condition = _condition.bind(_bind);
            else condition = _condition;
            for(;;){
                if (condition() === true) break;
                await $cb9f3b1eaba280e9$export$d2ca453b913dcdea.wait(_pace);
            }
            resolve();
        });
    }
    /*

    static get WAIT_TIME () {
        //return 5;
        return 0;
    }    
    */ static mapDeepCopy(src, dist, defaultValue) {
        let _dist;
        if (dist) _dist = dist;
        else _dist = new Map();
        for (const k of src.keys()){
            const v = src.get(k);
            if (defaultValue) _dist.set(v, defaultValue);
            else _dist.set(k, v);
        }
        return _dist;
    }
    static generateUUID() {
        let d;
        let r;
        d = new Date().getTime();
        if (window.performance && typeof window.performance.now === 'function') d += window.performance.now() // use high-precision timer if available
        ;
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
            r = (d + Math.random() * 16) % 16 | 0 // eslint-disable-line no-mixed-operators, no-bitwise
            ;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : r & 0x3 | 0x8).toString(16) // eslint-disable-line no-mixed-operators, no-bitwise
            ;
        });
        return uuid;
    }
}


/** div include canvas */ const $c720f210576cee38$var$CanvasDiv = 'canvasDiv';
/** stageOverLays */ const $c720f210576cee38$var$StageOverlays = 'stage_stage-overlays';
/** class of stage bottom div */ const $c720f210576cee38$var$StageBottomWrapper = 'stage_stage-bottom-wrapper';
/** class of question div wrapper */ const $c720f210576cee38$var$StageQuestionWrapper = 'stage_question-wrapper';
/** class of question container */ const $c720f210576cee38$var$QuestionContainer = 'question_question-container';
/** class of question label (stage) */ const $c720f210576cee38$var$QuestionLabel = 'question_question-label';
/** class of Question input div */ const $c720f210576cee38$var$QuestionInput = 'question_question-input';
/** class of input tag */ const $c720f210576cee38$var$InputForm = 'input_input-form';
/** class of Question button */ const $c720f210576cee38$var$QuestionSubmitButton = 'question_question-submit-button';
/** class of Question Button Icon */ const $c720f210576cee38$var$QuestionSubmitButtonIcon = 'question_question-submit-button-icon';
/** Button svg text */ const $c720f210576cee38$var$ButtonIconSrc = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5HZW5lcmFsL0NoZWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggZD0iTTcuODYxNDQwNTksMTUuNDAyODc3NiBDNy40MzUyNjg1OSwxNS40MDI4Nzc2IDcuMDA5MDk2NTgsMTUuMjM5NzMzNiA2LjY4NDQ3MzM4LDE0LjkxNTExMDQgTDMuNDg4MTgzMzYsMTEuNzE4ODIwNCBDMi44MzcyNzIyMSwxMS4wNjc5MDkzIDIuODM3MjcyMjEsMTAuMDE1Nzk3MSAzLjQ4ODE4MzM2LDkuMzY0ODg2IEM0LjEzOTA5NDUsOC43MTM5NzQ4NSA1LjE5MTIwNjY0LDguNzEzOTc0ODUgNS44NDIxMTc3OCw5LjM2NDg4NiBMNy44NjE0NDA1OSwxMS4zODQyMDg4IEwxNC4xNTkxMzA4LDUuMDg4MTgzMzYgQzE0LjgwODM3NzIsNC40MzcyNzIyMSAxNS44NjIxNTQsNC40MzcyNzIyMSAxNi41MTMwNjUyLDUuMDg4MTgzMzYgQzE3LjE2MjMxMTYsNS43Mzc0Mjk3NyAxNy4xNjIzMTE2LDYuNzkxMjA2NjQgMTYuNTEzMDY1Miw3LjQ0MjExNzc4IEw5LjAzODQwNzgsMTQuOTE1MTEwNCBDOC43MTM3ODQ2LDE1LjIzOTczMzYgOC4yODc2MTI1OSwxNS40MDI4Nzc2IDcuODYxNDQwNTksMTUuNDAyODc3NiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkdlbmVyYWwvQ2hlY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHVzZSBpZD0iQ2hlY2siIGZpbGw9IiM1NzVFNzUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDxnIGlkPSJDb2xvci9XaGl0ZSIgbWFzaz0idXJsKCNtYXNrLTIpIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IkNvbG9yIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
class $c720f210576cee38$export$dc467e08448586e8 extends (0, $bmdED$EventEmitter) {
    static{
        /** emitId (input complete) */ this.TextInputComplete = 'textInputComplete';
    }
    static{
        this.QuestionBoxForceComplete = 'QuestionBoxForceComplete';
    }
    constructor(){
        super();
        this.forceComplete = false;
    }
    /**
     * DOM(StageStageOverlays)が存在しなくなるまで待つ
     * 強制打ち切りの場合は false を返す
     * @returns Promise<void>
     */ async askWait(entity) {
        const me = this;
        return new Promise(async (resolve)=>{
            const f = function() {
                me.forceComplete = true;
            };
            const stage = (0, $a6b849a6af88d987$export$80606ec500c7d132).stage;
            stage.once($c720f210576cee38$export$dc467e08448586e8.QuestionBoxForceComplete, f);
            let stage_stage_overlays = document.getElementById($c720f210576cee38$var$StageOverlays);
            for(;;){
                if (me.forceComplete === true) {
                    $c720f210576cee38$export$dc467e08448586e8.removeAsk(entity);
                    break;
                }
                if (stage_stage_overlays == undefined) break;
                await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(0.033);
                stage_stage_overlays = document.getElementById($c720f210576cee38$var$StageOverlays);
            }
            if (me.forceComplete === true) resolve(false);
            else {
                stage.removeListener($c720f210576cee38$export$dc467e08448586e8.QuestionBoxForceComplete, f);
                resolve(true);
            }
        });
    }
    /**
     * entity がStageなのかを判定する
     * @param {*} entity 
     * @returns Stageの場合 True
     */ static isStage(entity) {
        if (entity['isSprite'] && entity.isSprite() === false) return true;
        return false;
    }
    /**
     * entity がSpriteなのかを判定する
     * @param {*} entity 
     * @returns Spriteの場合 True
     */ static isSprite(entity) {
        if (entity['isSprite'] && entity.isSprite() === true) return true;
        return false;
    }
    async ask(entity, text) {
        this.forceComplete = false;
        const result = await this.askWait(entity);
        // @ts-ignore : this.forceComplete is changed to true in askWait(). 
        if (result === false || this.forceComplete === true) {
            $c720f210576cee38$export$dc467e08448586e8.removeAsk(entity);
            return '';
        }
        const canvasDiv = document.getElementById($c720f210576cee38$var$CanvasDiv);
        if (canvasDiv == undefined) throw 'Not found canvasDiv';
        const stage_overlays = document.createElement('div');
        stage_overlays.id = $c720f210576cee38$var$StageOverlays;
        stage_overlays.classList.add($c720f210576cee38$var$StageOverlays);
        canvasDiv.appendChild(stage_overlays);
        const stage_stage_bottom_wrapper = document.createElement('div');
        stage_stage_bottom_wrapper.classList.add($c720f210576cee38$var$StageBottomWrapper);
        stage_overlays.appendChild(stage_stage_bottom_wrapper);
        const stage_question_wrapper = document.createElement('div');
        stage_question_wrapper.style.position = 'absolute';
        stage_question_wrapper.classList.add($c720f210576cee38$var$StageQuestionWrapper);
        stage_stage_bottom_wrapper.appendChild(stage_question_wrapper);
        const div = document.createElement('div');
        stage_question_wrapper.appendChild(div);
        const questionContainer = document.createElement('div');
        questionContainer.classList.add($c720f210576cee38$var$QuestionContainer);
        div.appendChild(questionContainer);
        if (entity) {
            if ($c720f210576cee38$export$dc467e08448586e8.isStage(entity)) {
                // ステージの場合
                const questionLabel = document.createElement('div');
                questionLabel.classList.add($c720f210576cee38$var$QuestionLabel);
                questionLabel.innerHTML = text;
                questionContainer.appendChild(questionLabel);
            } else if ($c720f210576cee38$export$dc467e08448586e8.isSprite(entity)) {
                // スプライトの場合
                const sprite = entity;
                sprite.$say(text);
            }
        }
        const questionInputDiv = document.createElement('div');
        questionInputDiv.classList.add($c720f210576cee38$var$QuestionInput);
        questionContainer.appendChild(questionInputDiv);
        const input = document.createElement('input');
        input.classList.add($c720f210576cee38$var$InputForm);
        input.setAttribute('type', 'text');
        input.setAttribute('spellcheck', 'false');
        questionInputDiv.appendChild(input);
        const button = document.createElement('button');
        button.classList.add($c720f210576cee38$var$QuestionSubmitButton);
        const img = document.createElement('img');
        img.classList.add($c720f210576cee38$var$QuestionSubmitButtonIcon);
        img.draggable = false;
        img.src = $c720f210576cee38$var$ButtonIconSrc;
        button.appendChild(img);
        questionInputDiv.appendChild(button);
        const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
        if (runtime == undefined) throw 'runtime is undefined error';
        const keyboard = runtime.ioDevices.keyboard;
        // 半角スペースの入力を許可する
        keyboard.spaceStopPropagation = false;
        let inputText = '';
        const inputChange = function(e) {
            inputText = e.currentTarget.value;
        };
        const me = this;
        input.addEventListener('input', inputChange);
        const keyPress = function(e) {
            if (e.key == 'Enter') {
                me.emit($c720f210576cee38$export$dc467e08448586e8.TextInputComplete);
                return;
            }
        };
        input.addEventListener('keypress', keyPress);
        const buttonClick = function() {
            // buttonクリックしたとき 
            me.emit($c720f210576cee38$export$dc467e08448586e8.TextInputComplete);
        };
        button.addEventListener('click', buttonClick);
        input.focus();
        return new Promise((resolve)=>{
            me.once($c720f210576cee38$export$dc467e08448586e8.TextInputComplete, ()=>{
                // 質問の枠を消す    
                $c720f210576cee38$export$dc467e08448586e8.removeAsk(entity);
                // 半角スページ入力抑止
                keyboard.spaceStopPropagation = true;
                // Promise を解決、入力文字列を戻す
                resolve(inputText);
            });
        });
    }
    /**
     * 質問を消す
     */ static removeAsk(entity) {
        if (entity && $c720f210576cee38$export$dc467e08448586e8.isSprite(entity)) {
            // スプライトの場合、フキダシを消す
            const sprite = entity;
            sprite.$say('');
        }
        const _stageOverlays = document.getElementById($c720f210576cee38$var$StageOverlays);
        if (_stageOverlays) // 質問のDOMを削除する
        _stageOverlays.remove();
    }
}



const $810206abd6221b0c$var$INTERVAL = 1000 / 33;
class $810206abd6221b0c$export$78bbaacfefdb10b2 {
    static getInstance() {
        if (!$810206abd6221b0c$export$78bbaacfefdb10b2.instance) $810206abd6221b0c$export$78bbaacfefdb10b2.instance = new $810206abd6221b0c$export$78bbaacfefdb10b2();
        return $810206abd6221b0c$export$78bbaacfefdb10b2.instance;
    }
    constructor(){
        this.stopper = false;
        this.threadArr = [];
        this._intervalId = null;
        this._running = false;
        this._startSwitch = false;
    }
    get RUNNING() {
        return 'running';
    }
    get YIELD() {
        return 'yield';
    }
    get STOP() {
        return 'stop';
    }
    get THROW_STOP_THIS_SCRIPTS() {
        return "throwStopThisScripts";
    }
    get THROW_FORCE_STOP_THIS_SCRIPTS() {
        return "throwForceStopThisScripts";
    }
    getTopThreadObj(threadId) {
        for (const obj of this.threadArr){
            if (obj.threadId == threadId) return obj;
        }
        return null;
    }
    getTopParentObj(obj) {
        let _obj = obj.parentObj;
        for(;;){
            if (_obj == null || _obj.parentObj == null) break;
            _obj = _obj.parentObj;
        }
        if (_obj == null) return obj;
        else return _obj;
    }
    getLastChildObj(obj) {
        let _obj = obj.childObj;
        for(;;){
            if (_obj == null || _obj.childObj == null) break;
            _obj = _obj.childObj;
        }
        if (_obj == null) _obj = obj;
        return _obj;
    }
    createObj() {
        const obj = {
            f: null,
            originalF: null,
            done: false,
            status: this.YIELD,
            forceExit: false,
            threadId: null,
            entityId: null,
            childObj: null,
            parentObj: null,
            entity: null,
            doubleRunable: true
        };
        return obj;
    }
    registThread(obj) {
        this.threadArr.push(obj);
    }
    async startAll() {
        this._startSwitch = true;
        if (this._intervalId != null) return; // この行の扱いは注意せよ！
        this._intervalId = setInterval(this.interval, $810206abd6221b0c$var$INTERVAL, this);
        this._running = true;
    }
    isNotRunning() {
        return !this._running;
    }
    isRunning() {
        return this._running;
    }
    clearThreads() {
        this.threadArr = [];
    }
    pauseThreadsInterval() {
        if (this._intervalId) {
            // 音なっているときは止める。
            const stage = (0, $a6b849a6af88d987$export$80606ec500c7d132).stage;
            if (stage != null) {
                stage.$soundStopImmediately();
                stage.$speechStopImmediately();
                if (stage.sprites != null) for (const s of stage.sprites){
                    s.$soundStopImmediately();
                    s.$speechStopImmediately();
                }
            }
            clearInterval(this._intervalId);
            this._intervalId = null;
            this._running = false;
        }
    }
    /**
     * intervalを停止する
     * クローンをremoveする
     * threads はクリアする
     * クローン以外のスプライト、ステージはremoveしない（そのまま）
     */ stopThreadsInterval() {
        if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = null;
            this.clearThreads();
            // 音なっているときは止める。
            const stage = (0, $a6b849a6af88d987$export$80606ec500c7d132).stage;
            if (stage != null) {
                stage.$soundStopImmediately();
                stage.$speechStopImmediately();
                if (stage.sprites != null) {
                    for (const s of stage.sprites)if (s) {
                        s.$soundStopImmediately();
                        s.$speechStopImmediately();
                    }
                }
            }
        }
        this._running = false;
    }
    stopAll() {
        this.stopper = true;
        this._running = false;
    }
    stopOtherScripts(entity) {
        const me = this;
        for (const obj of me.threadArr)// @ts-ignore undefined error (entity.threadId). 
        if (obj.entity && obj.entity.id == entity.id && obj.threadId != entity.threadId) {
            // 実行中のスレッドの途中の場合、
            // Motion,Looks,Sound,Event,Control,Sensingを使ったときは
            // Proxyのなかで例外を発生させる
            // @ts-ignore undefined error (setStopThisScriptSwitch) 
            obj.entity.setStopThisScriptSwitch(true); // 【A】
            // 「終わるまで音を鳴らす」が実行中の場合、音を強制停止させる
            obj.entity.emit(obj.entity.SOUND_FORCE_STOP);
            // 上記の【A】により例外が起きなかった場合、
            // 他のスクリプトが(next)により再実行されるときに必ず例外を起こして止める。
            const f = async function*() {
                // ここで例外が起きる。
                if (obj.entity) // @ts-ignore undefined error (throwForceStopThisScripts) 
                obj.entity.throwForceStopThisScripts();
            };
            obj.f = f(); // Generator関数を生成
        }
    }
    removeObjById(id, clickCounter) {
        if (clickCounter == undefined) {
            for (const obj of this.threadArr)if (obj.entity && obj.doubleRunable === false && obj.entityId == id) {
                obj.forceExit = true;
                obj.entity.$soundStopImmediately();
                obj.entity.$speechStopImmediately();
            }
        } else {
            for (const obj of this.threadArr)if (obj.doubleRunable === false && obj.entityId == id && // @ts-ignore undefined error (threadCounter) 
            obj.entity && obj.entity.threadCounter == clickCounter) {
                obj.forceExit = true;
                obj.entity.$soundStopImmediately();
                obj.entity.$speechStopImmediately();
            }
        }
    }
    async interval(me) {
        for (const obj of me.threadArr){
            if (obj.entity && !obj.entity.isAlive()) obj.forceExit = true; // 強制終了とする
            if (obj.status != me.STOP) {
                // TODO ↓ getLastChildObj は不要だと思う。あとで確認すること。
                // obj.childObj が設定済のときは最終OBJを取り出す。
                const _obj = obj; //me.getLastChildObj(obj);
                if (_obj.f && _obj.status == me.YIELD) {
                    // 投げっぱなし, Promise終了時に done をObjへ設定する
                    // await はつけずにPromise.then で解決する。
                    // await をつけると長いBGM演奏などのとき他スレッドが止まる弊害がある。
                    _obj.status = me.RUNNING;
                    try {
                        _obj.f.next().then((rslt)=>{
                            _obj.done = rslt.done;
                            _obj.status = me.YIELD;
                        //if(_obj.entity.getStopThisScriptSwitch() === true) {
                        //    _obj.status = me.STOP;
                        //}
                        // waitするメソッドがあるときは
                        }).catch((e)=>{
                            if (_obj.entity && (e == me.THROW_STOP_THIS_SCRIPTS || e == me.THROW_FORCE_STOP_THIS_SCRIPTS)) {
                                // この例外はthrowせずに objは抹消する（再実行しない）
                                _obj.forceExit = true;
                                _obj.status = me.STOP;
                                // 「終わるまで音を鳴らす」に対して、強制停止を行う(例外を起こす)
                                _obj.entity.emit(_obj.entity.SOUND_FORCE_STOP);
                            } else {
                                const f = _obj.originalF;
                                console.error(e);
                                if (f) console.error(f.toString());
                                _obj.forceExit = true;
                                throw e;
                            }
                        });
                    } catch (e) {
                        const f = _obj.originalF;
                        if (f) console.error(f.toString());
                        _obj.forceExit = true;
                        throw e;
                    }
                }
            }
        }
        // 終了したOBJは削除する
        const _arr = [];
        for (const obj of me.threadArr)if (!(obj.forceExit || obj.done)) _arr.push(obj);
        me.threadArr = [
            ..._arr
        ];
        if (me.threadArr.length == 0) {
            if (me._startSwitch === true) {
                // 実行中のスレッドがなくなったとき
                // 緑の旗のボタンを押せるようにする（赤の停止ボタンは実行待ちのステータスになる）
                const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
                const EmitID_GREEN_MARK_BUTTON_ENABLED = runtime.GREEN_BUTTON_ENABLED;
                // 個数ゼロになった直後の１回だけ emit するべき。
                runtime.emit(EmitID_GREEN_MARK_BUTTON_ENABLED);
                me._startSwitch = false;
            }
        }
        (0, $a6b849a6af88d987$export$80606ec500c7d132)._draw();
    }
}
const $810206abd6221b0c$export$8a4dea38c4da78cf = $810206abd6221b0c$export$78bbaacfefdb10b2.getInstance();


const $38ab8126b0ae38e9$var$ScratchHeader = "scratch3Header";
const $38ab8126b0ae38e9$var$ControlGreenFlag = "green-flag_green-flag";
const $38ab8126b0ae38e9$var$ControlStopMark = "stop-all_stop-all_pluqe";
const $38ab8126b0ae38e9$var$ControlPauseMark = "pause-button";
const $38ab8126b0ae38e9$var$GreenFlag = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNi42MyAxNy41Ij48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOiM0Y2JmNTY7c3Ryb2tlOiM0NTk5M2Q7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uY2xzLTJ7c3Ryb2tlLXdpZHRoOjEuNXB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tZ3JlZW4tZmxhZzwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLjc1LDJBNi40NCw2LjQ0LDAsMCwxLDguNDQsMmgwYTYuNDQsNi40NCwwLDAsMCw3LjY5LDBWMTIuNGE2LjQ0LDYuNDQsMCwwLDEtNy42OSwwaDBhNi40NCw2LjQ0LDAsMCwwLTcuNjksMCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjAuNzUiIHkxPSIxNi43NSIgeDI9IjAuNzUiIHkyPSIwLjc1Ii8+PC9zdmc+";
const $38ab8126b0ae38e9$var$StopMark = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNCAxNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQgMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRUM1OTU5O3N0cm9rZTojQjg0ODQ4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNC4zLDAuNSA5LjcsMC41IDEzLjUsNC4zIDEzLjUsOS43IDkuNywxMy41IDQuMywxMy41IDAuNSw5LjcgMC41LDQuMyAiLz4KPC9zdmc+Cg==";
const $38ab8126b0ae38e9$var$PauseMark = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCI+PHBhdGggZD0iTTIzMS40MjkgMTg4LjkyOVYxNzEuMDdoNC4yODV2MTcuODU4em0xMi4xNDIgMFYxNzEuMDdoNC4yODZ2MTcuODU4eiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMzMwOSAwIDAgLjk1NDI3IC0yMzguNTczIC0xNjIuNzY5KSIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSIjZmZhZTAwIiBzdHJva2U9IiNkODk0MDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjwvc3ZnPg==";
const $38ab8126b0ae38e9$var$RestartMark = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTgiIHdpZHRoPSIxOCI+PHBhdGggZD0ibTI0Ni4wNTUgMTgwLTEyLjExIDEyLjExdi0yNC4yMnoiIHRyYW5zZm9ybT0ibWF0cml4KDEuMTM5NDkgMCAwIC42Nzk0MyAtMjY0LjU5NSAtMTEzLjI5OCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZDg5NDAwIiBmaWxsPSIjZmZhZTAwIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iLz48L3N2Zz4=";
const $38ab8126b0ae38e9$var$ReloadMark = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJfeDMxXzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9IndpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IG9wYWNpdHk6IDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4gPHN0eWxlIHR5cGU9InRleHQvY3NzIj4gCS5zdDB7ZmlsbDojMzc0MTQ5O30gPC9zdHlsZT4gPGc+IAk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzg4LjQ4NiwyOTguMDg3bC0wLjA4Mi0wLjAyN2wwLDBsLTAuMTUyLTAuMDQ2Yy0yLjcxNSw4LjU3NC02LjIxMSwxNi43MDItMTAuMzc0LDI0LjM1IAkJYy0wLjEwNiwwLjE4Ny0wLjIxMSwwLjM3NS0wLjMxNywwLjU2MmMtMS44MTYsMy4yOTctMy43OTMsNi40NzYtNS44NTUsOS41ODZjLTAuNDk2LDAuNzQyLTAuOTgsMS40OTItMS40ODgsMi4yMjIgCQljLTEuNzE5LDIuNDg0LTMuNTUsNC44NjctNS40MTQsNy4yMjJjLTAuNzk4LDAuOTkyLTEuNTU1LDIuMDIzLTIuMzc1LDIuOTk2Yy0xLjcxMSwyLjAzNS0zLjUyNywzLjk1Ny01LjM0LDUuODgyIAkJYy0yLjIwNiwyLjMzMi00LjQ4OCw0LjU3NC02Ljg0Myw2Ljc0NmMtMS4zODIsMS4yNzgtMi43MjYsMi41OS00LjE1NiwzLjgwNWMtMS42NjQsMS40MTgtMy40MTQsMi43My01LjE0LDQuMDcgCQljLTEuNDEsMS4wOS0yLjgwOSwyLjE5NS00LjI1OCwzLjIzYy0xLjY0MSwxLjE3Ni0zLjMzMiwyLjI4Mi01LjAyMywzLjM4N2MtMS43NDYsMS4xMzMtMy41MDQsMi4yNDYtNS4yOTcsMy4zMDQgCQljLTEuNDY5LDAuODcxLTIuOTU3LDEuNzE1LTQuNDU3LDIuNTMxYy0yLjM2NywxLjI4Mi00Ljc3NCwyLjQ5Mi03LjIxNCwzLjYzN2MtMS4wMTIsMC40OC0yLjAyLDAuOTc3LTMuMDQzLDEuNDM0IAkJYy0yNi45OTgsMTEuODctNTcuODc2LDE1LjMyNy04OC40MjIsNy45MDZjLTM2Ljc1Ni04LjkyOS02Ny41MjEtMzIuMTk4LTg2LjMyOC02My43MmMtMy40MTgtNS43NS02LjQ3Ny0xMS43NDUtOS4wNS0xOC4wMTggCQlsMjUuNTQ2LTEuNTg2bDE4LjA4OS0xLjAxNmwtMC4xMTctMC4xMDZsMC4yMjYtMC4wMTFsLTkwLjczOC04MC4wOWwtMC4yNjItMC4yMzR2MC4wMDRMODAuNDgxLDIyNmwtNDYuODg5LDUzLjA4NEwwLDMxNi45MzggCQlsMC4xNjQtMC4wMTJsLTAuMTUyLDAuMTcybDQ2LjYxNC0yLjg5OGMyMS4xMzYsNzUuOTQ2LDgxLjI5LDEzNC40MjcsMTU4LjA0OCwxNTMuMDc5YzE3LjA0Niw0LjE0LDM0LjE1NCw2LjEyNSw1MS4wMzcsNi4xMjUgCQljOTEuNzU0LDAsMTc2LjU5Ny01OC43MTYsMjA2LjQ4Ni0xNDguODk2YzAuMjk3LTAuODg2LDAuNjc2LTEuNzM0LDAuOTYxLTIuNjI5aC0wLjAwOGMwLjAxNi0wLjA1LDAuMDM5LTAuMTAyLDAuMDU1LTAuMTUyIAkJTDM4OC40ODYsMjk4LjA4N3oiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAwLCAwKTsiPjwvcGF0aD4gCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjMuMzc3LDIxMy44NjRsMC4yMjMsMC4wN2wwLDBsMC4xNTIsMC4wNDdjMi43MTUtOC41NzgsNi4yMTEtMTYuNzEsMTAuMzc4LTI0LjM1OCAJCWMwLjA5OC0wLjE4LDAuMjAzLTAuMzU2LDAuMzAxLTAuNTM1YzEuODItMy4zMDksMy44MDUtNi40OTYsNS44NzEtOS42MTdjMC40OTItMC43MzQsMC45NzItMS40NzcsMS40OC0yLjE5OSAJCWMxLjcyMi0yLjQ5MiwzLjU1OC00Ljg4Niw1LjQzLTcuMjQ2YzAuNzkzLTAuOTkyLDEuNTQzLTIuMDEyLDIuMzU5LTIuOTc3YzEuNzE1LTIuMDQ2LDMuNTM5LTMuOTc2LDUuMzY3LTUuOTE0IAkJYzIuMTcxLTIuMjk3LDQuNDI2LTQuNTExLDYuNzQ2LTYuNjU2YzEuNDA2LTEuMzAxLDIuNzgxLTIuNjM3LDQuMjM4LTMuODc0YzEuNjUyLTEuNDA2LDMuMzg2LTIuNzExLDUuMTA1LTQuMDM5IAkJYzEuNDIyLTEuMTAyLDIuODMyLTIuMjE4LDQuMjk3LTMuMjY2YzEuNjMzLTEuMTY4LDMuMzEyLTIuMjY2LDQuOTk2LTMuMzYzYzEuNzU0LTEuMTQ0LDMuNTE5LTIuMjYyLDUuMzI0LTMuMzI0IAkJYzEuNDY1LTAuODY3LDIuOTQxLTEuNzA3LDQuNDM3LTIuNTE5YzIuMzc1LTEuMjg2LDQuNzg5LTIuNTA0LDcuMjM0LTMuNjUyYzEuMDA4LTAuNDczLDIuMDA0LTAuOTY5LDMuMDIzLTEuNDE4IAkJYzI3LjAwMi0xMS44NzgsNTcuODgtMTUuMzM1LDg4LjQzLTcuOTFjMzYuNzIxLDguOTIyLDY3LjQ2NiwzMi4xNTUsODYuMjc4LDYzLjYzOGMzLjQzNyw1Ljc3NCw2LjUxMSwxMS43OTcsOS4wOTcsMTguMDk3IAkJbC0yNS41MywxLjU5bC0xOC4xMDUsMS4wMTJsMC4xMjEsMC4xMDZsLTAuMjI2LDAuMDE1bDkxLjExNyw4MC40MjZsNDcuMjY3LTUzLjUxTDUxMiwxOTUuMDU2bC0wLjE2LDAuMDEybDAuMTQ4LTAuMTY4IAkJbC00Ni42MTQsMi44OThDNDQ0LjIzOCwxMjEuODUzLDM4NC4wODgsNjMuMzY4LDMwNy4zMyw0NC43MkMyMDIuNTU0LDE5LjI2NCw5NS4xODMsNzUuMjkyLDU0Ljk0NiwxNzMuNDU2IAkJYy0wLjEwOSwwLjI2Ni0wLjIxLDAuNTM5LTAuMzIsMC44MDVjLTIuMDc0LDUuMTE3LTQuMDExLDEwLjMxOS01LjcxLDE1LjY1OWMtMC4wMiwwLjA2Ni0wLjA1MSwwLjEyOS0wLjA3LDAuMTk1bDAuMDA0LDAuMDA0IAkJYy0wLjAxNiwwLjA1LTAuMDM1LDAuMDk4LTAuMDUxLDAuMTQ4TDEyMy4zNzcsMjEzLjg2NHoiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAwLCAwKTsiPjwvcGF0aD4gPC9nPiA8L3N2Zz4=";
class $38ab8126b0ae38e9$export$db77ccec0bb4ccac {
    static get DISPLAY_NONE() {
        return "displayNone";
    }
    static getControlGreenFlag() {
        let element = document.getElementById($38ab8126b0ae38e9$var$ControlGreenFlag);
        if (element) return element;
        throw `NOT FOUND Element (id=${$38ab8126b0ae38e9$var$ControlGreenFlag})`;
    }
    static getControlStopMark() {
        let element = document.getElementById($38ab8126b0ae38e9$var$ControlStopMark);
        if (element) return element;
        throw `NOT FOUND Element (id=${$38ab8126b0ae38e9$var$ControlStopMark})`;
    }
    static createMain(zIndex) {
        let main = document.getElementById('main');
        if (main == undefined) {
            main = document.createElement('main');
            main.id = 'main';
            document.body.appendChild(main);
        }
        main.style.zIndex = `${zIndex}`;
        main.style.position = 'absolute';
        main.style.touchAction = 'manipulation';
        (0, $a6b849a6af88d987$export$80606ec500c7d132).main = main;
        const header = document.createElement("div");
        header.id = $38ab8126b0ae38e9$var$ScratchHeader;
        header.classList.add($38ab8126b0ae38e9$var$ScratchHeader);
        main.appendChild(header);
        const headerMenu = document.createElement("div");
        headerMenu.classList.add("scratch3HeaderMenu");
        header.appendChild(headerMenu);
        const menuControl = document.createElement("div");
        menuControl.classList.add("controls_controls-container");
        headerMenu.appendChild(menuControl);
        const imgGreenFlag = document.createElement("img");
        imgGreenFlag.id = $38ab8126b0ae38e9$var$ControlGreenFlag;
        imgGreenFlag.classList.add($38ab8126b0ae38e9$var$ControlGreenFlag);
        $38ab8126b0ae38e9$export$db77ccec0bb4ccac.changeToGreenFlag(imgGreenFlag);
        imgGreenFlag.setAttribute("draggable", "false");
        menuControl.appendChild(imgGreenFlag);
        const pauseMark = document.createElement('img');
        pauseMark.id = $38ab8126b0ae38e9$var$ControlPauseMark;
        pauseMark.classList.add($38ab8126b0ae38e9$var$ControlPauseMark);
        pauseMark.setAttribute("draggable", "false");
        $38ab8126b0ae38e9$export$db77ccec0bb4ccac.changeToPauseMark(pauseMark);
        menuControl.appendChild(pauseMark);
        const imgStopMark = document.createElement("img");
        imgStopMark.id = $38ab8126b0ae38e9$var$ControlStopMark;
        imgStopMark.classList.add($38ab8126b0ae38e9$var$ControlStopMark);
        imgStopMark.setAttribute("src", $38ab8126b0ae38e9$var$StopMark);
        imgStopMark.setAttribute("draggable", "false");
        imgStopMark.setAttribute("title", "\u6B62\u3081\u308B");
        menuControl.appendChild(imgStopMark);
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('title-field');
        titleSpan.innerText = document.title;
        menuControl.appendChild(titleSpan);
        $38ab8126b0ae38e9$export$db77ccec0bb4ccac.mainPositioning(main);
        return main;
    }
    static changeToReloadMark(imgGreenFlag) {
        //ReloadMark
        imgGreenFlag.setAttribute('src', $38ab8126b0ae38e9$var$ReloadMark);
        imgGreenFlag.setAttribute('title', "\u30EA\u30ED\u30FC\u30C9");
        imgGreenFlag.style.padding = "0.2rem";
    }
    static changeToGreenFlag(imgGreenFlag) {
        //ReloadMark
        imgGreenFlag.setAttribute('src', $38ab8126b0ae38e9$var$GreenFlag);
        imgGreenFlag.setAttribute('title', "\u5B9F\u884C");
        imgGreenFlag.style.padding = "0.375rem";
    }
    static changeToPauseMark(pauseMark) {
        pauseMark.setAttribute("src", $38ab8126b0ae38e9$var$PauseMark);
        pauseMark.setAttribute("title", "\u4E00\u6642\u505C\u6B62");
    }
    static changeToRestartMark(pauseMark) {
        pauseMark.setAttribute("src", $38ab8126b0ae38e9$var$RestartMark);
        pauseMark.setAttribute("title", "\u518D\u958B");
    }
    static mainPositioning(main = $38ab8126b0ae38e9$export$db77ccec0bb4ccac.main) {
        const scratchHeader = document.getElementById($38ab8126b0ae38e9$var$ScratchHeader);
        main.style.width = `${window.innerWidth}px`;
        main.style.height = `${window.innerHeight}px`;
    //main.style.height = `${window.innerHeight - scratchHeader.innerHeight}px`;
    }
    static createCanvas() {
        const canvas = (0, $57ac7e9ecbc5361f$export$8d01c972ee8b14a9).createCanvas();
        canvas.classList.add("likeScratch-canvas");
        $38ab8126b0ae38e9$export$db77ccec0bb4ccac.canvas = canvas;
        (0, $a6b849a6af88d987$export$80606ec500c7d132).canvas = canvas;
        //canvas.getContext('2d', { willReadFrequently: true });
        return canvas;
    }
    static createTextCanvas(main) {
        const canvas = (0, $57ac7e9ecbc5361f$export$8d01c972ee8b14a9).createTextCanvas();
        canvas.classList.add("likeScratch-text-canvas");
        $38ab8126b0ae38e9$export$db77ccec0bb4ccac.textCanvas = canvas;
        (0, $a6b849a6af88d987$export$80606ec500c7d132).textCanvas = canvas;
        return canvas;
    }
    static insertCss() {
        const style = document.createElement('style');
        style.innerHTML = `
            ${(0, $80fb1bbfe728e011$export$c4ffa16951855e28).documentCss}\n\n
            ${(0, $80fb1bbfe728e011$export$c4ffa16951855e28).flagCss}\n\n
            ${(0, $80fb1bbfe728e011$export$c4ffa16951855e28).scratch3Header}\n\n
            ${(0, $80fb1bbfe728e011$export$c4ffa16951855e28).canvasCss}\n\n
            ${(0, $80fb1bbfe728e011$export$c4ffa16951855e28).textCanvasCss}\n\n
            ${(0, $80fb1bbfe728e011$export$c4ffa16951855e28).mainTmpCss}\n\n
            ${(0, $80fb1bbfe728e011$export$c4ffa16951855e28).askCss}\n\n
        `;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    static async flagInit() {
        const controlGreenFlag = $38ab8126b0ae38e9$export$db77ccec0bb4ccac.getControlGreenFlag();
        const controlPauseMark = $38ab8126b0ae38e9$export$db77ccec0bb4ccac.getElementById($38ab8126b0ae38e9$var$ControlPauseMark);
        const controlStopMark = $38ab8126b0ae38e9$export$db77ccec0bb4ccac.getControlStopMark();
        const me = this;
        let greenFlagClicked = false;
        controlGreenFlag.classList.remove('disableClick');
        controlGreenFlag.classList.add('enableClick');
        controlGreenFlag.classList.add('not-running');
        controlGreenFlag.classList.remove('running');
        controlStopMark.classList.remove('enableClick');
        controlStopMark.classList.add('disableClick');
        controlStopMark.classList.add('is-not-active');
        controlStopMark.classList.remove('is-active');
        controlGreenFlag.addEventListener('click', async function(e) {
            e.stopPropagation();
            controlGreenFlag.classList.remove('enableClick');
            controlGreenFlag.classList.add('disableClick');
            controlGreenFlag.classList.remove('not-running');
            controlGreenFlag.classList.add('running');
            controlStopMark.classList.remove('disableClick');
            controlStopMark.classList.add('enableClick');
            controlStopMark.classList.remove('is-not-active');
            controlStopMark.classList.add('is-active');
            (0, $a6b849a6af88d987$export$80606ec500c7d132).threads.startAll();
            greenFlagClicked = true;
            //            Element.changeToReloadMark(controlGreenFlag);
            (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime.emit('RUNNING_GAME'); // ON は processの中にある
        });
        //flag.classList.add(Element.DISPLAY_NONE);
        controlPauseMark.classList.add($38ab8126b0ae38e9$export$db77ccec0bb4ccac.DISPLAY_NONE);
        let restartMarkFlag = false;
        controlPauseMark.addEventListener('click', async function(e) {
            e.stopPropagation();
            if (restartMarkFlag) {
                if (greenFlagClicked === true) {
                    (0, $a6b849a6af88d987$export$80606ec500c7d132).threads.startAll();
                    (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime.emit('RUNNING_GAME'); // ON は processの中にある
                }
                $38ab8126b0ae38e9$export$db77ccec0bb4ccac.changeToPauseMark(controlPauseMark);
                restartMarkFlag = false;
            } else {
                if (greenFlagClicked === true) {
                    (0, $810206abd6221b0c$export$8a4dea38c4da78cf).pauseThreadsInterval(); //一時停止
                    (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime.emit('PAUSING_GAME'); // ON は processの中にある
                }
                $38ab8126b0ae38e9$export$db77ccec0bb4ccac.changeToRestartMark(controlPauseMark);
                restartMarkFlag = true;
            }
        });
        controlStopMark.addEventListener('click', async function(e) {
            e.stopPropagation();
            controlStopMark.classList.remove('enableClick');
            controlStopMark.classList.add('disableClick');
            controlStopMark.classList.add('is-not-active');
            controlStopMark.classList.remove('is-active');
            controlGreenFlag.classList.remove('disableClick');
            controlGreenFlag.classList.add('enableClick');
            controlGreenFlag.classList.add('not-running');
            controlGreenFlag.classList.remove('running');
            //process._init();
            $38ab8126b0ae38e9$export$db77ccec0bb4ccac.stopAll();
        });
        const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
        const EmitID_GREEN_BUTTON_ENABLED = runtime.GREEN_BUTTON_ENABLED;
        runtime.on(EmitID_GREEN_BUTTON_ENABLED, function() {
            controlStopMark.classList.remove('enableClick');
            // 自動停止したときは停止ボタンはクリック可能、２回目はクリックできない。
            //controlStopMark.classList.add('disableClick'); 
            controlStopMark.classList.add('is-not-active');
            controlStopMark.classList.remove('is-active');
            controlGreenFlag.classList.remove('disableClick');
            controlGreenFlag.classList.add('enableClick');
            controlGreenFlag.classList.add('not-running');
            controlGreenFlag.classList.remove('running');
        });
    }
    static stopAll() {
        // thread loop 停止
        (0, $810206abd6221b0c$export$8a4dea38c4da78cf).stopThreadsInterval();
        // スプライトのクローンを削除
        if ((0, $a6b849a6af88d987$export$80606ec500c7d132).stage.sprites) {
            for (const s of (0, $a6b849a6af88d987$export$80606ec500c7d132).stage.sprites)if (s && s.clones) {
                for (const c of s.clones)if (c && c.isAlive()) c.$remove();
            }
            // Sprite-QuestionBox を消す
            for (const s of (0, $a6b849a6af88d987$export$80606ec500c7d132).stage.sprites)(0, $c720f210576cee38$export$dc467e08448586e8).removeAsk(s);
        }
        // Stage-QuestionBox を消す
        // QuestionBoxElement.default.removeAsk(playground.stage);
        (0, $a6b849a6af88d987$export$80606ec500c7d132).stage.emit((0, $c720f210576cee38$export$dc467e08448586e8).QuestionBoxForceComplete);
        (0, $a6b849a6af88d987$export$80606ec500c7d132)._draw();
        (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime.emit('PAUSING_GAME'); // ON は processの中にある
    }
    static getElementById(id) {
        const element = document.getElementById(id);
        if (element) return element;
        throw `Not found element id=${id}`;
    }
    static async init() {
        const main = $38ab8126b0ae38e9$export$db77ccec0bb4ccac.createMain(999);
        $38ab8126b0ae38e9$export$db77ccec0bb4ccac.createCanvas();
    // text Canvas
    //Element.createTextCanvas(main);
    // normal Canvas
    }
}



class $e6dc6e757c4e32b1$export$812303d6cad736b3 {
    static async fontLoad(url, name) {
        if (url) {
            const font = new FontFace(name, `url(${url})`);
            const _font = await font.load();
            return _font;
        }
        // 例外を起こすべきところ。
        throw 'Scratch3LikeJS loadFont: empty url';
    }
}



const $4485307d604d6e38$export$2c9ea5e5b5ee8a8c = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="424.77466" height="85.62723" viewBox="0,0,424.77466,85.62723"><g transform="translate(-26.99997,-135.80002)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style="mix-blend-mode: normal"><path d="M66.43193,140.36595c0,0.32057 -0.29704,0.64113 -0.44556,0.64113c-0.3713,0.16028 -0.81686,0.16028 -1.26242,0.32057c-0.66834,0.16028 -0.89112,0.64113 -0.96538,2.08368c-0.07426,2.24396 0,4.32764 0.14852,6.41132c0.44556,5.44963 0.44556,10.89925 0.22278,16.34888c-0.3713,9.29642 -0.29704,18.75312 -0.14852,28.20982c0.07426,5.28934 0.14852,10.57868 0.22278,15.86803c0,2.72481 -0.66834,4.96878 -1.33668,7.21274c-0.3713,1.28226 -0.66834,1.60283 -1.33668,1.60283c-0.66834,0 -1.03964,-0.64113 -1.41094,-1.60283c-2.15353,-5.12906 -4.60411,-9.29642 -7.05468,-13.62406c-3.86151,-6.89217 -7.35172,-14.58576 -10.47063,-22.92048c-1.1139,-2.8851 -2.45057,-5.44963 -3.71299,-8.17444c-0.14852,0 -0.22278,0 -0.29704,0.16028c0,1.60283 0.07426,3.20566 0,4.80849c-0.3713,7.53331 0.29704,14.90633 0.22278,22.43963c0,2.40425 -0.22278,4.80849 -0.07426,7.21274c0.07426,1.12198 0.29704,1.76311 0.81686,1.9234c0.3713,0.16028 0.81686,0.32057 1.26242,0.32057c0.29704,0 0.44556,0.32057 0.44556,1.12198c0.07426,1.28226 -0.14852,2.40425 -0.51982,3.36595c-0.44556,1.12198 -0.7426,2.40425 -1.1139,3.68651c-0.22278,0.80142 -0.51982,1.44255 -0.96538,1.44255c-2.00501,0.16028 -4.08429,0.32057 -6.0893,0.48085c-0.81686,0 -1.63371,-0.16028 -2.45057,-0.16028c-0.51982,0 -0.7426,-0.48085 -0.7426,-1.60283c0,-1.12198 0.14852,-2.24396 0.59408,-3.04538c0.7426,-1.44255 1.4852,-3.04538 2.07927,-4.48793c0.14852,-0.32057 0.29704,-0.9617 0.29704,-1.44255c0.07426,-0.9617 -0.07426,-1.9234 -0.07426,-2.8851c0,-0.64113 0.07426,-1.44255 0.14852,-2.24396c0.07426,-0.48085 0.07426,-0.9617 0.07426,-1.44255c0.07426,-7.37302 0.14852,-14.90633 0.14852,-22.27935c0,-6.57161 0,-13.14321 0,-19.55454c0,-2.08368 -0.07426,-4.16736 -0.14852,-6.09076c-0.07426,-2.72481 -0.89112,-4.48793 -2.15353,-4.96878c-0.96538,-0.32057 -2.00501,-0.48085 -3.04465,-0.80142c-0.07426,0 -0.29704,-0.48085 -0.29704,-0.64113c0,-0.9617 0,-1.76311 0.07426,-2.72481c0,-0.16028 0.07426,-0.48085 0.07426,-0.48085c0.96538,-2.24396 1.85649,-4.48793 2.74761,-6.57161c0.07426,-0.32057 0.07426,-0.64113 0.14852,-1.28226c1.1139,0.16028 2.22779,0.16028 3.34169,0.64113c1.70797,0.32057 3.26743,1.60283 4.75262,3.52623c0.22278,0.16028 0.3713,0.48085 0.51982,0.80142c1.26242,2.8851 2.45057,5.60991 3.71299,8.495c0.7426,1.9234 1.4852,3.68651 2.30205,5.44963c1.33668,2.72481 2.74761,5.44963 4.08429,8.33472c1.41094,3.04538 2.67335,6.09076 4.01003,9.13614c1.41094,3.20566 2.82187,6.25104 4.23281,9.29642c0.44556,1.12198 0.96538,2.24396 1.55945,3.52623c0.07426,-2.24396 0.14852,-4.16736 0.14852,-6.09076c0.07426,-5.93047 0.22278,-12.02123 0.14852,-17.95171c0,-4.00708 -0.29704,-8.17444 -0.44556,-12.18152c-0.07426,-1.44255 -0.44556,-2.40425 -1.1139,-2.56453c-0.66834,-0.32057 -1.26242,-0.32057 -1.93075,-0.32057c-0.3713,0 -0.51982,-0.16028 -0.59408,-0.9617c0,-0.16028 0,-0.16028 0,-0.16028c-0.07426,-0.9617 -0.3713,-2.24396 -0.22278,-2.8851c0.29704,-1.12198 0.81686,-2.08368 1.33668,-3.04538c0.3713,-0.80142 0.7426,-1.44255 1.18816,-1.9234c0.29704,-0.32057 0.66834,-0.64113 0.96538,-0.64113c1.1139,0 2.15353,0 3.19317,0c1.4852,-0.16028 3.04465,-0.32057 4.52985,-0.32057c0.14852,0 0.29704,0 0.44556,0c0.14852,0 0.29704,0.16028 0.29704,0.16028c0,0.9617 0.07426,1.9234 -0.07426,3.04538zM57.52076,138.12198c-0.7426,1.60283 -1.41094,3.04538 -2.15353,4.48793c-0.44556,0.9617 -0.44556,1.76311 -0.14852,2.8851c1.1139,-1.9234 2.74761,-2.8851 2.30205,-7.37302zM58.85744,150.78435c0.29704,5.44963 0.51982,10.89925 0.3713,16.34888c-0.14852,5.60991 -0.07426,11.3801 -0.14852,17.15029c-0.07426,1.60283 -0.07426,3.20566 0.59408,4.32764c0.22278,0.16028 0.22278,0.80142 0.3713,1.12198c0.22278,0.64113 0.51982,1.12198 0.7426,1.60283c0.07426,0 0.14852,-0.16028 0.22278,-0.16028v-1.60283c-0.07426,-7.85387 -0.14852,-15.86803 -0.14852,-23.88218c0,-2.24396 0,-4.64821 0,-7.05246c-0.07426,-4.48793 -0.59408,-8.97585 -0.3713,-13.62406c0.07426,-0.9617 -0.14852,-1.9234 -0.29704,-2.72481c-0.29704,-1.44255 -1.70797,-1.76311 -2.15353,-0.48085c-0.59408,1.60283 -1.18816,3.04538 -2.00501,3.68651c-0.07426,0 -0.07426,0.16028 -0.07426,0.32057c0.22278,0.16028 0.44556,0.16028 0.66834,0.16028c1.4852,0.32057 2.07927,1.60283 2.22779,4.80849zM27.59408,147.09784c0.89112,-1.9234 1.78223,-4.00708 2.59909,-6.09076c0.14852,-0.32057 0.14852,-1.12198 0.22278,-1.9234c-0.22278,0.16028 -0.29704,0.16028 -0.29704,0.32057c-0.81686,2.08368 -1.70797,4.00708 -2.52483,5.93047c-0.14852,0.32057 -0.14852,0.9617 -0.22278,1.44255c0.07426,0 0.14852,0.16028 0.22278,0.32057zM33.16356,157.8368c0.07426,4.80849 0,9.77727 0,14.74604c-0.07426,3.04538 -0.14852,6.09076 -0.14852,9.29642c-0.07426,6.89217 -0.07426,13.94463 -0.07426,20.8368c0,0.64113 0,1.44255 -0.07426,2.24396c-0.07426,1.60283 -0.14852,3.36595 -0.14852,4.96878c0.44556,0 0.81686,0 1.18816,-0.16028c1.26242,-0.32057 1.33668,-0.48085 1.4852,-3.20566c0.14852,-2.72481 0.14852,-5.28934 0.14852,-7.85387c0,-2.8851 -0.22278,-5.77019 -0.22278,-8.65529c0,-7.37302 0.07426,-14.58576 0.14852,-21.95878c0,-2.40425 0,-4.64821 -0.07426,-6.89217c0,-3.52623 -0.14852,-6.89217 -0.14852,-10.4184c0,-3.68651 -0.3713,-7.05246 -2.00501,-8.81557c-0.59408,-0.80142 -1.41094,-0.9617 -2.15353,-1.12198c-0.22278,0 -0.44556,1.12198 -0.7426,1.76311c-0.7426,1.76311 -1.55945,3.36595 -2.30205,5.12906c0.44556,0 0.89112,0 1.41094,0.16028c1.26242,0.32057 2.59909,0.80142 3.11891,3.68651c0.3713,1.9234 0.51982,4.00708 0.59408,6.25104zM31.82688,215.53872c0.7426,-1.28226 1.18816,-2.72481 0.7426,-4.80849c-0.7426,1.76311 -1.4852,3.68651 -2.30205,5.44963c-0.29704,0.64113 -0.3713,1.44255 -0.29704,2.40425c0.66834,-1.12198 1.26242,-2.08368 1.85649,-3.04538zM33.38634,212.8139c-0.51982,2.72481 -1.41094,4.32764 -2.52483,5.44963c0.14852,0.16028 0.22278,0.16028 0.3713,0.16028c2.45057,-0.16028 4.90114,-0.32057 7.27746,-0.48085c0.22278,0 0.44556,-0.32057 0.59408,-0.64113c0.3713,-1.28226 0.7426,-2.56453 1.1139,-4.00708c-2.30205,-0.16028 -4.60411,-0.32057 -6.8319,-0.48085zM61.01097,217.6224c0.22278,-0.64113 0.44556,-1.12198 0.59408,-1.60283c0.29704,-0.9617 0.59408,-2.08368 0.81686,-3.04538c0.07426,-0.16028 0,-0.80142 -0.07426,-0.9617c-0.7426,-1.60283 -1.55945,-3.36595 -2.37631,-4.96878c-1.26242,-2.40425 -2.52483,-4.96878 -3.71299,-7.53331c-0.51982,-1.28226 -0.89112,-2.72481 -1.41094,-4.00708c-0.96538,-2.24396 -2.00501,-4.48793 -2.97039,-6.89217c-0.96538,-2.08368 -1.78223,-4.48793 -2.74761,-6.73189c-1.70797,-4.16736 -3.49021,-8.17444 -5.19818,-12.18152c-0.3713,-0.9617 -0.81686,-1.76311 -1.26242,-2.72481c-0.66834,-1.44255 -1.41094,-2.72481 -2.07927,-4.16736c-0.59408,-1.44255 -1.18816,-2.8851 -1.85649,-4.48793c-0.07426,0.48085 -0.14852,0.80142 -0.14852,1.12198c-0.07426,2.72481 0,5.60991 -0.07426,8.495c-0.07426,2.24396 0.51982,3.68651 1.18816,5.12906c1.18816,2.40425 2.45057,4.48793 3.41595,7.21274c3.19317,8.495 6.8319,16.34888 10.76767,23.56162c2.30205,4.16736 4.75262,7.85387 6.60912,12.98293c0.14852,0.32057 0.3713,0.48085 0.51982,0.80142zM63.46154,213.61532c0,-0.16028 -0.07426,-0.16028 -0.14852,-0.32057c-0.7426,1.28226 -0.89112,3.68651 -1.85649,4.64821c0.07426,0 0.14852,0.16028 0.14852,0.32057c0.22278,0 0.51982,0 0.59408,-0.32057c0.44556,-1.44255 0.89112,-2.8851 1.26242,-4.32764z" fill="#53ad4e"/><path d="M55.21871,145.495c-0.29704,-1.12198 -0.29704,-1.9234 0.14852,-2.8851c0.7426,-1.44255 1.41094,-2.8851 2.15353,-4.48793c0.44556,4.48793 -1.18816,5.44963 -2.30205,7.37302z" fill="#ffffff"/><path d="M30.49021,139.08368c-0.07426,0.80142 -0.07426,1.60283 -0.22278,1.9234c-0.89112,2.08368 -1.78223,4.16736 -2.67335,6.09076c-0.07426,-0.16028 -0.14852,-0.32057 -0.22278,-0.32057c0.07426,-0.48085 0.07426,-1.12198 0.22278,-1.44255c0.81686,-1.9234 1.70797,-3.84679 2.52483,-5.93047c0.07426,0 0.14852,0 0.3713,-0.32057z" fill="#ffffff"/><path d="M31.82688,215.37843c-0.59408,1.12198 -1.26242,2.08368 -1.93075,3.20566c-0.07426,-0.9617 0,-1.76311 0.29704,-2.40425c0.81686,-1.76311 1.55945,-3.68651 2.30205,-5.44963c0.51982,1.9234 0.07426,3.52623 -0.66834,4.64821z" fill="#ffffff"/><path d="M40.21824,213.29475c-0.3713,1.44255 -0.7426,2.72481 -1.1139,4.00708c-0.14852,0.32057 -0.3713,0.64113 -0.59408,0.64113c-2.37631,0.16028 -4.82688,0.32057 -7.27746,0.48085c-0.14852,0 -0.22278,0 -0.3713,-0.16028c1.1139,-1.12198 2.00501,-2.72481 2.52483,-5.44963c2.22779,0.16028 4.52985,0.32057 6.8319,0.48085z" fill="#ffffff"/><path d="M63.46154,213.61532c-0.44556,1.44255 -0.81686,2.8851 -1.33668,4.32764c-0.07426,0.32057 -0.3713,0.32057 -0.59408,0.32057c0,-0.16028 -0.07426,-0.32057 -0.14852,-0.32057c0.96538,-0.9617 1.1139,-3.36595 1.85649,-4.64821c0.14852,0 0.22278,0.16028 0.22278,0.32057z" fill="#ffffff"/><path d="M60.93671,189.57286v1.60283c-0.07426,0 -0.14852,0.16028 -0.22278,0.16028c-0.22278,-0.48085 -0.51982,-0.9617 -0.7426,-1.60283c-0.14852,-0.32057 -0.14852,-0.9617 -0.3713,-1.12198c-0.66834,-1.12198 -0.66834,-2.72481 -0.59408,-4.32764c0.07426,-5.77019 0,-11.54038 0.14852,-17.15029c0.14852,-5.44963 -0.07426,-10.89925 -0.3713,-16.34888c-0.14852,-3.36595 -0.7426,-4.48793 -2.30205,-4.80849c-0.22278,0 -0.44556,0 -0.66834,-0.16028c0,-0.16028 0,-0.32057 0.07426,-0.32057c0.96538,-0.64113 1.55945,-2.08368 2.15353,-3.68651c0.44556,-1.28226 1.85649,-0.9617 2.15353,0.48085c0.14852,0.80142 0.3713,1.76311 0.29704,2.72481c-0.22278,4.64821 0.29704,9.13614 0.3713,13.62406c0,2.40425 0,4.80849 0,7.05246c0,8.01415 0.07426,15.86803 0.07426,23.88218z" fill="#ffffff"/><path d="M62.42191,213.13447c-0.22278,0.9617 -0.51982,2.08368 -0.81686,3.04538c-0.14852,0.48085 -0.3713,0.9617 -0.59408,1.60283c-0.14852,-0.32057 -0.3713,-0.48085 -0.51982,-0.80142c-1.85649,-5.12906 -4.30707,-8.81557 -6.60912,-12.98293c-3.93577,-7.37302 -7.5745,-15.22689 -10.76767,-23.7219c-0.96538,-2.72481 -2.22779,-4.80849 -3.41595,-7.21274c-0.66834,-1.44255 -1.26242,-2.8851 -1.18816,-5.12906c0.07426,-2.8851 0,-5.77019 0.07426,-8.495c0,-0.32057 0.07426,-0.64113 0.14852,-1.12198c0.66834,1.60283 1.26242,3.04538 1.85649,4.48793c0.66834,1.44255 1.41094,2.72481 2.07927,4.16736c0.44556,0.9617 0.89112,1.76311 1.26242,2.72481c1.70797,4.00708 3.49021,8.01415 5.19818,12.18152c0.96538,2.24396 1.78223,4.64821 2.74761,6.73189c0.96538,2.40425 2.00501,4.64821 2.97039,6.89217c0.51982,1.28226 0.89112,2.72481 1.41094,4.00708c1.18816,2.56453 2.45057,5.12906 3.71299,7.53331c0.81686,1.60283 1.63371,3.36595 2.37631,4.96878c0.14852,0.32057 0.14852,0.80142 0.07426,1.12198z" fill="#ffffff"/><path d="M35.46561,206.40258c-0.14852,2.72481 -0.22278,2.8851 -1.4852,3.20566c-0.3713,0.16028 -0.7426,0.16028 -1.18816,0.16028c0,-1.60283 0.07426,-3.36595 0.14852,-4.96878c0,-0.64113 0,-1.44255 0,-2.08368c0,-6.89217 0,-13.94463 0.07426,-20.8368c0,-3.20566 0.07426,-6.25104 0.14852,-9.29642c0,-4.96878 0.07426,-9.93755 0,-14.74604c0,-2.08368 -0.14852,-4.16736 -0.51982,-6.09076c-0.59408,-3.04538 -1.93075,-3.52623 -3.19317,-3.84679c-0.51982,-0.16028 -0.96538,-0.16028 -1.41094,-0.16028c0.7426,-1.76311 1.55945,-3.36595 2.30205,-5.12906c0.29704,-0.64113 0.51982,-1.76311 0.7426,-1.76311c0.7426,0.16028 1.55945,0.32057 2.15353,1.12198c1.63371,1.76311 2.00501,5.12906 2.00501,8.81557c0,3.52623 0.14852,6.89217 0.14852,10.4184c0.07426,2.24396 0.07426,4.48793 0.07426,6.89217c-0.07426,7.37302 -0.14852,14.58576 -0.14852,21.95878c0,2.8851 0.22278,5.77019 0.22278,8.65529c0.07426,2.40425 0.07426,5.12906 -0.07426,7.69359z" fill="#ffffff"/><path d="M147.74637,217.94296c-0.81686,1.9234 -1.4852,4.00708 -2.97039,3.36595c1.63371,-4.16736 1.63371,-4.16736 2.97039,-3.36595z" fill="#ffffff"/><path d="M129.03291,218.26353c-0.44556,1.9234 -1.93075,3.36595 -3.41595,3.04538c1.1139,-1.76311 2.00501,-3.84679 3.41595,-3.04538z" fill="#ffffff"/><path d="M109.20555,188.8355c-0.29704,4.01476 -1.26242,7.81821 -2.67335,11.41036c-1.1139,2.74694 -2.52483,5.17692 -4.23281,7.1843c-2.07927,2.42998 -4.38133,4.43736 -6.90616,5.70518c-1.78223,0.95087 -3.63873,1.58478 -5.49522,2.32433c-0.14852,0.10565 -0.29704,0.10565 -0.44556,0.10565c-3.04465,0 -6.01504,-0.73956 -8.61413,-3.06389c-2.07927,-1.79607 -4.08429,-3.80345 -5.42096,-6.86735c-1.55945,-3.4865 -2.74761,-7.07865 -2.89613,-11.30471c0,-1.79607 -0.14852,-3.59216 -0.22278,-5.28257c-0.14852,-6.44474 1.78223,-11.51602 4.60411,-16.16468c2.37631,-3.9091 5.3467,-6.65605 8.61413,-8.87473c1.03964,-0.73956 2.22779,-1.05651 3.41595,-1.37347c1.1139,-0.31696 2.22779,-0.63391 3.34169,-0.63391c1.41094,0 2.82187,0.4226 4.15855,0.73956c2.82187,0.52826 4.90114,2.95825 7.05468,5.28257c2.52483,2.85259 3.63873,6.86735 4.82688,10.88211c0.96538,3.16954 1.26242,6.44474 0.89112,9.93124zM84.55131,172.77646c-1.41094,3.80345 -2.45057,7.81821 -2.67335,12.14993c-0.14852,2.85259 -0.22278,5.81083 0.29704,8.66342c0.66834,4.01476 1.78223,7.92386 3.86151,11.09341c1.33668,2.00738 2.59909,3.9091 4.60411,4.54301c1.55945,0.52826 2.97039,0.21131 4.15855,-1.47912c1.63371,-2.32433 2.74761,-5.07127 3.49021,-8.24082c0.66834,-3.16954 1.18816,-6.44474 0.89112,-9.82559c0.22278,-3.6978 -0.22278,-7.28995 -0.81686,-10.77646c-0.3713,-2.21869 -0.81686,-4.43736 -1.55945,-6.44474c-1.26242,-3.16954 -3.04465,-5.17692 -5.64374,-5.38823c-1.70797,-0.21131 -3.26743,0.52826 -4.60411,1.90173c-0.81686,0.95087 -1.4852,2.32433 -2.00501,3.80345zM94.87342,212.92404c-8.68839,0.21131 -14.48065,-7.1843 -17.5253,-16.90425c-2.37631,-11.30471 -0.89112,-21.13031 5.64374,-28.94852c-0.22278,0 -0.29704,0.10565 -0.44556,0.21131c-1.63371,1.37347 -3.19317,3.06389 -4.52985,5.07127c-1.63371,2.42998 -3.26743,4.96563 -4.08429,8.24082c-0.51982,2.00738 -1.03964,3.9091 -1.03964,6.02214c-0.07426,3.38085 0,6.65605 0.44556,9.93124c0.29704,2.32433 0.7426,4.64867 1.70797,6.65605c1.33668,2.64129 2.82187,5.17692 4.67836,7.07865c1.55945,1.58478 3.19317,2.95825 5.04966,3.6978c2.59909,1.05651 5.19818,1.05651 7.72301,-0.10565c0.81686,-0.31696 1.55945,-0.63391 2.37631,-0.95087zM103.33903,180.27772c-0.44556,-3.2752 -1.41094,-6.33909 -2.67335,-9.08603c-1.1139,-2.42998 -2.82187,-3.9091 -4.60411,-5.38823c-1.4852,-1.26782 -2.89613,-1.37347 -4.45559,-0.95087c-1.18816,0.31696 -2.22779,0.84521 -3.19317,1.90173c0.14852,0 0.3713,-0.10565 0.51982,-0.10565c2.00501,-0.52826 3.93577,-0.4226 5.64374,1.37347c1.4852,1.58478 2.74761,3.4865 3.41595,6.12779c0.51982,2.32433 0.96538,4.54301 1.26242,6.86735c0.44556,2.95825 0.81686,5.91648 0.59408,8.98038c-0.14852,1.90173 -0.29704,3.6978 -0.51982,5.59953c-0.22278,1.79607 -0.44556,3.6978 -0.89112,5.28257c-0.96538,3.38085 -2.37631,6.55039 -4.67836,8.87473c1.55945,-0.21131 2.97039,-0.63391 4.08429,-2.11303c0.3713,-0.52826 0.7426,-0.95087 1.1139,-1.37347c1.63371,-1.90173 2.67335,-4.33171 3.26743,-7.1843c1.33668,-6.12779 2.00501,-12.36123 1.1139,-18.80597z" fill="#53ad4e"/><path d="M102.22514,201.19672c-0.59408,2.85259 -1.63371,5.28257 -3.26743,7.1843c-0.3713,0.4226 -0.7426,0.84521 -1.1139,1.37347c-1.1139,1.47912 -2.52483,1.90173 -4.08429,2.11303c2.30205,-2.32433 3.71299,-5.49388 4.67836,-8.87473c0.44556,-1.58478 0.66834,-3.4865 0.89112,-5.28257c0.22278,-1.90173 0.3713,-3.6978 0.51982,-5.59953c0.22278,-3.06389 -0.14852,-6.02214 -0.59408,-8.98038c-0.29704,-2.32433 -0.7426,-4.54301 -1.26242,-6.86735c-0.66834,-2.64129 -1.93075,-4.54301 -3.41595,-6.12779c-1.70797,-1.79607 -3.63873,-1.90173 -5.64374,-1.37347c-0.14852,0 -0.3713,0.10565 -0.51982,0.10565c0.96538,-1.05651 2.00501,-1.58478 3.19317,-1.90173c1.55945,-0.4226 2.97039,-0.31696 4.45559,0.95087c1.78223,1.47912 3.49021,2.95825 4.60411,5.38823c1.26242,2.74694 2.22779,5.81083 2.67335,9.08603c0.89112,6.44474 0.22278,12.67818 -1.1139,18.80597z" fill="#ffffff"/><path d="M94.87342,212.81839c-0.81686,0.31696 -1.55945,0.73956 -2.37631,1.05651c-2.52483,1.16216 -5.12392,1.16216 -7.72301,0.10565c-1.85649,-0.73956 -3.49021,-2.11303 -5.04966,-3.6978c-1.85649,-1.90173 -3.34169,-4.43736 -4.67836,-7.07865c-0.96538,-2.00738 -1.41094,-4.33171 -1.70797,-6.65605c-0.44556,-3.2752 -0.51982,-6.55039 -0.44556,-9.93124c0,-2.11303 0.51982,-4.01476 1.03964,-6.02214c0.81686,-3.2752 2.45057,-5.81083 4.08429,-8.24082c1.33668,-2.00738 2.89613,-3.6978 4.52985,-5.07127c0.14852,-0.10565 0.22278,-0.21131 0.44556,-0.21131c-6.53486,7.81821 -8.02005,17.64381 -5.64374,28.94852c3.04465,9.71994 8.83691,17.11555 17.5253,16.79859z" fill="#ffffff"/><path d="M165.42019,166.85997c0.07426,0.63391 -0.22278,0.63391 -0.59408,0.63391c-1.78223,-0.10565 -3.56447,1.16216 -4.15855,3.06389c-0.3713,1.26782 -0.7426,2.42998 -1.03964,3.6978c-1.18816,5.38823 -2.67335,10.6708 -4.30707,15.74208c-0.89112,2.74694 -1.4852,5.81083 -2.22779,8.66342c-0.59408,2.21869 -1.1139,4.43736 -1.70797,6.65605c-0.66834,2.42998 -1.41094,4.75432 -2.15353,7.07865c-0.07426,0.21131 -0.14852,0.31696 -0.14852,0.4226c-0.29704,2.32433 -1.55945,3.59216 -2.67335,4.96563c-0.22278,0.21131 -0.59408,0.21131 -0.96538,0.21131c-0.51982,0.10565 -0.96538,0 -1.41094,-0.10565c-0.14852,0 -0.29704,-0.21131 -0.3713,-0.31696c-1.03964,-3.4865 -2.15353,-7.07865 -3.19317,-10.6708c-0.22278,-1.05651 -0.29704,-2.11303 -0.51982,-3.16954c-0.44556,-1.90173 -0.89112,-3.59216 -1.26242,-5.49388c-0.51982,-2.74694 -0.96538,-5.49388 -1.41094,-8.13517c-0.07426,-0.10565 -0.07426,-0.31696 -0.14852,-0.73956c-0.07426,0.4226 -0.22278,0.63391 -0.22278,0.84521c-0.44556,2.64129 -1.26242,5.07127 -2.00501,7.60691c-0.96538,3.16954 -1.78223,6.44474 -2.67335,9.71994c-0.66834,2.42998 -1.26242,4.96563 -2.00501,7.28995c-0.22278,0.84521 -0.96538,1.37347 -1.4852,2.11303c-0.81686,1.16216 -1.78223,1.26782 -2.82187,1.05651c0,0 -0.07426,0 -0.14852,0c-1.03964,-0.10565 -0.96538,-0.10565 -1.33668,-1.58478c-0.51982,-2.00738 -1.03964,-3.9091 -1.55945,-5.91648c-0.51982,-2.11303 -0.96538,-4.33171 -1.4852,-6.55039c-0.3713,-1.47912 -0.66834,-2.95825 -0.96538,-4.43736c-1.1139,-4.96563 -2.15353,-9.93124 -3.26743,-14.89687c-0.51982,-2.32433 -0.89112,-4.75432 -1.4852,-7.07865c-0.3713,-1.47912 -0.89112,-2.95825 -1.4852,-4.43736c-0.22278,-0.4226 -0.66834,-0.84521 -1.03964,-0.95087c-0.81686,-0.10565 -1.70797,0 -2.52483,-0.10565c-0.14852,0 -0.44556,-0.21131 -0.44556,-0.4226c0,-0.84521 0,-1.58478 0,-2.21869c0.29704,-0.4226 0.59408,-0.73956 0.7426,-1.05651c0.81686,-1.26782 1.63371,-2.53563 2.45057,-3.9091c0.07426,-0.10565 0.22278,-0.21131 0.29704,-0.21131c1.33668,0.4226 2.67335,-0.21131 3.93577,-0.31696c2.00501,0.21131 3.93577,0.31696 5.94078,0.4226c1.18816,0.10565 1.18816,0 1.1139,1.69042c0,0.31696 -0.07426,0.52826 -0.07426,0.84521c0,0.63391 -0.22278,0.84521 -0.66834,0.84521c-0.51982,0 -1.1139,0.21131 -1.63371,0.4226c-0.59408,0.31696 -0.66834,0.52826 -0.44556,1.47912c0.59408,2.42998 1.1139,4.96563 1.70797,7.50126c0.59408,2.42998 1.26242,4.75432 1.85649,7.1843c1.18816,4.75432 2.30205,9.40299 3.41595,14.1573c0,0.10565 0.07426,0.10565 0.14852,0.31696c0.22278,-0.95087 0.44556,-1.90173 0.7426,-2.85259c0.59408,-1.90173 1.26242,-3.80345 1.85649,-5.70518c0.29704,-1.05651 0.66834,-2.11303 0.96538,-3.16954c0.66834,-2.21869 1.41094,-4.33171 2.07927,-6.55039c0.07426,-0.31696 0.14852,-0.73956 0.07426,-0.95087c-0.3713,-1.69042 -0.81686,-3.2752 -1.26242,-4.96563c-0.22278,-0.73956 -0.51982,-1.47912 -0.7426,-2.21869c-0.3713,-1.05651 -1.03964,-1.58478 -1.85649,-1.58478c-0.81686,-0.10565 -1.55945,-0.10565 -2.37631,-0.10565c-0.14852,0 -0.3713,-0.21131 -0.3713,-0.4226c-0.07426,-0.63391 -0.07426,-1.37347 -0.07426,-2.11303c0,-0.21131 0.22278,-0.4226 0.29704,-0.52826c0.59408,-0.4226 1.26242,-0.95087 1.93075,-1.37347c2.74761,-1.79607 5.64374,-1.47912 8.53987,-1.26782c1.78223,0.10565 3.56447,0 5.3467,0c0.14852,0 0.3713,0.21131 0.3713,0.4226c0.07426,0.63391 0.07426,1.37347 0.07426,2.00738c0,0.95087 -0.14852,0.95087 -0.7426,0.84521c-0.7426,-0.10565 -1.4852,-0.10565 -2.15353,0c-1.1139,0.21131 -1.33668,1.05651 -0.96538,2.53563c0.29704,1.05651 0.51982,2.21869 0.7426,3.2752c0.59408,2.21869 1.1139,4.54301 1.70797,6.86735c1.1139,4.33171 2.15353,8.66342 3.19317,12.99514c0.3713,1.37347 0.66834,2.74694 1.03964,4.43736c0.44556,-1.37347 0.81686,-2.53563 1.1139,-3.80345c1.41094,-5.07127 2.74761,-10.14255 4.08429,-15.21382c0.44556,-1.58478 0.81686,-3.2752 1.18816,-4.96563c0.14852,-0.52826 0.14852,-1.16216 0.07426,-1.79607c0,-0.73956 -0.44556,-1.05651 -0.96538,-1.05651c-0.81686,0 -1.55945,0 -2.37631,0c-0.07426,0 -0.29704,-0.21131 -0.29704,-0.31696c-0.29704,-1.26782 0.07426,-2.74694 0.89112,-3.38085c0.81686,-0.63391 1.70797,-1.26782 2.52483,-1.90173c0.14852,-0.10565 0.29704,-0.21131 0.3713,-0.31696c0.44556,-1.05651 1.1139,-0.73956 1.85649,-0.73956c2.00501,0.10565 4.01003,0 5.94078,0c1.03964,0 2.15353,-0.21131 3.19317,0c0.89112,0.31696 0.29704,1.58478 0.44556,2.00738zM150.86528,170.24082c0.96538,-0.73956 1.93075,-1.47912 2.89613,-2.21869c0.66834,-0.52826 0.81686,-0.84521 0.7426,-2.00738c-0.96538,0.63391 -1.85649,1.37347 -2.74761,1.90173c-1.18816,0.73956 -1.18816,0.73956 -1.1139,2.53563c-0.07426,0 -0.07426,0 0,0c0.07426,0 0.14852,0 0.22278,-0.21131zM128.58735,169.71257c1.03964,-0.73956 2.15353,-1.58478 3.19317,-2.32433c0.7426,-0.52826 0.7426,-0.73956 0.3713,-1.79607c-0.44556,0.4226 -0.89112,0.73956 -1.33668,1.05651c-0.59408,0.4226 -1.18816,0.73956 -1.78223,1.16216c-0.7426,0.63391 -0.81686,0.84521 -0.44556,1.90173zM110.83927,170.87473c0.14852,-0.21131 0.29704,-0.4226 0.44556,-0.52826c0.66834,-1.05651 1.33668,-2.11303 2.00501,-3.06389c0.3713,-0.4226 0.44556,-1.05651 0.29704,-1.90173c-1.03964,1.47912 -1.93075,2.85259 -2.82187,4.22606c-0.14852,0.31696 -0.14852,0.73956 -0.14852,1.16216c0.07426,0 0.14852,0 0.22278,0.10565zM125.1714,217.25576c0.66834,-0.84521 1.26242,-1.47912 1.85649,-2.21869c0.14852,-0.10565 0.22278,-0.63391 0.14852,-0.84521c-0.22278,-1.26782 -0.44556,-2.53563 -0.7426,-3.6978c-0.59408,-2.53563 -1.33668,-4.96563 -1.85649,-7.50126c-1.18816,-5.38823 -2.22779,-10.77646 -3.49021,-16.16468c-0.81686,-3.59216 -2.07927,-7.07865 -3.04465,-10.56515c-0.44556,-1.47912 -0.81686,-3.06389 -1.03964,-4.64867c-0.29704,-1.90173 -1.33668,-3.38085 -2.74761,-3.38085c-0.22278,0 -0.59408,-0.10565 -0.7426,0.10565c-0.7426,0.95087 -1.4852,2.00738 -2.22779,3.06389c0.07426,0.10565 0.14852,0.10565 0.14852,0.10565c0.14852,-0.10565 0.29704,-0.10565 0.44556,-0.10565c1.1139,-0.10565 2.22779,-0.21131 2.82187,1.58478c0.66834,1.90173 1.41094,3.9091 1.85649,6.02214c0.96538,4.22606 1.78223,8.45212 2.67335,12.67818c0.59408,2.85259 1.26242,5.70518 1.85649,8.55777c0.7426,3.38085 1.4852,6.86735 2.30205,10.2482c0.3713,1.58478 0.89112,3.16954 1.33668,4.75432c0.14852,0.63391 0.29704,1.26782 0.44556,2.00738zM129.10717,215.45968c-1.4852,-0.52826 -2.37631,0.84521 -3.41595,2.00738c1.41094,0.31696 2.97039,-0.63391 3.41595,-2.00738zM137.05296,179.74946c0,0 -0.07426,-0.10565 -0.14852,-0.10565c-0.66834,0.73956 -1.78223,0.95087 -2.15353,2.32433c-0.51982,1.90173 -1.03964,3.6978 -1.63371,5.59953c-0.22278,0.63391 -0.3713,1.26782 -0.59408,1.90173c-0.59408,1.79607 -1.26242,3.6978 -1.85649,5.59953c-0.44556,1.58478 -0.89112,3.06389 -1.33668,4.64867c-0.07426,0.21131 -0.07426,0.4226 -0.07426,0.52826c0.29704,1.16216 0.59408,2.42998 0.89112,3.6978c2.37631,-8.13517 4.67836,-16.16468 6.90616,-24.1942zM137.35,178.48164c-0.51982,-2.21869 -1.1139,-4.43736 -1.63371,-6.65605c-0.29704,-1.37347 -0.7426,-2.42998 -1.4852,-3.38085c-0.59408,-0.73956 -1.33668,-0.84521 -2.07927,-0.31696c-0.44556,0.31696 -0.96538,0.63391 -1.41094,0.95087c-0.3713,0.21131 -0.7426,0.52826 -1.1139,0.84521c0.3713,0.21131 0.7426,0.10565 1.1139,0.21131c0.59408,0.21131 1.18816,0.21131 1.63371,0.73956c0.51982,0.52826 0.89112,1.47912 1.18816,2.32433c0.44556,1.47912 0.81686,3.06389 1.26242,4.64867c0.22278,0.63391 0.44556,1.26782 0.66834,2.00738c0.59408,-0.52826 1.18816,-0.95087 1.85649,-1.37347zM144.33042,217.57271c0.22278,-0.4226 0.3713,-0.73956 0.51982,-1.05651c0.3713,-0.73956 0.96538,-1.37347 1.03964,-2.11303c0.07426,-0.73956 -0.44556,-1.47912 -0.66834,-2.32433c-0.89112,-3.38085 -1.70797,-6.7617 -2.52483,-10.14255c-0.96538,-3.9091 -1.93075,-7.81821 -2.89613,-11.83297c-0.44556,-1.79607 -0.89112,-3.59216 -1.33668,-5.49388c-0.14852,0.31696 -0.22278,0.63391 -0.29704,0.95087c-0.51982,1.47912 -0.96538,3.06389 -0.3713,4.75432c0.07426,0.21131 0.07426,0.31696 0.07426,0.52826c0.3713,2.32433 0.7426,4.64867 1.18816,6.86735c0.3713,2.11303 0.89112,4.12041 1.33668,6.12779c0.22278,0.95087 0.29704,2.00738 0.51982,2.95825c0.51982,1.79607 1.03964,3.4865 1.55945,5.28257c0.51982,1.47912 0.96538,3.06389 1.41094,4.54301c0.14852,0.21131 0.22278,0.4226 0.44556,0.95087zM147.82063,215.35403c-1.41094,-0.52826 -1.41094,-0.52826 -2.97039,2.21869c1.41094,0.4226 2.15353,-1.05651 2.97039,-2.21869zM158.21699,168.7617c-1.03964,-0.95087 -2.30205,-0.95087 -3.41595,-0.52826c-1.03964,0.31696 -1.93075,1.47912 -2.97039,2.32433c0.3713,0 0.59408,0 0.81686,0c0.22278,0.10565 0.44556,0.10565 0.66834,0.21131c0.66834,0.21131 1.18816,0.95087 1.18816,1.90173c0,1.05651 -0.14852,2.21869 -0.3713,3.2752c-0.44556,1.90173 -1.03964,3.6978 -1.55945,5.49388c-1.55945,5.70518 -3.11891,11.51602 -4.67836,17.2212c-0.07426,0.31696 -0.22278,0.63391 -0.14852,0.84521c0.3713,1.58478 0.7426,3.16954 1.1139,4.75432c0.07426,0 0.07426,0 0.14852,0c0.14852,-0.52826 0.29704,-1.05651 0.44556,-1.58478c1.4852,-5.38823 2.97039,-10.88211 4.45559,-16.27034c1.1139,-4.22606 2.22779,-8.34647 3.34169,-12.57253c0.3713,-1.37347 0.7426,-2.85259 1.1139,-4.33171c0,-0.21131 -0.07426,-0.73956 -0.14852,-0.73956z" fill="#53ad4e"/><path d="M153.76141,168.12779c-0.96538,0.73956 -1.93075,1.47912 -2.89613,2.21869c-0.07426,0.10565 -0.14852,0.10565 -0.22278,0.10565l-0.07426,-0.10565c0,-1.79607 0,-1.69042 1.18816,-2.42998c0.89112,-0.52826 1.78223,-1.26782 2.74761,-1.90173c0.07426,1.37347 -0.07426,1.58478 -0.7426,2.11303z" fill="#ffffff"/><path d="M131.70626,167.49388c-1.03964,0.73956 -2.15353,1.58478 -3.19317,2.32433c-0.29704,-1.26782 -0.22278,-1.47912 0.51982,-2.00738c0.59408,-0.4226 1.18816,-0.73956 1.78223,-1.16216c0.44556,-0.31696 0.89112,-0.63391 1.33668,-1.05651c0.3713,1.16216 0.29704,1.37347 -0.44556,1.90173z" fill="#ffffff"/><path d="M113.28984,167.28258c-0.66834,0.95087 -1.33668,2.00738 -2.00501,3.06389c-0.14852,0.10565 -0.29704,0.31696 -0.44556,0.52826c-0.07426,0 -0.14852,0 -0.14852,-0.10565c0,-0.4226 0,-0.84521 0.14852,-1.16216c0.89112,-1.37347 1.78223,-2.74694 2.82187,-4.22606c0.07426,0.84521 0,1.47912 -0.3713,1.90173z" fill="#ffffff"/><path d="M137.35,178.37599c-0.59408,0.52826 -1.18816,0.95087 -1.85649,1.47912c-0.22278,-0.73956 -0.44556,-1.37347 -0.66834,-2.00738c-0.44556,-1.58478 -0.81686,-3.16954 -1.26242,-4.64867c-0.29704,-0.84521 -0.66834,-1.79607 -1.18816,-2.32433c-0.44556,-0.52826 -1.03964,-0.52826 -1.63371,-0.73956c-0.3713,-0.10565 -0.7426,0 -1.1139,-0.21131c0.3713,-0.31696 0.7426,-0.63391 1.1139,-0.84521c0.44556,-0.31696 0.96538,-0.63391 1.41094,-0.95087c0.7426,-0.52826 1.4852,-0.4226 2.07927,0.31696c0.7426,0.95087 1.18816,2.00738 1.4852,3.38085c0.44556,2.11303 1.03964,4.33171 1.63371,6.55039z" fill="#ffffff"/><path d="M158.36551,169.50126c-0.3713,1.47912 -0.7426,2.95825 -1.1139,4.33171c-1.1139,4.22606 -2.22779,8.34647 -3.34169,12.57253c-1.4852,5.38823 -2.97039,10.88211 -4.45559,16.27034c-0.14852,0.52826 -0.29704,1.05651 -0.44556,1.58478c-0.07426,0 -0.07426,0 -0.14852,0c-0.3713,-1.58478 -0.7426,-3.16954 -1.1139,-4.75432c-0.07426,-0.21131 0.07426,-0.52826 0.14852,-0.84521c1.55945,-5.70518 3.11891,-11.51602 4.67836,-17.2212c0.51982,-1.79607 1.1139,-3.59216 1.55945,-5.49388c0.22278,-1.05651 0.3713,-2.21869 0.3713,-3.2752c0,-0.95087 -0.51982,-1.69042 -1.18816,-1.90173c-0.22278,-0.10565 -0.44556,-0.10565 -0.66834,-0.21131c-0.22278,0 -0.44556,0 -0.81686,0c1.03964,-0.84521 1.93075,-2.00738 2.97039,-2.32433c1.1139,-0.4226 2.37631,-0.4226 3.41595,0.52826c0.07426,0 0.14852,0.52826 0.14852,0.73956z" fill="#ffffff"/><path d="M145.88987,214.50882c-0.07426,0.73956 -0.66834,1.37347 -1.03964,2.11303c-0.14852,0.31696 -0.29704,0.63391 -0.51982,1.05651c-0.22278,-0.4226 -0.3713,-0.63391 -0.44556,-0.95087c-0.44556,-1.47912 -0.89112,-3.06389 -1.41094,-4.54301c-0.51982,-1.79607 -1.03964,-3.4865 -1.55945,-5.28257c-0.22278,-0.95087 -0.29704,-2.00738 -0.51982,-2.95825c-0.44556,-2.00738 -0.96538,-4.01476 -1.33668,-6.12779c-0.44556,-2.21869 -0.81686,-4.54301 -1.18816,-6.86735c0,-0.21131 0,-0.31696 -0.07426,-0.52826c-0.59408,-1.69042 -0.14852,-3.2752 0.3713,-4.75432c0.07426,-0.31696 0.14852,-0.63391 0.29704,-0.95087c0.44556,1.90173 0.89112,3.6978 1.33668,5.49388c0.96538,4.01476 1.93075,7.92386 2.89613,11.83297c0.81686,3.38085 1.63371,6.7617 2.52483,10.14255c0.22278,0.73956 0.7426,1.58478 0.66834,2.32433z" fill="#ffffff"/><path d="M137.12722,179.74946c-2.30205,8.02952 -4.60411,16.05903 -6.98042,24.29985c-0.29704,-1.26782 -0.59408,-2.53563 -0.89112,-3.6978c0,-0.10565 0,-0.31696 0.07426,-0.52826c0.44556,-1.58478 0.89112,-3.06389 1.33668,-4.64867c0.59408,-1.90173 1.26242,-3.80345 1.85649,-5.59953c0.22278,-0.63391 0.3713,-1.26782 0.59408,-1.90173c0.59408,-1.90173 1.1139,-3.6978 1.63371,-5.59953c0.3713,-1.37347 1.4852,-1.58478 2.15353,-2.32433c0.14852,-0.10565 0.14852,-0.10565 0.22278,0z" fill="#ffffff"/><path d="M126.95364,215.03707c-0.59408,0.73956 -1.18816,1.37347 -1.85649,2.21869c-0.14852,-0.73956 -0.22278,-1.37347 -0.44556,-2.00738c-0.44556,-1.58478 -0.96538,-3.16954 -1.33668,-4.75432c-0.81686,-3.38085 -1.55945,-6.86735 -2.30205,-10.2482c-0.59408,-2.85259 -1.26242,-5.70518 -1.85649,-8.55777c-0.89112,-4.22606 -1.70797,-8.45212 -2.67335,-12.67818c-0.3713,-2.11303 -1.1139,-4.12041 -1.78223,-6.02214c-0.59408,-1.79607 -1.70797,-1.69042 -2.82187,-1.58478c-0.14852,0 -0.29704,0 -0.44556,0.10565c0,0 -0.07426,0 -0.14852,-0.10565c0.7426,-1.05651 1.4852,-2.11303 2.22779,-3.06389c0.14852,-0.21131 0.51982,-0.10565 0.7426,-0.10565c1.41094,0 2.45057,1.47912 2.74761,3.38085c0.22278,1.58478 0.59408,3.16954 1.03964,4.64867c0.96538,3.4865 2.22779,6.973 3.04465,10.56515c1.26242,5.38823 2.30205,10.77646 3.49021,16.16468c0.51982,2.53563 1.26242,4.96563 1.85649,7.50126c0.29704,1.16216 0.51982,2.42998 0.7426,3.6978c0,0.21131 -0.07426,0.63391 -0.22278,0.84521z" fill="#ffffff"/><path d="M217,194.12246c-0.2,1.57203 -0.3,3.14407 -0.5,4.7161c-0.3,2.51525 -0.5,4.87331 -0.7,7.38856c-0.2,1.41483 -0.3,2.82966 -0.6,4.24449c-0.1,0.62881 -0.5,0.94322 -0.7,1.41483c-1.1,1.88644 -2.1,3.93008 -3.2,5.81653c-0.1,0.1572 -0.5,0.31441 -0.7,0.31441c-0.7,0.1572 -1.4,0.1572 -2.1,0.1572c-3.1,0 -6.1,-0.1572 -9.1,-0.1572c-4.4,0 -8.8,0.1572 -13.2,0.1572c-2.8,0.1572 -5.6,0 -8.4,0c-0.5,0 -0.8,-0.31441 -0.8,-1.10042c0,-1.41483 0,-2.67246 0.8,-3.93008c1.1,-1.57203 2.1,-3.45847 3.3,-5.18771c0.3,-0.47161 0.7,-0.47161 1.1,-0.78602c-0.5,-4.40169 -0.2,-8.80339 -0.1,-13.36229c0,-3.45847 0,-6.75975 0,-10.21822c0,-8.48898 0.1,-17.13517 0.1,-25.78136c0,-2.82966 -0.2,-5.81653 -0.2,-8.96059c-0.1,-1.88644 -0.5,-2.35805 -1.7,-2.35805c-0.8,0 -1.5,0.1572 -2.3,0.1572c-0.6,0 -0.8,-0.31441 -0.7,-1.10042c0,-0.1572 0,-0.1572 0,-0.1572c-0.2,-2.04364 0.5,-3.61568 1.4,-5.03051c0.3,-0.47161 0.5,-1.10042 0.8,-1.57203c0.9,-1.57203 1.8,-2.82966 3.4,-2.98686c3.3,0.1572 6.7,0.1572 10,0.1572c0.9,0.1572 1.9,0.1572 2.8,0.31441c0.2,0 0.4,0.62881 0.6,0.94322c0,0.1572 0,0.1572 0,0.31441c0.1,2.20085 0.1,2.35805 -1.2,2.67246c-1.6,0.31441 -2.4,1.10042 -2.4,3.93008c0.1,3.14407 -0.2,6.28814 -0.3,9.4322c-0.1,2.20085 -0.1,4.24449 -0.1,6.28814c-0.1,3.77288 -0.2,7.54576 -0.2,11.31864c-0.1,5.81653 -0.1,11.63305 -0.1,17.44958c0,3.77288 0.1,7.38856 0.1,11.00424c0,1.25763 0,2.51525 -0.1,3.77288c-0.1,1.10042 0.4,1.41483 0.9,1.41483c3.8,-0.1572 7.5,-0.31441 11.3,-0.47161c1.1,-0.1572 2.4,-0.1572 3.5,-0.47161c0.7,-0.1572 1.4,-0.94322 1.7,-1.88644c0.4,-1.10042 0.9,-1.88644 1.4,-2.82966c1,-1.57203 2,-3.30127 2.9,-5.03051c0.8,-1.41483 1.9,-0.94322 2.9,-0.94322c0.1,0 0.3,0.62881 0.4,0.94322zM210.1,203.71186c0.7,-0.47161 1.7,-0.78602 2.2,-1.72924c0.9,-1.88644 1.5,-4.08729 1.5,-6.60254c-1,2.98686 -3.1,4.87331 -3.7,8.33178zM178.1,145.2322c1.2,-2.35805 2.5,-4.40169 3.4,-6.91695c-0.1,-0.1572 -0.2,-0.1572 -0.3,-0.31441c-1,1.41483 -1.8,2.82966 -2.8,4.24449c-0.6,0.94322 -0.7,1.72924 -0.3,2.98686zM182.7,148.37627c0.1,3.77288 0.2,7.54576 0.2,11.31864c0.1,7.38856 0,14.77712 0,22.16568c0,6.60254 -0.1,13.04788 -0.2,19.65042c0,1.72924 0,3.45847 0,5.34492c2.2,-0.31441 2.7,-1.10042 2.7,-4.40169c0,-0.31441 0.1,-0.62881 0.1,-0.94322c0.2,-1.10042 0.4,-2.20085 0.4,-3.30127c-0.1,-8.33178 -0.4,-16.66356 -0.4,-24.99534c-0.1,-8.01737 0.1,-16.19195 0.1,-24.20932c0,-1.57203 -0.1,-3.30127 -0.1,-5.03051c0,-2.82966 -0.2,-3.45847 -2,-3.93008c-0.4,0 -0.8,-0.1572 -1.2,0c-0.3,0.1572 -0.7,0.31441 -0.9,0.78602c-0.9,1.41483 -1.7,3.14407 -2.6,4.87331h1.8c1.4,0 2,0.78602 2.1,2.67246zM180.4,212.82966c1.1,-1.25763 1.3,-2.04364 0.9,-4.24449c-1.2,2.04364 -2.4,4.24449 -3.5,6.28814c-0.1,0.31441 -0.1,0.94322 -0.1,1.25763c1,-1.10042 1.8,-2.20085 2.7,-3.30127zM213.8,210.94322c-10.6,0 -21,0.1572 -31.4,0.1572c-0.9,2.98686 -3.1,3.45847 -4.1,5.97373c0.1,0 0.2,0 0.3,0c4.7,0 9.5,0 14.2,0c2.7,0 5.3,-0.1572 8,-0.1572c3.1,0.1572 6.3,0.31441 9.5,0.31441c0.2,0 0.6,-0.1572 0.7,-0.47161c1,-1.88644 1.9,-3.77288 2.8,-5.81653z" fill="#53ad4e"/><path d="M181.4,138.31525c-0.8,2.51525 -2.1,4.5589 -3.3,6.91695c-0.4,-1.25763 -0.3,-2.04364 0.3,-2.98686c1,-1.41483 1.8,-2.82966 2.8,-4.24449c0,0.1572 0.1,0.31441 0.2,0.31441z" fill="#ffffff"/><path d="M185.8,198.36695c0,1.10042 -0.2,2.20085 -0.4,3.30127c0,0.31441 -0.1,0.62881 -0.1,0.94322c0,3.30127 -0.5,4.08729 -2.7,4.40169c0,-1.88644 0,-3.61568 0,-5.34492c0.1,-6.60254 0.2,-13.04788 0.2,-19.65042c0,-7.38856 0.1,-14.77712 0,-22.16568c0,-3.77288 -0.1,-7.54576 -0.2,-11.31864c0,-2.04364 -0.6,-2.82966 -2,-2.82966h-1.8c0.9,-1.72924 1.7,-3.45847 2.6,-4.87331c0.2,-0.47161 0.6,-0.62881 0.9,-0.78602c0.4,-0.1572 0.8,0 1.2,0c1.8,0.47161 2,1.10042 2,3.93008c0,1.72924 0.1,3.45847 0.1,5.03051c0,8.01737 -0.2,16.19195 -0.1,24.20932c0,8.48898 0.2,16.82076 0.3,25.15254z" fill="#ffffff"/><path d="M180.5,212.82966c-0.9,1.10042 -1.8,2.20085 -2.8,3.30127c0,-0.31441 0,-0.94322 0.1,-1.25763c1.1,-2.04364 2.3,-4.24449 3.5,-6.28814c0.5,2.35805 0.2,3.14407 -0.8,4.24449z" fill="#ffffff"/><path d="M213.8,195.38008c0,2.51525 -0.6,4.7161 -1.5,6.60254c-0.5,0.94322 -1.5,1.25763 -2.2,1.72924c0.6,-3.45847 2.7,-5.34492 3.7,-8.33178z" fill="#ffffff"/><path d="M213.9,210.94322c-1,2.20085 -2,4.08729 -2.9,5.97373c-0.1,0.31441 -0.5,0.47161 -0.7,0.47161c-3.2,0 -6.4,-0.1572 -9.5,-0.31441c-2.7,0 -5.3,0.1572 -8,0.1572c-4.7,0 -9.5,0 -14.2,0c-0.1,0 -0.2,0 -0.3,0c1,-2.51525 3.2,-2.98686 4.1,-5.97373c10.4,-0.31441 20.9,-0.31441 31.5,-0.31441z" fill="#ffffff"/><path d="M250.76677,188.40394c-0.27179,4.0998 -1.15512,7.98383 -2.44613,11.65207c-1.01922,2.80513 -2.31024,5.28659 -3.87304,7.33649c-1.90255,2.48146 -4.00894,4.53136 -6.31918,5.82604c-1.63076,0.97101 -3.32946,1.61834 -5.02816,2.37357c-0.1359,0.10789 -0.27179,0.10789 -0.40769,0.10789c-2.78587,0 -5.5038,-0.75523 -7.88199,-3.1288c-1.90255,-1.83412 -3.73715,-3.88402 -4.96022,-7.01282c-1.42691,-3.56036 -2.51408,-7.2286 -2.64998,-11.54418c0,-1.83412 -0.1359,-3.66824 -0.20384,-5.39448c-0.1359,-6.58126 1.63076,-11.75996 4.21279,-16.5071c2.17434,-3.99191 4.89227,-6.79704 7.88199,-9.06272c0.95127,-0.75523 2.03844,-1.0789 3.12562,-1.40256c1.01922,-0.32367 2.03844,-0.64734 3.05767,-0.64734c1.29101,0 2.58203,0.43156 3.8051,0.75523c2.58203,0.53945 4.48458,3.02091 6.45507,5.39448c2.31024,2.91302 3.32946,7.01282 4.41663,11.11262c0.88333,3.23669 1.15512,6.58126 0.81538,10.14162zM228.20799,172.00473c-1.29101,3.88402 -2.24229,7.98383 -2.44613,12.4073c-0.1359,2.91302 -0.20384,5.93393 0.27179,8.84694c0.61153,4.0998 1.63076,8.09172 3.5333,11.3284c1.22307,2.0499 2.37819,3.99191 4.21279,4.63925c1.42691,0.53945 2.71793,0.21578 3.8051,-1.51045c1.49486,-2.37357 2.51408,-5.1787 3.19356,-8.41538c0.61153,-3.23669 1.08717,-6.58126 0.81538,-10.03373c0.20384,-3.77613 -0.20384,-7.44438 -0.74743,-11.00473c-0.33974,-2.26568 -0.74743,-4.53136 -1.42691,-6.58126c-1.15512,-3.23669 -2.78587,-5.28659 -5.16406,-5.50237c-1.56281,-0.21578 -2.98972,0.53945 -4.21279,1.94201c-0.74743,0.97101 -1.35896,2.37357 -1.8346,3.88402zM237.65278,213.00276c-7.94993,0.21578 -13.24989,-7.33649 -16.03576,-17.26233c-2.17434,-11.54418 -0.81538,-21.57791 5.16406,-29.56174c-0.20384,0 -0.27179,0.10789 -0.40769,0.21578c-1.49486,1.40256 -2.92177,3.1288 -4.14484,5.1787c-1.49486,2.48146 -2.98972,5.07081 -3.73715,8.41538c-0.47564,2.0499 -0.95127,3.99191 -0.95127,6.1497c-0.06795,3.45247 0,6.79704 0.40769,10.14162c0.27179,2.37357 0.67948,4.74714 1.56281,6.79704c1.22307,2.69724 2.58203,5.28659 4.28073,7.2286c1.42691,1.61834 2.92177,3.02091 4.62047,3.77613c2.37819,1.0789 4.75637,1.0789 7.06661,-0.10789c0.74743,-0.32367 1.42691,-0.64734 2.17434,-0.97101zM245.39887,179.66489c-0.40769,-3.34458 -1.29101,-6.47337 -2.44613,-9.2785c-1.01922,-2.48146 -2.58203,-3.99191 -4.21279,-5.50237c-1.35896,-1.29467 -2.64998,-1.40256 -4.07689,-0.97101c-1.08717,0.32367 -2.03844,0.86312 -2.92177,1.94201c0.1359,0 0.33974,-0.10789 0.47564,-0.10789c1.8346,-0.53945 3.60125,-0.43156 5.16406,1.40256c1.35896,1.61834 2.51408,3.56036 3.12562,6.25759c0.47564,2.37357 0.88333,4.63925 1.15512,7.01282c0.40769,3.02091 0.74743,6.04181 0.54359,9.17061c-0.1359,1.94201 -0.27179,3.77613 -0.47564,5.71815c-0.20384,1.83412 -0.40769,3.77613 -0.81538,5.39448c-0.88333,3.45247 -2.17434,6.68915 -4.28073,9.06272c1.42691,-0.21578 2.71793,-0.64734 3.73715,-2.15779c0.33974,-0.53945 0.67948,-0.97101 1.01922,-1.40256c1.49486,-1.94201 2.44613,-4.42347 2.98972,-7.33649c1.22307,-6.25759 1.8346,-12.62308 1.01922,-19.20434z" fill="#53ad4e"/><path d="M244.37965,198.86923c-0.54359,2.91302 -1.49486,5.39448 -2.98972,7.33649c-0.33974,0.43156 -0.67948,0.86312 -1.01922,1.40256c-1.01922,1.51045 -2.31024,1.94201 -3.73715,2.15779c2.10639,-2.37357 3.39741,-5.61026 4.28073,-9.06272c0.40769,-1.61834 0.61153,-3.56036 0.81538,-5.39448c0.20384,-1.94201 0.33974,-3.77613 0.47564,-5.71815c0.20384,-3.1288 -0.1359,-6.1497 -0.54359,-9.17061c-0.27179,-2.37357 -0.67948,-4.63925 -1.15512,-7.01282c-0.61153,-2.69724 -1.76665,-4.63925 -3.12562,-6.25759c-1.56281,-1.83412 -3.32946,-1.94201 -5.16406,-1.40256c-0.1359,0 -0.33974,0.10789 -0.47564,0.10789c0.88333,-1.0789 1.8346,-1.61834 2.92177,-1.94201c1.42691,-0.43156 2.71793,-0.32367 4.07689,0.97101c1.63076,1.51045 3.19356,3.02091 4.21279,5.50237c1.15512,2.80513 2.03844,5.93393 2.44613,9.2785c0.81538,6.58126 0.20384,12.94675 -1.01922,19.20434z" fill="#ffffff"/><path d="M237.65278,212.89487c-0.74743,0.32367 -1.42691,0.75523 -2.17434,1.0789c-2.31024,1.18679 -4.68842,1.18679 -7.06661,0.10789c-1.6987,-0.75523 -3.19356,-2.15779 -4.62047,-3.77613c-1.6987,-1.94201 -3.05767,-4.53136 -4.28073,-7.2286c-0.88333,-2.0499 -1.29101,-4.42347 -1.56281,-6.79704c-0.40769,-3.34458 -0.47564,-6.68915 -0.40769,-10.14162c0,-2.15779 0.47564,-4.0998 0.95127,-6.1497c0.74743,-3.34458 2.24229,-5.93393 3.73715,-8.41538c1.22307,-2.0499 2.64998,-3.77613 4.14484,-5.1787c0.1359,-0.10789 0.20384,-0.21578 0.40769,-0.21578c-5.97944,7.98383 -7.3384,18.01755 -5.16406,29.56174c2.78587,9.92584 8.08583,17.47811 16.03576,17.15444z" fill="#ffffff"/><path d="M290.777,212.94935c-0.62645,0.86076 -1.16341,1.93672 -1.61087,2.90508c-0.26848,0.53798 -0.62645,0.64557 -1.07391,0.64557c-2.32681,-0.1076 -4.56413,-0.21519 -6.89094,-0.32279c-1.61087,-0.1076 -3.22174,-0.1076 -4.83261,-0.1076c-0.71594,0 -0.98442,-0.32279 -0.71594,-1.07595c0.53696,-1.50634 1.16341,-2.90508 1.87935,-4.30382c0.17899,-0.43038 0.80543,-0.53798 1.2529,-0.75317c-0.26848,-1.07595 -0.53696,-2.15191 -0.80543,-3.22786c-0.44746,-1.82912 -0.89493,-3.65825 -1.34239,-5.48737c-0.17899,-0.64557 -0.26848,-1.29115 -0.53696,-1.93672c-0.08949,-0.21519 -0.53696,-0.43038 -0.71594,-0.43038c-4.11667,0.43038 -8.14384,0.32279 -12.17101,0c-0.53696,0 -0.80543,0.21519 -0.98442,0.86076c-0.26848,1.07595 -0.80543,2.15191 -1.16341,3.33546c-0.62645,1.61393 -1.07391,3.33546 -1.61087,4.94939c-0.17899,0.53798 -0.08949,1.07595 0.44746,1.29115c0.44746,0.21519 0.89493,0.32279 1.34239,0.43038c0.80543,0.1076 1.61087,0.32279 2.4163,0.43038c0.44746,0 0.71594,0.43038 0.62645,0.96836c-0.08949,0.75317 -0.26848,1.39874 -0.62645,2.04431c-0.44746,0.86076 -1.07391,1.61393 -1.61087,2.3671c-0.17899,0.21519 -0.53696,0.32279 -0.80543,0.32279c-2.4163,-0.1076 -4.74311,-0.21519 -7.15942,-0.32279c-1.34239,-0.1076 -2.77427,-0.1076 -4.20616,-0.1076c-0.89493,0 -1.2529,-0.64557 -0.89493,-1.72153c0.44746,-1.07595 0.89493,-2.2595 1.34239,-3.33546c0.08949,-0.21519 0.35797,-0.32279 0.62645,-0.43038c0.44746,-0.1076 0.89493,-0.21519 1.34239,-0.21519c1.07391,-0.1076 1.61087,-0.96836 2.05833,-2.04431c1.70036,-4.30382 3.40072,-8.71523 4.29565,-13.44943c0.62645,-3.55065 1.78985,-6.88611 2.95326,-10.22157c0.26848,-0.64557 0.35797,-1.39874 0.62645,-2.15191c0.44746,-1.50634 0.98442,-3.01267 1.52138,-4.51901c0.17899,-0.53798 0.26848,-0.96836 0.44746,-1.50634c0.71594,-2.58229 1.43188,-5.05699 2.14783,-7.63928c0.08949,-0.43038 0.08949,-0.75317 0.26848,-1.07595c0.44746,-0.96836 0.71594,-1.93672 1.2529,-2.68989c0.80543,-1.18355 1.96884,-2.2595 2.77427,-3.76584c0.53696,-1.18355 1.07391,-0.86076 1.78985,-0.43038c0.62645,0.32279 1.34239,0.64557 1.87935,1.07595c0.35797,0.32279 0.62645,0.86076 0.80543,1.29115c1.16341,3.12027 1.70036,6.45573 2.4163,9.79119c0.17899,0.75317 0.53696,1.50634 0.71594,2.2595c0.44746,1.72153 0.80543,3.55065 1.34239,5.37977c0.44746,1.72153 0.98442,3.33546 1.52138,5.05699c0.35797,1.39874 0.71594,2.79748 1.16341,4.19622c0.98442,3.12027 1.96884,6.24054 2.68478,9.4684c0.17899,1.07595 0.71594,2.04431 0.98442,3.12027c0.35797,1.39874 0.62645,2.68989 1.07391,3.98103c0.35797,1.18355 0.98442,2.2595 1.70036,3.22786c0.35797,0.43038 1.16341,0.53798 1.78985,0.53798c0.62645,0 0.80543,0.32279 0.89493,0.96836c0.08949,0.96836 0,1.61393 -0.62645,2.3671zM270.46215,175.07575c0.17899,1.39874 0.62645,2.90508 0.89493,4.30382c0.17899,1.07595 0.26848,2.15191 0.53696,3.12027c0.53696,2.2595 1.07391,4.41141 1.70036,6.56332c0.08949,0.21519 0.26848,0.43038 0.35797,0.43038c0.62645,0 1.16341,0 1.87935,0c-0.08949,-0.43038 -0.17899,-0.64557 -0.26848,-0.86076c-0.53696,-1.93672 -1.16341,-3.65825 -1.70036,-5.59496c-0.71594,-2.4747 -1.2529,-5.16458 -1.96884,-7.74687c-0.26848,-0.96836 -0.71594,-1.93672 -1.07391,-2.90508c0,0 -0.08949,0 -0.17899,0c-0.08949,0.96836 -0.35797,1.82912 -0.17899,2.68989zM272.60998,188.30999c-0.62645,-2.4747 -1.2529,-4.94939 -1.78985,-7.53168c-0.35797,-1.61393 -0.62645,-3.33546 -0.89493,-4.94939c-0.08949,-0.1076 -0.17899,-0.1076 -0.26848,-0.1076c-1.34239,4.51901 -2.68478,9.03802 -4.11667,13.66462c0.35797,0.1076 0.44746,0.1076 0.62645,0.1076c1.96884,0 3.84819,0 5.81703,0c1.07391,0 1.07391,0 0.62645,-1.18355zM250.68426,212.08859c0,-0.1076 -0.08949,-0.1076 -0.17899,-0.1076c-0.08949,0.96836 -0.80543,1.72153 -0.71594,2.79748c0,0.1076 0.08949,0.1076 0.17899,0.1076c0.17899,-0.96836 0.44746,-1.93672 0.71594,-2.79748zM251.84766,212.30378c-0.17899,0 -0.44746,0.1076 -0.53696,0.21519c-0.35797,0.75317 -0.71594,1.50634 -1.07391,2.3671c1.43188,0 2.77427,0 4.02717,0c2.23732,0.1076 4.56413,0.21519 6.80145,0.32279c0.08949,0 0.35797,0 0.44746,-0.1076c0.62645,-0.75317 1.16341,-1.50634 1.70036,-2.2595c-0.08949,0 -0.08949,-0.1076 -0.08949,-0.21519c-0.71594,0 -1.52138,0 -2.32681,0c-2.95326,0 -5.99601,-0.1076 -8.94927,-0.32279zM263.39222,184.75934c0.62645,-1.93672 1.07391,-3.98103 1.70036,-6.02535c0.35797,-1.29115 0.89493,-2.68989 1.34239,-3.98103c0.62645,-2.04431 1.34239,-4.08863 1.96884,-6.13294c0.53696,-1.82912 1.16341,-3.76584 1.70036,-5.59496c-0.08949,0 -0.08949,-0.1076 -0.17899,-0.1076c-0.35797,0.43038 -0.80543,0.75317 -1.07391,1.29115c-0.53696,0.86076 -1.16341,1.72153 -1.43188,2.68989c-0.89493,2.90508 -1.61087,5.91775 -2.4163,8.82283c-0.26848,1.07595 -0.44746,2.04431 -0.80543,3.12027c-0.44746,1.39874 -0.98442,2.79748 -1.43188,4.08863c-0.17899,0.53798 -0.26848,0.96836 -0.44746,1.39874c-0.80543,2.68989 -1.78985,5.27218 -2.4163,7.96206c-1.07391,4.6266 -2.32681,9.14561 -3.93768,13.44943c-0.44746,1.18355 -0.89493,2.2595 -1.34239,3.44305c0.08949,0 0.08949,0.1076 0.17899,0.1076c0.53696,-0.86076 1.07391,-1.72153 1.43188,-2.58229c0.71594,-2.04431 1.34239,-4.08863 2.05833,-6.13294c0.89493,-2.79748 1.78985,-5.48737 2.68478,-8.17725c0.26848,-0.75317 0.35797,-1.50634 0.62645,-2.2595c0.53696,-1.72153 1.16341,-3.55065 1.78985,-5.37977zM277.08461,194.22774c-0.44746,-0.1076 -0.89493,-0.21519 -1.34239,-0.21519c-3.75869,-0.1076 -7.60688,-0.21519 -11.45507,-0.32279c-0.17899,0 -0.44746,0.21519 -0.53696,0.43038c-0.35797,1.18355 -0.62645,2.3671 -0.89493,3.65825c0.62645,0.1076 1.34239,0.21519 1.96884,0.21519c3.57971,0 7.15942,0 10.73913,0c0.17899,0 0.44746,-0.1076 0.53696,-0.32279c0.35797,-1.07595 0.71594,-2.15191 0.98442,-3.44305zM279.32193,209.18351c0.08949,0.43038 0.35797,0.53798 0.71594,0.32279c0.98442,-0.43038 1.43188,-1.29115 1.16341,-2.58229c-0.26848,-1.50634 -0.71594,-3.01267 -1.16341,-4.51901c-0.26848,-1.07595 -0.53696,-2.15191 -0.89493,-3.22786c-0.44746,-1.50634 -0.89493,-3.01267 -1.34239,-4.51901c0,0 -0.08949,0 -0.17899,0c-0.35797,1.29115 -0.71594,2.58229 -1.07391,3.87344c-0.08949,0.1076 0.08949,0.32279 0.08949,0.43038c0.35797,0.96836 0.80543,1.93672 1.07391,3.01267c0.62645,2.3671 1.16341,4.7342 1.61087,7.20889zM276.54766,215.31645c0.44746,-0.96836 0.89493,-2.04431 1.34239,-3.12027c0,-0.1076 -0.08949,-0.43038 -0.26848,-0.86076c-0.44746,1.39874 -0.89493,2.68989 -1.34239,3.87344c0.08949,0.1076 0.17899,0.1076 0.26848,0.1076zM290.24005,212.19618c-0.53696,0.1076 -0.89493,0.1076 -1.34239,0.1076c-0.62645,0 -1.34239,0.1076 -2.05833,0.1076c-2.4163,0 -4.9221,-0.1076 -7.4279,-0.21519c-0.17899,0 -0.53696,0 -0.62645,0.21519c-0.62645,0.86076 -1.07391,1.93672 -1.70036,3.01267c0.44746,0 0.71594,0 1.07391,0c0.89493,0 1.87935,0 2.86377,0c2.32681,0.1076 4.65362,0.21519 6.98043,0.32279c0.17899,0 0.44746,-0.1076 0.53696,-0.32279c0.62645,-0.96836 1.16341,-2.04431 1.70036,-3.22786z" fill="#53ad4e"/><path d="M277.89005,212.30378c-0.44746,1.07595 -0.89493,2.15191 -1.34239,3.12027c-0.08949,0 -0.17899,-0.1076 -0.26848,-0.1076c0.44746,-1.18355 0.89493,-2.4747 1.34239,-3.87344c0.17899,0.32279 0.35797,0.64557 0.26848,0.86076z" fill="#ffffff"/><path d="M290.32954,212.19618c-0.62645,1.18355 -1.16341,2.2595 -1.78985,3.22786c-0.08949,0.21519 -0.35797,0.32279 -0.53696,0.32279c-2.32681,-0.1076 -4.65362,-0.21519 -6.98043,-0.32279c-0.98442,0 -1.96884,0 -2.86377,0c-0.35797,0 -0.62645,0 -1.07391,0c0.62645,-1.07595 1.07391,-2.15191 1.70036,-3.01267c0.08949,-0.21519 0.44746,-0.21519 0.62645,-0.21519c2.5058,0.1076 5.01159,0.21519 7.4279,0.21519c0.71594,0 1.43188,-0.1076 2.05833,-0.1076c0.44746,-0.1076 0.89493,-0.1076 1.43188,-0.1076z" fill="#ffffff"/><path d="M280.12737,209.5063c-0.35797,0.21519 -0.62645,0.1076 -0.71594,-0.32279c-0.53696,-2.3671 -1.07391,-4.7342 -1.70036,-7.20889c-0.26848,-1.07595 -0.71594,-2.04431 -1.07391,-3.01267c0,-0.1076 -0.17899,-0.32279 -0.08949,-0.43038c0.35797,-1.29115 0.71594,-2.58229 1.07391,-3.87344c0.08949,0 0.17899,0 0.17899,0c0.44746,1.50634 0.89493,3.01267 1.34239,4.51901c0.35797,1.07595 0.62645,2.15191 0.89493,3.22786c0.44746,1.50634 0.89493,3.01267 1.16341,4.51901c0.35797,1.29115 -0.08949,2.04431 -1.07391,2.58229z" fill="#ffffff"/><path d="M263.21324,212.94935c-0.53696,0.75317 -1.07391,1.50634 -1.70036,2.2595c-0.08949,0.1076 -0.35797,0.1076 -0.44746,0.1076c-2.23732,-0.21519 -4.56413,-0.32279 -6.80145,-0.43038c-1.2529,0 -2.59529,0 -4.02717,0c0.35797,-0.86076 0.71594,-1.61393 1.07391,-2.3671c0.08949,-0.1076 0.35797,-0.21519 0.53696,-0.21519c2.95326,0.1076 5.99601,0.21519 8.94927,0.32279c0.80543,0 1.61087,0 2.32681,0c0.08949,0.1076 0.08949,0.21519 0.08949,0.32279z" fill="#ffffff"/><path d="M277.17411,194.33534c-0.35797,1.18355 -0.71594,2.2595 -1.07391,3.33546c-0.08949,0.21519 -0.35797,0.32279 -0.53696,0.32279c-3.57971,0 -7.15942,0 -10.73913,0c-0.62645,0 -1.34239,-0.1076 -1.96884,-0.21519c0.26848,-1.29115 0.53696,-2.4747 0.89493,-3.65825c0.08949,-0.21519 0.35797,-0.43038 0.53696,-0.43038c3.84819,0.1076 7.69638,0.21519 11.45507,0.32279c0.53696,0.1076 0.98442,0.21519 1.43188,0.32279z" fill="#ffffff"/><path d="M275.83171,189.49354c-0.71594,0 -1.2529,0 -1.87935,0c-0.08949,0 -0.26848,-0.21519 -0.35797,-0.43038c-0.62645,-2.15191 -1.16341,-4.30382 -1.70036,-6.56332c-0.26848,-0.96836 -0.35797,-2.04431 -0.53696,-3.12027c-0.26848,-1.39874 -0.71594,-2.90508 -0.89493,-4.30382c-0.08949,-0.86076 0.17899,-1.82912 0.26848,-2.68989c0.08949,0 0.17899,0 0.17899,0c0.35797,0.96836 0.80543,1.93672 1.07391,2.90508c0.71594,2.58229 1.2529,5.27218 1.96884,7.74687c0.53696,1.93672 1.16341,3.65825 1.70036,5.59496c0,0.32279 0.08949,0.53798 0.17899,0.86076z" fill="#ffffff"/><path d="M270.10418,163.13266c-0.53696,1.82912 -1.16341,3.76584 -1.70036,5.59496c-0.62645,2.04431 -1.34239,4.08863 -1.96884,6.13294c-0.44746,1.29115 -0.98442,2.68989 -1.34239,3.98103c-0.62645,2.04431 -1.07391,4.08863 -1.70036,6.02535c-0.53696,1.72153 -1.16341,3.55065 -1.70036,5.27218c-0.26848,0.75317 -0.35797,1.50634 -0.62645,2.2595c-0.89493,2.68989 -1.78985,5.37977 -2.68478,8.17725c-0.71594,2.04431 -1.34239,4.08863 -2.05833,6.13294c-0.35797,0.86076 -0.89493,1.72153 -1.43188,2.58229c-0.08949,0 -0.08949,-0.1076 -0.17899,-0.1076c0.44746,-1.18355 0.89493,-2.2595 1.34239,-3.44305c1.61087,-4.30382 2.86377,-8.82283 3.93768,-13.44943c0.62645,-2.68989 1.61087,-5.27218 2.4163,-7.96206c0.17899,-0.43038 0.26848,-0.86076 0.44746,-1.39874c0.44746,-1.29115 0.98442,-2.68989 1.43188,-4.08863c0.35797,-1.07595 0.53696,-2.04431 0.80543,-3.12027c0.80543,-2.90508 1.52138,-5.91775 2.4163,-8.82283c0.26848,-0.96836 0.89493,-1.82912 1.43188,-2.68989c0.26848,-0.53798 0.71594,-0.86076 1.07391,-1.29115c-0.08949,0.1076 0,0.21519 0.08949,0.21519z" fill="#ffffff"/><path d="M332.50547,186.40532c0.07283,1.20456 -0.14565,2.51863 -0.21848,3.8327c-0.14565,3.28517 -0.94674,6.24183 -1.82065,9.19848c-1.01957,3.50418 -2.84022,6.13232 -4.80653,8.43194c-1.74783,2.19011 -3.64131,4.16122 -5.53479,6.02281c-1.3837,1.20456 -2.91305,2.19011 -4.36957,3.06616c-1.09239,0.54753 -2.25761,0.98555 -3.13152,1.31407c-2.47609,0 -4.7337,-0.21901 -6.99131,-0.21901c-2.11196,0 -4.15109,0.10951 -6.26305,0.21901c-1.09239,0.10951 -2.18478,0.21901 -3.27718,0.32852c-0.43696,0 -0.50978,-0.21901 -0.58261,-0.76654c-0.07283,-0.54753 -0.14565,-1.20456 -0.14565,-1.75209c0,-0.32852 0.14565,-0.65703 0.2913,-0.87605c0.80109,-0.98555 1.52935,-1.9711 2.40326,-2.73764c0.65544,-0.65703 0.94674,-1.42357 0.87391,-2.62814c-0.07283,-3.28517 -0.14565,-6.67985 -0.14565,-10.07452c0,-5.14677 0,-10.18403 0.07283,-15.3308c0,-1.8616 0.21848,-3.8327 0.2913,-5.6943c0,-1.20456 -0.14565,-2.40913 -0.14565,-3.61369c0,-0.76654 0,-1.53308 0.07283,-2.29962c0.14565,-1.31407 -0.14565,-1.8616 -1.09239,-1.75209c-0.87391,0.10951 -1.82065,0 -2.69457,-0.10951c-0.14565,0 -0.2913,-0.32852 -0.2913,-0.54753c0,-0.87605 0.07283,-1.8616 0.14565,-2.73764c0,-0.21901 0,-0.32852 0.07283,-0.43802c1.31087,-1.8616 2.54892,-3.72319 3.85979,-5.47529c0.14565,-0.21901 0.50978,-0.43802 0.72826,-0.43802c0.80109,-0.21901 1.52935,-0.32852 2.25761,-0.32852c4.58805,0.10951 9.1761,0.21901 13.76414,0.32852c2.62174,0.10951 5.09783,1.20456 7.42827,2.95665c2.18478,1.64259 4.15109,3.72319 5.60761,6.78935c0.72826,1.64259 1.3837,3.39468 1.82065,5.14677c0.87391,3.28517 1.60218,6.67985 1.82065,10.18403zM295.58261,169.65095c0.21848,-0.32852 0.36413,-0.54753 0.50978,-0.65703c0.87391,-1.20456 1.74783,-2.62814 2.69457,-3.72319c0.58261,-0.76654 0.58261,-1.53308 0.43696,-2.51863c-0.14565,0.10951 -0.21848,0.32852 -0.36413,0.54753c-0.94674,1.20456 -1.82065,2.51863 -2.76739,3.72319c-0.72826,0.87605 -0.80109,0.87605 -0.50978,2.62814zM299.51522,172.4981c-0.07283,0.54753 -0.07283,1.09506 -0.07283,1.64259c0.07283,1.53308 0.21848,3.06616 0.21848,4.59924c0,1.9711 -0.2913,3.94221 -0.2913,5.91331c-0.07283,4.16122 -0.07283,8.32243 -0.07283,12.48365c0,4.48973 0.07283,8.86996 0.07283,13.25019c0,0.10951 0.07283,0.32852 0.07283,0.43802c0.36413,-0.10951 0.80109,-0.21901 1.16522,-0.32852c1.52935,-0.43802 1.82065,-1.20456 1.74783,-3.50418c-0.07283,-1.42357 -0.07283,-2.95665 -0.07283,-4.38023c0,-5.58479 0.14565,-11.16958 0.14565,-16.64487c0,-2.73764 -0.21848,-5.36578 -0.21848,-8.10342c0,-2.62814 0,-5.36578 0,-7.99392c0,-1.42357 0,-2.73764 0,-4.16122c0,-0.87605 -0.2913,-1.42357 -0.87391,-1.42357c-0.65544,0 -1.31087,-0.10951 -1.82065,0.76654c-0.43696,0.76654 -1.09239,1.42357 -1.60218,2.19011c-0.65544,0.98555 -1.31087,1.9711 -2.03913,2.95665c0,0.10951 0.07283,0.21901 0.07283,0.32852c0.72826,0 1.45652,-0.10951 2.18478,-0.21901c1.09239,-0.10951 1.45652,0.54753 1.3837,2.19011zM299.36957,213.45323c0.36413,-0.43802 0.36413,-0.98555 0.14565,-1.64259c-1.01957,1.20456 -2.11196,2.29962 -3.13152,3.50418c-0.72826,0.76654 -0.72826,0.87605 -0.43696,2.29962c1.16522,-1.42357 2.25761,-2.84715 3.42283,-4.16122zM320.63481,212.35817c0,0 -0.07283,-0.10951 -0.07283,-0.21901c-1.3837,0.76654 -2.76739,0.76654 -4.22392,0.65703c-1.01957,0 -1.96631,-0.10951 -2.98587,-0.10951c-2.84022,0 -5.68044,0.10951 -8.59349,0.10951c-1.23804,0.10951 -2.40326,0.21901 -3.56848,0.21901c-0.58261,0 -1.16522,0.21901 -1.52935,0.98555c-0.14565,0.43802 -0.43696,0.65703 -0.72826,0.98555c-0.72826,0.98555 -1.45652,1.8616 -2.25761,2.84715c1.82065,-0.10951 3.56848,-0.32852 5.31631,-0.32852c2.91305,0 5.75327,0.10951 8.59349,0.10951c2.54892,-0.10951 5.025,-0.87605 7.28262,-2.62814c0.94674,-0.76654 1.89348,-1.64259 2.76739,-2.62814zM321.14459,206.22586c1.52935,-2.51863 2.33044,-5.8038 2.69457,-9.08897c0.36413,-2.95665 0.36413,-6.02281 0.43696,-8.97947c0,-1.53308 0,-3.17567 -0.2913,-4.59924c-0.50978,-2.19011 -1.23804,-4.38023 -1.96631,-6.35133c-0.72826,-1.8616 -2.03913,-3.06616 -3.13152,-4.38023c-1.3837,-1.53308 -2.84022,-2.08061 -4.51522,-2.08061c-2.25761,0 -4.4424,-0.10951 -6.70001,-0.10951v0.43802c0.07283,5.36578 0.14565,10.62205 0.14565,15.98783c0,7.00837 -0.07283,13.90722 -0.14565,20.91559c0,1.20456 0.14565,1.42357 0.87391,1.75209c0.21848,0.10951 0.43696,0.10951 0.65544,0.10951c2.18478,0 4.29674,0.10951 6.4087,0c2.11196,-0.10951 3.93261,-1.31407 5.53479,-3.61369zM326.4609,179.72548c-0.72826,-2.84715 -1.675,-5.47529 -2.62174,-8.21293c-1.16522,-3.39468 -3.20435,-5.36578 -5.53479,-6.46084c-2.98587,-1.42357 -6.04457,-0.87605 -9.10327,-0.76654c-0.87391,0 -1.52935,0.98555 -1.52935,2.19011c0,1.09506 0,2.19011 0,3.50418c0.94674,0 1.89348,0 2.91305,0c2.03913,0.10951 4.15109,-0.43802 6.19022,0.32852c1.52935,0.54753 2.84022,1.9711 4.00544,3.50418c1.01957,1.42357 1.74783,3.28517 2.54892,5.03726c0.2913,0.65703 0.58261,1.31407 0.72826,2.08061c0.2913,1.8616 0.65544,3.8327 0.72826,5.8038c0.2913,5.36578 -0.07283,10.73156 -1.675,15.76882c-0.2913,0.87605 -0.65544,1.8616 -1.01957,2.73764c-0.14565,0.32852 -0.21848,0.65703 -0.36413,0.98555c0.07283,0 0.07283,0.10951 0.14565,0.10951c0,-0.10951 0.07283,-0.10951 0.14565,-0.21901c0.14565,-0.21901 0.2913,-0.43802 0.43696,-0.65703c1.52935,-2.40913 2.47609,-5.47529 3.49566,-8.54144c0.14565,-0.43802 0.2913,-1.09506 0.36413,-1.64259c0.2913,-2.40913 0.50978,-4.81825 0.72826,-7.22738c0.21848,-2.84715 0.07283,-5.6943 -0.58261,-8.32243z" fill="#53ad4e"/><path d="M327.04351,188.04791c-0.21848,2.40913 -0.43696,4.81825 -0.72826,7.22738c-0.07283,0.54753 -0.21848,1.20456 -0.36413,1.64259c-1.01957,3.06616 -1.96631,6.13232 -3.49566,8.54144c-0.14565,0.21901 -0.2913,0.43802 -0.43696,0.65703c-0.07283,0.10951 -0.14565,0.10951 -0.14565,0.21901c-0.07283,0 -0.07283,-0.10951 -0.14565,-0.10951c0.14565,-0.32852 0.21848,-0.65703 0.36413,-0.98555c0.36413,-0.87605 0.72826,-1.8616 1.01957,-2.73764c1.60218,-5.03726 1.96631,-10.40304 1.675,-15.76882c-0.07283,-1.9711 -0.43696,-3.94221 -0.72826,-5.8038c-0.14565,-0.76654 -0.43696,-1.42357 -0.72826,-2.08061c-0.80109,-1.75209 -1.52935,-3.61369 -2.54892,-5.03726c-1.16522,-1.53308 -2.47609,-2.95665 -4.00544,-3.50418c-2.03913,-0.76654 -4.15109,-0.21901 -6.19022,-0.32852c-1.01957,0 -1.96631,0 -2.91305,0c0,-1.31407 0,-2.40913 0,-3.50418c0,-1.20456 0.65544,-2.19011 1.52935,-2.19011c3.0587,-0.10951 6.1174,-0.65703 9.10327,0.76654c2.33044,1.09506 4.36957,3.06616 5.53479,6.46084c0.94674,2.73764 1.89348,5.36578 2.62174,8.21293c0.65544,2.62814 0.80109,5.47529 0.58261,8.32243z" fill="#ffffff"/><path d="M320.70763,212.57719c-0.94674,0.76654 -1.82065,1.75209 -2.84022,2.40913c-2.25761,1.75209 -4.7337,2.51863 -7.28262,2.62814c-2.84022,0 -5.68044,-0.10951 -8.59349,-0.10951c-1.74783,0 -3.49566,0.21901 -5.31631,0.32852c0.80109,-0.98555 1.52935,-1.8616 2.25761,-2.84715c0.2913,-0.32852 0.58261,-0.54753 0.72826,-0.98555c0.36413,-0.76654 0.94674,-0.98555 1.52935,-0.98555c1.16522,0 2.33044,-0.10951 3.56848,-0.21901c2.91305,0 5.75327,-0.10951 8.59349,-0.10951c1.01957,0 1.96631,0.10951 2.98587,0.10951c1.45652,0.10951 2.84022,0.10951 4.22392,-0.65703c0.07283,0.21901 0.07283,0.32852 0.14565,0.43802z" fill="#ffffff"/><path d="M299.36957,213.34373c-1.16522,1.42357 -2.25761,2.84715 -3.42283,4.27072c-0.2913,-1.42357 -0.2913,-1.53308 0.43696,-2.29962c1.01957,-1.20456 2.11196,-2.29962 3.13152,-3.50418c0.2913,0.54753 0.21848,1.09506 -0.14565,1.53308z" fill="#ffffff"/><path d="M298.78696,165.27072c-0.94674,1.09506 -1.82065,2.51863 -2.69457,3.72319c-0.14565,0.10951 -0.2913,0.32852 -0.50978,0.65703c-0.2913,-1.75209 -0.21848,-1.75209 0.50978,-2.62814c0.94674,-1.20456 1.82065,-2.51863 2.76739,-3.72319c0.14565,-0.21901 0.21848,-0.43802 0.36413,-0.54753c0.14565,0.98555 0.14565,1.75209 -0.43696,2.51863z" fill="#ffffff"/><path d="M302.35544,207.1019c0.07283,2.29962 -0.21848,3.06616 -1.74783,3.50418c-0.36413,0.10951 -0.80109,0.21901 -1.16522,0.32852c0,-0.10951 -0.07283,-0.32852 -0.07283,-0.43802c0,-4.48973 -0.07283,-8.86996 -0.07283,-13.3597c0,-4.16122 0,-8.32243 0.07283,-12.48365c0,-1.9711 0.2913,-3.94221 0.2913,-5.91331c0,-1.53308 -0.14565,-3.06616 -0.21848,-4.59924c0,-0.54753 0,-1.09506 0.07283,-1.64259c0.07283,-1.64259 -0.2913,-2.29962 -1.3837,-2.19011c-0.72826,0.10951 -1.45652,0.21901 -2.18478,0.21901c0,-0.10951 -0.07283,-0.21901 -0.07283,-0.32852c0.72826,-0.98555 1.3837,-1.9711 2.03913,-2.95665c0.50978,-0.76654 1.16522,-1.42357 1.60218,-2.19011c0.50978,-0.87605 1.16522,-0.76654 1.82065,-0.76654c0.58261,0 0.87391,0.54753 0.87391,1.42357c0,1.42357 0,2.73764 0,4.16122c0,2.62814 0,5.36578 0,7.99392c0,2.73764 0.21848,5.36578 0.21848,8.10342c0,5.47529 -0.14565,11.06008 -0.14565,16.64487c0,1.53308 0,2.95665 0.07283,4.48973z" fill="#ffffff"/><path d="M358.3,209.8c-0.8,1.6 -1.7,3.2 -2.6,4.8c-0.1,0.2 -0.5,0.4 -0.7,0.4c-4.1,-0.1 -8.3,-0.3 -12.4,-0.5c-1,0 -2,-0.3 -3,-0.5c-0.1,0 -0.2,0 -0.3,-0.1c-0.5,-0.4 -0.4,-2.6 0.1,-3c1.3,-1 2.7,-2.1 4,-3.2c0.1,-0.2 0.2,-0.5 0.2,-0.7c0,-2.6 -0.3,-5.1 -0.1,-7.6c0.3,-5.1 -0.3,-10.2 -0.1,-15.3c0.1,-3.8 0.1,-7.5 0.2,-11.3c0,-0.9 0.1,-1.8 0.1,-2.7c0,-0.6 -0.5,-1 -1.1,-1.1c-0.7,-0.2 -1.5,-0.3 -2.3,-0.3c-0.5,0 -0.7,-0.1 -0.7,-0.5c0,-0.8 -0.2,-1.7 0.6,-2.4c1.1,-0.9 2,-2 3,-3c0.5,-0.6 1.2,-0.8 1.9,-0.8c0.9,0 1.7,0 2.5,0v0.3h9.9c0.2,0 0.4,0.1 0.6,0.1c0.6,-0.1 0.8,0.3 0.8,0.9c0,0.6 0.1,1.2 -0.8,1.2c-0.3,0 -0.7,0.1 -1,0.2c-1.1,0.2 -1.7,0.9 -1.7,2c-0.1,0.9 -0.2,1.8 -0.2,2.7c-0.2,3.7 -0.4,7.4 -0.5,11.1c-0.1,3.5 0.1,7 0.1,10.5c0,4.4 0.1,8.9 0.1,13.4c0,0.5 0.1,0.9 0.1,1.4c0.1,1 0.7,1.3 1.6,1.4c0,0 0.1,0 0.2,0c1.8,0.1 2.4,1.1 1.5,2.6zM343.6,164.9c0.7,-0.6 0.6,-1.3 0.5,-2.1c-0.2,0.1 -0.3,0.2 -0.3,0.2c-1,1.2 -2,2.4 -3.1,3.5c-0.5,0.5 -0.6,0.9 -0.5,1.3c1.1,-0.9 2.2,-2 3.4,-2.9zM344.2,169.7c0.1,0.8 0,1.6 0,2.4c0,3.6 -0.2,7.1 -0.2,10.6c0,3.9 0.1,7.8 0.1,11.8c0.1,3.4 0.2,6.8 0.2,10.2c0,0.9 -0.1,1.8 -0.2,2.8c1,-0.1 2.1,0.1 2.8,-0.7c0.5,-0.6 0.9,-1.4 1.1,-2.2c0.2,-1 0.2,-2.1 0.2,-3.2c-0.1,-4.6 -0.3,-9.3 -0.4,-13.9c-0.1,-7.1 -0.1,-14.3 -0.2,-21.4c0,-1.3 -0.3,-1.7 -1.6,-1.7c-0.6,0 -1.1,0.1 -1.6,0.6c-1,1.1 -2.2,2 -3.4,3c0,0 0.1,0.1 0.1,0.2c0.4,0 0.9,-0.1 1.3,0c0.9,0.1 1.7,0.5 1.8,1.5zM342.8,210.5c0.6,-0.5 1.3,-1.2 0.9,-2.1c-1.1,0.9 -2.2,1.9 -3.4,2.8c-0.7,0.5 -0.7,1 -0.7,1.8c1.1,-0.8 2.2,-1.6 3.2,-2.5zM357.7,210.1c-4.6,-0.2 -9,-0.4 -13.4,-0.6c-0.6,2.1 -2.8,2.7 -4,4.2c1.1,0.1 2.1,0.3 3.1,0.3c3.8,0.1 7.6,0.3 11.4,0.4c0.2,0 0.6,-0.3 0.7,-0.5c0.6,-0.9 1.1,-1.9 1.7,-2.9c0.2,-0.3 0.3,-0.6 0.5,-0.9z" fill="#53ad4e"/><path d="M343.5,164.9c-1.2,0.9 -2.2,2 -3.3,2.9c-0.1,-0.4 0,-0.8 0.5,-1.3c1.1,-1.1 2.1,-2.3 3.1,-3.5c0,0 0.1,-0.1 0.3,-0.2c0.1,0.8 0.1,1.5 -0.6,2.1z" fill="#ffffff"/><path d="M342.8,210.5c-1,0.9 -2.1,1.6 -3.2,2.5c0,-0.8 0,-1.3 0.7,-1.8c1.2,-0.9 2.3,-1.9 3.4,-2.8c0.4,0.9 -0.3,1.6 -0.9,2.1z" fill="#ffffff"/><path d="M357.7,210c-0.2,0.4 -0.3,0.7 -0.5,1c-0.6,1 -1.1,2 -1.7,2.9c-0.1,0.2 -0.5,0.5 -0.7,0.5c-3.8,-0.1 -7.6,-0.3 -11.4,-0.4c-1,0 -2,-0.2 -3.1,-0.3c1.2,-1.5 3.4,-2.1 4,-4.2c4.5,0.1 8.9,0.3 13.4,0.5z" fill="#ffffff"/><path d="M348,204.6c-0.2,0.8 -0.6,1.6 -1.1,2.2c-0.7,0.8 -1.8,0.6 -2.8,0.7c0.1,-1 0.2,-1.9 0.2,-2.8c0,-3.4 -0.1,-6.8 -0.2,-10.2c0,-4 -0.1,-7.9 -0.1,-11.8c0,-3.5 0.2,-7 0.2,-10.6c0,-0.8 0.1,-1.6 0,-2.4c-0.1,-1 -0.9,-1.4 -1.9,-1.5c-0.4,-0.1 -0.9,0 -1.3,0c0.1,-0.1 0,-0.2 0,-0.2c1.2,-1 2.4,-1.9 3.4,-3c0.5,-0.5 1,-0.6 1.6,-0.6c1.3,0 1.6,0.4 1.6,1.7c0.1,7.1 0.1,14.3 0.2,21.4c0.1,4.6 0.3,9.3 0.4,13.9c0,1.1 0,2.1 -0.2,3.2z" fill="#ffffff"/><path d="M408.12818,160.38488c0,0.22713 -0.30982,0.45426 -0.46473,0.45426c-0.38727,0.11357 -0.852,0.11357 -1.31672,0.22713c-0.69709,0.11357 -0.92945,0.45426 -1.0069,1.47636c-0.07745,1.58992 0,3.06628 0.15491,4.54264c0.46473,3.86124 0.46473,7.72248 0.23236,11.58372c-0.38727,6.58682 -0.30982,13.28721 -0.15491,19.9876c0.07745,3.74767 0.15491,7.49535 0.23236,11.24302c0,1.93062 -0.69709,3.52054 -1.39418,5.11047c-0.38727,0.90853 -0.69709,1.13566 -1.39418,1.13566c-0.69709,0 -1.08436,-0.45426 -1.47163,-1.13566c-2.24617,-3.63411 -4.80216,-6.58682 -7.35815,-9.6531c-4.02762,-4.88333 -7.66797,-10.3345 -10.92104,-16.23992c-1.16181,-2.04419 -2.55599,-3.86124 -3.87271,-5.79186c-0.15491,0 -0.23236,0 -0.30982,0.11357c0,1.13566 0.07745,2.27132 0,3.40698c-0.38727,5.3376 0.30982,10.56163 0.23236,15.89922c0,1.70349 -0.23236,3.40698 -0.07745,5.11047c0.07745,0.79496 0.30982,1.24922 0.852,1.36279c0.38727,0.11357 0.852,0.22713 1.31672,0.22713c0.30982,0 0.46473,0.22713 0.46473,0.79496c0.07745,0.90853 -0.15491,1.70349 -0.54218,2.38488c-0.46473,0.79496 -0.77454,1.70349 -1.16181,2.61202c-0.23236,0.56783 -0.54218,1.02209 -1.0069,1.02209c-2.09126,0.11357 -4.25998,0.22713 -6.35124,0.3407c-0.852,0 -1.70399,-0.11357 -2.55599,-0.11357c-0.54218,0 -0.77454,-0.3407 -0.77454,-1.13566c0,-0.79496 0.15491,-1.58992 0.61963,-2.15775c0.77454,-1.02209 1.54908,-2.15775 2.16872,-3.17984c0.15491,-0.22713 0.30982,-0.6814 0.30982,-1.02209c0.07745,-0.6814 -0.07745,-1.36279 -0.07745,-2.04419c0,-0.45426 0.07745,-1.02209 0.15491,-1.58992c0.07745,-0.3407 0.07745,-0.6814 0.07745,-1.02209c0.07745,-5.22403 0.15491,-10.56163 0.15491,-15.78566c0,-4.6562 0,-9.3124 0,-13.85504c0,-1.47636 -0.07745,-2.95271 -0.15491,-4.3155c-0.07745,-1.93062 -0.92945,-3.17984 -2.24617,-3.52054c-1.0069,-0.22713 -2.09126,-0.3407 -3.17562,-0.56783c-0.07745,0 -0.30982,-0.3407 -0.30982,-0.45426c0,-0.6814 0,-1.24922 0.07745,-1.93062c0,-0.11357 0.07745,-0.3407 0.07745,-0.3407c1.0069,-1.58992 1.93636,-3.17984 2.86581,-4.6562c0.07745,-0.22713 0.07745,-0.45426 0.15491,-0.90853c1.16181,0.11357 2.32363,0.11357 3.48544,0.45426c1.78145,0.22713 3.40798,1.13566 4.95707,2.49845c0.23236,0.11357 0.38727,0.3407 0.54218,0.56783c1.31672,2.04419 2.55599,3.97481 3.87271,6.01899c0.77454,1.36279 1.54908,2.61202 2.40108,3.86124c1.39418,1.93062 2.86581,3.86124 4.25998,5.90543c1.47163,2.15775 2.78835,4.3155 4.18253,6.47326c1.47163,2.27132 2.94326,4.42907 4.41489,6.58682c0.46473,0.79496 1.0069,1.58992 1.62654,2.49845c0.07745,-1.58992 0.15491,-2.95271 0.15491,-4.3155c0.07745,-4.20194 0.23236,-8.51744 0.15491,-12.71938c0,-2.83915 -0.30982,-5.79186 -0.46473,-8.63101c-0.07745,-1.02209 -0.46473,-1.70349 -1.16181,-1.81705c-0.69709,-0.22713 -1.31672,-0.22713 -2.01381,-0.22713c-0.38727,0 -0.54218,-0.11357 -0.61963,-0.6814c0,-0.11357 0,-0.11357 0,-0.11357c-0.07745,-0.6814 -0.38727,-1.58992 -0.23236,-2.04419c0.30982,-0.79496 0.852,-1.47636 1.39418,-2.15775c0.38727,-0.56783 0.77454,-1.02209 1.23927,-1.36279c0.30982,-0.22713 0.69709,-0.45426 1.0069,-0.45426c1.16181,0 2.24617,0 3.33053,0c1.54908,-0.11357 3.17562,-0.22713 4.72471,-0.22713c0.15491,0 0.30982,0 0.46473,0c0.15491,0 0.30982,0.11357 0.30982,0.11357c0,0.6814 0.07745,1.36279 -0.07745,2.15775zM398.83368,158.79496c-0.77454,1.13566 -1.47163,2.15775 -2.24617,3.17984c-0.46473,0.6814 -0.46473,1.24922 -0.15491,2.04419c1.16181,-1.36279 2.86581,-2.04419 2.40108,-5.22403zM400.22785,167.76667c0.30982,3.86124 0.54218,7.72248 0.38727,11.58372c-0.15491,3.97481 -0.07745,8.06318 -0.15491,12.15155c-0.07745,1.13566 -0.07745,2.27132 0.61963,3.06628c0.23236,0.11357 0.23236,0.56783 0.38727,0.79496c0.23236,0.45426 0.54218,0.79496 0.77454,1.13566c0.07745,0 0.15491,-0.11357 0.23236,-0.11357v-1.13566c-0.07745,-5.56473 -0.15491,-11.24302 -0.15491,-16.92132c0,-1.58992 0,-3.29341 0,-4.9969c-0.07745,-3.17984 -0.61963,-6.35969 -0.38727,-9.6531c0.07745,-0.6814 -0.15491,-1.36279 -0.30982,-1.93062c-0.30982,-1.02209 -1.78145,-1.24922 -2.24617,-0.3407c-0.61963,1.13566 -1.23927,2.15775 -2.09126,2.61202c-0.07745,0 -0.07745,0.11357 -0.07745,0.22713c0.23236,0.11357 0.46473,0.11357 0.69709,0.11357c1.54908,0.22713 2.16872,1.13566 2.32363,3.40698zM367.61963,165.15465c0.92945,-1.36279 1.8589,-2.83915 2.7109,-4.3155c0.15491,-0.22713 0.15491,-0.79496 0.23236,-1.36279c-0.23236,0.11357 -0.30982,0.11357 -0.30982,0.22713c-0.852,1.47636 -1.78145,2.83915 -2.63344,4.20194c-0.15491,0.22713 -0.15491,0.6814 -0.23236,1.02209c0.07745,0 0.15491,0.11357 0.23236,0.22713zM373.4287,172.76357c0.07745,3.40698 0,6.92752 0,10.44806c-0.07745,2.15775 -0.15491,4.3155 -0.15491,6.58682c-0.07745,4.88333 -0.07745,9.88023 -0.07745,14.76357c0,0.45426 0,1.02209 -0.07745,1.58992c-0.07745,1.13566 -0.15491,2.38488 -0.15491,3.52054c0.46473,0 0.852,0 1.23927,-0.11357c1.31672,-0.22713 1.39418,-0.3407 1.54908,-2.27132c0.15491,-1.93062 0.15491,-3.74767 0.15491,-5.56473c0,-2.04419 -0.23236,-4.08837 -0.23236,-6.13256c0,-5.22403 0.07745,-10.3345 0.15491,-15.55853c0,-1.70349 0,-3.29341 -0.07745,-4.88333c0,-2.49845 -0.15491,-4.88333 -0.15491,-7.38178c0,-2.61202 -0.38727,-4.9969 -2.09126,-6.24612c-0.61963,-0.56783 -1.47163,-0.6814 -2.24617,-0.79496c-0.23236,0 -0.46473,0.79496 -0.77454,1.24922c-0.77454,1.24922 -1.62654,2.38488 -2.40108,3.63411c0.46473,0 0.92945,0 1.47163,0.11357c1.31672,0.22713 2.7109,0.56783 3.25308,2.61202c0.38727,1.36279 0.54218,2.83915 0.61963,4.42907zM372.03452,213.64729c0.77454,-0.90853 1.23927,-1.93062 0.77454,-3.40698c-0.77454,1.24922 -1.54908,2.61202 -2.40108,3.86124c-0.30982,0.45426 -0.38727,1.02209 -0.30982,1.70349c0.69709,-0.79496 1.31672,-1.47636 1.93636,-2.15775zM373.66106,211.71667c-0.54218,1.93062 -1.47163,3.06628 -2.63344,3.86124c0.15491,0.11357 0.23236,0.11357 0.38727,0.11357c2.55599,-0.11357 5.11198,-0.22713 7.59051,-0.3407c0.23236,0 0.46473,-0.22713 0.61963,-0.45426c0.38727,-0.90853 0.77454,-1.81705 1.16181,-2.83915c-2.40108,-0.11357 -4.80216,-0.22713 -7.12579,-0.3407zM402.47403,215.12364c0.23236,-0.45426 0.46473,-0.79496 0.61963,-1.13566c0.30982,-0.6814 0.61963,-1.47636 0.852,-2.15775c0.07745,-0.11357 0,-0.56783 -0.07745,-0.6814c-0.77454,-1.13566 -1.62654,-2.38488 -2.47853,-3.52054c-1.31672,-1.70349 -2.63344,-3.52054 -3.87271,-5.3376c-0.54218,-0.90853 -0.92945,-1.93062 -1.47163,-2.83915c-1.0069,-1.58992 -2.09126,-3.17984 -3.09817,-4.88333c-1.0069,-1.47636 -1.8589,-3.17984 -2.86581,-4.76977c-1.78145,-2.95271 -3.64035,-5.79186 -5.42179,-8.63101c-0.38727,-0.6814 -0.852,-1.24922 -1.31672,-1.93062c-0.69709,-1.02209 -1.47163,-1.93062 -2.16872,-2.95271c-0.61963,-1.02209 -1.23927,-2.04419 -1.93636,-3.17984c-0.07745,0.3407 -0.15491,0.56783 -0.15491,0.79496c-0.07745,1.93062 0,3.97481 -0.07745,6.01899c-0.07745,1.58992 0.54218,2.61202 1.23927,3.63411c1.23927,1.70349 2.55599,3.17984 3.56289,5.11047c3.33053,6.01899 7.12579,11.58372 11.23086,16.69419c2.40108,2.95271 4.95707,5.56473 6.89342,9.19884c0.15491,0.22713 0.38727,0.3407 0.54218,0.56783zM405.03001,212.2845c0,-0.11357 -0.07745,-0.11357 -0.15491,-0.22713c-0.77454,0.90853 -0.92945,2.61202 -1.93636,3.29341c0.07745,0 0.15491,0.11357 0.15491,0.22713c0.23236,0 0.54218,0 0.61963,-0.22713c0.46473,-1.02209 0.92945,-2.04419 1.31672,-3.06628z" fill="#53ad4e"/><path d="M396.4326,164.01899c-0.30982,-0.79496 -0.30982,-1.36279 0.15491,-2.04419c0.77454,-1.02209 1.47163,-2.04419 2.24617,-3.17984c0.46473,3.17984 -1.23927,3.86124 -2.40108,5.22403z" fill="#ffffff"/><path d="M370.64035,157.47636c-0.07745,0.56783 -0.07745,1.13566 -0.23236,1.36279c-0.92945,1.47636 -1.8589,2.95271 -2.78835,4.3155c-0.07745,-0.11357 -0.15491,-0.22713 -0.23236,-0.22713c0.07745,-0.3407 0.07745,-0.79496 0.23236,-1.02209c0.852,-1.36279 1.78145,-2.72558 2.63344,-4.20194c0.07745,0 0.15491,0 0.38727,-0.22713z" fill="#ffffff"/><path d="M372.03452,211.53372c-0.61963,0.79496 -1.31672,1.47636 -2.01381,2.27132c-0.07745,-0.6814 0,-1.24922 0.30982,-1.70349c0.852,-1.24922 1.62654,-2.61202 2.40108,-3.86124c0.54218,1.36279 0.07745,2.49845 -0.69709,3.29341z" fill="#ffffff"/><path d="M380.78685,210.05736c-0.38727,1.02209 -0.77454,1.93062 -1.16181,2.83915c-0.15491,0.22713 -0.38727,0.45426 -0.61963,0.45426c-2.47853,0.11357 -5.03452,0.22713 -7.59051,0.3407c-0.15491,0 -0.23236,0 -0.38727,-0.11357c1.16181,-0.79496 2.09126,-1.93062 2.63344,-3.86124c2.32363,0.11357 4.72471,0.22713 7.12579,0.3407z" fill="#ffffff"/><path d="M405.03001,212.2845c-0.46473,1.02209 -0.852,2.04419 -1.39418,3.06628c-0.07745,0.22713 -0.38727,0.22713 -0.61963,0.22713c0,-0.11357 -0.07745,-0.22713 -0.15491,-0.22713c1.0069,-0.6814 1.16181,-2.38488 1.93636,-3.29341c0.15491,0 0.23236,0.11357 0.23236,0.22713z" fill="#ffffff"/><path d="M402.39657,195.24961v1.13566c-0.07745,0 -0.15491,0.11357 -0.23236,0.11357c-0.23236,-0.3407 -0.54218,-0.6814 -0.77454,-1.13566c-0.15491,-0.22713 -0.15491,-0.6814 -0.38727,-0.79496c-0.69709,-0.79496 -0.69709,-1.93062 -0.61963,-3.06628c0.07745,-4.08837 0,-8.17674 0.15491,-12.15155c0.15491,-3.86124 -0.07745,-7.72248 -0.38727,-11.58372c-0.15491,-2.38488 -0.77454,-3.17984 -2.40108,-3.40698c-0.23236,0 -0.46473,0 -0.69709,-0.11357c0,-0.11357 0,-0.22713 0.07745,-0.22713c1.0069,-0.45426 1.62654,-1.47636 2.24617,-2.61202c0.46473,-0.90853 1.93636,-0.6814 2.24617,0.3407c0.15491,0.56783 0.38727,1.24922 0.30982,1.93062c-0.23236,3.29341 0.30982,6.47326 0.38727,9.6531c0,1.70349 0,3.40698 0,4.9969c0,5.67829 0.07745,11.24302 0.07745,16.92132z" fill="#ffffff"/><path d="M403.94566,211.9438c-0.23236,0.6814 -0.54218,1.47636 -0.852,2.15775c-0.15491,0.3407 -0.38727,0.6814 -0.61963,1.13566c-0.15491,-0.22713 -0.38727,-0.3407 -0.54218,-0.56783c-1.93636,-3.63411 -4.49234,-6.24612 -6.89342,-9.19884c-4.10507,-5.22403 -7.90033,-10.78876 -11.23086,-16.80775c-1.0069,-1.93062 -2.32363,-3.40698 -3.56289,-5.11047c-0.69709,-1.02209 -1.31672,-2.04419 -1.23927,-3.63411c0.07745,-2.04419 0,-4.08837 0.07745,-6.01899c0,-0.22713 0.07745,-0.45426 0.15491,-0.79496c0.69709,1.13566 1.31672,2.15775 1.93636,3.17984c0.69709,1.02209 1.47163,1.93062 2.16872,2.95271c0.46473,0.6814 0.92945,1.24922 1.31672,1.93062c1.78145,2.83915 3.64035,5.67829 5.42179,8.63101c1.0069,1.58992 1.8589,3.29341 2.86581,4.76977c1.0069,1.70349 2.09126,3.29341 3.09817,4.88333c0.54218,0.90853 0.92945,1.93062 1.47163,2.83915c1.23927,1.81705 2.55599,3.63411 3.87271,5.3376c0.852,1.13566 1.70399,2.38488 2.47853,3.52054c0.15491,0.22713 0.15491,0.56783 0.07745,0.79496z" fill="#ffffff"/><path d="M375.82978,205.17403c-0.15491,1.93062 -0.23236,2.04419 -1.54908,2.27132c-0.38727,0.11357 -0.77454,0.11357 -1.23927,0.11357c0,-1.13566 0.07745,-2.38488 0.15491,-3.52054c0,-0.45426 0,-1.02209 0,-1.47636c0,-4.88333 0,-9.88023 0.07745,-14.76357c0,-2.27132 0.07745,-4.42907 0.15491,-6.58682c0,-3.52054 0.07745,-7.04109 0,-10.44806c0,-1.47636 -0.15491,-2.95271 -0.54218,-4.3155c-0.61963,-2.15775 -2.01381,-2.49845 -3.33053,-2.72558c-0.54218,-0.11357 -1.0069,-0.11357 -1.47163,-0.11357c0.77454,-1.24922 1.62654,-2.38488 2.40108,-3.63411c0.30982,-0.45426 0.54218,-1.24922 0.77454,-1.24922c0.77454,0.11357 1.62654,0.22713 2.24617,0.79496c1.70399,1.24922 2.09126,3.63411 2.09126,6.24612c0,2.49845 0.15491,4.88333 0.15491,7.38178c0.07745,1.58992 0.07745,3.17984 0.07745,4.88333c-0.07745,5.22403 -0.15491,10.3345 -0.15491,15.55853c0,2.04419 0.23236,4.08837 0.23236,6.13256c0.07745,1.70349 0.07745,3.63411 -0.07745,5.45116z" fill="#ffffff"/><path d="M451.71276,187.74103c-0.08291,0.83552 -0.24872,1.1936 -0.82905,1.1936c-1.82392,-0.11936 -2.48716,1.7904 -2.48716,3.5808c-0.08291,1.90976 0.08291,3.81952 0.16581,5.72927c0.08291,2.14848 0.08291,4.1776 0,6.32607c0,0.83552 -0.41453,1.90976 -0.82905,2.50656c-2.73588,3.81952 -5.38885,7.75839 -9.11959,9.31007c-2.48716,1.07424 -5.14013,1.67104 -7.7931,1.07424c-1.24358,-0.23872 -2.65297,-0.47744 -3.89655,-0.95488c-0.99486,-0.47744 -1.82392,-1.1936 -2.73588,-1.7904c-0.24872,-0.23872 -0.58034,-0.47744 -0.82905,-0.5968c-1.90682,-0.83552 -3.23331,-2.74528 -4.39398,-5.01311c-1.65811,-3.22272 -3.31621,-6.44543 -4.22817,-10.26495c-0.99486,-4.29696 -1.90682,-8.59391 -1.74101,-14.32319c0,-2.50656 0.41453,-5.96799 1.65811,-9.19071c1.16067,-3.22272 2.57007,-6.44543 4.72561,-8.71327c1.98973,-2.26784 4.14527,-4.41632 6.38371,-6.32607c1.98973,-2.02912 4.31108,-2.86464 6.63243,-3.46144c1.24358,-0.35808 2.48716,-0.83552 3.73074,-0.71616c1.4923,0 3.0675,0.47744 4.55979,0.95488c0.91196,0.23872 1.65811,0.35808 2.48716,-0.35808c1.07777,-0.95488 2.23844,-0.5968 3.39912,-0.5968c0.08291,0 0.33162,0.35808 0.33162,0.5968c0.08291,3.81952 0.08291,7.63903 0.16581,11.33919c0,0.95488 -0.24872,1.67104 -0.74615,2.26784c-0.66324,0.83552 -1.16067,1.7904 -1.82392,2.62592c-0.16581,0.23872 -0.41453,0.47744 -0.66324,0.47744c-0.82905,0.11936 -1.65811,0.11936 -2.48716,0.11936c-0.24872,0 -0.58034,-0.23872 -0.66324,-0.47744c-0.49743,-1.31296 -0.82905,-2.62592 -1.40939,-3.81952c-2.07263,-4.53568 -5.88628,-5.72927 -9.11959,-4.1776c-2.23844,0.95488 -3.64784,3.34208 -5.05723,5.72927c-1.65811,2.86464 -1.98973,6.44543 -2.32135,9.90687c-0.33162,3.93888 -0.24872,7.99711 0.58034,11.81663c0.66324,2.86464 1.24358,5.72927 2.32135,8.11647c1.5752,3.70016 3.64784,6.80351 6.79824,7.75839c2.48716,0.71616 4.89142,-0.23872 7.04696,-1.90976c0.91196,-0.71616 1.40939,-2.02912 1.40939,-3.46144c0,-2.3872 -0.08291,-4.65504 -0.24872,-7.04223c-0.08291,-1.07424 -0.66324,-1.55168 -1.4923,-1.55168c-0.91196,0.11936 -1.90682,0.11936 -2.81878,0.23872c-0.49743,0 -0.82905,-0.11936 -0.82905,-0.95488c0,-0.11936 0,-0.23872 0,-0.23872c-0.66324,-1.67104 0,-2.74528 0.82905,-3.81952c0.74615,-0.95488 1.5752,-1.90976 2.23844,-2.984c0.66324,-0.95488 1.5752,-0.83552 2.32135,-0.83552c3.1504,-0.23872 6.30081,-0.35808 9.45121,-0.47744c1.40939,0 1.4923,0.23872 1.32649,2.3872zM443.25641,170.19513c-0.41453,0.83552 -1.07777,1.55168 -1.65811,2.26784l0.08291,0.23872c0.74615,-0.11936 1.65811,0.11936 2.23844,-0.35808c0.82905,-0.71616 1.4923,-2.02912 2.23844,-3.10336c-0.16581,-0.11936 -0.24872,-0.23872 -0.33162,-0.23872c-0.91196,-0.11936 -1.82392,-0.35808 -2.57007,1.1936zM442.34445,157.66235c0.58034,0.35808 0.91196,0.5968 1.4923,0.95488c-0.08291,-0.5968 -0.08291,-0.95488 -0.16581,-1.43232c-0.41453,0.23872 -0.74615,0.35808 -1.32649,0.47744zM428.41635,164.82394c5.72047,-2.984 9.86574,-0.5968 12.60161,7.16159c0.99486,-1.31296 1.98973,-2.3872 2.90169,-3.5808c0.16581,-0.11936 0.24872,-0.47744 0.24872,-0.71616c-0.41453,-2.86464 -1.40939,-5.01311 -3.31621,-6.08735c-2.65297,-1.43232 -5.30594,-1.7904 -8.04182,-0.5968c-1.65811,0.71616 -3.1504,1.90976 -4.39398,3.81952zM438.365,208.15157c0,0 0.08291,0.11936 0.08291,0.23872c0.91196,-0.47744 1.82392,-0.95488 2.65297,-1.55168c0.99486,-0.71616 1.4923,-2.14848 1.4923,-3.70016c0.08291,-3.70016 0.16581,-7.51967 0.16581,-11.21983c0.08291,-1.90976 -1.74101,-3.46144 -2.81878,-2.3872c-1.16067,1.1936 -2.15554,2.62592 -3.23331,4.05824c0,0.11936 0.08291,0.11936 0.08291,0.23872c0.66324,-0.11936 1.40939,-0.23872 2.07263,-0.35808c1.40939,-0.23872 1.98973,0.35808 2.32135,2.3872c0.33162,2.3872 0.33162,4.65504 0.16581,7.04223c-0.08291,2.02912 -0.66324,3.46144 -1.90682,4.41632c-0.33162,0.23872 -0.66324,0.47744 -1.07777,0.83552zM443.50513,211.37429c-1.07777,0.35808 -2.15554,0.95488 -3.23331,1.31296c-2.57007,0.95488 -5.22304,1.1936 -7.87601,0.5968c-3.73074,-0.95488 -6.88114,-3.81952 -9.61702,-7.28095c-2.32135,-2.86464 -4.06236,-6.56479 -5.05723,-10.98111c-1.07777,-4.65504 -1.5752,-9.42943 -1.40939,-14.32319c0.08291,-2.02912 0.49743,-4.1776 0.99486,-6.20671c0.74615,-2.86464 1.65811,-5.60991 3.0675,-8.11647c-0.99486,1.07424 -1.90682,2.14848 -2.65297,3.46144c-1.24358,2.14848 -2.15554,4.53568 -2.98459,7.16159c-0.33162,0.95488 -0.58034,2.02912 -0.74615,3.10336c-0.49743,3.10336 -0.58034,6.32607 -0.24872,9.54879c0.33162,3.70016 0.91196,7.28095 1.98973,10.74239c1.07777,3.22272 2.57007,6.08735 4.06236,8.83263c0.66324,1.1936 1.5752,2.26784 2.48716,3.10336c1.07777,1.07424 2.23844,1.7904 3.39912,2.50656c2.15554,1.1936 4.39398,1.7904 6.63243,2.02912c2.07263,0.11936 4.06236,-0.35808 6.05209,-1.1936c1.98973,-0.71616 3.64784,-2.62592 5.14013,-4.29696z" fill="#53ad4e"/><path d="M443.83675,158.61723c-0.58034,-0.35808 -0.91196,-0.5968 -1.4923,-0.95488c0.58034,-0.11936 0.91196,-0.23872 1.32649,-0.47744c0.08291,0.47744 0.16581,0.83552 0.16581,1.43232z" fill="#ffffff"/><path d="M446.1581,169.24025c-0.74615,1.07424 -1.40939,2.3872 -2.23844,3.10336c-0.58034,0.47744 -1.4923,0.23872 -2.23844,0.35808l-0.08291,-0.23872c0.58034,-0.71616 1.24358,-1.43232 1.65811,-2.26784c0.66324,-1.43232 1.5752,-1.31296 2.57007,-1.07424c0.08291,-0.11936 0.16581,0 0.33162,0.11936z" fill="#ffffff"/><path d="M444.16837,167.68858c0,0.23872 -0.08291,0.5968 -0.24872,0.71616c-0.91196,1.1936 -1.90682,2.26784 -2.90169,3.5808c-2.73588,-7.75839 -6.88114,-10.14559 -12.60161,-7.16159c1.24358,-1.90976 2.73588,-3.10336 4.47689,-3.81952c2.73588,-1.1936 5.38885,-0.83552 8.04182,0.5968c1.82392,1.07424 2.90169,3.22272 3.23331,6.08735z" fill="#ffffff"/><path d="M442.75898,191.91863c0,3.70016 -0.08291,7.51967 -0.16581,11.21983c0,1.55168 -0.49743,2.984 -1.4923,3.70016c-0.82905,0.5968 -1.74101,1.07424 -2.65297,1.55168c0,-0.11936 -0.08291,-0.23872 -0.08291,-0.23872c0.33162,-0.23872 0.66324,-0.47744 0.99486,-0.71616c1.24358,-0.95488 1.82392,-2.3872 1.90682,-4.41632c0.16581,-2.3872 0.16581,-4.65504 -0.16581,-7.04223c-0.33162,-2.02912 -0.91196,-2.62592 -2.32135,-2.3872c-0.66324,0.11936 -1.40939,0.23872 -2.07263,0.35808c0,-0.11936 -0.08291,-0.11936 -0.08291,-0.23872c1.07777,-1.43232 2.07263,-2.86464 3.23331,-4.05824c1.16067,-1.1936 2.90169,0.35808 2.90169,2.26784z" fill="#ffffff"/><path d="M443.58803,211.25493c-1.65811,1.7904 -3.23331,3.70016 -5.30594,4.41632c-1.98973,0.83552 -3.97946,1.31296 -6.05209,1.1936c-2.23844,-0.23872 -4.47689,-0.83552 -6.63243,-2.02912c-1.16067,-0.71616 -2.32135,-1.43232 -3.39912,-2.50656c-0.91196,-0.83552 -1.82392,-1.90976 -2.48716,-3.10336c-1.4923,-2.74528 -2.98459,-5.60991 -4.06236,-8.83263c-1.07777,-3.46144 -1.65811,-7.04223 -1.98973,-10.74239c-0.33162,-3.22272 -0.24872,-6.44543 0.24872,-9.54879c0.16581,-1.07424 0.41453,-2.14848 0.74615,-3.10336c0.82905,-2.62592 1.74101,-5.01311 2.98459,-7.16159c0.74615,-1.31296 1.65811,-2.3872 2.65297,-3.46144c-1.40939,2.50656 -2.32135,5.25183 -3.0675,8.11647c-0.41453,2.02912 -0.82905,4.1776 -0.91196,6.20671c-0.16581,4.89375 0.33162,9.66815 1.40939,14.32319c0.99486,4.41632 2.73588,8.11647 5.05723,10.98111c2.73588,3.46144 5.88628,6.32607 9.61702,7.28095c2.65297,0.5968 5.30594,0.35808 7.87601,-0.5968c1.16067,-0.47744 2.23844,-0.95488 3.31621,-1.43232z" fill="#ffffff"/></g></g></svg>';







class $46d3480c6a43a723$export$8bb8475f9426623c {
    static get BACKGROUND_LAYER() {
        return 'background';
    }
    static get VIDEO_LAYER() {
        return 'video';
    }
    static get PEN_LAYER() {
        return 'pen';
    }
    static get SPRITE_LAYER() {
        return 'sprite';
    }
    static get TEXT_LAYER() {
        return 'text';
    }
    static get MONITOR_LAYER() {
        return 'monitor';
    }
    // Order of layer groups relative to each other,
    static get LAYER_GROUPS() {
        return [
            $46d3480c6a43a723$export$8bb8475f9426623c.BACKGROUND_LAYER,
            $46d3480c6a43a723$export$8bb8475f9426623c.VIDEO_LAYER,
            $46d3480c6a43a723$export$8bb8475f9426623c.PEN_LAYER,
            $46d3480c6a43a723$export$8bb8475f9426623c.SPRITE_LAYER,
            $46d3480c6a43a723$export$8bb8475f9426623c.TEXT_LAYER,
            $46d3480c6a43a723$export$8bb8475f9426623c.MONITOR_LAYER
        ];
    }
}


class $e358fae1ef53461c$export$160ae30d75f98247 {
    static get WHRate() {
        return 0.75;
    }
    static get W() {
        //const Scratch3StageWidth = 240;
        const WHRate = $e358fae1ef53461c$export$160ae30d75f98247.WHRate; // ( 3/4 )
        const InnerWidthRate = 0.95; // 0.95; //0.8;
        const InnerHeightRate = 0.95;
        let w = innerWidth / devicePixelRatio * InnerWidthRate;
        let h = w * WHRate;
        const hLimit = innerHeight / devicePixelRatio * InnerHeightRate;
        if (h > hLimit) {
            h = hLimit;
            w = h / WHRate;
        }
        return w;
    }
    static get H() {
        return $e358fae1ef53461c$export$160ae30d75f98247.W * $e358fae1ef53461c$export$160ae30d75f98247.WHRate;
    }
    constructor(layerGroups = (0, $46d3480c6a43a723$export$8bb8475f9426623c).LAYER_GROUPS){
        console.log((0, $bmdED$ScratchRender));
        this.layerGroups = layerGroups;
        this.stageWidth = 0;
        this.stageHeight = 0;
        this._renderer = null;
        this.canvas = null;
        this.createRenderer();
        const me = this;
        const resizeWindow = function() {
            const main = (0, $a6b849a6af88d987$export$80606ec500c7d132).main;
            (0, $38ab8126b0ae38e9$export$db77ccec0bb4ccac).mainPositioning(main);
            me.stageResize();
        };
        window.addEventListener('resize', resizeWindow);
    }
    stageResize(w = $e358fae1ef53461c$export$160ae30d75f98247.W, h = $e358fae1ef53461c$export$160ae30d75f98247.H) {
        if (this._renderer) {
            this._renderer.resize(w, h); // stage(canvas)のサイズ property(width,height)の値をリサイズ
            const _nativeSize = this._renderer.getNativeSize();
            this.stageWidth = _nativeSize[0];
            this.stageHeight = _nativeSize[1];
            (0, $57ac7e9ecbc5361f$export$8d01c972ee8b14a9).resize2DContext(w, h);
            $e358fae1ef53461c$export$160ae30d75f98247.monitorCanvasResize(w, h);
        }
    }
    static monitorCanvasResize(w = $e358fae1ef53461c$export$160ae30d75f98247.W, h = $e358fae1ef53461c$export$160ae30d75f98247.H) {
        (0, $57ac7e9ecbc5361f$export$8d01c972ee8b14a9).resizeMonitorCanvas(w, h);
    }
    createRenderer(w = $e358fae1ef53461c$export$160ae30d75f98247.W, h = $e358fae1ef53461c$export$160ae30d75f98247.H) {
        this.canvas = (0, $38ab8126b0ae38e9$export$db77ccec0bb4ccac).canvas;
        this._renderer = new (0, $bmdED$ScratchRender)(this.canvas);
        if (this._renderer) {
            this._renderer.setLayerGroupOrdering(this.layerGroups);
            this.stageResize(w, h);
        }
    }
    createDrawable(layer) {
        if (this._renderer) {
            const drawableID = this._renderer.createDrawable(layer);
            return drawableID;
        }
        throw `'createDrawable' failed, renderer is null `;
    }
    get renderer() {
        if (this._renderer == undefined) throw 'Not found renderer error';
        return this._renderer;
    }
}



class $c5ecd67af5c3257f$export$892596cec99bc70e {
    /**
     * @typedef {object} RGBObject - An object representing a color in RGB format.
     * @property {number} r - the red component, in the range [0, 255].
     * @property {number} g - the green component, in the range [0, 255].
     * @property {number} b - the blue component, in the range [0, 255].
     */ /**
     * @typedef {object} HSVObject - An object representing a color in HSV format.
     * @property {number} h - hue, in the range [0-359).
     * @property {number} s - saturation, in the range [0,1].
     * @property {number} v - value, in the range [0,1].
     */ /** @type {RGBObject} */ static get RGB_BLACK() {
        return {
            r: 0,
            g: 0,
            b: 0
        };
    }
    /** @type {RGBObject} */ static get RGB_WHITE() {
        return {
            r: 255,
            g: 255,
            b: 255
        };
    }
    /**
     * Convert a Scratch decimal color to a hex string, #RRGGBB.
     * @param {number} decimal RGB color as a decimal.
     * @return {string} RGB color as #RRGGBB hex string.
     */ static decimalToHex(decimal) {
        if (decimal < 0) decimal += 16777216;
        let hex = Number(decimal).toString(16);
        hex = `#${'000000'.substr(0, 6 - hex.length)}${hex}`;
        return hex;
    }
    /**
     * Convert a Scratch decimal color to an RGB color object.
     * @param {number} decimal RGB color as decimal.
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */ static decimalToRgb(decimal) {
        const a = decimal >> 24 & 0xFF;
        const r = decimal >> 16 & 0xFF;
        const g = decimal >> 8 & 0xFF;
        const b = decimal & 0xFF;
        return {
            r: r,
            g: g,
            b: b,
            a: a > 0 ? a : 255
        };
    }
    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
     * CC-BY-SA Tim Down:
     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {!string} hex Hex representation of the color.
     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */ static hexToRgb(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b)=>r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {
            r: 0,
            g: 0,
            b: 0
        };
    }
    /**
     * Convert an RGB color object to a hex color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */ static rgbToHex(rgb) {
        return $c5ecd67af5c3257f$export$892596cec99bc70e.decimalToHex($c5ecd67af5c3257f$export$892596cec99bc70e.rgbToDecimal(rgb));
    }
    /**
     * Convert an RGB color object to a Scratch decimal color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!number} Number representing the color.
     */ static rgbToDecimal(rgb) {
        return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
    }
    /**
    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
    * @param {!string} hex Hex representation of the color.
    * @return {!number} Number representing the color.
    */ static hexToDecimal(hex) {
        return $c5ecd67af5c3257f$export$892596cec99bc70e.rgbToDecimal($c5ecd67af5c3257f$export$892596cec99bc70e.hexToRgb(hex));
    }
    /**
     * Convert an HSV color to RGB format.
     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */ static hsvToRgb(hsv) {
        let h = hsv.h % 360;
        if (h < 0) h += 360;
        const s = Math.max(0, Math.min(hsv.s, 1));
        const v = Math.max(0, Math.min(hsv.v, 1));
        const i = Math.floor(h / 60);
        const f = h / 60 - i;
        const p = v * (1 - s);
        const q = v * (1 - s * f);
        const t = v * (1 - s * (1 - f));
        let r;
        let g;
        let b;
        switch(i){
            default:
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            case 5:
                r = v;
                g = p;
                b = q;
                break;
        }
        return {
            r: Math.floor(r * 255),
            g: Math.floor(g * 255),
            b: Math.floor(b * 255)
        };
    }
    /**
     * Convert an RGB color to HSV format.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */ static rgbToHsv(rgb) {
        const r = rgb.r / 255;
        const g = rgb.g / 255;
        const b = rgb.b / 255;
        const x = Math.min(Math.min(r, g), b);
        const v = Math.max(Math.max(r, g), b);
        // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
        let h = 0;
        let s = 0;
        if (x !== v) {
            const f = r === x ? g - b : g === x ? b - r : r - g;
            const i = r === x ? 3 : g === x ? 5 : 1;
            h = (i - f / (v - x)) * 60 % 360;
            s = (v - x) / v;
        }
        return {
            h: h,
            s: s,
            v: v
        };
    }
    /**
     * Linear interpolation between rgb0 and rgb1.
     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
     * @return {RGBObject} the interpolated color.
     */ static mixRgb(rgb0, rgb1, fraction1) {
        if (fraction1 <= 0) return rgb0;
        if (fraction1 >= 1) return rgb1;
        const fraction0 = 1 - fraction1;
        return {
            r: fraction0 * rgb0.r + fraction1 * rgb1.r,
            g: fraction0 * rgb0.g + fraction1 * rgb1.g,
            b: fraction0 * rgb0.b + fraction1 * rgb1.b
        };
    }
}


class $0a339137bfce8c41$export$107ecfb3d1ccbd77 {
    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * @param {*} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */ static toNumber(value) {
        // If value is already a number we don't need to coerce it with
        // Number().
        if (typeof value === 'number') {
            // Scratch treats NaN as 0, when needed as a number.
            // E.g., 0 + NaN -> 0.
            if (Number.isNaN(value)) return 0;
            return value;
        }
        const n = Number(value);
        if (Number.isNaN(n)) // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        return 0;
        return n;
    }
    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {*} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */ static toBoolean(value) {
        // Already a boolean?
        if (typeof value === 'boolean') return value;
        if (typeof value === 'string') {
            // These specific strings are treated as false in Scratch.
            if (value === '' || value === '0' || value.toLowerCase() === 'false') return false;
            // All other strings treated as true.
            return true;
        }
        // Coerce other values and numbers.
        return Boolean(value);
    }
    /**
     * Scratch cast to string.
     * @param {*} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */ static toString(value) {
        return String(value);
    }
    /**
     * Convert an RGB color to HSV format. 
     * ref: scratch-vm, util/color.js
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */ static rgbToHsv(rgb) {
        const r = rgb.r / 255;
        const g = rgb.g / 255;
        const b = rgb.b / 255;
        const x = Math.min(Math.min(r, g), b);
        const v = Math.max(Math.max(r, g), b);
        // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
        let h = 0;
        let s = 0;
        if (x !== v) {
            const f = r === x ? g - b : g === x ? b - r : r - g;
            const i = r === x ? 3 : g === x ? 5 : 1;
            h = (i - f / (v - x)) * 60 % 360;
            s = (v - x) / v;
        }
        return {
            h: h,
            s: s,
            v: v
        };
    }
    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {*} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */ static toRgbColorList(value) {
        const color = $0a339137bfce8c41$export$107ecfb3d1ccbd77.toRgbColorObject(value);
        return [
            color.r,
            color.g,
            color.b
        ];
    }
    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */ static toRgbColorObject(value) {
        let color;
        if (typeof value === 'string' && value.substring(0, 1) === '#') {
            color = (0, $c5ecd67af5c3257f$export$892596cec99bc70e).hexToRgb(value);
            // If the color wasn't *actually* a hex color, cast to black
            if (!color) color = {
                r: 0,
                g: 0,
                b: 0,
                a: 255
            };
        } else color = (0, $c5ecd67af5c3257f$export$892596cec99bc70e).decimalToRgb($0a339137bfce8c41$export$107ecfb3d1ccbd77.toNumber(value));
        return color;
    }
    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */ static isWhiteSpace(val) {
        return val === null || typeof val === 'string' && val.trim().length === 0;
    }
    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */ static compare(v1, v2) {
        let n1 = Number(v1);
        let n2 = Number(v2);
        if (n1 === 0 && $0a339137bfce8c41$export$107ecfb3d1ccbd77.isWhiteSpace(v1)) n1 = NaN;
        else if (n2 === 0 && $0a339137bfce8c41$export$107ecfb3d1ccbd77.isWhiteSpace(v2)) n2 = NaN;
        if (isNaN(n1) || isNaN(n2)) {
            // At least one argument can't be converted to a number.
            // Scratch compares strings as case insensitive.
            const s1 = String(v1).toLowerCase();
            const s2 = String(v2).toLowerCase();
            if (s1 < s2) return -1;
            else if (s1 > s2) return 1;
            return 0;
        }
        // Handle the special case of Infinity
        if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) return 0;
        // Compare as numbers.
        return n1 - n2;
    }
    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */ static isInt(val) {
        // Values that are already numbers.
        if (typeof val === 'number') {
            if (isNaN(val)) return true;
            // True if it's "round" (e.g., 2.0 and 2).
            const _val = `${val}`;
            return val === parseInt(_val, 10);
        } else if (typeof val === 'boolean') // `True` and `false` always represent integer after Scratch cast.
        return true;
        else if (typeof val === 'string') // If it contains a decimal point, don't consider it an int.
        return val.indexOf('.') < 0;
        return false;
    }
    static get LIST_INVALID() {
        return 'INVALID';
    }
    static get LIST_ALL() {
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
     */ static toListIndex(index, length, acceptAll) {
        if (typeof index !== 'number') {
            if (index === 'all') return acceptAll ? $0a339137bfce8c41$export$107ecfb3d1ccbd77.LIST_ALL : $0a339137bfce8c41$export$107ecfb3d1ccbd77.LIST_INVALID;
            if (index === 'last') {
                if (length > 0) return length;
                return $0a339137bfce8c41$export$107ecfb3d1ccbd77.LIST_INVALID;
            } else if (index === 'random' || index === 'any') {
                if (length > 0) return 1 + Math.floor(Math.random() * length);
                return $0a339137bfce8c41$export$107ecfb3d1ccbd77.LIST_INVALID;
            }
        }
        index = Math.floor($0a339137bfce8c41$export$107ecfb3d1ccbd77.toNumber(index));
        if (index < 1 || index > length) return $0a339137bfce8c41$export$107ecfb3d1ccbd77.LIST_INVALID;
        return index;
    }
}


/**
 * Names used internally for keys used in scratch, also known as "scratch keys".
 * @enum {string}
 */ const $b9e618ce331e0b2f$var$KEY_NAME = {
    SPACE: 'Space',
    LEFT: 'LeftArrow',
    UP: 'UpArrow',
    RIGHT: 'RightArrow',
    DOWN: 'DownArrow',
    ENTER: 'Enter',
    ESCAPE: 'Escape'
};
/**
 * An array of the names of scratch keys.
 * @type {string[]}
 */ const $b9e618ce331e0b2f$var$KEY_NAME_LIST = Object.keys($b9e618ce331e0b2f$var$KEY_NAME).map((name)=>$b9e618ce331e0b2f$var$KEY_NAME[name]);
class $b9e618ce331e0b2f$export$16e4d70cc375e707 {
    /** スペースキー */ static get SPACE() {
        return $b9e618ce331e0b2f$var$KEY_NAME.SPACE;
    }
    /** 左矢印キー */ static get LEFT() {
        return $b9e618ce331e0b2f$var$KEY_NAME.LEFT;
    }
    /** 右矢印キー */ static get RIGHT() {
        return $b9e618ce331e0b2f$var$KEY_NAME.RIGHT;
    }
    /** 上向き矢印キー */ static get UP() {
        return $b9e618ce331e0b2f$var$KEY_NAME.UP;
    }
    /** 下向き矢印キー */ static get DOWN() {
        return $b9e618ce331e0b2f$var$KEY_NAME.DOWN;
    }
    /** エスケープキー */ static get ESCAPE() {
        return $b9e618ce331e0b2f$var$KEY_NAME.ESCAPE;
    }
    constructor(runtime){
        /**
         * List of currently pressed scratch keys.
         */ this._keysPressed = [];
        /**
         * Reference to the owning Runtime.
         */ this._runtime = runtime;
        const me = this;
        document.addEventListener('keydown', (e)=>{
            const data = {
                isDown: true,
                key: e.key
            };
            me.postData(data);
            if (me._spaceStopPropagation === true) {
                if (data.key == ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        });
        document.addEventListener('keyup', (e)=>{
            const data = {
                isDown: false,
                key: e.key
            };
            me.postData(data);
            if (me._spaceStopPropagation === true) {
                if (data.key == ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        });
        this._spaceStopPropagation = true;
    }
    /**
     * Convert from a keyboard event key name to a Scratch key name.
     * @param  {string} keyString the input key string.
     * @return {string} the corresponding Scratch key, or an empty string.
     */ _keyStringToScratchKey(keyString) {
        keyString = (0, $0a339137bfce8c41$export$107ecfb3d1ccbd77).toString(keyString);
        // Convert space and arrow keys to their Scratch key names.
        //console.log('keyString', keyString);
        switch(keyString){
            case ' ':
                return $b9e618ce331e0b2f$var$KEY_NAME.SPACE;
            case 'ArrowLeft':
                return $b9e618ce331e0b2f$var$KEY_NAME.LEFT;
            case 'Left':
                return $b9e618ce331e0b2f$var$KEY_NAME.LEFT;
            case 'ArrowUp':
                return $b9e618ce331e0b2f$var$KEY_NAME.UP;
            case 'Up':
                return $b9e618ce331e0b2f$var$KEY_NAME.UP;
            case 'Right':
                return $b9e618ce331e0b2f$var$KEY_NAME.RIGHT;
            case 'ArrowRight':
                return $b9e618ce331e0b2f$var$KEY_NAME.RIGHT;
            case 'Down':
                return $b9e618ce331e0b2f$var$KEY_NAME.DOWN;
            case 'ArrowDown':
                return $b9e618ce331e0b2f$var$KEY_NAME.DOWN;
            case 'Enter':
                return $b9e618ce331e0b2f$var$KEY_NAME.ENTER;
            case 'Escape':
                return $b9e618ce331e0b2f$var$KEY_NAME.ESCAPE;
        }
        // 上記以外の ２文字以上のキーは空文字に変える
        if (keyString.length > 1) return '';
        // 上記以外の １文字のキーは大文字にする
        return keyString.toUpperCase();
    }
    /**
     * Convert from a block argument to a Scratch key name.
     * @param  {string} keyArg the input arg.
     * @return {string} the corresponding Scratch key.
     */ _keyArgToScratchKey(keyArg) {
        // If a number was dropped in, try to convert from ASCII to Scratch key.
        if (typeof keyArg === 'number') {
            // Check for the ASCII range containing numbers, some punctuation,
            // and uppercase letters.
            if (keyArg >= 48 && keyArg <= 90) return String.fromCharCode(keyArg);
            switch(keyArg){
                case 32:
                    return $b9e618ce331e0b2f$var$KEY_NAME.SPACE;
                case 37:
                    return $b9e618ce331e0b2f$var$KEY_NAME.LEFT;
                case 38:
                    return $b9e618ce331e0b2f$var$KEY_NAME.UP;
                case 39:
                    return $b9e618ce331e0b2f$var$KEY_NAME.RIGHT;
                case 40:
                    return $b9e618ce331e0b2f$var$KEY_NAME.DOWN;
            }
        }
        keyArg = (0, $0a339137bfce8c41$export$107ecfb3d1ccbd77).toString(keyArg);
        // If the arg matches a special key name, return it.
        if ($b9e618ce331e0b2f$var$KEY_NAME_LIST.includes(keyArg)) return keyArg;
        // Use only the first character.
        if (keyArg.length > 1) keyArg = keyArg[0];
        // Check for the space character.
        if (keyArg === ' ') return $b9e618ce331e0b2f$var$KEY_NAME.SPACE;
        return keyArg.toUpperCase();
    }
    /**
     * Keyboard DOM event handler.
     * @param  {object} data Data from DOM event.
     */ postData(data) {
        if (!data.key) return;
        const scratchKey = this._keyStringToScratchKey(data.key);
        if (scratchKey === '') return;
        const index = this._keysPressed.indexOf(scratchKey);
        if (data.isDown) {
            this._runtime.emit('KEY_PRESSED', scratchKey);
            // If not already present, add to the list.
            if (index < 0) this._keysPressed.push(scratchKey);
        } else if (index > -1) // If already present, remove from the list.
        this._keysPressed.splice(index, 1);
    }
    /**
     * key down state for a specified key.
     * @param  {Any} keyArg key argument.
     * @return {boolean} Is the specified key down?
     */ keyIsDown(keyArg) {
        if (!keyArg || keyArg === 'any') return this._keysPressed.length > 0;
        const scratchKey = this._keyArgToScratchKey(keyArg);
        return this._keysPressed.indexOf(scratchKey) > -1;
    }
}


class $b77d4250b288fbfb$export$269330a1f1074312 extends (0, $bmdED$EventEmitter) {
    /**
     * @constructor
     */ constructor(){
        super();
        //this._target = [];
        /** @type S3Renderer */ this.renderer = null;
        const ioDevice = {
            keyboard: new (0, $b9e618ce331e0b2f$export$16e4d70cc375e707)(this)
        };
        this.ioDevices = ioDevice;
    }
    get GREEN_BUTTON_ENABLED() {
        return 'GREEN_BUTTON_ENABLED';
    }
    attachRenderer(renderer) {
        this.renderer = renderer;
    }
    keyIsDown(key) {
        return this.ioDevices.keyboard.keyIsDown(key);
    }
}


class $c988ffb06aab2c0b$export$24c780d5dcde4172 {
    /**
     * 
     * @param {string} sound 
     * @param {string} name 
     * @return {{name:string, data:Uint8Array<ArrayBuffer>}} data
     */ static async loadSound(sound, name) {
        if (sound) {
            if (typeof sound === 'string') {
                let responce = await fetch(sound);
                let buffer = await responce.arrayBuffer();
                let data = new Uint8Array(buffer);
                return {
                    name: name,
                    data: data
                };
            }
        }
        // 例外を起こすべきところ。
        throw 'Scratch3LikeJS loadSound: empty url';
    }
}


//const Backdrops = require('./backdrops');
//const Canvas = require('./canvas');



class $c2847359be0a9884$export$550acbd06a1f5a6a {
    static get BREAK() {
        return "break";
    }
    static get CONTINUE() {
        return "continue";
    }
    static break() {
        throw $c2847359be0a9884$export$550acbd06a1f5a6a.BREAK;
    }
    static continue() {
        throw $c2847359be0a9884$export$550acbd06a1f5a6a.CONTINUE;
    }
    static _threadIdCheck(threadId) {
        // 自身のid をもつスレッドOBJを取り出す。
        const topObj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).getTopThreadObj(threadId);
        if (topObj == null) {
            const err = "NOT FOUND OWN GROUP THREAD";
            throw err;
        }
        if (topObj.threadId != threadId) throw "ERROR TOP OBJ";
        const lastChildObj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).getLastChildObj(topObj);
        if (lastChildObj.threadId != threadId) throw "ERROR Child OBJ";
        return lastChildObj;
    }
    static async repeatUntil(condition, func, me) {
        if (me.isProxyTest == undefined) throw "REPEAT UNTIL : OBJECT IS NOT PROXY";
        const threadId = me.threadId; // me はproxyインスタンス
        // 自身のid をもつスレッドOBJを取り出す。
        const topObj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).getTopThreadObj(threadId);
        if (topObj == null) {
            //console.log(threadId)
            const err = "NOT FOUND OWN GROUP THREAD";
            throw err;
        }
        if (topObj.threadId != threadId) throw "ERROR TOP OBJ";
        const lastChildObj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).getLastChildObj(topObj);
        if (lastChildObj.threadId != threadId) throw "ERROR Child OBJ";
        //const parentObj = threads.nowExecutingObj; // 現在実行中のOBJを取り出す。
        const _condition = typeof condition == 'function' ? condition : ()=>condition;
        const obj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).createObj(); //{f:null, done:false, visualFlag: true, childObj: null};
        obj.threadId = threadId;
        obj.entityId = me.id;
        // condition成立しないときはループしない。
        const src = `const _f = func; 
        return async function*(){ 
            while( !condition() && !obj.forceExit){
                obj.status = threads.RUNNING;
                try{
                    await _f(entity); //\u{3053}\u{3053}\u{306F}\u{304B}\u{306A}\u{3089}\u{305A}await
                    obj.status = threads.YIELD;
                    yield;
                }catch(e){
                    if(e.toString() == Loop.BREAK){
                        break;
                    }else if(e.toString() == Loop.CONTINUE){
                        continue;
                        yield;
                    }else{
                        throw e;
                    }
                }finally{                
                }
            }
            if(obj.forceExit){
                // \u{97F3}\u{304C}\u{306A}\u{3063}\u{3066}\u{3044}\u{308B}\u{3068}\u{304D}\u{306F}\u{6B62}\u{3081}\u{308B}\u{3002}
                entity.soundStopImmediately();
            }
        }
        `;
        const f = new Function('threads', 'obj', 'condition', 'entity', 'Loop', 'func', src);
        const gen = f((0, $810206abd6221b0c$export$8a4dea38c4da78cf), obj, _condition, me, $c2847359be0a9884$export$550acbd06a1f5a6a, func.bind(me));
        obj.f = gen();
        obj.originalF = func;
        //obj.entityId = me.id;
        //threads.registThread( obj );
        obj.parentObj = lastChildObj; // 親を設定
        lastChildObj.childObj = obj; // 子を設定
        // 終わるまで待つ。
        for(;;){
            if (obj.done) {
                lastChildObj.childObj = null; // 親から子を削除
                break;
            }
            await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(0.1);
        }
    }
    static async repeat(count, func, me) {
        const threadId = me.threadId; // me はproxyインスタンス
        const lastChildObj = $c2847359be0a9884$export$550acbd06a1f5a6a._threadIdCheck(threadId);
        const obj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).createObj(); //{f:null, done:false, visualFlag: true, childObj: null};
        obj.threadId = threadId;
        obj.entityId = me.id;
        const src = `const _f = func; 
        return async function*(){ 
            for(let i=0; i<count; i++){
                // \u{505C}\u{6B62}\u{3059}\u{308B}
                if(obj.forceExit == true){
                    // \u{97F3}\u{304C}\u{306A}\u{3063}\u{3066}\u{3044}\u{308B}\u{3068}\u{304D}\u{306F}\u{6B62}\u{3081}\u{308B}\u{3002}
                    entity.soundStopImmediately();
                    break;
                }
                obj.status = threads.RUNNING;
                try{
                    await _f(entity); //\u{3053}\u{3053}\u{306F}\u{304B}\u{306A}\u{3089}\u{305A}await
                    obj.status = threads.YIELD;
                    yield;
                }catch(e){
                    if(e.toString() == Loop.BREAK){
                        break;
                    }else if(e.toString() == Loop.CONTINUE){
                        continue;
                        yield;
                    }else{
                        throw e;
                    }
                }finally{                
                }
            }
        }
        `;
        const f = new Function('threads', 'obj', 'count', 'entity', 'Loop', 'func', src);
        const gen = f((0, $810206abd6221b0c$export$8a4dea38c4da78cf), obj, count, me, $c2847359be0a9884$export$550acbd06a1f5a6a, func.bind(me));
        obj.f = gen();
        obj.originalF = func;
        //obj.entityId = me.id;
        //threads.registThread( obj );
        obj.parentObj = lastChildObj; // 親を設定
        lastChildObj.childObj = obj; // 子を設定
        // 終わるまで待つ。
        for(;;){
            if (obj.done) {
                lastChildObj.childObj = null; // 親から子を削除
                break;
            }
            await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(0.1);
        }
    }
    static async while(condition, func, me) {
        if (me.isProxyTest == undefined) {
            console.log('---- Control#while -----');
            console.log(me);
            throw "OBJECT IS NOT PROXY";
        }
        const threadId = me.threadId; // me はproxyインスタンス
        // 自身のid をもつスレッドOBJを取り出す。
        const topObj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).getTopThreadObj(threadId);
        if (topObj == null) {
            //console.log(threadId)
            const err = "NOT FOUND OWN GROUP THREAD";
            throw err;
        }
        if (topObj.threadId != threadId) throw "ERROR TOP OBJ";
        const lastChildObj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).getLastChildObj(topObj);
        if (lastChildObj.threadId != threadId) throw "ERROR Child OBJ";
        //const parentObj = threads.nowExecutingObj; // 現在実行中のOBJを取り出す。
        const _condition = typeof condition == 'function' ? condition : ()=>condition;
        const obj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).createObj(); //{f:null, done:false, visualFlag: true, childObj: null};
        obj.threadId = threadId;
        obj.entityId = me.id;
        const src = `const _f = func; 
        return async function*(){ 
            while(condition() && !obj.forceExit){
                obj.status = threads.RUNNING;
                try{
                    await _f(entity); //\u{3053}\u{3053}\u{306F}\u{304B}\u{306A}\u{3089}\u{305A}await
                    obj.status = threads.YIELD;
                    yield;
                }catch(e){
                    if(e.toString() == Loop.BREAK){
                        break;
                    }else if(e.toString() == Loop.CONTINUE){
                        continue;
                        yield;
                    }else{
                        throw e;
                    }
                }finally{                
                }
            }
            if(obj.forceExit){
                // \u{97F3}\u{304C}\u{306A}\u{3063}\u{3066}\u{3044}\u{308B}\u{3068}\u{304D}\u{306F}\u{6B62}\u{3081}\u{308B}\u{3002}
                entity.soundStopImmediately();
            }
        }
        `;
        const f = new Function('threads', 'obj', 'condition', 'entity', 'Loop', 'func', src);
        const gen = f((0, $810206abd6221b0c$export$8a4dea38c4da78cf), obj, _condition, me, $c2847359be0a9884$export$550acbd06a1f5a6a, func.bind(me));
        obj.f = gen();
        obj.originalF = func;
        //obj.entityId = me.id;
        //threads.registThread( obj );
        obj.parentObj = lastChildObj; // 親を設定
        lastChildObj.childObj = obj; // 子を設定
        // 終わるまで待つ。
        for(;;){
            if (obj.done) {
                lastChildObj.childObj = null; // 親から子を削除
                break;
            }
            await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(0.1);
        }
    }
}
class $c2847359be0a9884$export$c7c44baae9d9f25f {
    static async waitSeconds(_seconds) {
        await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(_seconds * 1000);
    }
    static async waitUntil(_condition, _pace = 1000 / 30) {
        const condition = typeof _condition == 'function' ? _condition : ()=>_condition;
        for(;;){
            if (condition() === true) break;
            await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(_pace);
        }
    }
    static async waitWhile(_condition, _pace = 1000 / 30) {
        const condition = typeof _condition == 'function' ? _condition : ()=>_condition;
        for(;;){
            if (condition() !== true) break;
            await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(_pace);
        }
    }
}




class $3c095c609aef7970$export$a7b2351958a57a3 {
    static{
        /** スレッドＩＤ */ this.THREAD_ID = "threadId";
    }
    static{
        /** スレッドカウンター */ this.THREAD_COUNTER = "threadCounter";
    }
    static{
        /** 「他のスクリプトを削除する」メソッド名 */ this.STOP_OTHER_SCRIPTS = "$stopOtherScripts";
    }
    static{
        /** 「このスクリプトを停止」スイッチの名前 */ this.STOP_THIS_SCRIPT_SWITCH = "$stopThisScriptSwitch";
    }
    static{
        this.SET_STOP_THIS_SCRIPT_SWITCH = "setStopThisScriptSwitch";
    }
    static{
        this.GET_STOP_THIS_SCRIPT_SWITCH = "getStopThisScriptSwitch";
    }
    static{
        this.THREAD_NAME = "threadName";
    }
    static{
        /** プロキシテスター */ this.IS_PROXY_TEST = "isProxyTest";
    }
    /** プロキシの定義 */ static getProxy(obj, callback) {
        //proxyCounter+=1;
        //console.log(`getProxy, proxyCounter=${proxyCounter}`);
        const proxy = new Proxy(obj, {
            get (target, name, receiver) {
                // 実体がプロキシであるかをチェックする
                if (name == $3c095c609aef7970$export$a7b2351958a57a3.IS_PROXY_TEST) return (_)=>true;
                // スレッドＩＤを返す
                if (name == $3c095c609aef7970$export$a7b2351958a57a3.THREAD_ID) // @ts-ignore (undefined error)
                return this.threadId;
                if (name == $3c095c609aef7970$export$a7b2351958a57a3.THREAD_NAME) // @ts-ignore (undefined error)
                return this.threadName;
                // スレッドカウンターを返す
                if (name == $3c095c609aef7970$export$a7b2351958a57a3.THREAD_COUNTER) // @ts-ignore (undefined error)
                return this.threadCounter;
                if (name == $3c095c609aef7970$export$a7b2351958a57a3.GET_STOP_THIS_SCRIPT_SWITCH) {
                    const self = this;
                    return function() {
                        // @ts-ignore (undefined error)
                        return self.stop_this_script_switch;
                    };
                }
                if (name == $3c095c609aef7970$export$a7b2351958a57a3.SET_STOP_THIS_SCRIPT_SWITCH) {
                    const self = this;
                    return function(value) {
                        // @ts-ignore (undefined error)
                        self.stop_this_script_switch = value;
                    };
                }
                //「このスクリプトを停止」スイッチオンのとき
                // @ts-ignore (undefined error)
                if (this.stop_this_script_switch === true) {
                    if (name == 'Motion' || name == 'Looks' || name == 'Sound' || name == 'Event' || name == 'Control' || name == 'Sensing' || name == 'Image') // 「このスクリプトを停止」スイッチオンのときは
                    // 例外を発生させる。
                    throw (0, $810206abd6221b0c$export$8a4dea38c4da78cf).THROW_STOP_THIS_SCRIPTS;
                }
                if (name == (0, $810206abd6221b0c$export$8a4dea38c4da78cf).THROW_FORCE_STOP_THIS_SCRIPTS) return function() {
                    throw (0, $810206abd6221b0c$export$8a4dea38c4da78cf).THROW_FORCE_STOP_THIS_SCRIPTS;
                };
                // @ts-ignore (...argument error)
                return Reflect.get(...arguments);
            },
            set (target, name, value) {
                // スレッドＩＤのセッター
                if (name == $3c095c609aef7970$export$a7b2351958a57a3.THREAD_ID) {
                    // @ts-ignore (undefined error)
                    this.threadId = value;
                    return true;
                }
                // スレッドカウンターのセッター
                if (name == $3c095c609aef7970$export$a7b2351958a57a3.THREAD_COUNTER) {
                    // @ts-ignore (undefined error)
                    this.threadCounter = value;
                    return true;
                }
                // 「このスクリプトを停止」スイッチのセッター
                if (name == $3c095c609aef7970$export$a7b2351958a57a3.STOP_THIS_SCRIPT_SWITCH) {
                    // @ts-ignore (undefined error)
                    this.stop_this_script_switch = value;
                    return true;
                }
                if (name == $3c095c609aef7970$export$a7b2351958a57a3.THREAD_NAME) {
                    // @ts-ignore (undefined error)
                    this.threadName = value;
                    return true;
                }
                // @ts-ignore (...argument error)
                return Reflect.set(...arguments);
            }
        });
        return proxy;
    }
}




/**
 * Functionの種類を判定する
 * 新しめのJavascript構文を扱える@babel/parserを使用する
 */ 
class $31a1fe5d0f620d33$export$741a5dc0221ff449 {
    /**
     * 関数定義を渡しアロー関数、Async、Generatorの種類を返す。
     * @param {CallableFunction} func 
     * @returns {FUNCTION_DECLARE} 関数の種類
     */ static getFunctionDeclares(func) {
        const ast = (0, $bmdED$parse)(`const x = ${func.toString()}`);
        // @ts-ignore (ts(2339) declarations undefined error)
        const functionInit = ast.program.body[0].declarations[0].init;
        const isArrow = functionInit.type == "ArrowFunctionExpression";
        const isGenerator = functionInit.generator;
        const isAsync = functionInit.async;
        return {
            isArrow: isArrow,
            isAsync: isAsync,
            isGenerator: isGenerator
        };
    }
    /**
     * 未使用
     * @param {CallableFunction} func 
     * @returns {TYPE_OF_GENERATOR}
     */ static getTypeOfGenerator(func) {
        let isAsyncGenerator = false;
        let isAwaiter = false;
        const ast = (0, $bmdED$parse)(`const x = ${func.toString()}`);
        // @ts-ignore (ts(2339) declarations undefined error)
        const functionInit = ast.program.body[0].declarations[0].init;
        if (functionInit.body && functionInit.body.body) {
            if (Array.isArray(functionInit.body.body)) {
                const body = functionInit.body.body[0];
                if (body.argument && body.argument.callee) {
                    const name = body.argument.callee.name;
                    if (name == "__asyncGenerator") isAsyncGenerator = true;
                    if (name == "__awaiter") isAwaiter = true;
                }
            }
        }
        return {
            isAsyncGenerator: isAsyncGenerator,
            isAwaiter: isAwaiter
        };
    }
}



class $a98e95d0f90948cf$export$6a7ef315a0d1ef07 {
    static degToRad(deg) {
        return deg * Math.PI / 180;
    }
    static radToDeg(rad) {
        return rad * 180 / Math.PI;
    }
}





class $79981c8e80718793$export$7eddbba4446d51fc {
    constructor(name, _soundPlayer, options = {}){
        this._name = name;
        this._soundPlayer = _soundPlayer;
        this._options = options;
        this._volume = options.volume ? options.volume : 100;
        this._pitch = options.pitch ? options.pitch : 1;
        this.connectDone = false;
        this._effects = this._options.effects ? this._options.effects : {};
        if (this._effects && this._effects.set && this._effects.volume) {
            this._soundPlayer.setPlaybackRate(this._pitch);
            this._effects.set(this._effects.volume.name, this._volume);
            this._effects.volume.update();
            this.connect();
        } else this._effects = {};
    }
    set pitch(pitch) {
        this._pitch = pitch;
        this._soundPlayer.setPlaybackRate(pitch);
    }
    get pitch() {
        return this._pitch;
    }
    set volume(volume) {
        if (this._effects && this._effects.set && this._effects.volume) {
            this._volume = volume;
            this._effects.set(this._effects.volume.name, this._volume);
            this._effects.volume.update();
        }
    }
    get volume() {
        return this._volume;
    }
    get soundPlayer() {
        return this._soundPlayer;
    }
    get name() {
        return this._name;
    }
    set effects(effects) {
        this._effects = effects;
    }
    get effects() {
        return this._effects;
    }
    connect() {
        if (this.connectDone === false) {
            if (this._effects) {
                this._soundPlayer.connect(this._effects);
                this.connectDone = true;
            }
        }
    }
    play() {
        this._soundPlayer.play();
    }
    async startSoundUntilDone() {
        const __soundPlayer = this._soundPlayer;
        // --- replace finished.
        // --- when sounds stoped, change property(isPlaying) to false
        this._soundPlayer.finished = function() {
            return new Promise((resolve)=>{
                __soundPlayer.once('stop', ()=>{
                    __soundPlayer.isPlaying = false;
                    resolve();
                });
            });
        };
        this.play();
        await this._soundPlayer.finished();
    }
    stop() {
        this._soundPlayer.stop();
    }
    stopImmediately() {
        this._soundPlayer.stopImmediately();
    }
}


class $f45580fe7e9c00fc$export$76eeb3aae76ab221 {
    constructor(entity){
        this.entity = entity;
        this.audioEngine = new (0, $bmdED$scratchaudio)();
        this.soundPlayers = new Map();
        this.soundPlayer = undefined;
        this.soundIdx = 0;
    }
    // ==== 未使用 =====
    // async importSound( sound ) {
    //     const soundData = await SoundLoader.loadSound(sound);
    //     return soundData;
    // }
    async setSound(name, soundData, options = {}) {
        // audioEngine.decodeSoundPlayerの引数は {data} の形にする。変数名は dataでないといけない。
        const data = soundData;
        const _soundPlayer = await this.audioEngine.decodeSoundPlayer({
            data: data
        });
        const _effects = this.audioEngine.createEffectChain();
        const _options = options;
        _options.effects = _effects;
        const soundPlayer = new (0, $79981c8e80718793$export$7eddbba4446d51fc)(name, _soundPlayer, _options);
        if (this.soundPlayer == null) this.soundPlayer = soundPlayer;
        this.soundPlayers.set(name, soundPlayer);
        // effects は インスタンスを作るときに渡しているので引数省略。
        soundPlayer.connect();
    }
    async loadSound(name, sound, options = {}) {
        const data = await (0, $c988ffb06aab2c0b$export$24c780d5dcde4172).loadSound(sound, name);
        await this.setSound(name, data.data, options);
    }
    switch(name) {
        const me = this;
        const _keys = Array.from(this.soundPlayers.keys());
        if (_keys.length > 1) _keys.map((_name, _idx)=>{
            if (_name == name) {
                me.soundIdx = _idx;
                const soundPlayer = me.soundPlayers.get(name);
                me.soundPlayer = soundPlayer;
            }
        });
    }
    getSoundKeys() {
        const _keys = Array.from(this.soundPlayers.keys());
        return _keys;
    }
    nextSound() {
        const me = this;
        const _keys = Array.from(this.soundPlayers.keys());
        if (_keys.length > 1) {
            const _nextIdx = this.soundIdx + 1;
            if (_nextIdx < _keys.length) this.soundIdx = _nextIdx;
            else this.soundIdx = 0;
            _keys.map((_name, _idx)=>{
                if (_idx == me.soundIdx) me.soundPlayer = me.soundPlayers.get(_name);
            });
        }
    }
    play() {
        if (this.soundPlayer == null) return;
        //const _effects = this.soundPlayer.effects;
        this.soundPlayer.connect();
        this.soundPlayer.play();
    }
    setVolume(volume, name) {
        if (name) {
            const me = this;
            const _keys = Array.from(this.soundPlayers.keys());
            if (_keys.length > 0) _keys.map((_name, _idx)=>{
                if (_name == name) {
                    const _soundPlayer = this.soundPlayers.get(name);
                    if (_soundPlayer) _soundPlayer.volume = volume;
                }
            });
            else // soundPlayerがない
            return;
        } else {
            if (this.soundPlayer == null) return;
            this.soundPlayer.volume = volume;
        }
    }
    set volume(volume) {
        if (this.soundPlayer == null) return;
        // 現在選択中の soundPlayerへ設定する
        this.soundPlayer.volume = volume;
    }
    get volume() {
        if (this.soundPlayer == null) return -1;
        // 現在選択中の soundPlayerから取得する
        return this.soundPlayer.volume;
    }
    set pitch(pitch) {
        if (this.soundPlayer == null) return;
        // 現在選択中の soundPlayerへ設定する
        this.soundPlayer.pitch = pitch;
    }
    get pitch() {
        if (this.soundPlayer == null) return Infinity;
        // 現在選択中の soundPlayerから取得する
        return this.soundPlayer.pitch;
    }
    async startSoundUntilDone(self) {
        if (this.soundPlayer == null) return;
        if (self) {
            const me = this;
            return new Promise(async (resolve)=>{
                // Entity.$speechStopImmediately()でEmitされる
                if (me.soundPlayer == undefined) resolve();
                else {
                    const _f = (_)=>{
                        me.stopImmediately();
                        resolve();
                    };
                    const EMIT_ID = self.SOUND_FORCE_STOP;
                    self.once(EMIT_ID, _f);
                    await me.soundPlayer.startSoundUntilDone(); // 終わるまで待つ
                    self.removeListener(EMIT_ID, _f);
                    resolve();
                }
            });
        } else {
            const me = this;
            //await this.soundPlayer.startSoundUntilDone(); // 終わるまで待つ
            return new Promise(async (resolve)=>{
                // me.entity は constructorで受け取る Sprite/Stage のentity
                if (me.soundPlayer == undefined) resolve();
                else {
                    const _f = (_)=>{
                        me.stopImmediately();
                        resolve();
                    };
                    const EMIT_ID = me.entity.SOUND_FORCE_STOP;
                    me.entity.once(EMIT_ID, _f);
                    await me.soundPlayer.startSoundUntilDone(); // 終わるまで待つ
                    me.entity.removeListener(EMIT_ID, _f);
                    resolve();
                }
            });
        }
    }
    stop() {
        if (this.soundPlayer == null) return;
        this.soundPlayer.stop();
    }
    stopImmediately() {
        if (this.soundPlayer == null) return;
        this.soundPlayer.stopImmediately();
    }
}




//const SERVER = 'https://synthesis-service.scratch.mit.edu';
/**
 * The url of the synthesis server.
 * @type {string}
 */ const $904c35c2847746ef$var$SERVER_HOST = 'https://synthesis-service.scratch.mit.edu';
/**
 * How long to wait in ms before timing out requests to synthesis server.
 * @type {number}
 */ const $904c35c2847746ef$var$SERVER_TIMEOUT = 10000; // 10 seconds
/**
 * Volume for playback of speech sounds, as a percentage.
 * @type {number}
 */ const $904c35c2847746ef$var$SPEECH_VOLUME = 250;
/**
 * An id for one of the voices.
 */ const $904c35c2847746ef$var$ALTO_ID = 'ALTO';
/**
 * An id for one of the voices.
 */ const $904c35c2847746ef$var$TENOR_ID = 'TENOR';
/**
 * An id for one of the voices.
 */ const $904c35c2847746ef$var$SQUEAK_ID = 'SQUEAK';
/**
 * An id for one of the voices.
 */ const $904c35c2847746ef$var$GIANT_ID = 'GIANT';
/**
 * An id for one of the voices.
 */ const $904c35c2847746ef$var$KITTEN_ID = 'KITTEN';
/**
 * Playback rate for the tenor voice, for cases where we have only a female gender voice.
 */ const $904c35c2847746ef$var$FEMALE_TENOR_RATE = 0.89; // -2 semitones
/**
 * Playback rate for the giant voice, for cases where we have only a female gender voice.
 */ const $904c35c2847746ef$var$FEMALE_GIANT_RATE = 0.79; // -4 semitones
/**
 * Language ids. The value for each language id is a valid Scratch locale.
 */ const $904c35c2847746ef$var$ENGLISH_ID = 'en';
const $904c35c2847746ef$var$JAPANESE_ID = 'ja';
const $904c35c2847746ef$export$232aa390e5250c43 = class {
    static get MALE() {
        return 'male';
    }
    static get FEMALE() {
        return 'female';
    }
};
class $904c35c2847746ef$export$377108f81375939e {
    constructor(){
        this.voice = $904c35c2847746ef$var$ALTO_ID;
        this.language = $904c35c2847746ef$var$JAPANESE_ID;
        this.gender = $904c35c2847746ef$export$232aa390e5250c43.FEMALE;
        this.cache = new Map();
        this.locale = null;
    }
    // /**
    //  * An object with info for each voice.
    //  */
    // get VOICE_INFO () {
    //     return {
    //         [ALTO_ID]: {
    //             name: formatMessage({
    //                 id: 'text2speech.alto',
    //                 default: 'alto',
    //                 description: 'Name for a voice with ambiguous gender.'
    //             }),
    //             gender: 'female',
    //             playbackRate: 1
    //         },
    //         [TENOR_ID]: {
    //             name: formatMessage({
    //                 id: 'text2speech.tenor',
    //                 default: 'tenor',
    //                 description: 'Name for a voice with ambiguous gender.'
    //             }),
    //             gender: 'male',
    //             playbackRate: 1
    //         },
    //         [SQUEAK_ID]: {
    //             name: formatMessage({
    //                 id: 'text2speech.squeak',
    //                 default: 'squeak',
    //                 description: 'Name for a funny voice with a high pitch.'
    //             }),
    //             gender: 'female',
    //             playbackRate: 1.19 // +3 semitones
    //         },
    //         [GIANT_ID]: {
    //             name: formatMessage({
    //                 id: 'text2speech.giant',
    //                 default: 'giant',
    //                 description: 'Name for a funny voice with a low pitch.'
    //             }),
    //             gender: 'male',
    //             playbackRate: 0.84 // -3 semitones
    //         },
    //         [KITTEN_ID]: {
    //             name: formatMessage({
    //                 id: 'text2speech.kitten',
    //                 default: 'kitten',
    //                 description: 'A baby cat.'
    //             }),
    //             gender: 'female',
    //             playbackRate: 1.41 // +6 semitones
    //         }
    //     };
    // }
    get LANGUAGE_INFO() {
        return {
            [$904c35c2847746ef$var$ENGLISH_ID]: {
                name: 'English',
                locales: [
                    'en'
                ],
                speechSynthLocale: 'en-US'
            },
            [$904c35c2847746ef$var$JAPANESE_ID]: {
                name: 'Japanese',
                locales: [
                    'ja',
                    'ja-hira'
                ],
                speechSynthLocale: 'ja-JP'
            }
        };
    }
    /**
     * The default state, to be used when a target has no existing state.
     * @type {Text2SpeechState}
     */ static get DEFAULT_TEXT2SPEECH_STATE() {
        return {
            voiceId: $904c35c2847746ef$var$ALTO_ID
        };
    }
    /**
     * A default language to use for speech synthesis.
     * @type {string}
     */ get DEFAULT_LANGUAGE() {
        return $904c35c2847746ef$var$JAPANESE_ID;
    }
    speech(entity, words, properties = {}) {
        // 128文字までしか許容しないとする
        const text = encodeURIComponent(words.substring(0, 128));
        let path = `${$904c35c2847746ef$var$SERVER_HOST}/synth?locale=${this.locale}&gender=${this.gender}&text=${text}`;
        if (!this.cache.has(path)) {
            const name = 'ScratchSpeech'; // <-- なんでもよいが、変数に使える文字であること
            const me = this;
            (0, $c988ffb06aab2c0b$export$24c780d5dcde4172).loadSound(path, name).then((_sound)=>{
                me.cache.set(path, _sound);
                me._speechPlay(entity, _sound.name, _sound.data, properties);
            });
        } else {
            const _sound = this.cache.get(path);
            this._speechPlay(entity, _sound.name, _sound.data, properties);
        }
    }
    _speechPlay(entity, name, data, properties) {
        const sounds = new (0, $f45580fe7e9c00fc$export$76eeb3aae76ab221)(entity);
        sounds.setSound(name, data, properties).then((_)=>{
            sounds.play();
        });
    }
    async speechAndWait(entity, words, properties = {}) {
        // 128文字までしか許容しないとする
        const text = encodeURIComponent(words.substring(0, 128));
        let path = `${$904c35c2847746ef$var$SERVER_HOST}/synth?locale=${this.locale}&gender=${this.gender}&text=${text}`;
        if (!this.cache.has(path)) {
            const name = 'ScratchSpeech'; // <-- なんでもよいが、変数に使える文字であること
            const sound = await (0, $c988ffb06aab2c0b$export$24c780d5dcde4172).loadSound(path, name);
            this.cache.set(path, sound);
        }
        const sound = this.cache.get(path);
        await this._speechPlayUntilDone(entity, sound.name, sound.data, properties);
    }
    async _speechPlayUntilDone(entity, name, data, properties) {
        const sounds = new (0, $f45580fe7e9c00fc$export$76eeb3aae76ab221)(entity);
        await sounds.setSound(name, data, properties);
        await sounds.startSoundUntilDone(entity);
    }
    static getInstance() {
        if ($904c35c2847746ef$export$377108f81375939e.instance == undefined) $904c35c2847746ef$export$377108f81375939e.instance = new $904c35c2847746ef$export$377108f81375939e();
        return $904c35c2847746ef$export$377108f81375939e.instance;
    }
}




class $380bce3af1d7e09d$export$8fc1bb2af54b68cf {
    /**
     * 色の効果
     */ static get COLOR() {
        return 'color';
    }
    /**
     * 魚眼レンズの効果
     */ static get FISHEYE() {
        return 'fisheye';
    }
    /**
     * 渦巻きの効果
     */ static get WHIRL() {
        return 'whirl';
    }
    /**
     * ピクセル化の効果
     */ static get PIXELATE() {
        return 'pixelate';
    }
    // モザイクの効果
    static get MOSAIC() {
        return 'mosaic';
    }
    // 明るさの効果
    static get BRIGHTNESS() {
        return 'brightness';
    }
    // 幽霊の効果
    static get GHOST() {
        return 'ghost';
    }
}
class $380bce3af1d7e09d$export$ac89145aaed3fdce {
    static get VOLUME() {
        return "volume";
    }
    static get PITCH() {
        return "pitch";
    }
}
class $380bce3af1d7e09d$export$f4507c5cf8887f06 {
    static get LEFT_RIGHT() {
        return 'left-right';
    }
    static get DONT_ROTATE() {
        return 'do-not-rotate';
    }
    static get ALL_AROUND() {
        return 'all-around';
    }
}


class $2401b5b232271269$export$bc644a473284d944 extends (0, $bmdED$EventEmitter) {
    static{
        this.clickFirstRegist = true;
    }
    static{
        this.eventFuncArray = [];
    }
    static{
        this.broadcastReceivedFuncArr = [];
    }
    static get EmitIdMovePromise() {
        return '_MovePromise_';
    }
    get SOUND_FORCE_STOP() {
        return "sound_force_stop";
    }
    constructor(name, layer, options = {}){
        super();
        this.pace = (0, $aa5c463d8e2daad8$export$6c0517834721cef7).pace;
        this.render = (0, $a6b849a6af88d987$export$80606ec500c7d132).render;
        this.name = name;
        this.layer = layer;
        this.drawableID = this.render.createDrawable(this.layer);
        this.id = this._generateUUID();
        this.canvas = (0, $57ac7e9ecbc5361f$export$8d01c972ee8b14a9).canvas;
        this.flag = null; //playGround.flag;
        this.$_position = {
            x: 0,
            y: 0
        }; // 意味なし
        this.$_scale = {
            w: 100,
            h: 100
        }; // 意味なし
        this.$_direction = 90; // 意味なし
        this._visible = true;
        this.sounds = null;
        //this.sound = null;
        this.importAllDone = [];
        this.importIdx = -1;
        const _effect = options.effect ? options.effect : {};
        this._effect = {};
        this.setEffectsEachProperties(_effect);
        this.$_position = options.position ? {
            x: options.position.x,
            y: options.position.y
        } : {
            x: 0,
            y: 0
        };
        this.$_prev_position = this.$_position;
        this.$_direction = options.direction ? options.direction : 90;
        this.$_prev_direction = this.$_direction;
        this.$_scale = options.scale ? {
            w: options.scale.w,
            h: options.scale.h
        } : {
            w: 100,
            h: 100
        };
        this.$_prev_scale = {
            w: 0,
            h: 0
        };
        this.$_prev_scale.w = this.$_scale.w;
        this.$_prev_scale.h = this.$_scale.h;
        this.life = Infinity;
        this.modules = new Map();
        $2401b5b232271269$export$bc644a473284d944.broadcastReceivedFuncArr = $2401b5b232271269$export$bc644a473284d944.broadcastReceivedFuncArr || [];
        this._isAlive = true;
        // タイマー用
        this._timer = performance.now();
    }
    isAlive() {
        // スプライトの場合はオーバーライドしている
        return true;
    }
    isSprite() {
        return true;
    }
    $delete() {
        delete this.modules;
    }
    get effect() {
        return this._effect;
    }
    set effect(_effect) {
        this.setEffectsEachProperties(_effect);
    }
    $changeSizeBy(changeW, changeH) {
        if (typeof changeW == 'number') {
            let _w = changeW;
            let _h = changeH;
            if (changeH == undefined) _h = changeW;
            const w = this.$_scale.w + _w;
            const h = this.$_scale.h + _h;
            this.$setScale(w, h);
        } else {
            const obj = changeW;
            let _w = obj.w;
            let _h = obj.h;
            const w = this.$_scale.w + _w;
            const h = this.$_scale.h + _h;
            this.$setScale(w, h);
        }
    }
    $changeEffectBy(target, changeVal) {
        if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).COLOR) {
            const v = this._effect.color;
            this._effect.color = v + changeVal;
        } else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).FISHEYE) {
            const v = this._effect.fisheye;
            this._effect.fisheye = v + changeVal;
        } else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).WHIRL) {
            const v = this._effect.whirl;
            this._effect.whirl = v + changeVal;
        } else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).PIXELATE) {
            const v = this._effect.pixelate;
            this._effect.pixelate = v + changeVal;
        } else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).MOSAIC) {
            const v = this._effect.mosaic;
            this._effect.mosaic = v + changeVal;
        } else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).BRIGHTNESS) {
            const v = this._effect.brightness;
            this._effect.brightness = v + changeVal;
        } else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).GHOST) {
            const v = this._effect.ghost;
            this._effect.ghost = v + changeVal;
        }
    }
    $setEffectTo(target, val) {
        if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).COLOR) this._effect.color = val;
        else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).FISHEYE) this._effect.fisheye = val;
        else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).WHIRL) this._effect.whirl = val;
        else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).PIXELATE) this._effect.pixelate = val;
        else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).MOSAIC) this._effect.mosaic = val;
        else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).BRIGHTNESS) this._effect.brightness = val;
        else if (target == (0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).GHOST) this._effect.ghost = val;
    }
    setEffectsEachProperties(_effect) {
        if ((0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).COLOR in _effect) this._effect.color = _effect.color;
        if ((0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).FISHEYE in _effect) this._effect.fisheye = _effect.fisheye;
        if ((0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).WHIRL in _effect) this._effect.whirl = _effect.whirl;
        if ((0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).PIXELATE in _effect) this._effect.pixelate = _effect.pixelate;
        if ((0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).MOSAIC in _effect) this._effect.mosaic = _effect.mosaic;
        if ((0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).BRIGHTNESS in _effect) this._effect.brightness = _effect.brightness;
        if ((0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf).GHOST in _effect) this._effect.ghost = _effect.ghost;
    }
    $clearEffect() {
        this._effect.color = 0;
        this._effect.fisheye = 0;
        this._effect.mosaic = 0;
        this._effect.brightness = 0;
        this._effect.brightness = 0;
        this._effect.ghost = 0;
    }
    _isImportAllDone() {
        let _allDone = true;
        this.importAllDone.map((v)=>{
            if (v === false) _allDone = false;
        });
        return _allDone;
    }
    async _addImage(name, image, costume) {
        if (name == undefined || typeof name != "string") throw "\u3010Image.add\u3011\u6B63\u3057\u3044 name \u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        const ImageError = "\u3010Image.add\u3011\u6B63\u3057\u3044\u30A4\u30E1\u30FC\u30B8\u30C7\u30FC\u30BF\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        if (image == undefined) throw ImageError;
        if (typeof image == "string") {
            if (image.substring(0, 4) != "<svg") throw ImageError;
        } else {
            // 文字列(SVG)でないとき
            if (image.nodeName) {
                if (image.nodeName && image.nodeName != "IMG") throw ImageError;
            } else // imageが 文字列(SVG)でない、または、nodeNameがないとき
            throw ImageError;
        }
        await costume.addImage(name, image);
    }
    async _loadImage(name, imageUrl, costume) {
        this.importIdx += 1;
        const _importIdx = this.importIdx;
        this.importAllDone.push(false);
        await costume.loadImage(name, imageUrl);
        this.importAllDone[_importIdx] = true;
    }
    // async importSound( sound ) {
    //     if ( this.sounds == null ) this.sounds = new Sounds(this);
    //     const soundData = await this.sounds.importSound( sound );
    //     return soundData;
    // }
    async _addSound(name, soundData, options = {}) {
        if (name == undefined || typeof name != "string") throw "\u3010Sound.add\u3011\u6B63\u3057\u3044 name \u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        if (soundData == undefined || soundData.buffer == undefined) throw "\u3010Sound.add\u3011\u6B63\u3057\u3044\u30B5\u30A6\u30F3\u30C9\u30C7\u30FC\u30BF\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        if (this.sounds == null) this.sounds = new (0, $f45580fe7e9c00fc$export$76eeb3aae76ab221)(this);
        const me = this;
        return new Promise(async (resolve)=>{
            if (this.sounds == undefined) throw 'sounds undefined error';
            await this.sounds.setSound(name, soundData, options);
            resolve(me);
        });
    }
    async _loadSound(name, soundUrl, options = {}) {
        this.importIdx += 1;
        const _importIdx = this.importIdx;
        this.importAllDone.push(false);
        if (this.sounds == null) this.sounds = new (0, $f45580fe7e9c00fc$export$76eeb3aae76ab221)(this);
        await this.sounds.loadSound(name, soundUrl, options);
        this.importAllDone[_importIdx] = true;
    }
    $soundSwitch(sound) {
        if (this.sounds == undefined) throw 'sounds undefined error';
        if (this.sounds.soundPlayer == undefined) throw 'sounds.soundPlayer undefined error';
        const name = sound.name;
        if (this.sounds.soundPlayer.name === name) return;
        const keys = this.sounds.getSoundKeys();
        if (keys.includes(name)) this.sounds.switch(name);
        else throw "\u6307\u5B9A\u3057\u305F\u30B5\u30A6\u30F3\u30C9\u306F\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u307E\u305B\u3093(" + name + ')';
    }
    $nextSound() {
        if (this.sounds == null) return;
        this.$soundStop();
        this.sounds.nextSound();
    }
    $soundPlay(name) {
        if (this.sounds == undefined) throw 'sounds undefined error';
        if (name) this.$soundSwitch({
            name: name
        });
        this.sounds.play();
    }
    async $setOption(key, value) {
        if (key == (0, $380bce3af1d7e09d$export$ac89145aaed3fdce).VOLUME) this.$setSoundVolume(value);
        else if (key == (0, $380bce3af1d7e09d$export$ac89145aaed3fdce).PITCH) {
            if (-360 <= value && value <= 360) this.$setSoundPitch(value);
        }
        // 音量変更時直後の再生にて 最初に雑音「ブッ」が入る。
        // FPS分待つことで解消させる
        await (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).wait(1000 / 33 * 2);
    }
    async $clearSoundEffect() {
        this.$setSoundVolume(100);
        this.$setSoundPitch(0);
        await (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).wait(1000 / 33 * 2);
    }
    $pitchAudio2Scratch(pitch) {
        if (12.5 <= pitch && pitch <= 800) {
            const scratchPitch = 120 * Math.log2(pitch / 100);
            return scratchPitch;
        }
        return 100;
    }
    $pitchScratch2Audio(pitch) {
        if (-360 <= pitch && pitch <= 360) {
            const audioPitch = 100 * 2 ** (pitch / 120);
            return audioPitch;
        }
        return 0;
    }
    async $changeOptionValue(key, value) {
        if (this.sounds == undefined) throw 'sounds undefined error';
        if (key == (0, $380bce3af1d7e09d$export$ac89145aaed3fdce).VOLUME) {
            const volume = this.sounds.volume;
            this.$setSoundVolume(volume + value);
        } else if (key == (0, $380bce3af1d7e09d$export$ac89145aaed3fdce).PITCH) {
            const changePitch = this.$pitchScratch2Audio(value);
            const pitch = this.sounds.pitch + changePitch;
            if (12.5 <= pitch && pitch <= 800) {
                const pitchScratch = this.$pitchAudio2Scratch(pitch);
                this.$setSoundPitch(pitchScratch);
            }
        }
        // 音量変更時直後の再生にて 最初に雑音「ブッ」が入る。
        // FPS分待つことで解消させる
        await (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).wait(1000 / 33 * 2);
    }
    $setSoundVolume(volume) {
        if (this.sounds == null) return;
        this.sounds.volume = volume;
    }
    $getSoundVolume() {
        if (this.sounds == undefined) throw 'Sounds undefined error';
        return this.sounds.volume;
    }
    // setSoundVolumeByName(name, volume) {
    //     if ( this.sounds == null ) return;
    //     this.sounds.volume = volume;
    // }
    $getSoundPitch() {
        if (this.sounds == undefined) throw 'sounds undefined error';
        return this.sounds.pitch;
    }
    $setSoundPitch(pitch) {
        if (this.sounds == undefined) throw 'sounds undefined error';
        const audioPitch = this.$pitchScratch2Audio(pitch);
        this.sounds.pitch = audioPitch / 100;
    }
    $soundStop() {
        if (this.sounds == null) return;
        this.sounds.stop();
    }
    $soundStopImmediately() {
        if (this.sounds == null) return;
        this.sounds.stopImmediately();
    }
    $speechStopImmediately() {
        this.emit(this.SOUND_FORCE_STOP); // ---> スピーチを停止する Soundの中で。
    }
    async $startSoundUntilDone(name) {
        if (this.sounds) {
            if (name) this.$soundSwitch({
                name: name
            });
            await this.sounds.startSoundUntilDone();
        }
        return;
    }
    $setPosition(x, y) {
        if (typeof x == 'number') {
            this.$_position.x = x;
            this.$_position.y = y;
        } else {
            const obj = x;
            this.$_position.x = obj.x;
            this.$_position.y = obj.y;
        }
    }
    $setScale(w, h) {
        if (typeof w == 'number') {
            this.$_scale.w = w;
            if (h == undefined) this.$_scale.h = w;
            else this.$_scale.h = h;
        } else {
            const obj = w;
            this.$_scale.w = obj.w;
            this.$_scale.h = obj.h;
        }
    }
    _directionChange(direction) {
        if (direction > 180) return direction - 360;
        return direction;
    }
    $setDirection(direction) {
        const _direction = this._directionChange(direction);
        this.$_direction = _direction;
    }
    $turnRight(value) {
        const _direction = this.$_direction + value;
        this.$setDirection(_direction);
    }
    $turnLeft(value) {
        const _direction = this.$_direction - value;
        this.$setDirection(_direction);
    }
    _generateUUID() {
        return (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).generateUUID();
    }
    //    _exec ( f, ...args ) {
    //        const _rewriter = Rewrite.default;
    //        _rewriter.exec( f, this, ...args );
    //    }
    //    _execWithEmit ( f, emitterEventId, ...args ){
    //        const _rewriter = Rewrite.default;
    //        _rewriter.execWithEmitter( f, this, emitterEventId, ...args );
    //
    //    }
    //    _execThread ( f, ...args ) {
    //        const _rewriter = Rewrite.default;
    //        let t = _rewriter.execThread( f, this, ...args );
    //        return t;
    //    }
    async $waitSeconds(seconds) {
        await (0, $c2847359be0a9884$export$c7c44baae9d9f25f).waitSeconds(seconds);
    }
    async $waitUntil(condition) {
        await (0, $c2847359be0a9884$export$c7c44baae9d9f25f).waitUntil(condition);
    }
    async $waitWhile(condition) {
        await (0, $c2847359be0a9884$export$c7c44baae9d9f25f).waitWhile(condition);
    }
    $isNotMouseTouching() {
        return !this.$isMouseTouching();
    }
    $isMouseTouching() {
        if ((0, $a6b849a6af88d987$export$80606ec500c7d132).render) {
            const mouseX = (0, $a6b849a6af88d987$export$80606ec500c7d132).stage.mouse.x + 1; // +1 は暫定、理由不明
            const mouseY = (0, $a6b849a6af88d987$export$80606ec500c7d132).stage.mouse.y + 1;
            if ((0, $a6b849a6af88d987$export$80606ec500c7d132).render.renderer) {
                const _touchDrawableId = (0, $a6b849a6af88d987$export$80606ec500c7d132).render.renderer.pick(mouseX, mouseY, 2, 2, [
                    this.drawableID
                ]);
                if (this.drawableID == _touchDrawableId) return true;
            }
        }
        return false;
    }
    $isTouchingTargetToTarget(src, targets) {
        const targetIds = [];
        if (Array.isArray(targets)) {
            for (const _t of targets)if (_t.visible) {
                const _drawableId = _t.drawableID;
                targetIds.push(_drawableId);
            }
        } else {
            const target = targets;
            const _drawableId = target.drawableID;
            targetIds.push(_drawableId);
        }
        if (targetIds.length > 0) try {
            const touching = src.render.renderer.isTouchingDrawables(src.drawableID, targetIds);
            return touching;
        } catch (e) {}
        return false;
    }
    $ifTouchingTarget(target) {
        const touching = this.$isTouchingTargetToTarget(this, [
            target
        ]);
        return touching;
    }
    $ifTouchingMultiTargets(targets) {
        if (Array.isArray(targets)) for (const t of targets){
            const touching = this.$ifTouchingTarget(t);
            return touching;
        }
        return false;
    }
    $getTouchingTarget(targets) {
        const src = this;
        const touchingTragets = [];
        if (Array.isArray(targets)) for (const t of targets){
            const touching = this.$isTouchingTargetToTarget(src, t);
            if (touching === true) touchingTragets.push(t);
        }
        else {
            const t = targets;
            const touching = this.$isTouchingTargetToTarget(src, t);
            if (touching === true) touchingTragets.push(t);
        }
        return touchingTragets;
    }
    isTouchingTarget(targets) {
        const src = this;
        const touching = this.$isTouchingTargetToTarget(src, targets);
        return touching;
    }
    /**
     * 指定した色に触れているかを判定する
     * @param {string} targetRgb #始まりのカラー文字列
     * @returns {Promise.<boolean>} 色にタッチしたとき true
     */ async $isTouchingColor(targetRgb) {
        if (this.render && this.render.renderer && targetRgb && typeof targetRgb === 'string' && targetRgb.substring(0, 1) === '#') {
            const _renderer = this.render.renderer;
            const _targetRgb = (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).Cast.toRgbColorObject(targetRgb);
            return await _renderer.isTouchingColor(this.drawableID, _targetRgb);
        }
        return false;
    }
    /**
     * 自身の色(maskRgb)が指定色(targetRgb)に触れているかを判定する
     * @param {Array.<number>} targetRgb [r,g,b] 0 - 255
     * @param {Array.<number>} maskRgb 
     * @returns 
     */ async $colorIsTouchingColor(targetRgb, maskRgb) {
        if (this.render && this.render.renderer && targetRgb && typeof targetRgb === 'string' && targetRgb.substring(0, 1) === '#' && maskRgb && typeof maskRgb === 'string' && maskRgb.substring(0, 1) === '#') {
            const _renderer = this.render.renderer;
            const _targetRgb = (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).Cast.toRgbColorObject(targetRgb);
            const _maskRgb = (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).Cast.toRgbColorObject(maskRgb);
            return await _renderer.isTouchingColor(this.drawableID, _targetRgb, _maskRgb);
        }
        return false;
    }
    $broadcast(messageId, ...args) {
        const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
        if (runtime) {
            const eventId = `message_${messageId}`;
            if (this.modules == undefined) this.modules = new Map();
            this.modules.set(eventId, []);
            const sendTargets = [];
            runtime.emit(eventId, this.modules, sendTargets, ...args);
        }
    }
    async $broadcastAndWait(messageId, ...args) {
        const wait = (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).wait;
        const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
        if (runtime) {
            const eventId = `message_${messageId}`;
            if (this.modules == undefined) this.modules = new Map();
            this.modules.set(eventId, []);
            const sendTarges = [];
            runtime.emit(eventId, this.modules, sendTarges, ...args);
            await wait(10);
            const promises = this.modules.get(eventId);
            if (promises && promises.length > 0) {
                await Promise.all(promises);
                return;
            }
        }
    }
    // $broadcastToTargets(messageId, target, ...args) {
    //     const runtime = playGround.runtime;
    //     if(runtime){
    //         const eventId = `message_${messageId}`;
    //         this.modules.set(eventId, []);
    //         const _targets:Entity[] = [];
    //         if( Array.isArray(target) ) {
    //             target.map(v=>{
    //                 if( v instanceof Entity) {
    //                     _targets.push(v);
    //                 }
    //             })
    //         }else{
    //             const _target = target;
    //             if( _target instanceof Entity) {
    //                 _targets.push(_target);
    //             }
    //         }
    //         if(sendTargets.length > 0) {
    //             runtime.emit(eventId, this.modules, _targets, ...args);
    //         }     
    //     }
    // }
    // async $broadcastAndWaitToTargets(messageId, target:Entity|Entity[], ...args) {
    //     const runtime = playGround.runtime;
    //     if(runtime){
    //         const wait = Libs.default.wait;
    //         const eventId = `message_${messageId}`;
    //         this.modules.set(eventId, []);
    //         const _targets:Entity[] = [];
    //         if( Array.isArray(target) ) {
    //             target.map(v=>{
    //                 if( v instanceof Entity) {
    //                     _targets.push(v);
    //                 }
    //             })
    //         }else{
    //             const _target = target;
    //             if( _target instanceof Entity) {
    //                 _targets.push(_target);
    //             }
    //         }
    //         if(sendTargets.length > 0) {
    //             runtime.emit(eventId, this.modules, _targets, ...args);
    //             await wait(10);
    //             const promises = this.modules.get(eventId);
    //             if(promises.length > 0) {
    //                 await Promise.all(promises);
    //                 return;
    //             }
    //         }    
    //     }
    // }
    /**
     * messageId を使い EventEmitter.on を宣言する
     * （他方からemitされたとき受け付け func を実行するため）
     * なお、本メソッドが呼び出される都度、funcを配列に蓄積し、
     * emitされたときは 蓄積したfuncをPromiseとして実行する。
     * @param {*} messageId 
     * @param {*} func 
     */ $whenBroadcastReceived(messageId, func) {
        //const me = this;
        const me = this.getProxyForHat();
        const threadId = me._generateUUID();
        const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
        if (runtime) {
            const eventId = `message_${messageId}`;
            // func をためる。
            const funcArr = $2401b5b232271269$export$bc644a473284d944.broadcastReceivedFuncArr;
            let _foundElement = null;
            for (const elem of funcArr)if (elem.eventId == eventId) {
                _foundElement = elem;
                break;
            }
            if (_foundElement != undefined) _foundElement.funcArr.push({
                "func": func,
                "threadId": threadId,
                "target": me
            });
            else {
                // 見つからなかったとき
                _foundElement = {
                    "eventId": eventId,
                    "funcArr": [
                        {
                            "func": func,
                            "threadId": threadId,
                            "target": me
                        }
                    ]
                };
                funcArr.push(_foundElement);
                /**
                 * 最初に受け付けたときの on 定義
                 * modules: 実行した処理のpromiseを入れる
                 * toTarget: ここに指定していない先は無視する
                 */ runtime.on(eventId, function(modules, toTarget, ...args) {
                    if (_foundElement) {
                        const funcArr = _foundElement.funcArr;
                        for (const funcElement of funcArr){
                            const _me = funcElement.target;
                            let targetOn = false;
                            if (toTarget.length == 0) targetOn = true;
                            else {
                                const targetIdArr = [];
                                for (const t of toTarget)targetIdArr.push(t.id);
                                if (targetIdArr.includes(_me.id)) targetOn = true;
                            }
                            if (targetOn) _me._whenBroadcastReceivedStartThread(eventId, modules, funcElement, ...args);
                        }
                    }
                });
            }
        }
    }
    _whenBroadcastReceivedStartThread(eventId, modules, funcElement, ...args) {
        const arr = modules.get(eventId);
        const func = funcElement.func;
        const threadId = funcElement.threadId;
        const proxy = funcElement.target;
        //const proxy = me.getProxyForHat();
        proxy.threadId = threadId;
        const obj = proxy.startThreadMessageRecieved(func, proxy, false, ...args);
        obj.originalF = func;
        const promise = new Promise(async (resolve)=>{
            for(;;){
                if (obj.done) break;
                await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(0.1);
            }
            resolve();
        });
        arr.push(promise);
    }
    // すぐに実行する
    $whenRightNow(func) {
        const functionDeclareType = (0, $31a1fe5d0f620d33$export$741a5dc0221ff449).getFunctionDeclares(func);
        if (functionDeclareType.isArrow === true) {
            // アロー関数は許可しない
            console.log(func.toString());
            throw "\u30A4\u30D9\u30F3\u30C8\u3067\u5BA3\u8A00\u3059\u308B\u95A2\u6570\u306F \u30A2\u30ED\u30FC\u95A2\u6570\u3092\u4F7F\u3063\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002";
        }
        if (functionDeclareType.isAsync === false) {
            // async でないときは許可しない
            console.log(func.toString());
            throw "\u30A4\u30D9\u30F3\u30C8\u3067\u5BA3\u8A00\u3059\u308B\u95A2\u6570\u306F async \u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\u3002";
        }
        if (functionDeclareType.isGenerator === true) {
            // Generator は許可しない
            console.log(func.toString());
            throw "WhenRightNow\u30A4\u30D9\u30F3\u30C8\u3067\u5BA3\u8A00\u3059\u308B\u95A2\u6570\u306F Generator\u3092\u4F7F\u3048\u307E\u305B\u3093";
        }
        const me = this;
        setTimeout(async (_)=>{
            const _p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
            const wait = (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).wait;
            const f = func.bind(me);
            await f(me);
            /**
             * 1FPS後にDrawするとちょうどよさげ
             */ //await wait(33);
            await wait(5);
            _p._draw();
        }, 0);
    }
    $broadCastBackdropSwitch(backdropName) {
        const messageId = `BackdropSwitches_${backdropName}`;
        this.$broadcast(messageId, backdropName);
    }
    /**
     * 背景が〇〇になったときの動作
     * @param {*} backdropName 
     * @param {*} func 
     */ $whenBackdropSwitches(backdropName, func) {
        // Stage#nextBackDrop(), Stage#switchBackDrop() にて
        // 変更前のbackdropName と 変更後のbackdropName を比較し
        // 異なる場合、変更後のbackdropNameを使ったメッセージID で emit する
        // ここでは on でメッセージを受け取るが、
        // Entity#whenBroadcastReceived() と同様の処理にする
        const EmitId = `BackdropSwitches_${backdropName}`;
        this.$whenBroadcastReceived(EmitId, func);
    }
    getProxyForHat() {
        const proxy = (0, $3c095c609aef7970$export$a7b2351958a57a3).getProxy(this, (_)=>{
            throw 'NOT FOUND PROPERTY in TARGET';
        });
        //console.log('proxy.stop_this_script_switch='+proxy.stop_this_script_switch)
        return proxy;
    }
    async $whenFlag(func) {
        //const process = Process.default;
        const me = this;
        const flag = (0, $38ab8126b0ae38e9$export$db77ccec0bb4ccac).getControlGreenFlag();
        const clickFunc = async (e)=>{
            me.hatProc(func, me);
            e.stopPropagation();
        };
        flag.addEventListener('click', clickFunc);
    }
    hatProc(func, self) {
        const me = self ? self : this;
        const threadId = me._generateUUID();
        const proxy = me.getProxyForHat();
        proxy.threadId = threadId;
        me.startThread(func, proxy);
        return proxy;
    }
    $whenKeyPressed(key, func) {
        const me = this;
        const p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        const runtime = p.runtime;
        if (key && func && runtime) runtime.on("KEY_PRESSED", function(pressedKey) {
            if (key === pressedKey) {
                if (p.runningGame === false) return; // 緑の旗が押されていないときは何もしない
                // whenClicked と同じ処理
                const addId = `_keyPressed_${key}`;
                const entityId = me.id + addId;
                (0, $810206abd6221b0c$export$8a4dea38c4da78cf).removeObjById(entityId); // 前回のキープレス分を止める
                const threadId = me._generateUUID();
                const proxy = me.getProxyForHat();
                proxy.threadId = threadId;
                if (p.preloadDone === true) me.startThread(func, proxy, false, addId); //二重起動禁止
            }
        });
    }
    /**
     * whenClickedが二重に呼ばれたときは
     * 前回動作しているスレッドを停止させる。
     * @param {function} func 
     */ $whenClicked(func) {
        // 同じオブジェクトで前回クリックされているとき
        // 前回のクリックで起動したものを止める。
        const p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        const addId = '_clicked';
        const me = this;
        const _clickEventF = async (e)=>{
            e.stopPropagation();
            // 緑の旗押されていないときは何もしない。
            if (p.runningGame === false) return;
            let _counter = 0;
            for (const eventf of $2401b5b232271269$export$bc644a473284d944.eventFuncArray){
                _counter += 1;
                eventf(e, _counter);
            }
        };
        const eventf = async (e, _counter)=>{
            const CLICK_COUNTER = _counter; //Entity._clickCounter;
            const entityId = me.id + addId;
            e.stopPropagation();
            // 緑の旗押されていないときは何もしない。
            if (p.runningGame === false) return;
            //threads.removeObjById(entityId); // 前回のクリック分を止める。
            const mouseX = e.offsetX;
            const mouseY = e.offsetY;
            // クリックしたポイントにあるDrawableのうち一番前面にあるものを返す。
            // そのポイントにDrawableがないときは Falseが返る。
            // 第三引数を省略することで全ての表示中のDrawableから探す。
            const _touchDrawableId = me.render.renderer.pick(mouseX, mouseY, 3, 3);
            if (me.drawableID == _touchDrawableId) {
                // 前回のクリック分を止める。
                // me.$soundStopImmediately();
                // me.$speechStopImmediately();
                (0, $810206abd6221b0c$export$8a4dea38c4da78cf).removeObjById(entityId, CLICK_COUNTER); // 前回のクリック分を止める。
                const threadId = me._generateUUID();
                const proxy = me.getProxyForHat();
                proxy.threadCounter = CLICK_COUNTER;
                proxy.threadId = threadId;
                if (p.preloadDone === true) me.startThread(func, proxy, false, addId); //二重起動禁止
            }
        };
        $2401b5b232271269$export$bc644a473284d944.eventFuncArray.push(eventf);
        //Canvas.canvas.removeEventListener('click', eventf);
        //        Canvas.canvas.addEventListener('click', eventf);
        if ($2401b5b232271269$export$bc644a473284d944.clickFirstRegist === true && (0, $57ac7e9ecbc5361f$export$8d01c972ee8b14a9).canvas) {
            (0, $57ac7e9ecbc5361f$export$8d01c972ee8b14a9).canvas.addEventListener('click', _clickEventF);
            $2401b5b232271269$export$bc644a473284d944.clickFirstRegist = false;
        }
    }
    $whenCloned(func) {
        const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
        if (runtime) {
            const eventId = `whenClone_${this.name}`;
            runtime.on(eventId, function(clone) {
                const threadId = clone._generateUUID();
                const proxy = clone.getProxyForHat();
                proxy.threadId = threadId;
                clone.startThread(func, proxy);
            });
        }
    }
    updateVisible(visible) {
        this._visible = visible;
        this.render.renderer.updateDrawableVisible(this.drawableID, visible);
    }
    set visible(_visible) {
        this.updateVisible(_visible);
    }
    $show() {
        this.visible = true;
    }
    $hide() {
        this.visible = false;
    }
    get visible() {
        return this._visible;
    }
    /**
     * @abstract
     */ $setRotationStyle(style) {
    // Spriteクラスで定義する
    }
    /**
     * func はGeneratorの前提
     * @param {*} func 
     * @param {*} entity 
     * @param {*} doubleRunable 
     * @returns 
     */ startThread(func, entity, doubleRunable = true, addId = '') {
        const functionDeclareType = (0, $31a1fe5d0f620d33$export$741a5dc0221ff449).getFunctionDeclares(func);
        if (functionDeclareType.isArrow === true) {
            // アロー関数は許可しない
            console.log(func.toString());
            throw "\u30A4\u30D9\u30F3\u30C8\u3067\u5BA3\u8A00\u3059\u308B\u95A2\u6570\u306F \u30A2\u30ED\u30FC\u95A2\u6570\u3092\u4F7F\u3063\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002";
        }
        if (functionDeclareType.isAsync === false) {
            // async でないときは許可しない
            console.log(func.toString());
            throw "\u30A4\u30D9\u30F3\u30C8\u3067\u5BA3\u8A00\u3059\u308B\u95A2\u6570\u306F async \u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\u3002";
        }
        const _entity = entity;
        // @ts-ignore (proxy properties undefined error)
        const threadId = _entity.threadId;
        const obj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).createObj();
        obj['entityId'] = _entity.id + addId;
        obj.threadId = threadId; //this.id;
        obj['entity'] = _entity;
        obj.doubleRunable = doubleRunable;
        if (functionDeclareType.isGenerator) {
            const _func = func.bind(_entity);
            const _func2 = _func(_entity);
            const _f = async function*() {
                try {
                    yield* _func2; // generator()
                } catch (e) {
                    if (e !== (0, $810206abd6221b0c$export$8a4dea38c4da78cf).THROW_STOP_THIS_SCRIPTS) console.log(e);
                    throw e;
                }
            };
            obj.f = _f();
        } else {
            const _func = func.bind(_entity);
            const f = async function*() {
                try {
                    await _func(_entity);
                } catch (e) {
                    if (e !== (0, $810206abd6221b0c$export$8a4dea38c4da78cf).THROW_STOP_THIS_SCRIPTS) console.log(e);
                    throw e;
                }
            };
            obj.f = f();
        }
        obj.originalF = func;
        (0, $810206abd6221b0c$export$8a4dea38c4da78cf).registThread(obj);
        return obj;
    }
    startThreadMessageRecieved(func, entity, doubleRunable = true, ...args) {
        const functionDeclareType = (0, $31a1fe5d0f620d33$export$741a5dc0221ff449).getFunctionDeclares(func);
        if (functionDeclareType.isArrow === true) {
            // アロー関数は許可しない
            console.log(func);
            throw "\u30A4\u30D9\u30F3\u30C8\u3067\u5BA3\u8A00\u3059\u308B\u95A2\u6570\u306F \u30A2\u30ED\u30FC\u95A2\u6570\u3092\u4F7F\u3063\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002";
        }
        if (functionDeclareType.isAsync === false) {
            // async でないときは許可しない
            console.log(func.toString());
            throw "\u30A4\u30D9\u30F3\u30C8\u3067\u5BA3\u8A00\u3059\u308B\u95A2\u6570\u306F async \u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\u3002";
        }
        const _entity = entity;
        // @ts-ignore (proxy properties undefined error)
        const threadId = _entity.threadId;
        const obj = (0, $810206abd6221b0c$export$8a4dea38c4da78cf).createObj();
        obj.entityId = _entity.id;
        obj.threadId = threadId; //this.id;
        obj.entity = _entity;
        obj.doubleRunable = doubleRunable;
        if (functionDeclareType.isGenerator) {
            const _func = func.bind(_entity);
            obj.f = _func(...args); // generator()
        } else {
            const _func = func.bind(_entity);
            const f = async function*() {
                await _func(...args);
            };
            obj.f = f();
        }
        (0, $810206abd6221b0c$export$8a4dea38c4da78cf).registThread(obj);
        return obj;
    }
    /**
     * @throws THROW_STOP_THIS_SCRIPTS
     */ $stopThisScript() {
        throw (0, $810206abd6221b0c$export$8a4dea38c4da78cf).THROW_STOP_THIS_SCRIPTS;
    }
    $stopOtherScripts() {
        (0, $810206abd6221b0c$export$8a4dea38c4da78cf).stopOtherScripts(this);
    }
    // これは使わない
    stopThread(t) {
        clearTimeout(t);
    }
    pointTowardsMouseCursolGlobal() {
        const p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        if (p.canvas) {
            const rect = p.canvas.getBoundingClientRect();
            const canvasGlobalCenterX = rect.x + rect.width / 2 // - canvasBorderX;
            ;
            const canvasGlobalCenterY = rect.y + rect.height / 2 // - canvasBorderY;
            ;
            const pageX = p.stage.mouse.pageX;
            const pageY = p.stage.mouse.pageY;
            const _mouseXG = pageX - canvasGlobalCenterX;
            const _mouseYG = canvasGlobalCenterY - pageY;
            if (p.render) {
                const _rateX = p.render.stageWidth / p.canvas.width;
                const _rateY = p.render.stageHeight / p.canvas.height;
                const targetX = _mouseXG * _rateX;
                const targetY = _mouseYG * _rateY;
                const dx = targetX - this.$_position.x;
                const dy = targetY - this.$_position.y;
                let direction = 90 - (0, $a98e95d0f90948cf$export$6a7ef315a0d1ef07).radToDeg(Math.atan2(dy, dx));
                if (direction > 180) direction -= 360;
                this.$_direction = direction;
            }
        }
    }
    pointTowardsMouseCursol() {
        // CANVAS 外に出てら ポインターを向かない。
        const mousePosition = (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).mousePosition;
        const targetX = mousePosition.x;
        const targetY = mousePosition.y;
        const dx = targetX - this.$_position.x;
        const dy = targetY - this.$_position.y;
        let direction = 90 - (0, $a98e95d0f90948cf$export$6a7ef315a0d1ef07).radToDeg(Math.atan2(dy, dx));
        if (direction > 180) direction -= 360;
        this.$_direction = direction;
    }
    $_isDrawableActive(drawableID) {
        const drawable = this.render.renderer._allDrawables[drawableID];
        if (drawable && drawable._skin) return true;
        return false;
    }
    /**
     * ポジションプロパティを更新する
     * @param {number} x 
     * @param {number} y 
     */ $setForceXY(x, y) {
        if (this.$_isDrawableActive(this.drawableID)) {
            const _renderer = this.render.renderer;
            const _position = _renderer.getFencedPositionOfDrawable(this.drawableID, [
                x,
                y
            ]);
            this.$_position.x = _position[0];
            this.$_position.y = _position[1];
            _renderer.updateDrawablePosition(this.drawableID, _position);
        } else {
            this.$_position.x = x;
            this.$_position.y = y;
        }
    }
    /**
     * ポジションプロパティを更新する
     * @param {number} x 
     * @param {number} y 
     */ $setXY(x, y) {
        if (this.$_isDrawableActive(this.drawableID)) {
            const _renderer = this.render.renderer;
            const _position = _renderer.getFencedPositionOfDrawable(this.drawableID, [
                x,
                y
            ]);
            this.$_position.x = _position[0];
            this.$_position.y = _position[1];
        //_renderer.updateDrawablePosition(this.drawableID, _position);
        } else {
            this.$_position.x = x;
            this.$_position.y = y;
        }
    }
    $setX(x) {
        if (this.$_isDrawableActive(this.drawableID)) {
            const _renderer = this.render.renderer;
            const _position = _renderer.getFencedPositionOfDrawable(this.drawableID, [
                x,
                this.$_position.y
            ]);
            this.$_position.x = _position[0];
            this.$_position.y = _position[1];
        //             _renderer.updateDrawablePosition(this.drawableID, _position); // <--- これ、position変化するものすべてに必要なのでは？
        } else this.$_position.x = x;
    }
    $changeX(x) {
        if (this.$_isDrawableActive(this.drawableID)) {
            const _renderer = this.render.renderer;
            let _x = this.$_position.x + x;
            const _position = _renderer.getFencedPositionOfDrawable(this.drawableID, [
                _x,
                this.$_position.y
            ]);
            this.$_position.x = _position[0];
            this.$_position.y = _position[1];
        //            _renderer.updateDrawablePosition(this.drawableID, _position); // <--- これ、position変化するものすべてに必要なのでは？
        } else this.$_position.x += x;
    }
    $setY(y) {
        if (this.$_isDrawableActive(this.drawableID)) {
            const _renderer = this.render.renderer;
            const _position = _renderer.getFencedPositionOfDrawable(this.drawableID, [
                this.$_position.x,
                y
            ]);
            this.$_position.x = _position[0];
            this.$_position.y = _position[1];
        //             _renderer.updateDrawablePosition(this.drawableID, _position); // <--- これ、position変化するものすべてに必要なのでは？
        } else this.$_position.y = y;
    }
    $changeY(y) {
        if (this.$_isDrawableActive(this.drawableID)) {
            const _renderer = this.render.renderer;
            let _y = this.$_position.y + y;
            const _position = _renderer.getFencedPositionOfDrawable(this.drawableID, [
                this.$_position.x,
                _y
            ]);
            this.$_position.x = _position[0];
            this.$_position.y = _position[1];
        //             _renderer.updateDrawablePosition(this.drawableID, _position); // <--- これ、position変化するものすべてに必要なのでは？
        } else this.$_position.y += y;
    }
    $speech(words, properties, gender = 'male', locale = 'ja-JP') {
        const _properties = properties ? properties : {};
        const speech = (0, $904c35c2847746ef$export$377108f81375939e).getInstance();
        speech.gender = gender;
        speech.locale = locale;
        speech.speech(this, words, _properties);
    }
    async $speechAndWait(words, properties, gender = 'male', locale = 'ja-JP') {
        const _properties = properties ? properties : {};
        const speech = (0, $904c35c2847746ef$export$377108f81375939e).getInstance();
        speech.gender = gender;
        speech.locale = locale;
        await speech.speechAndWait(this, words, _properties);
    }
    update() {
        if (this.life != Infinity) {
            this.life -= 1 / (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).Env.pace * 1000;
            if (this.life < 0) this.remove();
        }
    }
    remove() {}
    get Mouse() {
        const me = this;
        const mousePosition = {
            "x": 0,
            "y": 0
        };
        Object.defineProperty(mousePosition, "x", {
            get: function() {
                return me.$mouseX;
            }
        });
        Object.defineProperty(mousePosition, "y", {
            get: function() {
                return me.$mouseY;
            }
        });
        return mousePosition;
    }
    async forever(func) {
        await (0, $c2847359be0a9884$export$550acbd06a1f5a6a).while(true, func, this);
    }
    async while(condition, func) {
        await (0, $c2847359be0a9884$export$550acbd06a1f5a6a).while(condition, func, this);
    }
    async repeat(count, func) {
        await (0, $c2847359be0a9884$export$550acbd06a1f5a6a).repeat(count, func, this);
    }
    async repeatUntil(condition, func) {
        await (0, $c2847359be0a9884$export$550acbd06a1f5a6a).repeatUntil(condition, func, this);
    }
    /**
     * キーが押されたとき
     * @param {*} key 
     * @returns 
     */ $isKeyDown(key) {
        return (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).keyIsDown(key);
    }
    /**
     * キーが押されていない
     * @param {*} key 
     * @returns 
     */ $isKeyNotDown(key) {
        return (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).keyIsNotDown(key);
    }
    get $mouseX() {
        const mousePosition = (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).mousePosition;
        return mousePosition.x;
    }
    get $mouseY() {
        const mousePosition = (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).mousePosition;
        return mousePosition.y;
    }
    $resetTimer() {
        this._timer = performance.now();
    }
    get $timer() {
        return performance.now() - this._timer;
    }
    $isMouseDown() {
        return (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).mouseIsPressed();
    }
    $stopAll() {
        (0, $38ab8126b0ae38e9$export$db77ccec0bb4ccac).stopAll();
        const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
        if (runtime) {
            const EmitID_GREEN_MARK_BUTTON_ENABLED = runtime.GREEN_BUTTON_ENABLED;
            runtime.emit(EmitID_GREEN_MARK_BUTTON_ENABLED);
        }
    }
}






class $f64534297d4e371e$export$208cd1682bd0e4b6 extends (0, $2401b5b232271269$export$bc644a473284d944) {
    constructor(options){
        if (typeof options == "string") throw "new Stage() \u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u306E\u307F";
        super("stage", (0, $46d3480c6a43a723$export$8bb8475f9426623c).BACKGROUND_LAYER, options);
        this.effect = {
            color: options && options.effect ? options.effect.color ? options.effect.color : 0 : 0,
            mosaic: options && options.effect ? options.effect.mosaic ? options.effect.mosaic : 0 : 0,
            fisheye: options && options.effect ? options.effect.fisheye ? options.effect.fisheye : 0 : 0
        };
        this.$_position = options && options.position ? {
            x: options.position.x,
            y: options.position.y
        } : {
            x: 0,
            y: 0
        };
        this.direction = options && options.direction ? options.direction : 90;
        this.scale = options && options.scale ? {
            w: options.scale.w,
            h: options.scale.h
        } : {
            w: 100,
            h: 100
        };
        this.keysCode = [];
        this.keysKey = [];
        this.backdrops = new (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).Backdrops();
        this._sprites = [];
        this.skinIdx = -1;
        this.mouse = {
            scratchX: 0,
            scratchY: 0,
            x: 0,
            y: 0,
            down: false,
            pageX: 0,
            pageY: 0,
            clientX: 0,
            clientY: 0
        };
        const me = this;
        // これは Canvasをつくる Element クラスで実行したほうがよさそう（関連性強いため）
        const canvas = (0, $a6b849a6af88d987$export$80606ec500c7d132).canvas;
        const body = document.getElementById('main');
        if (body) body.addEventListener('mousemove', (e)=>{
            me.mouse.pageX = e.pageX;
            me.mouse.pageY = e.pageY;
            e.stopPropagation();
        });
        canvas.addEventListener('mousemove', (e)=>{
            me.mouse.x = e.offsetX;
            me.mouse.y = e.offsetY;
            me.mouse.clientX = e.clientX;
            me.mouse.clientY = e.clientY;
            me.mouse.scratchX = e.offsetX - (0, $a6b849a6af88d987$export$80606ec500c7d132).canvas.width / 2;
            me.mouse.scratchY = (0, $a6b849a6af88d987$export$80606ec500c7d132).canvas.height / 2 - e.offsetY;
        //            e.stopPropagation()
        }, {});
        canvas.addEventListener('mousedown', (e)=>{
            me.mouse.x = e.offsetX;
            me.mouse.y = e.offsetY;
            me.mouse.down = true;
            e.stopPropagation();
        });
        canvas.addEventListener('mouseup', (e)=>{
            me.mouse.x = e.offsetX;
            me.mouse.y = e.offsetY;
            me.mouse.down = false;
            e.stopPropagation();
        });
        (0, $a6b849a6af88d987$export$80606ec500c7d132).stage = this;
    }
    isSprite() {
        return false;
    }
    get sprites() {
        return this._sprites;
    }
    addSprite(sprite) {
        const curSprite = sprite;
        this._sprites.push(curSprite);
        curSprite.z = this._sprites.length;
        this._sortSprites();
    }
    _sortSprites() {
        const n0_sprites = this._sprites;
        const n1_sprites = n0_sprites.sort(function(a, b) {
            if (a.z > b.z) return -1;
            if (b.z > a.z) return 1;
            return 0;
        });
        //        let _z = -1;
        let _z = n1_sprites.length - 1;
        const n2_sprites = n1_sprites.map((s)=>{
            //            s.z = ++_z;
            s.z = --_z;
            return s;
        });
        this._sprites = n2_sprites;
    }
    removeSprite(sprite) {
        const curSprite = sprite;
        const n_sprites = this._sprites.filter((item)=>item !== curSprite);
        this._sprites = n_sprites;
        this._sortSprites();
    }
    update() {
        super.update();
        this.backdrops.setPosition(this.$_position.x, this.$_position.y);
        this.backdrops.setScale(this.scale.w, this.scale.h);
        this.backdrops.setDirection(this.direction);
        this.backdrops.update(this.drawableID);
        for (const _sprite of this._sprites)_sprite.update();
    }
    draw() {
        this.render.renderer.draw();
    }
    sendSpriteBackwards(sprite) {
    // 工事中
    }
    sendSpriteForward(sprite) {
    // 工事中
    }
    sendSpriteToFront(sprite) {
    // 工事中
    }
    sendSpriteToBack(sprite) {
    // 工事中
    }
    isKeyPressed(userKey) {
        let match = false;
        let check;
        typeof userKey === 'string' ? check = userKey.toLowerCase() : check = userKey;
        this.keysKey.indexOf(check) !== -1 && (match = true);
        this.keysCode.indexOf(check) !== -1 && (match = true);
        return match;
    }
    move(x, y) {
        this.$_position.x = x;
        this.$_position.y = y;
        this.backdrops.setPosition(this.$_position.x, this.$_position.y);
    }
    async loadSound(name, soundUrl, options = {}) {
        await this._loadSound(name, soundUrl, options);
    }
    async loadImage(name, imageUrl) {
        this._loadImage(name, imageUrl, this.backdrops);
    }
    async $addSound(soundData) {
        if (arguments.length > 1) throw "Sound.add \u5F15\u6570\u304C\u591A\u3044";
        let _soundData;
        if (soundData == undefined) throw "\u3010Stage.Sound.add\u3011\u30B5\u30A6\u30F3\u30C9\u30C7\u30FC\u30BF\u306E\u6307\u5B9A\u304C\u3042\u308A\u307E\u305B\u3093";
        else if (soundData == undefined || typeof soundData == "string") {
            _soundData = (0, $a6b849a6af88d987$export$80606ec500c7d132).loadedSounds[soundData];
            if (_soundData == undefined) throw "\u3010Stage.Sound.add\u3011\u6B63\u3057\u3044\u30B5\u30A6\u30F3\u30C9\u540D\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        } else _soundData = soundData;
        if (_soundData['name'] == undefined || _soundData['data'] == undefined) throw "\u3010Stage.Sound.add\u3011\u6B63\u3057\u3044\u30B5\u30A6\u30F3\u30C9\u30C7\u30FC\u30BF\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        const name = _soundData.name;
        const data = _soundData.data;
        const promise = this._addSound(name, data, {});
        return promise;
    }
    async $addImage(imageData) {
        if (arguments.length > 1) throw "Image.add \u5F15\u6570\u304C\u591A\u3044";
        let _imageData;
        if (imageData == undefined) throw "\u3010Stage.Image.add\u3011\u30A4\u30E1\u30FC\u30B8\u30C7\u30FC\u30BF\u306E\u6307\u5B9A\u304C\u3042\u308A\u307E\u305B\u3093";
        else if (typeof imageData == "string") {
            _imageData = (0, $a6b849a6af88d987$export$80606ec500c7d132).loadedImages[imageData];
            if (_imageData == undefined) throw "\u3010Stage.Image.add\u3011\u6B63\u3057\u3044\u30A4\u30E1\u30FC\u30B8\u540D\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        } else _imageData = imageData;
        if (_imageData['name'] == undefined || _imageData['data'] == undefined) throw "\u3010Stage.Image.add\u3011\u6B63\u3057\u3044\u30A4\u30E1\u30FC\u30B8\u30C7\u30FC\u30BF\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        const name = _imageData.name;
        const data = _imageData.data;
        await this._addImage(name, data, this.backdrops);
    }
    $getImageNames() {
        const iterator = this.backdrops.costumes.keys();
        return Array.from(iterator);
    }
    $emitWhenBackdropChange(backdropName, newBackdropName) {
        // 新しい名前の背景に切り替わったとき
        if (backdropName !== newBackdropName) this.$broadCastBackdropSwitch(newBackdropName);
    }
    $nextBackDrop() {
        if (!this.isAlive()) return;
        if (this.backdrops) {
            const name_before = this.backdrops.currentSkinName();
            this.backdrops.nextCostume();
            const name_after = this.backdrops.currentSkinName();
            this.$emitWhenBackdropChange(name_before, name_after);
        }
    //this.ifOnEdgeBounds();
    }
    $switchBackDrop(val) {
        if (!this.isAlive()) return;
        if (val) {
            if (typeof val === 'string') {
                const _name = val;
                if (this.backdrops) {
                    const name_before = this.backdrops.currentSkinName();
                    this.backdrops.switchCostumeByName(_name);
                    const name_after = this.backdrops.currentSkinName();
                    this.$emitWhenBackdropChange(name_before, name_after);
                }
            } else if (Number.isInteger(val)) {
                const _idx = val;
                if (this.backdrops) {
                    const name_before = this.backdrops.currentSkinName();
                    this.backdrops.switchCostumeByNumber(_idx);
                    const name_after = this.backdrops.currentSkinName();
                    this.$emitWhenBackdropChange(name_before, name_after);
                }
            }
        }
    }
    remove() {
        for (const _s of this.sprites)_s.remove();
        try {
            this.render.renderer.destroyDrawable(this.drawableID, (0, $46d3480c6a43a723$export$8bb8475f9426623c).SPRITE_LAYER);
        } catch (e) {} finally{}
        this.backdrops.destroyAllSkin();
        this.$delete();
    }
    async $askAndWait(text) {
        const question = new (0, $c720f210576cee38$export$dc467e08448586e8)();
        const me = this;
        return new Promise(async (resolve)=>{
            const answer = await question.ask(me, text);
            resolve(answer);
        });
    }
    get Backdrop() {
        const stage = this;
        const backdrop = {
            "no": 0,
            "name": ""
        };
        Object.defineProperty(backdrop, "no", {
            get: function() {
                return stage.backdrops.currentSkinNo();
            }
        });
        Object.defineProperty(backdrop, "name", {
            get: function() {
                return stage.backdrops.currentSkinName();
            }
        });
        return backdrop;
    }
    get L() {
        return this.Looks;
    }
    get Looks() {
        return {
            "Backdrop": this.Backdrop,
            "nextBackdrop": this.$nextBackDrop.bind(this),
            "switchBackdrop": this.$switchBackDrop.bind(this),
            "changeEffectBy": this.$changeEffectBy.bind(this),
            "setEffectTo": this.$setEffectTo.bind(this),
            "clearEffects": this.$clearEffect.bind(this)
        };
    }
    get C() {
        return this.Control;
    }
    get Control() {
        return {
            "wait": this.$waitSeconds.bind(this),
            "waitUntil": this.$waitUntil.bind(this),
            "waitWhile": this.$waitWhile.bind(this),
            //---- Entity
            "forever": this.forever.bind(this),
            "while": this.while.bind(this),
            "repeat": this.repeat.bind(this),
            "repeatUntil": this.repeatUntil.bind(this),
            "stopAll": this.$stopAll.bind(this),
            "stopThisScript": this.$stopThisScript.bind(this),
            "stopOtherScripts": this.$stopOtherScripts.bind(this)
        };
    }
    get Sensing() {
        return {
            "askAndWait": this.$askAndWait.bind(this),
            "isKeyDown": this.$isKeyDown.bind(this),
            "isKeyNotDown": this.$isKeyNotDown.bind(this),
            "isMouseDown": this.$isMouseDown.bind(this),
            "Mouse": this.Mouse,
            "timer": this.$timer,
            "resetTimer": this.$resetTimer.bind(this),
            "getBackDrop": null
        };
    }
    get E() {
        return this.Event;
    }
    get Event() {
        return {
            "broadcast": this.$broadcast.bind(this),
            "broadcastAndWait": this.$broadcastAndWait.bind(this),
            // "broadcastToTargets": this.$broadcastToTargets.bind(this),
            // "broadcastAndWaitToTargets": this.$broadcastAndWaitToTargets.bind(this),
            "whenBroadcastReceived": this.$whenBroadcastReceived.bind(this),
            "whenRightNow": this.$whenRightNow.bind(this),
            "whenFlag": this.$whenFlag.bind(this),
            "whenKeyPressed": this.$whenKeyPressed.bind(this),
            //"whenMouseTouched": this.$whenMouseTouched.bind(this),
            //"whenTargetMouseTouched": this.$whenTouchingTarget.bind(this),
            "whenCloned": this.$whenCloned.bind(this),
            "whenClicked": this.$whenClicked.bind(this),
            "whenBackdropSwitches": this.$whenBackdropSwitches.bind(this)
        };
    }
    get Image() {
        return {
            "add": this.$addImage.bind(this),
            "names": this.$getImageNames.bind(this)
        };
    }
    get Sound() {
        return {
            "add": this.$addSound.bind(this),
            "switch": this.$soundSwitch.bind(this),
            "next": this.$nextSound.bind(this),
            "play": this.$soundPlay.bind(this),
            "playUntilDone": this.$startSoundUntilDone.bind(this),
            "setOption": this.$setOption.bind(this),
            "changeOptionValue": this.$changeOptionValue.bind(this),
            "clearEffects": this.$clearSoundEffect.bind(this),
            "stop": this.$soundStop.bind(this),
            "stopImmediately": this.$soundStopImmediately.bind(this)
        };
    }
}




class $a6b849a6af88d987$export$a0e63789891d6be2 {
    /**
     * 
     * @return {PlayGround}
     */ static getInstance() {
        if ($a6b849a6af88d987$export$a0e63789891d6be2._instance == undefined) $a6b849a6af88d987$export$a0e63789891d6be2._instance = new $a6b849a6af88d987$export$a0e63789891d6be2();
        return $a6b849a6af88d987$export$a0e63789891d6be2._instance;
    }
    constructor(){
        this._render = null;
        this._id = this._generateUUID();
        this._runtime = null;
        this._preloadImagePromise = [];
        this._preloadSoundPromise = [];
        this._preloadFontPromise = [];
        this._loadedImages = {};
        this._loadedSounds = {};
        //        this._dataPools = {};
        this._preloadDone = false;
        this._prepaeDone = false;
        this._stage = null;
        this._monitors = null;
        this.runningGame = false;
        this._canvas = null;
        this._flag = null;
        this.mainTmp = null;
        this.main = undefined;
        this.preload = null;
        this.prepare = null;
        this.setting = null;
        this.draw = null;
        this._textCanvas = null;
    }
    get monitors() {
        return this._monitors;
    }
    set monitors(_monitors) {
        this._monitors = _monitors;
    }
    isPrepareDone() {
        return this._prepaeDone;
    }
    // clearPools() {
    //     const _pool = this._dataPoolSprite;
    //     for (let key in _pool){ 
    //         delete this._dataPoolSprite[key]
    //     }
    // }
    get loadedImages() {
        return this._loadedImages;
    }
    get loadedSounds() {
        return this._loadedSounds;
    }
    // get dataPools() {
    //     return this._dataPools;
    // }
    // set dataPools(_dataPool) {
    //     this._dataPools = _dataPool;
    // }
    get Element() {
        return 0, $38ab8126b0ae38e9$export$db77ccec0bb4ccac;
    }
    get Stage() {
        return 0, $f64534297d4e371e$export$208cd1682bd0e4b6;
    }
    _generateUUID() {
        return (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).generateUUID();
    }
    get NowLoading() {
        return 0, $4485307d604d6e38$export$2c9ea5e5b5ee8a8c;
    }
    get threads() {
        return 0, $810206abd6221b0c$export$8a4dea38c4da78cf;
    }
    get render() {
        if (this._render == undefined) throw 'render undefined error';
        return this._render;
    }
    set render(render) {
        // _init() の中で設定される。
        this._render = render;
    }
    set runtime(runtime) {
        this._runtime = runtime;
    }
    get runtime() {
        if (this._runtime == undefined) throw 'runtime undefined error';
        return this._runtime;
    }
    set stage(stage) {
        this._stage = stage;
    }
    get stage() {
        if (this._stage == undefined) throw 'stage undefined error';
        return this._stage;
    }
    set canvas(canvas) {
        this._canvas = canvas;
    }
    get canvas() {
        if (this._canvas == undefined) throw 'canvas undefined error';
        return this._canvas;
    }
    set textCanvas(textCanvas) {
        this._textCanvas = textCanvas;
    }
    get textCanvas() {
        if (this._textCanvas == undefined) throw 'textCanvas undefined error';
        return this._textCanvas;
    }
    get $stageWidth() {
        if (this._render) return this._render.stageWidth;
        throw 'unable calclulate stageWidth';
    }
    get $stageHeight() {
        if (this._render) return this._render.stageHeight;
        throw 'unable calclulate stageHeight';
    }
    /**
     * get randering rate ( when resized )
     * @returns 
     */ getRenderRate() {
        return (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).renderRate;
    }
    set flag(flag) {
        this._flag = flag;
    }
    get flag() {
        if (this._flag) return this._flag;
        throw 'unable to get flag element';
    }
    ifMainExist() {
        const main = document.getElementById('main');
        if (main) return main;
        return false;
    }
    removeMainIfExist() {
        const main = this.ifMainExist();
        if (main) main.remove();
    }
    async _reStart() {
        //        this.clearPools();
        //        console.log('befor _prepare');
        //        await this._prepare();
        await this._setting();
    }
    /**
     * HTMLヘッダーtitle
     */ get title() {
        return document.title;
    }
    set title(_title) {
        document.title = _title;
    }
    async _init() {
        //        const keyboard = Keyboard.default;
        //        keyboard.startWatching();
        // Now Loading 準備 START
        const mainTmp = document.createElement('main');
        this.mainTmp = mainTmp;
        mainTmp.id = 'mainTmp';
        mainTmp.classList.add('nowLoading');
        mainTmp.style.zIndex = '9999'; // 一番手前 ( 本体main z-index= 999)
        mainTmp.style.position = 'absolute';
        mainTmp.style.touchAction = 'manipulation';
        mainTmp.style.width = `${innerWidth}px`;
        mainTmp.style.height = `${innerHeight}px`;
        document.body.appendChild(mainTmp);
        await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(100);
        this._preload();
        await this._waitUntilPreloadDone();
        await (0, $38ab8126b0ae38e9$export$db77ccec0bb4ccac).init();
        const main = this.main;
        if (main == undefined) throw 'unable to add main classList';
        main.classList.add((0, $38ab8126b0ae38e9$export$db77ccec0bb4ccac).DISPLAY_NONE);
        this._render = new (0, $e358fae1ef53461c$export$160ae30d75f98247)();
        this._runtime = new (0, $b77d4250b288fbfb$export$269330a1f1074312)();
        if (this._render == undefined || this._render.renderer == undefined) throw 'unable to execute attachRenderer';
        this._runtime.attachRenderer(this._render.renderer);
        //        this.clearPools();
        await this._prepare();
        this._prepaeDone = true;
        await this._setting();
        await (0, $38ab8126b0ae38e9$export$db77ccec0bb4ccac).flagInit();
        //await this._setting();
        this.runningGame = false;
        this._runtime.on('RUNNING_GAME', ()=>{
            this.runningGame = true;
        });
        this._runtime.on('PAUSING_GAME', ()=>{
            this.runningGame = false;
        });
        await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(100);
        // Mainタグから非表示のクラスを除去しフラグとキャンバスを表示する
        main.classList.remove((0, $38ab8126b0ae38e9$export$db77ccec0bb4ccac).DISPLAY_NONE);
        // NowLoadingを消す。
        this.mainTmp.remove();
    }
    async _preload() {
        if (this.preload) this.preload(this);
    }
    async _prepare() {
        // prepareメソッドの実行を開始する
        if (this.prepare) {
            await this.prepare(this);
            await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait((0, $aa5c463d8e2daad8$export$6c0517834721cef7).pace);
            if (this._stage) {
                this._stage.update();
                this._stage.draw();
            }
        }
    }
    async _setting() {
        if (this.setting) await this.setting(this);
    }
    _draw() {
        if (this._stage) {
            this._stage.update();
            this._stage.draw();
            // draw関数を定義済であれば実行する
            // これは p5.js の名残り。なくてもよいと思う。
            if (this.draw) this.draw();
        }
        if (this._monitors) this._monitors.draw();
    }
    $loadImage(imageUrl, name, translate) {
        let _name;
        if (name) _name = name;
        else _name = imageUrl.replace(/\.[^.]+$/, '');
        const data = (0, $682308166500cfe9$export$8905ce1c7a2464a1).loadImage(imageUrl, _name, translate);
        this._preloadImagePromise.push(data);
        return data;
    }
    $loadSound(soundUrl, name) {
        let _name;
        if (name) _name = name;
        else _name = soundUrl.replace(/\.[^.]+$/, '');
        const data = (0, $c988ffb06aab2c0b$export$24c780d5dcde4172).loadSound(soundUrl, _name);
        this._preloadSoundPromise.push(data);
        return data;
    }
    loadFont(fontUrl, name) {
        const font = (0, $e6dc6e757c4e32b1$export$812303d6cad736b3).fontLoad(fontUrl, name);
        this._preloadFontPromise.push(font);
        return font;
    }
    spriteClone(src, callback) {
        if (src instanceof (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).Sprite) {
            const _src = src;
            _src.$clone().then(async (c)=>{
                if (callback) {
                    const _callback = callback.bind(c);
                    _callback();
                }
            });
        }
    }
    get preloadDone() {
        return this._preloadDone;
    }
    async _waitUntilPreloadDone() {
        if (this._preloadImagePromise.length > 0) {
            const _images = await Promise.all(this._preloadImagePromise);
            for (const v of _images)this._loadedImages[v.name] = {
                'name': v.name,
                'data': v.data
            };
        }
        if (this._preloadSoundPromise.length > 0) {
            const _sounds = await Promise.all(this._preloadSoundPromise);
            for (const v of _sounds)this._loadedSounds[v.name] = {
                'name': v.name,
                'data': v.data
            };
        }
        if (this._preloadFontPromise.length > 0) {
            const _fonts = await Promise.all(this._preloadFontPromise);
            for (const v of _fonts)// Font を登録する
            document.fonts.add(v);
        }
        this._preloadDone = true;
    }
    get Image() {
        return {
            "load": this.$loadImage.bind(this)
        };
    }
    get Sound() {
        return {
            "load": this.$loadSound.bind(this)
        };
    }
    $stopAll() {
        (0, $810206abd6221b0c$export$8a4dea38c4da78cf).stopThreadsInterval();
    }
    get Control() {
        return {
            "stopAll": this.$stopAll.bind(this)
        };
    }
}
const $a6b849a6af88d987$export$80606ec500c7d132 = $a6b849a6af88d987$export$a0e63789891d6be2.getInstance();




class $b307d41ec08c0548$export$7221f75269e0795b {
    static get RotationStyle() {
        return 0, $380bce3af1d7e09d$export$f4507c5cf8887f06;
    }
    /**
     * @constructor
     */ constructor(){
        this.render = (0, $a6b849a6af88d987$export$80606ec500c7d132).render;
        this.skinId = undefined;
        this.costumes = new Map();
        this._position = {
            x: 0,
            y: 0
        };
        this._direction = 90;
        this._scale = {
            x: 100,
            y: 100
        };
        this._rotationStyle = (0, $380bce3af1d7e09d$export$f4507c5cf8887f06).ALL_AROUND;
        this._rotationStylePatterns = [
            (0, $380bce3af1d7e09d$export$f4507c5cf8887f06).LEFT_RIGHT,
            (0, $380bce3af1d7e09d$export$f4507c5cf8887f06).DONT_ROTATE,
            (0, $380bce3af1d7e09d$export$f4507c5cf8887f06).ALL_AROUND
        ];
    }
    async addImage(name, image) {
        await this._setSkin(name, image);
        await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait((0, $aa5c463d8e2daad8$export$6c0517834721cef7).pace);
    }
    async loadImage(name, image) {
        const _img = await (0, $682308166500cfe9$export$8905ce1c7a2464a1).loadImage(image, name);
        this.addImage(name, _img);
    }
    async _setSkin(name, _img) {
        if ((0, $682308166500cfe9$export$8905ce1c7a2464a1).isSVG(_img)) {
            // 複数回ロードしたら、その都度 skinId は変わる
            const _svgText = _img;
            this._setSvgSkin(_svgText).then((v)=>{
                const _skinId = v;
                this.costumes.set(name, _skinId);
                if (this.skinId == null) this.skinId = _skinId; // 初回のSkinId 
            });
        } else {
            const _bitmap = _img;
            const _skinId = await this._setBitmapSkin(_bitmap);
            this.costumes.set(name, _skinId);
            if (this.skinId == null) this.skinId = _skinId; // 初回のSkinId 
        }
    }
    async _setSvgSkin(_svgText) {
        if (this.render && this.render.renderer) {
            const skinId = this.render.renderer.createSVGSkin(_svgText);
            // [2025/2/27] 姑息な対応
            // willReadFrequently を設定するために SKINインスタンスを取り出し、
            // SVGSkinのコンストラクターで実施すみの下記【A】２行をやり直す。
            const _skin = this.render.renderer._allSkins[skinId];
            _skin._canvas.remove(); // <== 意味があるのか不明。
            /*【A】*/ _skin._canvas = document.createElement('canvas');
            /*【A】*/ _skin._context = _skin._canvas.getContext("2d", {
                willReadFrequently: true
            });
            return skinId;
        }
        throw 'unable to execute createSVGSkin';
    }
    async _setBitmapSkin(_bitmap) {
        if (this.render && this.render.renderer) {
            const skinId = await this.render.renderer.createBitmapSkin(_bitmap);
            return skinId;
        }
        throw 'unable to execute createBitmapSkin';
    }
    setRotationStyle(_style) {
        if (this._rotationStylePatterns.includes(_style)) this._rotationStyle = _style;
    }
    setDirection(direction) {
        const _direction = (0, $fa849af9eaa7552a$export$cdbe365d8c7d477d).wrapClamp(direction, -179, 180);
        if (this._rotationStyle == (0, $380bce3af1d7e09d$export$f4507c5cf8887f06).LEFT_RIGHT) {
            if (_direction < 0 || _direction > 180) {
                // left 
                this._direction = 90;
                this._scale.x = -Math.abs(this._scale.x);
            } else {
                // right
                this._direction = 90;
                this._scale.x = Math.abs(this._scale.x);
            }
            return;
        }
        if (this._rotationStyle == (0, $380bce3af1d7e09d$export$f4507c5cf8887f06).ALL_AROUND) {
            this._direction = _direction;
            return;
        }
        return;
    }
    setPosition(x, y) {
        this._position.x = x;
        this._position.y = y;
    }
    setScale(x, y) {
        this._scale.x = x;
        this._scale.y = y;
    }
    switchCostumeByName(name) {
        if (this.costumes.has(name)) this.skinId = this.costumes.get(name);
    // do nothing
    }
    switchCostumeByNumber(idx) {
        if ((0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).isInteger(idx)) {
            const _keys = this.costumes.keys;
            if (0 > idx || idx == _keys.length || idx > _keys.length) ;
            else {
                const _name = _keys[idx];
                this.skinId = this.costumes.get(_name);
            }
        }
    // do nothing
    }
    destroyAllSkin() {
        if (this.render && this.render.renderer) {
            const costumesKeys = Array.from(this.costumes.keys());
            for (const name of costumesKeys){
                const skinId = this.costumes.get(name);
                if (skinId) this.render.renderer.destroySkin(skinId);
            }
            this.costumes.clear();
        }
    }
    currentSkinName() {
        const costumesKeys = Array.from(this.costumes.keys());
        if (costumesKeys.length == 0) return '';
        if (this.skinId == undefined) {
            const name = costumesKeys[0];
            return name;
        }
        for (const _name of costumesKeys){
            const _skinId = this.costumes.get(_name);
            if (_skinId == this.skinId) return _name;
        }
        return '';
    }
    currentSkinNo() {
        const costumesKeys = Array.from(this.costumes.keys());
        if (costumesKeys.length == 0) return -1;
        if (this.skinId == null) return -1;
        for(let _idx = 0; _idx < costumesKeys.length; _idx++){
            const _name = costumesKeys[_idx];
            const _skinId = this.costumes.get(_name);
            if (_skinId == this.skinId) return _idx;
        }
        return -1;
    }
    nextCostume() {
        const costumesKeys = Array.from(this.costumes.keys());
        if (costumesKeys.length == 0) return; // do nothing
        if (this.skinId == null) {
            const name = costumesKeys[0];
            const _skinId = this.costumes.get(name);
            this.skinId;
            return;
        }
        // search next skinId
        let _idx = 0;
        for (const _name of costumesKeys){
            const _skinId = this.costumes.get(_name);
            if (_skinId == this.skinId) {
                if (_idx == costumesKeys.length - 1) {
                    const nextName = costumesKeys[0];
                    this.skinId = this.costumes.get(nextName);
                } else {
                    const nextName = costumesKeys[_idx + 1];
                    this.skinId = this.costumes.get(nextName);
                }
                return;
            }
            _idx += 1;
        }
    // do nothing
    }
    update(drawableID, effect = {}) {
        if (this.render && this.render.renderer) {
            const _skinId = this.skinId;
            if (_skinId && this.isSvgSkin(_skinId)) {
                if (!this.isSvgComplete(_skinId)) return;
            }
            const properties = {};
            const skinObj = {
                skinId: _skinId
            };
            const directionObj = {
                direction: this._direction
            };
            const scaleObj = {
                scale: [
                    this._scale.x,
                    this._scale.y
                ]
            };
            const positionObj = {
                position: [
                    this._position.x,
                    this._position.y
                ]
            };
            Object.assign(properties, skinObj, directionObj, scaleObj, positionObj, effect);
            this.render.renderer.updateDrawableProperties(drawableID, properties);
        }
    }
    isSvgSkin(skinId) {
        if (this.render && this.render.renderer) {
            const _skin = this.render.renderer._allSkins[skinId];
            if (_skin && _skin.constructor.name == 'SVGSkin') return true;
        }
        return false;
    }
    isSvgComplete(skinId) {
        if (this.render && this.render.renderer) {
            const _skin = this.render.renderer._allSkins[skinId];
            if (_skin && _skin.constructor.name == 'SVGSkin') {
                const _svgImage = _skin._svgImage;
                if (_svgImage.complete) return true;
            }
            return true;
        }
        return false;
    }
}


class $84361c868fac6da7$export$871e6904fa4a901e extends (0, $b307d41ec08c0548$export$7221f75269e0795b) {
}
















class $33cdb7a1af6f1eab$export$3de16b9a4e4a99f4 extends (0, $2401b5b232271269$export$bc644a473284d944) {
    static{
        this.Events = {
            DROP_START: 'DropStart',
            DROP_COMPLETE: 'DropComplete'
        };
    }
    constructor(monitorId, label){
        super(monitorId, (0, $46d3480c6a43a723$export$8bb8475f9426623c).MONITOR_LAYER);
        this._monitorId = monitorId;
        this._label = label;
        this._visible = true;
        this._skin = null;
        this.renderer = this.render.renderer;
        this._position = {
            x: 0,
            y: 0
        };
        this._scale = {
            w: 100,
            h: 100
        };
        this._dropEnabled = true;
        this._moveDistance = null;
        const me = this;
        const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
        if (runtime == undefined) throw 'Not Found runtime error';
        runtime.on($33cdb7a1af6f1eab$export$3de16b9a4e4a99f4.Events.DROP_START, (senderDrawableID)=>{
            if (me.drawableID === senderDrawableID) {
                // DROP開始したモニターは階層最上位にする
                me.renderer.setDrawableOrder(me.drawableID, Infinity, (0, $46d3480c6a43a723$export$8bb8475f9426623c).MONITOR_LAYER, true);
                // マウスが触った場所と左上隅の距離（位置関係）を記録する。モニターDROP時に利用する
                me._moveDistance = {
                    x: me.$mouseX - me._position.x,
                    y: me.$mouseY - me._position.y
                };
                me._skin.dropping = true;
            } else {
                me._dropEnabled = false;
                me._moveDistance = null;
                me._skin.dropping = false;
            }
        });
        runtime.on($33cdb7a1af6f1eab$export$3de16b9a4e4a99f4.Events.DROP_COMPLETE, ()=>{
            me._dropEnabled = true;
            me._moveDistance = null;
            me._skin.dropping = false;
        });
        this._preDraw = true;
    }
    get monitorId() {
        return this._monitorId;
    }
    get position() {
        return this._position;
    }
    set position(_position) {
        if (_position != undefined && _position.x != undefined && _position.y != undefined) {
            if ((0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).isNumber(_position.x) && (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).isNumber(_position.y)) {
                this._position.x = _position.x;
                this._position.y = _position.y;
                if (this._preDraw === true) this._render();
            }
        }
    }
    get scale() {
        return this._scale;
    }
    set scale(_scale) {
        if (_scale != undefined && _scale.w != undefined && _scale.h != undefined) {
            if ((0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).isNumber(_scale.w) && (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).isNumber(_scale.h)) {
                this._scale.w = _scale.w;
                this._scale.h = _scale.h;
                if (this._preDraw === true) this._render();
            }
        }
    }
    show() {
        this._visible = true;
        if (this._skin != null) this._skin.show();
    }
    hide() {
        this._visible = false;
        if (this._skin != null) this._skin.hide();
    }
    createTextSkin() {
        const skinId = this.renderer.s3CreateMonitorSkin(this.drawableID, this._label);
        this._skinId = skinId;
        this._skin = this.renderer.getS3Skin(skinId);
    }
    /**
     * 文字列型
     */ get text() {
        return this._skin.value;
    }
    /**
     * 文字列型
     */ set text(_text) {
        // 文字列化して格納
        this._skin.value = '' + _text;
    }
    /**
     * 数値型
     */ get value() {
        return this._skin.value;
    }
    /**
     * 数値型
     */ set value(_value) {
        if ((0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).isNumber(_value)) this._skin.value = _value;
        else throw `\u{4E0E}\u{3048}\u{305F}\u{30D1}\u{30E9}\u{30E1}\u{30FC}\u{30BF}(${_value})\u{304C}\u{6570}\u{5024}\u{3067}\u{306F}\u{3042}\u{308A}\u{307E}\u{305B}\u{3093}`;
    }
    get skin() {
        return this._skin;
    }
    set skin(_skin) {
        this._skin = _skin;
    }
    getDefaultHeight() {
        return this._skin.getDefaultHeight();
    }
    getDrawingDimension() {
        let width = 0;
        let height = 0;
        const drawable = this.renderer._allDrawables[this.drawableID];
        if (drawable != null) {
            const bounds = this.renderer.getBounds(this.drawableID);
            height = Math.abs(bounds.top - bounds.bottom);
            width = Math.abs(bounds.left - bounds.right);
        }
        return {
            w: width,
            h: height
        };
    }
    draw() {
        this._preDraw = false;
        if (this._dropEnabled) this._drop();
        this._render();
    }
    _render() {
        if (this.drawableID != null && this.renderer != null && this._skinId != null) {
            const properties = {
                skindId: this._skinId,
                position: [
                    this._position.x,
                    this._position.y
                ],
                scale: [
                    this._scale.w,
                    this._scale.h
                ],
                visible: this._visible
            };
            this.renderer.updateDrawableProperties(this.drawableID, properties);
            this.renderer.updateDrawableSkinId(this.drawableID, this._skinId);
        }
    }
    _drop() {
        const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
        if (runtime == undefined) throw 'Not found runtime error';
        if (this._moveDistance == null) {
            if (this.$isMouseTouching() && this.$isMouseDown()) runtime.emit($33cdb7a1af6f1eab$export$3de16b9a4e4a99f4.Events.DROP_START, this.drawableID);
        } else if (this.$isMouseDown()) {
            this._position.x = this.$mouseX - this._moveDistance.x;
            this._position.y = this.$mouseY - this._moveDistance.y;
        } else {
            runtime.emit($33cdb7a1af6f1eab$export$3de16b9a4e4a99f4.Events.DROP_COMPLETE);
            this._moveDistance = null;
        }
    }
}




class $915556356c8fac47$export$c57006d21d7c3460 {
    /**
     * @param {CanvasRenderingContext2D} ctx - provides a canvas rendering context
     * with 'font' set to the text style of the text to be wrapped.
     */ constructor(ctx){
        this._ctx = ctx;
        this._cache = {};
    }
    // We don't need to set up or tear down anything here. Should these be removed altogether?
    /**
     * Called by the TextWrapper before a batch of zero or more calls to measureText().
     */ beginMeasurementSession() {}
    /**
     * Called by the TextWrapper after a batch of zero or more calls to measureText().
     */ endMeasurementSession() {}
    /**
     * Measure a whole string as one unit.
     * @param {string} text - the text to measure.
     * @returns {number} - the length of the string.
     */ measureText(text) {
        if (!this._cache[text]) this._cache[text] = this._ctx.measureText(text).width;
        return this._cache[text];
    }
}


const $05cd48dc092f8fad$export$82e66f784a197452 = {
    /**
     * The ID value to use for "no item" or when an object has been disposed.
     * @const {int}
     */ ID_NONE: -1
};


/**
 * @fileoverview
 * A representation of a Skin's silhouette that can test if a point on the skin
 * renders a pixel where it is drawn.
 */ /**
 * <canvas> element used to update Silhouette data from skin bitmap data.
 * @type {CanvasElement}
 */ let $064a3240c82e7002$var$__SilhouetteUpdateCanvas;
// Optimized Math.min and Math.max for integers;
// taken from https://web.archive.org/web/20190716181049/http://guihaire.com/code/?p=549
const $064a3240c82e7002$var$intMin = (i, j)=>j ^ (i ^ j) & i - j >> 31;
const $064a3240c82e7002$var$intMax = (i, j)=>i ^ (i ^ j) & i - j >> 31;
/**
 * Internal helper function (in hopes that compiler can inline).  Get a pixel
 * from silhouette data, or 0 if outside it's bounds.
 * @private
 * @param {Silhouette} silhouette - has data width and height
 * @param {number} x - x
 * @param {number} y - y
 * @return {number} Alpha value for x/y position
 */ const $064a3240c82e7002$var$getPoint = (shilhouse, x, y)=>{
    // 0 if outside bounds, otherwise read from data.
    if (x >= shilhouse.width || y >= shilhouse.height || x < 0 || y < 0) return 0;
    return shilhouse.data[(y * shilhouse.width + x) * 4 + 3];
};
/**
 * Memory buffers for doing 4 corner sampling for linear interpolation
 */ const $064a3240c82e7002$var$__cornerWork = [
    new Uint8ClampedArray(4),
    new Uint8ClampedArray(4),
    new Uint8ClampedArray(4),
    new Uint8ClampedArray(4)
];
/**
 * Get the color from a given silhouette at an x/y local texture position.
 * Multiply color values by alpha for proper blending.
 * @param {Silhouette} $0 The silhouette to sample.
 * @param {number} x X position of texture [0, width).
 * @param {number} y Y position of texture [0, height).
 * @param {Uint8ClampedArray} dst A color 4b space.
 * @return {Uint8ClampedArray} The dst vector.
 */ const $064a3240c82e7002$var$getColor4b = (shilhouse, x, y, dst)=>{
    // Clamp coords to edge, matching GL_CLAMP_TO_EDGE.
    // (See github.com/LLK/scratch-render/blob/954cfff02b08069a082cbedd415c1fecd9b1e4fb/src/BitmapSkin.js#L88)
    x = $064a3240c82e7002$var$intMax(0, $064a3240c82e7002$var$intMin(x, shilhouse.width - 1));
    y = $064a3240c82e7002$var$intMax(0, $064a3240c82e7002$var$intMin(y, shilhouse.height - 1));
    // 0 if outside bounds, otherwise read from data.
    if (x >= shilhouse.width || y >= shilhouse.height || x < 0 || y < 0) return dst.fill(0);
    const offset = (y * shilhouse.width + x) * 4;
    // premultiply alpha
    const alpha = shilhouse.data[offset + 3] / 255;
    dst[0] = shilhouse.data[offset] * alpha;
    dst[1] = shilhouse.data[offset + 1] * alpha;
    dst[2] = shilhouse.data[offset + 2] * alpha;
    dst[3] = shilhouse.data[offset + 3];
    return dst;
};
/**
 * Get the color from a given silhouette at an x/y local texture position.
 * Do not multiply color values by alpha, as it has already been done.
 * @param {Silhouette} $0 The silhouette to sample.
 * @param {number} x X position of texture [0, width).
 * @param {number} y Y position of texture [0, height).
 * @param {Uint8ClampedArray} dst A color 4b space.
 * @return {Uint8ClampedArray} The dst vector.
 */ const $064a3240c82e7002$var$getPremultipliedColor4b = (shilhouse, x, y, dst)=>{
    // Clamp coords to edge, matching GL_CLAMP_TO_EDGE.
    x = $064a3240c82e7002$var$intMax(0, $064a3240c82e7002$var$intMin(x, shilhouse.width - 1));
    y = $064a3240c82e7002$var$intMax(0, $064a3240c82e7002$var$intMin(y, shilhouse.height - 1));
    const offset = (y * shilhouse.width + x) * 4;
    dst[0] = shilhouse.data[offset];
    dst[1] = shilhouse.data[offset + 1];
    dst[2] = shilhouse.data[offset + 2];
    dst[3] = shilhouse.data[offset + 3];
    return dst;
};
class $064a3240c82e7002$export$7c0a5847fe948a5e {
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get data() {
        if (this._colorData == undefined) throw 'color data undefined error';
        return this._colorData;
    }
    constructor(){
        /**
         * The width of the data representing the current skin data.
         * @type {number}
         */ this._width = 0;
        /**
         * The height of the data representing the current skin date.
         * @type {number}
         */ this._height = 0;
        /**
         * The data representing a skin's silhouette shape.
         * @type {Uint8ClampedArray}
         */ this._colorData = null;
        // By default, silhouettes are assumed not to contain premultiplied image data,
        // so when we get a color, we want to multiply it by its alpha channel.
        // Point `_getColor` to the version of the function that multiplies.
        this._getColor = $064a3240c82e7002$var$getColor4b;
        this.colorAtNearest = this.colorAtLinear = (_, dst)=>dst.fill(0);
    }
    /**
     * Update this silhouette with the bitmapData for a skin.
     * @param {ImageData|HTMLCanvasElement|HTMLImageElement} bitmapData An image, canvas or other element that the skin
     * @param {boolean} isPremultiplied True if the source bitmap data comes premultiplied (e.g. from readPixels).
     * rendering can be queried from.
     */ update(bitmapData, isPremultiplied = false) {
        let imageData;
        if (bitmapData instanceof ImageData) {
            // If handed ImageData directly, use it directly.
            imageData = bitmapData;
            this._width = bitmapData.width;
            this._height = bitmapData.height;
        } else {
            // Draw about anything else to our update canvas and poll image data
            // from that.
            const canvas = $064a3240c82e7002$export$7c0a5847fe948a5e._updateCanvas();
            const width = this._width = canvas.width = bitmapData.width;
            const height = this._height = canvas.height = bitmapData.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            if (!(width && height)) return;
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(bitmapData, 0, 0, width, height);
            imageData = ctx.getImageData(0, 0, width, height);
        }
        if (isPremultiplied) this._getColor = $064a3240c82e7002$var$getPremultipliedColor4b;
        else this._getColor = $064a3240c82e7002$var$getColor4b;
        this._colorData = imageData.data;
        // delete our custom overriden "uninitalized" color functions
        // let the prototype work for itself
        delete this.colorAtNearest;
        delete this.colorAtLinear;
    }
    /**
     * Sample a color from the silhouette at a given local position using
     * "nearest neighbor"
     * @param {twgl.v3} vec [x,y] texture space (0-1)
     * @param {Uint8ClampedArray} dst The memory buffer to store the value in. (4 bytes)
     * @returns {Uint8ClampedArray} dst
     */ colorAtNearest(vec, dst) {
        return this._getColor(this, Math.floor(vec[0] * (this._width - 1)), Math.floor(vec[1] * (this._height - 1)), dst);
    }
    /**
     * Sample a color from the silhouette at a given local position using
     * "linear interpolation"
     * @param {twgl.v3} vec [x,y] texture space (0-1)
     * @param {Uint8ClampedArray} dst The memory buffer to store the value in. (4 bytes)
     * @returns {Uint8ClampedArray} dst
     */ colorAtLinear(vec, dst) {
        const x = vec[0] * (this._width - 1);
        const y = vec[1] * (this._height - 1);
        const x1D = x % 1;
        const y1D = y % 1;
        const x0D = 1 - x1D;
        const y0D = 1 - y1D;
        const xFloor = Math.floor(x);
        const yFloor = Math.floor(y);
        const x0y0 = this._getColor(this, xFloor, yFloor, $064a3240c82e7002$var$__cornerWork[0]);
        const x1y0 = this._getColor(this, xFloor + 1, yFloor, $064a3240c82e7002$var$__cornerWork[1]);
        const x0y1 = this._getColor(this, xFloor, yFloor + 1, $064a3240c82e7002$var$__cornerWork[2]);
        const x1y1 = this._getColor(this, xFloor + 1, yFloor + 1, $064a3240c82e7002$var$__cornerWork[3]);
        dst[0] = x0y0[0] * x0D * y0D + x0y1[0] * x0D * y1D + x1y0[0] * x1D * y0D + x1y1[0] * x1D * y1D;
        dst[1] = x0y0[1] * x0D * y0D + x0y1[1] * x0D * y1D + x1y0[1] * x1D * y0D + x1y1[1] * x1D * y1D;
        dst[2] = x0y0[2] * x0D * y0D + x0y1[2] * x0D * y1D + x1y0[2] * x1D * y0D + x1y1[2] * x1D * y1D;
        dst[3] = x0y0[3] * x0D * y0D + x0y1[3] * x0D * y1D + x1y0[3] * x1D * y0D + x1y1[3] * x1D * y1D;
        return dst;
    }
    /**
     * Test if texture coordinate touches the silhouette using nearest neighbor.
     * @param {twgl.v3} vec A texture coordinate.
     * @return {boolean} If the nearest pixel has an alpha value.
     */ isTouchingNearest(vec) {
        if (!this._colorData) return false;
        return $064a3240c82e7002$var$getPoint(this, Math.floor(vec[0] * (this._width - 1)), Math.floor(vec[1] * (this._height - 1))) > 0;
    }
    /**
     * Test to see if any of the 4 pixels used in the linear interpolate touch
     * the silhouette.
     * @param {twgl.v3} vec A texture coordinate.
     * @return {boolean} Any of the pixels have some alpha.
     */ isTouchingLinear(vec) {
        if (!this._colorData) return false;
        const x = Math.floor(vec[0] * (this._width - 1));
        const y = Math.floor(vec[1] * (this._height - 1));
        return $064a3240c82e7002$var$getPoint(this, x, y) > 0 || $064a3240c82e7002$var$getPoint(this, x + 1, y) > 0 || $064a3240c82e7002$var$getPoint(this, x, y + 1) > 0 || $064a3240c82e7002$var$getPoint(this, x + 1, y + 1) > 0;
    }
    /**
     * Get the canvas element reused by Silhouettes to update their data with.
     * @private
     * @return {CanvasElement} A canvas to draw bitmap data to.
     */ static _updateCanvas() {
        if (typeof $064a3240c82e7002$var$__SilhouetteUpdateCanvas === 'undefined') $064a3240c82e7002$var$__SilhouetteUpdateCanvas = document.createElement('canvas');
        return $064a3240c82e7002$var$__SilhouetteUpdateCanvas;
    }
}



const $a0e475b373890de3$var$MonitorStyle = {
    MAX_LINE_WIDTH: 480,
    PADDING_VALUE_VIRTICAL: 5,
    PADDING: 10,
    MIN_WIDTH: 50,
    STROKE_WIDTH: 2,
    CORNER_RADIUS: 3,
    FONT: 'Osaka-Mono',
    FONT_SIZE: 10,
    FONT_HEIGHT_RATIO: 0.5,
    LINE_HEIGHT: 11,
    COLORS: {
        FILL: 'rgba(250,250,250,0.9)',
        STROKE: 'rgba(190, 190, 190, 0.9)',
        TEXT_FILL: '#000000',
        DROP_FILL: 'rgba(200,200,200,0.9)',
        DROP_STROKE: 'rgba(190, 190, 190, 0.2)'
    },
    VALUE_COLORS: {
        FILL: 'rgba(255, 165, 0, 0.8)',
        STROKE: 'rgba(255, 165, 0, 0.8)',
        TEXT_FILL: '#ffffff'
    }
};
class $a0e475b373890de3$export$c20a926d9ad205ad extends (0, $bmdED$EventEmitter) {
    static{
        this.Events = {
            /**
         * This constant value is same as Skin class
         * Emitted when anything about the Skin has been altered, such as the appearance or rotation center.
         * @event S3MonitorSkin.event:WasAltered
         */ WasAltered: 'WasAltered'
        };
    }
    /**
     * Create a S3Skin, which stores and/or generates textures for use in rendering.
     * @param {int} id - The unique ID for this S3Skin.
     * @param {!RenderWebGL} renderer - The renderer which will use this skin.
     * @param {string} title - monitor title
     * @constructor
     */ constructor(id, renderer, title, x = 0, y = 0){
        super();
        /** @type {int} */ this._id = id;
        /** @type {RenderWebGL} */ this._renderer = renderer;
        //console.log('createMonitorCanvas')
        //Render.monitorCanvasResize();
        /** @type {Array<number>} */ this._size = [
            0,
            0
        ];
        /** @type {number} */ this._renderedScale = 0;
        /** @type {Array<string>} */ this._lines = [];
        /** @type {string} */ this._title = title;
        /** @type {object} */ this._textAreaSize = {
            width: 0,
            height: 0
        };
        /** @type {boolean} */ this._textDirty = true;
        /** @type {boolean} */ this._textureDirty = true;
        /** @type {Vec3} */ this._rotationCenter = $bmdED$v3.create(0, 0);
        /** @type {WebGLTexture} */ this._texture = null;
        /**
         * The uniforms to be used by the vertex and pixel shaders.
         * Some of these are used by other parts of the renderer as well.
         * @type {Object.<string,*>}
         * @private
         */ this._uniforms = {
            /**
             * The nominal (not necessarily current) size of the current skin.
             * @type {Array<number>}
             */ u_skinSize: [
                0,
                0
            ],
            /**
             * The actual WebGL texture object for the skin.
             * @type {WebGLTexture}
             */ u_skin: null
        };
        /**
         * A silhouette to store touching data, skins are responsible for keeping it up to date.
         * @private
         */ this._silhouette = new (0, $064a3240c82e7002$export$7c0a5847fe948a5e)();
        this._x = x;
        this._y = y;
        this._visible = true;
        this._canvas = null;
        this._measurementProvider = null;
        /** adding */ this._dropping = false;
        this._text = '';
        this.titleLineWidth = -1;
        this.valueLineWidth = -1;
        this.actualValueLineWidth = -1;
        this._ctx = this.createCanvas();
        this._restyleCanvas();
    }
    get dropping() {
        return this._dropping;
    }
    set dropping(_dropping) {
        this._dropping = _dropping;
    }
    createCanvas() {
        /** @type {HTMLCanvasElement} */ this._canvas = document.createElement('canvas');
        const ctx = this._canvas.getContext('2d', {
            willReadFrequently: true
        });
        if (ctx == undefined) throw 'Unable to get ctx';
        this._measurementProvider = new (0, $915556356c8fac47$export$c57006d21d7c3460)(ctx);
        return ctx;
    }
    getDefaultHeight() {
        const paddedHeight = $a0e475b373890de3$var$MonitorStyle.FONT_HEIGHT_RATIO * $a0e475b373890de3$var$MonitorStyle.LINE_HEIGHT + $a0e475b373890de3$var$MonitorStyle.PADDING * 2;
        return paddedHeight;
    }
    /**
     * Dispose of this object. Do not use it after calling this method.
     */ dispose() {
        if (this._texture) {
            this._renderer.gl.deleteTexture(this._texture);
            this._texture = null;
        }
        this._canvas = null;
        this._id = (0, $05cd48dc092f8fad$export$82e66f784a197452).ID_NONE;
    }
    /**
     * @return {int} the unique ID for this Skin.
     */ get id() {
        return this._id;
    }
    get rotationCenter() {
        return this._rotationCenter;
    }
    /**
     * @return {Array<number>} the "native" size, in texels, of this skin.
     */ get size() {
        if (this._textDirty) this._reflowLines();
        return this._size;
    }
    /**
     * Should this skin's texture be filtered with nearest-neighbor or linear interpolation at the given scale?
     * @param {?Array<Number>} scale The screen-space X and Y scaling factors at which this skin's texture will be
     * displayed, as percentages (100 means 1 "native size" unit is 1 screen pixel; 200 means 2 screen pixels, etc).
     * @param {Drawable} drawable The drawable that this skin's texture will be applied to.
     * @return {boolean} True if this skin's texture, as returned by {@link getTexture}, should be filtered with
     * nearest-neighbor interpolation.
     */ useNearest(scale, drawable) {
        return true;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(_x) {
        this._x = _x;
    }
    set y(_y) {
        this._y = _y;
    }
    /**
     * textAreaSize
     * @return {Array<number>} textAreaSize 
     */ get textAreaSize() {
        return this._textAreaSize;
    }
    /**
     * Get the center of the current bounding box
     * @returns {Array<number>} the center of the current bounding box
     */ calculateRotationCenter() {
        return [
            this.size[0] / 2,
            this.size[1] / 2
        ];
    }
    get canvas() {
        if (this._canvas == undefined) throw 'canvas null error';
        return this._canvas;
    }
    get ctx() {
        return this._ctx;
    }
    get measurementProvider() {
        if (this._measurementProvider == undefined) throw 'measurementProvider null error';
        return this._measurementProvider;
    }
    /**
     * @param {Array<number>} scale - The scaling factors to be used.
     * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given size.
     */ getTexture(scale) {
        // The texture only ever gets uniform scale. Take the larger of the two axes.
        const scaleMax = scale ? Math.max(Math.abs(scale[0]), Math.abs(scale[1])) : 100;
        const requestedScale = scaleMax / 100;
        // If we already rendered the text monitor at this scale, we can skip re-rendering it.
        if (this._textureDirty || this._renderedScale !== requestedScale) {
            this._renderTextMonitor(requestedScale);
            this._textureDirty = false;
            // @ts-ignore ( this._ctx is null )
            const textureData = this._ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            const gl = this._renderer.gl;
            if (this._texture === null) {
                const textureOptions = {
                    auto: false,
                    wrap: gl.CLAMP_TO_EDGE
                };
                this._texture = $bmdED$createTexture(gl, textureOptions);
            }
            this._setTexture(textureData);
        }
        if (this._texture == undefined) throw 'texture undefined error ';
        return this._texture;
    }
    /**
     * If the skin defers silhouette operations until the last possible minute,
     * this will be called before isTouching uses the silhouette.
     */ updateSilhouette(scale = [
        100,
        100
    ]) {
        this.getTexture(scale);
    }
    /**
     * Set this skin's texture to the given image.
     * @param {ImageData|HTMLCanvasElement} textureData - The canvas or image data to set the texture to.
     */ _setTexture(textureData) {
        const gl = this._renderer.gl;
        gl.bindTexture(gl.TEXTURE_2D, this._texture);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureData);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        this._silhouette.update(textureData);
    }
    show() {
        this._visible = true;
    }
    hide() {
        this._visible = false;
    }
    /**
     * Set parameters for this text monitor.
     * @param {string} value 
     */ set value(value) {
        this._text = value;
        this._textDirty = true;
        this._textureDirty = true;
        this.emit($a0e475b373890de3$export$c20a926d9ad205ad.Events.WasAltered);
    }
    get value() {
        return this._text;
    }
    _restyleCanvas() {
        // @ts-ignore ( this.ctx is null )
        this.ctx.font = `${$a0e475b373890de3$var$MonitorStyle.FONT_SIZE}px ${$a0e475b373890de3$var$MonitorStyle.FONT}, sans-serif`;
    }
    /**
     * Update the array of wrapped lines and the text dimensions.
     */ _reflowLines() {
        this._restyleCanvas();
        // Measure width of title line
        const _titleLineWidth = this.measurementProvider.measureText('' + this._title);
        const titleLineWidth = _titleLineWidth;
        this.titleLineWidth = titleLineWidth;
        this._lines = [
            '' + this._text
        ]; // always one line, not used line breaker
        // Measure width of longest line to avoid extra-wide bubbles
        const _valueLineWidth = this.measurementProvider.measureText('' + this._text);
        const valueLineWidth = Math.max(_valueLineWidth, $a0e475b373890de3$var$MonitorStyle.MIN_WIDTH);
        this.valueLineWidth = valueLineWidth;
        this.actualValueLineWidth = _valueLineWidth;
        const paddedWidth = $a0e475b373890de3$var$MonitorStyle.PADDING + titleLineWidth + $a0e475b373890de3$var$MonitorStyle.PADDING + valueLineWidth + $a0e475b373890de3$var$MonitorStyle.PADDING;
        const paddedHeight = $a0e475b373890de3$var$MonitorStyle.FONT_HEIGHT_RATIO * $a0e475b373890de3$var$MonitorStyle.LINE_HEIGHT + $a0e475b373890de3$var$MonitorStyle.PADDING * 2;
        this._textAreaSize.width = paddedWidth;
        this._textAreaSize.height = paddedHeight;
        this._size[0] = paddedWidth + $a0e475b373890de3$var$MonitorStyle.STROKE_WIDTH + $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS * 2;
        this._size[1] = paddedHeight + $a0e475b373890de3$var$MonitorStyle.STROKE_WIDTH + $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS * 2;
        this._textDirty = false;
    }
    /**
     * Render this text monitor at a certain scale, using the current parameters, to the canvas.
     * @param {*} scale 
     */ _renderTextMonitor(scale) {
        const _scale = scale;
        const ctx = this.ctx;
        if (ctx == undefined) return;
        if (this._textDirty) this._reflowLines();
        // Calculate the canvas-space sizes of the padded text area and full text monitor
        const paddedWidth = this._textAreaSize.width;
        const paddedHeight = this._textAreaSize.height;
        // Resize the canvas to the correct screen-space size
        this.canvas.width = Math.ceil(this._size[0] * _scale);
        this.canvas.height = Math.ceil(this._size[1] * _scale);
        this._restyleCanvas();
        if (this._visible === true) {
            // Reset the transform before clearing to ensure 100% clearage
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.scale(scale, scale);
            ctx.translate($a0e475b373890de3$var$MonitorStyle.PADDING * 0.5, $a0e475b373890de3$var$MonitorStyle.PADDING * 0.5);
            ctx.save();
            // Draw the monitor's rounded borders
            ctx.beginPath();
            ctx.moveTo($a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS, paddedHeight);
            ctx.arcTo(0, paddedHeight, 0, paddedHeight - $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS, $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS);
            ctx.arcTo(0, 0, paddedWidth, 0, $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS);
            ctx.arcTo(paddedWidth, 0, paddedWidth, paddedHeight, $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS);
            ctx.arcTo(paddedWidth, paddedHeight, $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS, paddedHeight, $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS);
            ctx.lineTo($a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS, paddedHeight);
            // Translate the canvas so we don't have to do a bunch of width/height arithmetic
            ctx.save();
            ctx.translate(paddedWidth - $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS, paddedHeight);
            ctx.restore();
            if (this._dropping === true) {
                // ドロップ中には色合いを変える
                ctx.fillStyle = $a0e475b373890de3$var$MonitorStyle.COLORS.DROP_FILL;
                ctx.strokeStyle = $a0e475b373890de3$var$MonitorStyle.COLORS.DROP_STROKE;
            } else {
                ctx.fillStyle = $a0e475b373890de3$var$MonitorStyle.COLORS.FILL;
                ctx.strokeStyle = $a0e475b373890de3$var$MonitorStyle.COLORS.STROKE;
            }
            ctx.lineWidth = $a0e475b373890de3$var$MonitorStyle.STROKE_WIDTH;
            ctx.stroke();
            ctx.fill();
            // Un-flip the canvas if it was flipped
            ctx.restore();
            // Draw value area
            ctx.beginPath();
            const valueAreaHorizonStart = $a0e475b373890de3$var$MonitorStyle.PADDING + this.titleLineWidth;
            const valueHeight = paddedHeight - $a0e475b373890de3$var$MonitorStyle.PADDING_VALUE_VIRTICAL * 2;
            let x00 = valueAreaHorizonStart + $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS;
            let y00 = valueHeight + $a0e475b373890de3$var$MonitorStyle.PADDING_VALUE_VIRTICAL;
            ctx.moveTo(x00, y00);
            let x01_01 = valueAreaHorizonStart;
            let y01_01 = y00;
            let x01_02 = x01_01;
            let y01_02 = valueHeight - $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS;
            ctx.arcTo(x01_01, y01_01, x01_02, y01_02, $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS);
            let x02_01 = x01_02;
            let y02_01 = $a0e475b373890de3$var$MonitorStyle.PADDING_VALUE_VIRTICAL;
            let x02_02 = this.valueLineWidth + $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS;
            let y02_02 = y02_01;
            ctx.arcTo(x02_01, y02_01, x02_02, y02_02, $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS);
            let x03_01 = valueAreaHorizonStart + this.valueLineWidth + $a0e475b373890de3$var$MonitorStyle.PADDING_VALUE_VIRTICAL + $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS;
            let y03_01 = y02_01;
            let x03_02 = x03_01;
            let y03_02 = y01_01;
            ctx.arcTo(x03_01, y03_01, x03_02, y03_02, $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS);
            let x04_01 = x03_01;
            let y04_01 = y01_01;
            let x04_02 = valueAreaHorizonStart + $a0e475b373890de3$var$MonitorStyle.PADDING_VALUE_VIRTICAL + $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS;
            let y04_02 = y04_01;
            ctx.arcTo(x04_01, y04_01, x04_02, y04_02, $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS);
            let x05_01 = x00;
            let y05_01 = y00;
            ctx.lineTo(x05_01, y05_01);
            ctx.fillStyle = $a0e475b373890de3$var$MonitorStyle.VALUE_COLORS.FILL;
            ctx.strokeStyle = $a0e475b373890de3$var$MonitorStyle.VALUE_COLORS.STROKE;
            ctx.lineWidth = 0;
            ctx.stroke();
            ctx.fill();
            // Draw title line 
            const firtLineTop = $a0e475b373890de3$var$MonitorStyle.PADDING + $a0e475b373890de3$var$MonitorStyle.FONT_HEIGHT_RATIO * $a0e475b373890de3$var$MonitorStyle.FONT_SIZE;
            ctx.fillStyle = $a0e475b373890de3$var$MonitorStyle.COLORS.TEXT_FILL;
            ctx.font = `bold ${$a0e475b373890de3$var$MonitorStyle.FONT_SIZE}px ${$a0e475b373890de3$var$MonitorStyle.FONT}, sans-serif`;
            ctx.fillText(this._title, $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS, firtLineTop);
            // Draw each line of text (centering)
            ctx.fillStyle = $a0e475b373890de3$var$MonitorStyle.VALUE_COLORS.TEXT_FILL;
            ctx.font = `${$a0e475b373890de3$var$MonitorStyle.FONT_SIZE}px ${$a0e475b373890de3$var$MonitorStyle.FONT}, sans-serif`;
            const valueStartPosition = this.titleLineWidth + $a0e475b373890de3$var$MonitorStyle.PADDING + $a0e475b373890de3$var$MonitorStyle.CORNER_RADIUS;
            let _valueStartPosition = valueStartPosition + (this.valueLineWidth - this.actualValueLineWidth) / 2;
            ctx.fillText(this._text, _valueStartPosition, firtLineTop);
        }
        this._renderedScale = scale;
    }
    /*
     * Update and returns the uniforms for this skin.
     * @param {Array<number>} scale - The scaling factors to be used.
     * @returns {object.<string, *>} the shader uniforms to be used when rendering with this Skin.
     */ getUniforms(scale) {
        this._uniforms.u_skin = this.getTexture(scale);
        this._uniforms.u_skinSize = this.size;
        return this._uniforms;
    }
    /**
     * Does this point touch an opaque or translucent point on this skin?
     * Nearest Neighbor version
     * The caller is responsible for ensuring this skin's silhouette is up-to-date.
     * @see updateSilhouette
     * @see Drawable.updateCPURenderAttributes
     * @param {twgl.v3} vec A texture coordinate.
     * @return {boolean} Did it touch?
     */ isTouchingNearest(vec) {
        return this._silhouette.isTouchingNearest(vec);
    }
    /**
     * Does this point touch an opaque or translucent point on this skin?
     * Linear Interpolation version
     * The caller is responsible for ensuring this skin's silhouette is up-to-date.
     * @see updateSilhouette
     * @see Drawable.updateCPURenderAttributes
     * @param {twgl.v3} vec A texture coordinate.
     * @return {boolean} Did it touch?
     */ isTouchingLinear(vec) {
        return this._silhouette.isTouchingLinear(vec);
    }
}
/**
 * These are the events which can be emitted by instances of this class.
 * @enum {string}
 */ $a0e475b373890de3$export$c20a926d9ad205ad.Events = {
    /**
     * This constant value is same as Skin class
     * Emitted when anything about the Skin has been altered, such as the appearance or rotation center.
     * @event S3MonitorSkin.event:WasAltered
     */ WasAltered: 'WasAltered'
};


class $8ec7545479155111$export$190939f3628d90e9 {
    /**
     * @constructor
     */ constructor(){
        this._monitors = [];
        const render = (0, $a6b849a6af88d987$export$80606ec500c7d132).render;
        const renderer = render.renderer;
        function s3CreateMonitorSkin(drawableID, label) {
            const skinId = renderer._nextSkinId++;
            const newSkin = new (0, $a0e475b373890de3$export$c20a926d9ad205ad)(skinId, renderer, label);
            const drawable = renderer._allDrawables[drawableID];
            renderer._allSkins[skinId] = newSkin;
            drawable.skin = newSkin;
            return skinId;
        }
        function getS3Skin(skinId) {
            return renderer._allSkins[skinId];
        }
        renderer.s3CreateMonitorSkin = s3CreateMonitorSkin;
        renderer.getS3Skin = getS3Skin;
        (0, $a6b849a6af88d987$export$80606ec500c7d132).monitors = this;
    }
    /**
     * add
     * @param {string} monitorId - Monitor id 
     * @param {string} label - Monitor label 
     */ add(monitorId, label) {
        for (const _monitor of this._monitors){
            if (monitorId === _monitor.monitorId) return;
        }
        const monitor = new (0, $33cdb7a1af6f1eab$export$3de16b9a4e4a99f4)(monitorId, label);
        monitor.createTextSkin();
        this._monitors.push(monitor);
    }
    get(monitorId) {
        for (const _monitor of this._monitors){
            if (monitorId === _monitor.monitorId) return _monitor;
        }
        throw `\u{6307}\u{5B9A}\u{3057}\u{305F}${monitorId}\u{306E}Monitor\u{306F}\u{3042}\u{308A}\u{307E}\u{305B}\u{3093}`;
    }
    show(monitorId) {
        for (const _monitor of this._monitors)if (monitorId === _monitor.monitorId) {
            _monitor.show();
            break;
        }
        throw `\u{6307}\u{5B9A}\u{3057}\u{305F}${monitorId}\u{306E}Monitor\u{306F}\u{3042}\u{308A}\u{307E}\u{305B}\u{3093}`;
    }
    hide(monitorId) {
        for (const _monitor of this._monitors)if (monitorId === _monitor.monitorId) {
            _monitor.hide();
            break;
        }
        throw `\u{6307}\u{5B9A}\u{3057}\u{305F}${monitorId}\u{306E}Monitor\u{306F}\u{3042}\u{308A}\u{307E}\u{305B}\u{3093}`;
    }
    draw() {
        for (const _monitor of this._monitors)_monitor.draw();
    }
}







/**
 * @fileoverview UID generator, from Blockly.
 */ /**
 * Legal characters for the unique ID.
 * Should be all on a US keyboard.  No XML special characters or control codes.
 * Removed $ due to issue 251.
 * @private
 */ const $03288ce1c3842f5e$var$soup_ = "!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const $03288ce1c3842f5e$export$e2a22331486dcca0 = function() {
    const length = 20;
    const soupLength = $03288ce1c3842f5e$var$soup_.length;
    const id = [];
    for(let i = 0; i < length; i++)id[i] = $03288ce1c3842f5e$var$soup_.charAt(Math.random() * soupLength);
    return id.join('');
};


class $06e93da143ceb624$export$646feb54fbadbe06 {
    constructor(sprite){
        this.bubbleState = this._createBubbleState();
        this.sprite = sprite;
        //this.playground = playGround;
        this.renderer = null;
        if ((0, $a6b849a6af88d987$export$80606ec500c7d132).render) this.renderer = (0, $a6b849a6af88d987$export$80606ec500c7d132).render.renderer;
        this._scale = {
            w: 100,
            h: 100
        };
        this._direction = 90;
    }
    _createBubbleState() {
        const state = {
            drawableID: '',
            skinId: 0,
            text: '',
            type: 'say',
            onSpriteRight: true,
            uid: ''
        };
        return state;
    }
    isBubbleActive() {
        if (this.bubbleState.uid == null) return false;
        return true;
    }
    get direction() {
        return this._direction;
    }
    set direction(_direction) {
        this._direction = _direction;
    }
    setScale(w, h) {
        if (w == 0 || h == 0) // ゼロスケールではDrawできないので回避する。
        return;
        // マイナススケールのとき 文字が反転（鏡文字）となるのでそれを回避する。
        let _w = Math.abs(w);
        let _h = Math.abs(h);
        this._scale.w = _w;
        this._scale.h = _h;
    }
    async createDrawable() {
        if (this.renderer && this.bubbleState.drawableID == null) {
            const bubbleDrawableID = this.renderer.createDrawable((0, $46d3480c6a43a723$export$8bb8475f9426623c).SPRITE_LAYER);
            this.bubbleState.drawableID = bubbleDrawableID;
        }
    }
    async createTextSkin() {
        if (this.renderer && this.bubbleState.skinId == 0) {
            this.bubbleState.skinId = this.renderer.createTextSkin(this.bubbleState.type, this.bubbleState.text, this.bubbleState.onSpriteRight);
            this.bubbleState.uid = (0, $03288ce1c3842f5e$export$e2a22331486dcca0)();
        }
    }
    async say(_text, _properties) {
        this.bubbleState.type = 'say';
        this.bubbleState.text = _text;
        await this._renderBubble(_properties);
    }
    async think(_text, _properties) {
        this.bubbleState.type = 'think';
        this.bubbleState.text = _text;
        await this._renderBubble(_properties);
    }
    updateScale(w, h) {
        if (this.bubbleState.drawableID != null) {
            if (w == 0 || h == 0) // ゼロスケールではDrawできないので回避する。
            return;
            if (this.renderer) {
                // マイナススケールのとき 文字が反転（鏡文字）となるのでそれを回避する。
                let _w = Math.abs(w);
                let _h = Math.abs(h);
                this._scale.w = _w;
                this._scale.h = _h;
                this.renderer.updateDrawableScale(this.bubbleState.drawableID, [
                    _w,
                    _h
                ]);
            }
        }
    }
    async _renderBubble(_properties = {
        scale: {
            w: 0,
            h: 0
        }
    }) {
        if (this.sprite.visible == false || this.bubbleState.text === '') {
            if (this.bubbleState.uid != null) this.destroyBubble();
            return;
        }
        if (this.renderer) {
            if (this.bubbleState.uid == null) {
                this.createDrawable();
                await this.createTextSkin();
                if (Object.keys(_properties).length > 0) {
                    if (_properties.scale) this.updateScale(_properties.scale.w, _properties.scale.h);
                }
                this.renderer.updateDrawableSkinId(this.bubbleState.drawableID, this.bubbleState.skinId);
            } else if (this.bubbleState.skinId) {
                if (Object.keys(_properties).length > 0) {
                    if (_properties.scale) this.updateScale(_properties.scale.w, _properties.scale.h);
                }
                this.renderer.updateTextSkin(this.bubbleState.skinId, this.bubbleState.type, this.bubbleState.text, this.bubbleState.onSpriteRight);
            }
            this._positionBubble();
        }
        return;
    }
    moveWithSprite() {
        this._positionBubble();
    }
    _positionBubble() {
        if (this.renderer && this.bubbleState.skinId) try {
            const [_bubbleWidth, _bubbleHeight] = this.renderer.getCurrentSkinSize(this.bubbleState.drawableID);
            const bubbleWidth = _bubbleWidth * this._scale.w / 100;
            const bubbleHeight = _bubbleHeight * this._scale.h / 100;
            const targetBounds = this.renderer.getBoundsForBubble(this.sprite.drawableID);
            const stageSize = this.renderer.getNativeSize();
            const stageBounds = {
                left: -stageSize[0] / 2,
                right: stageSize[0] / 2,
                top: stageSize[1] / 2,
                bottom: -stageSize[1] / 2
            };
            if (this.bubbleState.onSpriteRight === true && bubbleWidth + targetBounds.right > stageBounds.right && targetBounds.left - bubbleWidth > stageBounds.left) {
                if (this._scale.w > 0) this.bubbleState.onSpriteRight = false;
                else this.bubbleState.onSpriteRight = false;
                this.renderer.updateTextSkin(this.bubbleState.skinId, this.bubbleState.type, this.bubbleState.text, this.bubbleState.onSpriteRight);
            } else if (this.bubbleState.onSpriteRight === false && targetBounds.left - bubbleWidth < stageBounds.left && bubbleWidth + targetBounds.right < stageBounds.right) {
                if (this._scale.w > 0) this.bubbleState.onSpriteRight = true;
                else this.bubbleState.onSpriteRight = false;
                this.renderer.updateTextSkin(this.bubbleState.skinId, this.bubbleState.type, this.bubbleState.text, this.bubbleState.onSpriteRight);
            } else {
                const positionX = this.bubbleState.onSpriteRight ? Math.max(stageBounds.left, Math.min(stageBounds.right - bubbleWidth, targetBounds.right)) : Math.min(stageBounds.right - bubbleWidth, Math.max(stageBounds.left, targetBounds.left - bubbleWidth));
                const positionY = Math.min(stageBounds.top, targetBounds.bottom + bubbleHeight);
                this.renderer.updateDrawablePosition(this.bubbleState.drawableID, [
                    positionX,
                    positionY
                ]);
            }
        } catch (e) {
        //console.log(e);
        }
    }
    destroyBubble() {
        if (this.renderer && this.isBubbleActive() && this.bubbleState.drawableID.length > 0) {
            this.renderer.destroyDrawable(this.bubbleState.drawableID, (0, $46d3480c6a43a723$export$8bb8475f9426623c).SPRITE_LAYER);
            this.renderer.destroySkin(this.bubbleState.skinId);
            this._createBubbleState();
        }
    }
}











class $7f0287fd36934f2a$export$3075603db8e6204c extends (0, $2401b5b232271269$export$bc644a473284d944) {
    constructor(name, options = {}){
        if (typeof name != "string") throw "\u7B2C\u4E00\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u30B9\u30D7\u30E9\u30A4\u30C8\u306E\u540D\u524D\u304C\u5FC5\u8981";
        super(name, (0, $46d3480c6a43a723$export$8bb8475f9426623c).SPRITE_LAYER, options);
        const stage = (0, $a6b849a6af88d987$export$80606ec500c7d132).stage;
        this.stage = stage;
        this.bubble = new (0, $06e93da143ceb624$export$646feb54fbadbe06)(this);
        this.costumes = new (0, $b307d41ec08c0548$export$7221f75269e0795b)();
        this.skinId = -1;
        this.skinIdx = -1;
        this.z = -1;
        this.clones = [];
        this.isClone = false;
        this.originalSprite = null;
        this.imageDatas = [];
        this.soundDatas = [];
        this.touchingEdge = false;
        this.bubbleDrawableID = '';
        this._bubbleTimeout;
        //this._isAlive = true;
        stage.addSprite(this);
    }
    $delete() {
        super.$delete();
        //this.bubble = null;
        delete this.bubble;
        //this.costumes = null;
        delete this.costumes;
        //this.clones = null;
        delete this.clones;
        //this.originalSprite = null;
        delete this.originalSprite;
        //this.imageDatas = null;
        delete this.imageDatas;
        //this.soundDatas = null;
        delete this.soundDatas;
        this._isAlive = false;
    }
    $remove() {
        if (this._isAlive === false) return;
        if (this.isClone === true && this.originalSprite && this.originalSprite.clones) {
            const clones = this.originalSprite.clones;
            this.originalSprite.clones = clones.filter((s)=>s.id !== this.id);
        }
        this.stage.removeSprite(this);
        try {
            this.render.renderer.destroyDrawable(this.drawableID, (0, $46d3480c6a43a723$export$8bb8475f9426623c).SPRITE_LAYER);
        } catch (e) {} finally{
            this._isAlive = false;
        }
        if (this.costumes) this.costumes.destroyAllSkin();
        this.$delete();
    }
    $isAlive() {
        return this._isAlive == true;
    }
    /**
     * クローンして 処理を実行する
     * @param {*} options 
     * @param {*} func 
     */ /*
    cloneThen(options, func){
        
        this.clone(options).then(async v=>{

            v.hatProc(func);

        });
    }
    */ async $cloneAndWait(options = {}) {
        await this.$clone(options);
    }
    async $clone(options = {}) {
        if (this.isClone == undefined) {
            if (this.clones == undefined) this.clones = [];
            const newName = `${this.name}_${this.clones.length + 1}`;
            // クローン時にエフェクトを引き継ぐ。
            // クローン別にエフェクトを設定したいときは
            // clone() 実行後に 個別に設定すること。
            // const COLOR = ImageEffective.COLOR;
            // const FISHEYE = ImageEffective.FISHEYE;
            // const WHIRL = ImageEffective.WHIRL;
            // const PIXELATE = ImageEffective.PIXELATE;
            // const MOSAIC = ImageEffective.MOSAIC;
            // const BRIGHTNESS = ImageEffective.BRIGHTNESS;
            // const GHOST = ImageEffective.GHOST;
            const _options = {
                'position': {
                    x: this.$_position.x,
                    y: this.$_position.y
                },
                'scale': this.$_scale,
                'direction': this.$_direction ? this.$_direction : 90,
                COLOR: this._effect.color ? this._effect.color : 0,
                FISHEYE: this._effect.fisheye ? this._effect.fisheye : 0,
                WHIRL: this._effect.whirl ? this._effect.whirl : 0,
                PIXELATE: this._effect.pixelate ? this._effect.pixelate : 0,
                MOSAIC: this._effect.mosaic ? this._effect.mosaic : 0,
                BRIGHTNESS: this._effect.brightness ? this._effect.brightness : 0,
                GHOST: this._effect.ghost ? this._effect.ghost : 0
            };
            const newOptions = Object.assign(_options, options);
            // @ts-ignore this.constructor()エラーを抑止する
            const newSprite = new this.constructor(newName, newOptions);
            // デフォでは本体の前に表示されるので、1つ背面へ移動する
            newSprite.$goBackwardLayers(1);
            //const _visible = 
            newSprite.$setVisible(false);
            if (this.clones) this.clones.push(newSprite);
            newSprite.isClone = true;
            if (this.imageDatas) for (const d of this.imageDatas)// svg image の場合、createSVGSkin の中で非同期になることに注意すること
            await newSprite.$addImage(d);
            if (this.costumes) {
                let _name = this.costumes.currentSkinName();
                if (_name != null && newSprite.costumes) newSprite.costumes.switchCostumeByName(_name);
            }
            if (this.soundDatas) for (const d of this.soundDatas){
                const _soundData = {};
                _soundData.name = d.name;
                _soundData.data = d.data;
                //const _options = d.options;
                await newSprite.$addSound(_soundData);
                // options引き継ぐ
                const _vol = this.$getSoundVolume();
                const _pitch = this.$getSoundPitch();
                newSprite.$setSoundVolume(_vol);
                newSprite.$setSoundPitch(_pitch);
            }
            newSprite.update(); // update() は不要かもしれない。
            newSprite.originalSprite = this;
            // 注意： Scratch3 風に Sprite duplicate をしてみたい。（調べる）
            // whenClone
            // ここで emit 
            // target( = EventEmitter ) を作る。target は renderer を操作するメソッドを持つ。
            // rendererを操作する処理は emit で行う。
            const runtime = (0, $a6b849a6af88d987$export$80606ec500c7d132).runtime;
            const eventId = `whenClone_${this.name}`;
            runtime.emit(eventId, newSprite);
            return newSprite;
        }
    }
    _costumeProperties(target) {
        // スプライトを消すとき costumes はnullになるので 例外回避する
        if (target.costumes) {
            target.costumes.setPosition(target.$_position.x, target.$_position.y);
            target.costumes.setScale(target.$_scale.w, target.$_scale.h);
            target.costumes.setDirection(target.$_direction);
            target.costumes.update(target.drawableID, this._effect);
        }
        target.$_prev_position.x = target.$_position.x;
        target.$_prev_position.y = target.$_position.y;
        target.$_prev_scale.w = target.$_scale.w;
        target.$_prev_scale.h = target.$_scale.h;
        target.$_prev_direction = target.$_direction;
    }
    _goLayers(nLayers) {
        if (this.render.renderer) this.render.renderer.setDrawableOrder(this.drawableID, nLayers, (0, $46d3480c6a43a723$export$8bb8475f9426623c).SPRITE_LAYER, true);
    }
    $goToFront() {
        this._goLayers(Infinity); // 最上位
    }
    $goToBack() {
        this._goLayers(-Infinity); // 最下位
    }
    $goForwardLayers(nLayers) {
        this._goLayers(nLayers);
    }
    $goBackwardLayers(nLayers) {
        this._goLayers(-nLayers);
    }
    update() {
        super.update();
        const _renderer = this.render.renderer;
        this._costumeProperties(this);
        //_renderer.updateDrawablePosition(this.drawableID, this.$_position);
        // スプライトを消すとき bubbleを参照できない
        if (this.bubble) {
            if ((0, $aa5c463d8e2daad8$export$6c0517834721cef7).bubbleScaleLinkedToSprite === true) this.bubble.updateScale(this.$_scale.w, this.$_scale.h);
            this.bubble.moveWithSprite();
        }
    }
    $moveSteps(steps) {
        const radians = (0, $a98e95d0f90948cf$export$6a7ef315a0d1ef07).degToRad(90 - this.$_direction);
        const dx = steps * Math.cos(radians);
        const dy = steps * Math.sin(radians);
        this.$setXY(this.$_position.x + dx, this.$_position.y + dy);
    }
    $setScale(w, h) {
        if ((0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).isNumber(w)) {
            super.$setScale(w, h);
            if (this.bubble) {
                const _w = w;
                this.bubble.setScale(_w, h);
            }
        } else {
            const obj = w;
            super.$setScale(obj.w, obj.h);
            if (this.bubble) this.bubble.setScale(obj.w, obj.h);
        }
        this.update();
    }
    get x() {
        return this.$_position.x;
    }
    set x(x) {
        this.$setX(x);
    }
    get y() {
        return this.$_position.y;
    }
    set y(y) {
        this.$setY(y);
    }
    $goToXY(x, y) {
        if ((0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).isNumber(x)) {
            if (!(0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).isNumber(y)) return;
            const _x = x;
            this.$setXY(_x, y);
        } else {
            const obj = x;
            this.$setXY(obj.x, obj.y);
        }
    }
    $moveTo(x, y) {
        this.$goToXY(x, y);
    }
    $_onEdgeBounds() {
        const drawable = this.render.renderer._allDrawables[this.drawableID];
        if (drawable == null || drawable.skin == null) return {
            'minDist': 0,
            'nearestEdge': ''
        };
        const bounds = this.render.renderer.getBounds(this.drawableID);
        if (!bounds) return {
            'minDist': 0,
            'nearestEdge': ''
        };
        const stageWidth = this.render.stageWidth;
        const stageHeight = this.render.stageHeight;
        const distLeft = Math.max(0, stageWidth / 2 + bounds.left);
        const distTop = Math.max(0, stageHeight / 2 - bounds.top);
        const distRight = Math.max(0, stageWidth / 2 - bounds.right);
        const distBottom = Math.max(0, stageHeight / 2 + bounds.bottom);
        // find nearest edge
        let nearestEdge = '';
        let minDist = Infinity;
        if (distLeft < minDist) {
            minDist = distLeft;
            nearestEdge = 'left';
        }
        if (distTop < minDist) {
            minDist = distTop;
            nearestEdge = 'top';
        }
        if (distRight < minDist) {
            minDist = distRight;
            nearestEdge = 'right';
        }
        if (distBottom < minDist) {
            minDist = distBottom;
            nearestEdge = 'bottom';
        }
        if (minDist > 0) return {
            'minDist': 0,
            'nearestEdge': ''
        } // Not touching any edge
        ;
        return {
            'minDist': minDist,
            'nearestEdge': nearestEdge
        };
    }
    // #_ifOnEdgeBounds() {
    //     const judge = this.#onEdgeBounds();
    //     if(judge &&  judge.minDist && judge.minDist == Infinity) return null;
    //     return judge;
    // }
    $ifOnEdgeBounds() {
        this.$_ifOnEdgeBounds();
    }
    $_ifOnEdgeBounds() {
        //        this._ifOnEdgeBoundsFlag = false;
        if (!this.$isAlive()) return;
        const drawable = this.render.renderer._allDrawables[this.drawableID];
        if (drawable == null || drawable.skin == null) return;
        const bounds = this.render.renderer.getBounds(this.drawableID);
        if (!bounds) return;
        const stageWidth = this.render.stageWidth;
        const stageHeight = this.render.stageHeight;
        const distLeft = Math.max(0, stageWidth / 2 + bounds.left);
        const distTop = Math.max(0, stageHeight / 2 - bounds.top);
        const distRight = Math.max(0, stageWidth / 2 - bounds.right);
        const distBottom = Math.max(0, stageHeight / 2 + bounds.bottom);
        // find nearest edge
        let nearestEdge = '';
        let minDist = Infinity;
        if (distLeft < minDist) {
            minDist = distLeft;
            nearestEdge = 'left';
        }
        if (distTop < minDist) {
            minDist = distTop;
            nearestEdge = 'top';
        }
        if (distRight < minDist) {
            minDist = distRight;
            nearestEdge = 'right';
        }
        if (distBottom < minDist) {
            minDist = distBottom;
            nearestEdge = 'bottom';
        }
        if (minDist > 0) return; // Not touching any edge
        //        this._ifOnEdgeBoundsFlag = true;// 端にふれている。
        // Point away from the nearest edge.
        const radians = (0, $a98e95d0f90948cf$export$6a7ef315a0d1ef07).degToRad(90 - this.$_direction);
        let dx = Math.cos(radians);
        let dy = -Math.sin(radians);
        if (nearestEdge === 'left') dx = Math.max(0.2, Math.abs(dx));
        else if (nearestEdge === 'top') dy = Math.max(0.2, Math.abs(dy));
        else if (nearestEdge === 'right') dx = 0 - Math.max(0.2, Math.abs(dx));
        else if (nearestEdge === 'bottom') dy = 0 - Math.max(0.2, Math.abs(dy));
        const newDirection = (0, $a98e95d0f90948cf$export$6a7ef315a0d1ef07).radToDeg(Math.atan2(dy, dx)) + 90;
        this.$_direction = newDirection;
        // Keep within the stage.
        if (this.costumes) //            this.$_keepInFence(this.costumes._position.x, this.costumes._position.y);
        this.$_keepInFence(this.$_position.x, this.$_position.y);
    /* 
        for(;;) {
            this.keepInFence(this.costumes._position.x, this.costumes._position.y);
            const touch = this.isTouchingEdge();
            if( touch === false ) break;
            await Utils.wait(0);
        }
        */ }
    $isTouchingTargetToTarget(src, targets) {
        let _targets;
        if (Array.isArray(targets)) _targets = [
            ...targets
        ];
        else _targets = [
            targets
        ];
        for (const t of _targets){
            if (t.clones) for (const c of t.clones)_targets.push(c);
        }
        const touch = super.$isTouchingTargetToTarget(src, _targets);
        return touch;
    }
    $_keepInFence(x, y) {
        if (!this.$isAlive()) return;
        const fencedPosition = this.$_keepInFencePosition(x, y);
        if (fencedPosition) {
            // this._ifOnEdgeBoundsPosition.x = fencedPosition[0];
            // this._ifOnEdgeBoundsPosition.y = fencedPosition[1];
            this.$_position.x = fencedPosition[0];
            this.$_position.y = fencedPosition[1];
        }
    }
    $_keepInFencePosition(newX, newY) {
        const drawable = this.render.renderer._allDrawables[this.drawableID];
        if (drawable == null || drawable.skin == null) return [
            newX,
            newY
        ];
        const bounds = this.render.renderer.getBounds(this.drawableID);
        if (!bounds) return [
            newX,
            newY
        ];
        const stageWidth = this.render.stageWidth;
        const stageHeight = this.render.stageHeight;
        const fence = {
            left: -(stageWidth / 2),
            top: stageHeight / 2,
            right: stageWidth / 2,
            bottom: -(stageHeight / 2)
        };
        // Adjust the known bounds to the target position.
        if (this.costumes) {
            bounds.left += newX - this.costumes._position.x;
            bounds.right += newX - this.costumes._position.x;
            bounds.top += newY - this.costumes._position.y;
            bounds.bottom += newY - this.costumes._position.y;
        }
        // Find how far we need to move the target position.
        let dx = 0;
        let dy = 0;
        let hosei = 0; // 補正用（現在補正はゼロ）
        if (bounds.left < fence.left) dx += fence.left - bounds.left + hosei;
        if (bounds.right > fence.right) dx += fence.right - bounds.right - hosei;
        if (bounds.top > fence.top) dy += fence.top - bounds.top - hosei;
        if (bounds.bottom < fence.bottom) dy += fence.bottom - bounds.bottom + hosei;
        return [
            newX + dx,
            newY + dy
        ];
    }
    $isTouchingEdge(_callback) {
        this.$isAlive();
        const judge = this.$_onEdgeBounds();
        if (judge == null) {
            if (this.touchingEdge === true) this.touchingEdge = false;
            return false;
        }
        const nearestEdge = judge.nearestEdge;
        if (nearestEdge == '') {
            if (this.touchingEdge === true) this.touchingEdge = false;
            return false;
        }
        if (this.touchingEdge === true) return false;
        if (_callback) {
            const callback = _callback.bind(this);
            setTimeout(callback, 0);
        }
        return true;
    }
    $isTouchingVirticalEdge() {
        if (!this.$isAlive()) return false;
        const touch = this.$isTouchingEdge();
        if (touch === false) return false;
        const judge = this.$_onEdgeBounds();
        const nearestEdge = judge.nearestEdge;
        if (nearestEdge == 'bottom' || nearestEdge == 'top') return false;
        return true;
    }
    $isTouchingHorizontalEdge() {
        if (!this.$isAlive()) return false;
        const touch = this.$isTouchingEdge();
        if (touch === false) return false;
        const judge = this.$_onEdgeBounds();
        const nearestEdge = judge.nearestEdge;
        if (nearestEdge == 'right' || nearestEdge == 'left') return false;
        return true;
    }
    $gotoRandomPosition() {
        if (!this.$isAlive()) return;
        const _x = (Math.random() - 0.5) * (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).stageWidth;
        const _y = (Math.random() - 0.5) * (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).stageHeight;
        this.$setXY(_x, _y);
    }
    $gotoMousePosition() {
        const position = (0, $bff2c8621503147e$export$51f69a3a2b76fd0f).mousePosition;
        this.$setXY(position.x, position.y);
    }
    $gotoSprite(sprite) {
        if (!this.$isAlive()) return;
        if (sprite instanceof $7f0287fd36934f2a$export$3075603db8e6204c) {
            // const _x = sprite.$_position.x;
            // const _y = sprite.$_position.y;
            const _x = sprite.$_prev_position.x;
            const _y = sprite.$_prev_position.y;
            this.$setXY(_x, _y);
        }
    }
    async $glideToPosition(sec, x, y) {
        if (!this.$isAlive()) return;
        if (typeof sec != 'number') return;
        let _x = 0;
        let _y = 0;
        if (typeof x == 'number') {
            _x = x;
            _y = y;
        } else {
            const obj = x;
            _x = obj.x;
            _y = obj.y;
        }
        //      let _stopper = false;
        // 停止ボタンクリック時にemit-->on でイベントを受け取り、
        // _stopper = true にしようとしたが、これがなくても停止するので実装をしない
        const _glideX = _x;
        const _glideY = _y;
        return new Promise(async (resolve)=>{
            const framesPerSecond = 1000 / (0, $aa5c463d8e2daad8$export$6c0517834721cef7).pace;
            const stepX = (_glideX - this.$_position.x) / (sec * framesPerSecond);
            const stepY = (_glideY - this.$_position.y) / (sec * framesPerSecond);
            let i = 0;
            const me = this;
            const interval = setInterval(()=>{
                // -------
                // 停めるボタン（赤）を押したら、移動を停止するように
                // しようと思って、停める仕組みを作ったが、
                // これは使わないでよい。
                // -------
                // if(_stopper == true) {
                //     clearInterval(interval);
                //     resolve();
                // }
                i += 1;
                me.$setForceXY(me.$_position.x + stepX, me.$_position.y + stepY);
                if (i / framesPerSecond >= sec) {
                    me.$setForceXY(_glideX, _glideY);
                    clearInterval(interval);
                    resolve();
                }
            }, (0, $aa5c463d8e2daad8$export$6c0517834721cef7).pace);
        });
    }
    static get Global() {
        return 'global';
    }
    $pointToMouse(_global) {
        if (!this.$isAlive()) return;
        if (_global === $7f0287fd36934f2a$export$3075603db8e6204c.Global) this.pointTowardsMouseCursolGlobal();
        else this.pointTowardsMouseCursol();
    }
    $pointToTarget(target) {
        if (!this.$isAlive()) return;
        let dx = target.$_position.x - this.$_position.x;
        let dy = target.$_position.y - this.$_position.y;
        let direction = 90 - (0, $a98e95d0f90948cf$export$6a7ef315a0d1ef07).radToDeg(Math.atan2(dy, dx));
        if (direction > 180) direction -= 360;
        this.$pointInDerection(direction);
    }
    $pointInDerection(_d) {
        if (!this.$isAlive()) return;
        if (_d < 0) {
            let _direction = _d % 360;
            if (_direction < -180) _direction = 360 + _direction;
            this.$_direction = _direction;
        } else {
            // _derection 0 以上 
            let _direction = _d % 360;
            if (_direction > 180) _direction = _direction - 360;
            this.$_direction = _direction;
        }
    }
    $setRotationStyle(_style) {
        if (!this.$isAlive()) return;
        if (this.costumes) this.costumes.setRotationStyle(_style);
    }
    $nextCostume() {
        if (!this.$isAlive()) return;
        if (this.costumes) this.costumes.nextCostume();
    //サイズが大きなコスチュームに切り替えた後
    //$_ifOnEdgeBounds()をすると位置と向きが変化
    //してしまう。
    //$_ifOnEdgeBounds()はその場しのぎで入れた記憶が
    //あるのではずしてみる。
    //this.$_ifOnEdgeBounds();
    }
    $switchCostume(val) {
        if (!this.$isAlive()) return;
        if (val) {
            if (typeof val === 'string') {
                const _name = val;
                if (this.costumes) this.costumes.switchCostumeByName(_name);
            } else if (Number.isInteger(val)) {
                const _idx = val;
                if (this.costumes) this.costumes.switchCostumeByNumber(_idx);
            }
        }
    }
    $nextBackDrop() {
        const stage = (0, $a6b849a6af88d987$export$80606ec500c7d132).stage;
        stage.$nextBackDrop();
    }
    $switchBackDrop(backdrop) {
        const stage = (0, $a6b849a6af88d987$export$80606ec500c7d132).stage;
        stage.$switchBackDrop(backdrop);
    }
    $setVisible(_visible) {
        if (!this.$isAlive()) return;
        this.updateVisible(_visible);
    }
    async loadSound(name, soundUrl, options = {}) {
        this._loadSound(name, soundUrl, options);
    }
    async loadImage(name, imageUrl) {
        this._loadImage(name, imageUrl, this.costumes);
    }
    async $addSound(soundData) {
        if (arguments.length > 1) throw "Sound.add \u5F15\u6570\u304C\u591A\u3044";
        let _soundData;
        if (soundData == undefined) throw "\u3010Sprite.Sound.add\u3011\u30B5\u30A6\u30F3\u30C9\u30C7\u30FC\u30BF\u306E\u6307\u5B9A\u304C\u3042\u308A\u307E\u305B\u3093";
        else if (soundData == undefined || typeof soundData == "string") {
            _soundData = (0, $a6b849a6af88d987$export$80606ec500c7d132).loadedSounds[soundData];
            if (_soundData == undefined) throw "\u3010Sprite.Sound.add\u3011\u6B63\u3057\u3044\u30B5\u30A6\u30F3\u30C9\u540D\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        } else _soundData = soundData;
        if (_soundData['name'] == undefined || _soundData['data'] == undefined) throw "\u3010Sprite.Sound.add\u3011\u6B63\u3057\u3044\u30B5\u30A6\u30F3\u30C9\u30C7\u30FC\u30BF\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        if (this.soundDatas) {
            _soundData.options = {};
            this.soundDatas.push(_soundData);
            const name = _soundData.name;
            const data = _soundData.data;
            const promise = this._addSound(name, data, {});
            return promise;
        }
    }
    async $addImage(imageData) {
        let _imageData;
        if (imageData == undefined) throw "\u3010Sprite.Image.add\u3011\u30A4\u30E1\u30FC\u30B8\u30C7\u30FC\u30BF\u306E\u6307\u5B9A\u304C\u3042\u308A\u307E\u305B\u3093";
        else if (typeof imageData == "string") {
            _imageData = (0, $a6b849a6af88d987$export$80606ec500c7d132).loadedImages[imageData];
            if (_imageData == undefined) throw "\u3010Sprite.Image.add\u3011\u6B63\u3057\u3044\u30A4\u30E1\u30FC\u30B8\u540D\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        } else _imageData = imageData;
        if (_imageData['name'] == undefined || _imageData['data'] == undefined) throw "\u3010Sprite.Image.add\u3011\u6B63\u3057\u3044\u30A4\u30E1\u30FC\u30B8\u30C7\u30FC\u30BF\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044";
        if (this.imageDatas) {
            this.imageDatas.push(_imageData);
            const name = _imageData.name;
            const data = _imageData.data;
            await this._addImage(name, data, this.costumes);
        }
        return this;
    }
    $getImageNames() {
        if (this.costumes) {
            const iterator = this.costumes.costumes.keys();
            const arr = Array.from(iterator);
            return arr;
        }
        return [];
    }
    $say(text, properties = {}) {
        if (!this.$isAlive() || !this.bubble) return;
        if (text && typeof text == 'string') {
            this.bubble.say(text, properties);
            return;
        }
        // 空テキストのときは フキダシを消す。
        this.bubble.destroyBubble();
    }
    $sayForSecs(text, secs, properties = {}) {
        if (!this.$isAlive()) return;
        this.$say(text, properties);
        const me = this;
        return new Promise((resolve)=>{
            this._bubbleTimeout = setTimeout(()=>{
                // タイムアウトしたときに吹き出しを消す
                if (me.bubble) {
                    me.bubble.destroyBubble();
                    me._bubbleTimeout = undefined;
                }
                resolve();
            }, 1000 * secs);
        });
    }
    $think(text, properties = {}) {
        if (!this.$isAlive() || this.bubble == undefined) return;
        if (text && typeof text == 'string') {
            this.bubble.think(text, properties);
            return;
        }
        this.bubble.destroyBubble();
    }
    $thinkForSecs(text, secs, properties = {}) {
        if (!this.$isAlive()) return;
        this.$think(text, properties);
        return new Promise((resolve)=>{
            this._bubbleTimeout = setTimeout(()=>{
                this._bubbleTimeout = undefined;
                if (this.bubble) this.bubble.destroyBubble();
                resolve();
            }, 1000 * secs);
        });
    }
    $_isDrawableExist() {
        const drawable = this.render.renderer._allDrawables[this.drawableID];
        if (drawable == null) return false;
        return true;
    }
    $drawingDimensions() {
        return this.$getDrawingDimensions();
    }
    $getDrawingDimensions() {
        let width = 0;
        let height = 0;
        if (this.$_isDrawableExist()) {
            const bounds = this.render.renderer.getBounds(this.drawableID);
            height = Math.abs(bounds.top - bounds.bottom);
            width = Math.abs(bounds.left - bounds.right);
        }
        return {
            width: width,
            height: height
        };
    }
    $getCurrentPosition() {
        const x = this.$_position.x;
        const y = this.$_position.y;
        return {
            x: x,
            y: y
        };
    }
    $getCurrentDirection() {
        return this.$_direction;
    }
    $getCurrentSize() {
        return {
            w: this.$_scale.w,
            h: this.$_scale.h
        };
    }
    async $askAndWait(text) {
        const question = new (0, $c720f210576cee38$export$dc467e08448586e8)();
        const me = this;
        return new Promise(async (resolve)=>{
            const answer = await question.ask(me, text);
            //            question.removeAsk(me);
            resolve(answer);
        });
    }
    get M() {
        return this.Motion;
    }
    get Position() {
        //console.log(this);
        const me = this;
        const position = {
            "x": 0,
            "y": 0
        };
        Object.defineProperty(position, "x", {
            get: function() {
                const { x: x } = me.Motion.getCurrentPosition();
                return x;
            },
            set: function(x) {
                me.Motion.setX(x);
            }
        });
        Object.defineProperty(position, "y", {
            get: function() {
                const { y: y } = me.Motion.getCurrentPosition();
                return y;
            },
            set: function(y) {
                me.Motion.setY(y);
            }
        });
        return position;
    }
    get Direction() {
        const me = this;
        const direction = {
            "degree": 0
        };
        Object.defineProperty(direction, "degree", {
            get: function() {
                return me.$getCurrentDirection();
            },
            set: function(degree) {
                me.$pointInDerection(degree);
            }
        });
        return direction;
    }
    get Motion() {
        return {
            "Position": this.Position,
            "Direction": this.Direction,
            "getCurrentPosition": this.$getCurrentPosition.bind(this),
            "getCurrentDirection": this.$getCurrentDirection.bind(this),
            "moveSteps": this.$moveSteps.bind(this),
            "moveTo": this.$moveTo.bind(this),
            "ifOnEdgeBounds": this.$ifOnEdgeBounds.bind(this),
            "gotoRandomPosition": this.$gotoRandomPosition.bind(this),
            "gotoMousePosition": this.$gotoMousePosition.bind(this),
            "gotoSprite": this.$gotoSprite.bind(this),
            "glideToPosition": this.$glideToPosition.bind(this),
            /** マウスの位置へ向く */ "pointToMouse": this.$pointToMouse.bind(this),
            /** 指定したターゲットの位置へ向く */ "pointToTarget": this.$pointToTarget.bind(this),
            /** 角度を指定して向きを変える */ "pointInDerection": this.$pointInDerection.bind(this),
            /** 回転方法を指定する */ "setRotationStyle": this.$setRotationStyle.bind(this),
            //--- Entity
            "gotoXY": this.$goToXY.bind(this),
            "pointInDirection": this.$setDirection.bind(this),
            "turnRightDegrees": this.$turnRight.bind(this),
            "turnLeftDegrees": this.$turnLeft.bind(this),
            "setXY": this.$setXY.bind(this),
            "setX": this.$setX.bind(this),
            "setY": this.$setY.bind(this),
            "changeX": this.$changeX.bind(this),
            "changeY": this.$changeY.bind(this)
        };
    }
    get L() {
        return this.Looks;
    }
    get Costume() {
        const me = this;
        const costume = {
            "no": 0,
            "name": ""
        };
        Object.defineProperty(costume, "no", {
            get: function() {
                if (me.costumes) return me.costumes.currentSkinNo();
                else return -1;
            }
        });
        Object.defineProperty(costume, "name", {
            get: function() {
                if (me.costumes) return me.costumes.currentSkinName();
                else return '';
            }
        });
        return costume;
    }
    get Backdrop() {
        const stage = (0, $a6b849a6af88d987$export$80606ec500c7d132).stage;
        const backdrop = {
            "no": 0,
            "name": ""
        };
        Object.defineProperty(backdrop, "no", {
            get: function() {
                return stage.backdrops.currentSkinNo();
            }
        });
        Object.defineProperty(backdrop, "name", {
            get: function() {
                return stage.backdrops.currentSkinName();
            }
        });
        return backdrop;
    }
    get Size() {
        const me = this;
        const size = {
            w: 0,
            h: 0,
            scale: 0
        };
        Object.defineProperty(size, "w", {
            get: function() {
                const { w: w } = me.$getCurrentSize();
                return w;
            },
            set: function(w) {
                const { h: h } = me.$getCurrentSize();
                me.$setScale(w, h);
            }
        });
        Object.defineProperty(size, "h", {
            get: function() {
                const { h: h } = me.$getCurrentSize();
                return h;
            },
            set: function(h) {
                const { w: w } = me.$getCurrentSize();
                me.$setScale(w, h);
            }
        });
        Object.defineProperty(size, "scale", {
            get: function() {
                const { w: w, h: h } = me.$getCurrentSize();
                return {
                    w: w,
                    h: h
                };
            },
            set: function(scale) {
                if (scale && scale.w != undefined && scale.h != undefined) me.$setScale(scale.w, scale.h);
            }
        });
        return size;
    }
    get Looks() {
        return {
            "Costume": this.Costume,
            "Backdrop": this.Backdrop,
            "nextCostume": this.$nextCostume.bind(this),
            "switchCostume": this.$switchCostume.bind(this),
            "nextBackdrop": this.$nextBackDrop.bind(this),
            "switchBackdrop": this.$switchBackDrop.bind(this),
            "say": this.$say.bind(this),
            "sayForSecs": this.$sayForSecs.bind(this),
            "think": this.$think.bind(this),
            "thinkForSecs": this.$thinkForSecs.bind(this),
            "changeSizeBy": this.$changeSizeBy.bind(this),
            "Size": this.Size,
            "getSize": this.$getCurrentSize.bind(this),
            "setSize": this.$setScale.bind(this),
            "changeEffectBy": this.$changeEffectBy.bind(this),
            "setEffect": this.$setEffectTo.bind(this),
            "clearEffects": this.$clearEffect.bind(this),
            "show": this.$show.bind(this),
            "hide": this.$hide.bind(this),
            "goToFront": this.$goToFront.bind(this),
            "goToBack": this.$goToBack.bind(this),
            "goForwardLayers": this.$goForwardLayers.bind(this),
            "goBackwardLayers": this.$goBackwardLayers.bind(this),
            "drawingDimensions": this.$drawingDimensions.bind(this)
        };
    }
    get C() {
        return this.Control;
    }
    get Control() {
        return {
            "wait": this.$waitSeconds.bind(this),
            "waitUntil": this.$waitUntil.bind(this),
            "waitWhile": this.$waitWhile.bind(this),
            "cloneAndWait": this.$cloneAndWait.bind(this),
            "clone": this.$clone.bind(this),
            "whenCloned": this.$whenCloned.bind(this),
            //---- Entity
            "forever": this.forever.bind(this),
            "while": this.while.bind(this),
            "repeat": this.repeat.bind(this),
            "repeatUntil": this.repeatUntil.bind(this),
            "stopAll": this.$stopAll.bind(this),
            "remove": this.$remove.bind(this),
            "alive": this.$isAlive.bind(this),
            "stopThisScript": this.$stopThisScript.bind(this),
            "stopOtherScripts": this.$stopOtherScripts.bind(this)
        };
    }
    get Distance() {
        const me = this;
        const distanceToOthers = function(otherSprite) {
            if (otherSprite && otherSprite['isSprite'] && otherSprite.isSprite() === true) {
                const obj1 = {
                    x: me.Motion.Position.x,
                    y: me.Motion.Position.y
                };
                const obj2 = {
                    x: otherSprite.Motion.Position.x,
                    y: otherSprite.Motion.Position.y
                };
                const _distance = (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).distance(obj1, obj2);
                return _distance;
            }
            return -1;
        };
        const distance = {
            "mousePointer": 0,
            "to": distanceToOthers
        };
        Object.defineProperty(distance, "mousePointer", {
            get: function() {
                const obj1 = {
                    x: me.Motion.Position.x,
                    y: me.Motion.Position.y
                };
                const obj2 = {
                    x: me.Sensing.Mouse.x,
                    y: me.Sensing.Mouse.y
                };
                const _distance = (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).distance(obj1, obj2);
                return _distance;
            }
        });
        return distance;
    }
    get Sensing() {
        return {
            "askAndWait": this.$askAndWait.bind(this),
            "isKeyDown": this.$isKeyDown.bind(this),
            "isKeyNotDown": this.$isKeyNotDown.bind(this),
            "isMouseDown": this.$isMouseDown.bind(this),
            "Mouse": this.Mouse,
            "Distance": this.Distance,
            "timer": this.$timer,
            "resetTimer": this.$resetTimer.bind(this),
            "isTouchingEdge": this.$isTouchingEdge.bind(this),
            "isTouchingVirticalEdge": this.$isTouchingVirticalEdge.bind(this),
            "isTouchingHorizontalEdge": this.$isTouchingHorizontalEdge.bind(this),
            "isNotMouseTouching": this.$isNotMouseTouching.bind(this),
            "isMouseTouching": this.$isMouseTouching.bind(this),
            "isTouchingToSprite": this.$isTouchingTargetToTarget.bind(this),
            "getTouchingSprites": this.$getTouchingTarget.bind(this),
            "isTouchingToColor": this.$isTouchingColor.bind(this),
            "colorIsTouchingToColor": this.$colorIsTouchingColor.bind(this)
        };
    }
    get E() {
        return this.Event;
    }
    get Event() {
        return {
            "broadcast": this.$broadcast.bind(this),
            "broadcastAndWait": this.$broadcastAndWait.bind(this),
            // "broadcastToTargets": this.$broadcastToTargets.bind(this),
            // "broadcastAndWaitToTargets": this.$broadcastAndWaitToTargets.bind(this),
            "whenBroadcastReceived": this.$whenBroadcastReceived.bind(this),
            "whenRightNow": this.$whenRightNow.bind(this),
            "whenFlag": this.$whenFlag.bind(this),
            "whenKeyPressed": this.$whenKeyPressed.bind(this),
            //            "whenMouseTouched": this.$whenMouseTouched.bind(this),
            //            "whenTargetMouseTouched": this.$whenTouchingTarget.bind(this),
            "whenClicked": this.$whenClicked.bind(this),
            /** 背景が〇〇に変わったとき */ "whenBackdropSwitches": this.$whenBackdropSwitches.bind(this)
        };
    }
    get Image() {
        return {
            "add": this.$addImage.bind(this),
            "names": this.$getImageNames.bind(this)
        };
    }
    get Sound() {
        return {
            "add": this.$addSound.bind(this),
            "switch": this.$soundSwitch.bind(this),
            "next": this.$nextSound.bind(this),
            "play": this.$soundPlay.bind(this),
            "playUntilDone": this.$startSoundUntilDone.bind(this),
            "setOption": this.$setOption.bind(this),
            "changeOptionValue": this.$changeOptionValue.bind(this),
            "clearEffects": this.$clearSoundEffect.bind(this),
            "stop": this.$soundStop.bind(this),
            "stopImmediately": this.$soundStopImmediately.bind(this)
        };
    }
    get Extensions() {
        return {
            //---Entity
            "speech": this.$speech.bind(this),
            "speechAndWait": this.$speechAndWait.bind(this),
            "speechStopAll": this.$speechStopImmediately.bind(this)
        };
    }
}





class $bff2c8621503147e$export$9e586b2d89460a7f {
    get Backdrops() {
        return 0, $84361c868fac6da7$export$871e6904fa4a901e;
    }
    get Cast() {
        return 0, $0a339137bfce8c41$export$107ecfb3d1ccbd77;
    }
    get Costumes() {
        return 0, $b307d41ec08c0548$export$7221f75269e0795b;
    }
    get Controls() {
        return 0, $c2847359be0a9884$export$c7c44baae9d9f25f;
    }
    get Entity() {
        return 0, $2401b5b232271269$export$bc644a473284d944;
    }
    get Env() {
        return 0, $aa5c463d8e2daad8$export$6c0517834721cef7;
    }
    get EventEmitter() {
        return 0, $bmdED$EventEmitter;
    }
    get FunctionChecker() {
        return 0, $31a1fe5d0f620d33$export$741a5dc0221ff449;
    }
    get Keyboard() {
        return 0, $b9e618ce331e0b2f$export$16e4d70cc375e707;
    }
    get ImageEffective() {
        return 0, $380bce3af1d7e09d$export$8fc1bb2af54b68cf;
    }
    get SoundOption() {
        return 0, $380bce3af1d7e09d$export$ac89145aaed3fdce;
    }
    get RotationStyle() {
        return 0, $380bce3af1d7e09d$export$f4507c5cf8887f06;
    }
    get Loop() {
        return 0, $c2847359be0a9884$export$550acbd06a1f5a6a;
    }
    get Monitors() {
        return 0, $8ec7545479155111$export$190939f3628d90e9;
    }
    get MathUtils() {
        return 0, $a98e95d0f90948cf$export$6a7ef315a0d1ef07;
    }
    /**
     * 指定したkeyが押されているとき TRUE
     * key 省略時は 何かのキーが押されているとき TRUE
     * @param {*} key 
     * @returns TRUE/FALSE
     */ keyIsDown(key) {
        const _p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        const _r = _p.runtime;
        if (_r) return _r.keyIsDown(key);
        return false;
    }
    /**
     * 指定したkeyが押されていないとき TRUE
     * key 省略時は 何かのキーが押されていないとき TRUE
     * 
     * @param {*} key 
     * @returns TRUE/FALSE
     */ keyIsNotDown(key) {
        return !this.keyIsDown(key);
    }
    /**
     * 何かのキーが押されているとき TRUE
     * @returns TRUE/FALSE
     */ anyKeyIsDown() {
        return this.keyIsDown();
    }
    /**
     * マウスが押されているとき TRUE
     * @returns 
     */ mouseIsPressed() {
        const mouse = (0, $a6b849a6af88d987$export$80606ec500c7d132).stage.mouse;
        return mouse.down;
    }
    get stageWidth() {
        const _p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        return _p.$stageWidth;
    }
    get stageHeight() {
        const _p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        return _p.$stageHeight;
    }
    /**
     * get rendering rate object
     */ get renderRate() {
        const _p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        if (_p.render != null && _p.canvas) {
            const _rateX = _p.render.stageWidth / _p.canvas.width;
            const _rateY = _p.render.stageHeight / _p.canvas.height;
            return {
                x: _rateX,
                y: _rateY
            };
        }
        throw `unable calculate renderRate`;
    }
    /**
     * mousePosition ( on canvas )
     */ get mousePosition() {
        const _p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        const rate = this.renderRate;
        if (_p.canvas) {
            const _mouseX = (_p.stage.mouse.x - _p.canvas.width / 2) * rate.x;
            const _mouseY = (_p.canvas.height / 2 - _p.stage.mouse.y) * rate.y;
            return {
                x: _mouseX,
                y: _mouseY
            };
        }
        throw `unable calculate mouse position`;
    }
    get randomPoint() {
        const _p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        const randomPointX = (Math.random() - 0.5) * _p.$stageWidth;
        const randomPointY = (Math.random() - 0.5) * _p.$stageHeight;
        return {
            x: randomPointX,
            y: randomPointY
        };
    }
    get randomDirection() {
        const direction = (Math.random() - 0.5) * 720;
        if (direction > 180) return direction - 180;
        return direction;
    }
    getRandomValueInRange(from, to, forceAsDecimal = false) {
        return (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).randomizeInRange(from, to, forceAsDecimal);
    }
    get Render() {
        return 0, $e358fae1ef53461c$export$160ae30d75f98247;
    }
    get Sounds() {
        return 0, $f45580fe7e9c00fc$export$76eeb3aae76ab221;
    }
    get Stage() {
        return 0, $f64534297d4e371e$export$208cd1682bd0e4b6;
    }
    get StageLayering() {
        return 0, $46d3480c6a43a723$export$8bb8475f9426623c;
    }
    get Sprite() {
        return 0, $7f0287fd36934f2a$export$3075603db8e6204c;
    }
    // get TextDraw () {
    //     return TextDraw;
    // }
    // get TextOption () {
    //     return TextOption;
    // }
    get Utils() {
        return 0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea;
    }
    async wait(t) {
        await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait(t);
    }
    async waitWhile(condition, entity) {
        const _condition = entity ? condition.bind(entity) : condition;
        while(_condition())await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait((0, $aa5c463d8e2daad8$export$6c0517834721cef7).pace);
    }
    async waitUntil(condition, entity) {
        const _condition = entity ? condition.bind(entity) : condition;
        for(;;){
            if (_condition()) break;
            await (0, $cb9f3b1eaba280e9$export$d2ca453b913dcdea).wait((0, $aa5c463d8e2daad8$export$6c0517834721cef7).pace);
        }
    }
    toScratchPosition(x, y) {
        // Base position -> canvas 
        const rate = this.renderRate;
        const _x = x * rate.x;
        const _y = y * rate.y;
        return {
            x: _x,
            y: _y
        };
    }
    toActualPosition(x, y) {
        const rate = this.renderRate;
        const _x = x / rate.x;
        const _y = y / rate.y;
        return {
            x: _x,
            y: _y
        };
    }
    /**
     * change scratch position to local position
     * @param {number} x  scratch x position
     * @param {number} y  scratch y position
     * @returns local position
     */ scratchToLocalPos(x, y) {
        const p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        if (p.render) {
            const w = p.render.stageWidth;
            const h = p.render.stageHeight;
            let localPosX = x + w / 2;
            let localPosY = h / 2 - y;
            return {
                x: localPosX,
                y: localPosY
            };
        }
        throw `unable calculate scratchToLocalPos`;
    }
    /**
     * change local position to scratch position
     * @param {number} x  local x position
     * @param {number} y  local y position
     * @returns {x:number, y:number} scratch position
     */ localToScratchPos(x, y) {
        const p = (0, $a6b849a6af88d987$export$80606ec500c7d132);
        if (p.render) {
            const w = p.render.stageWidth;
            const h = p.render.stageHeight;
            let scratchPosX = x - w / 2;
            let scratchPosY = h / 2 - y;
            return {
                x: scratchPosX,
                y: scratchPosY
            };
        }
        throw 'unable calculate localToScratchPos';
    }
    *Iterator(n) {
        for(let i = 0; i < n; i++)yield i;
    }
    static getInstance() {
        if ($bff2c8621503147e$export$9e586b2d89460a7f._instance == undefined) $bff2c8621503147e$export$9e586b2d89460a7f._instance = new $bff2c8621503147e$export$9e586b2d89460a7f();
        return $bff2c8621503147e$export$9e586b2d89460a7f._instance;
    }
    constructor(){}
}
const $bff2c8621503147e$export$51f69a3a2b76fd0f = $bff2c8621503147e$export$9e586b2d89460a7f.getInstance();



window.Buffer = window.Buffer || (0, $bmdED$Buffer);
const $149c1bd638913645$var$Element = (0, $a6b849a6af88d987$export$80606ec500c7d132).Element;
$149c1bd638913645$var$Element.insertCss();
const $149c1bd638913645$var$Initialize = async function() {
    await (0, $a6b849a6af88d987$export$80606ec500c7d132)._init();
};
$149c1bd638913645$var$Initialize();
const $149c1bd638913645$var$PlayGround = (0, $a6b849a6af88d987$export$80606ec500c7d132);
const $149c1bd638913645$var$Library = (0, $bff2c8621503147e$export$51f69a3a2b76fd0f);
const $149c1bd638913645$var$ScratchLib = {
    Pg: $149c1bd638913645$var$PlayGround,
    Libs: $149c1bd638913645$var$Library
};
$149c1bd638913645$exports = $149c1bd638913645$var$ScratchLib;


export {$149c1bd638913645$exports as default};
//# sourceMappingURL=index.js.map
