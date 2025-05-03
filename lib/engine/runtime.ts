import type {S3Renderer} from 'lib/engine/S3Renderer';
import type {S3Runtime,S3IODevice} from 'lib/engine/s3Runtime';
import type {S3Keyboard} from 'lib/io/s3Keyboard';
const EventEmitter = require('events').EventEmitter;
const StageLayering = require('../stageLayering');
// Virtual I/O devices.
const Clock = require('../io/clock');
const Keyboard = require('../io/keyboard');
const Mouse = require('../io/mouse');
const MouseWheel = require('../io/mouseWheel');
/**
 * runtime
 */
const Runtime = class extends EventEmitter implements S3Runtime{

    private ioDevices:S3IODevice; 
    /**
     * @constructor
     */
    constructor() {
        super();
        this._target = [];
        /** @type S3Renderer */
        this.renderer = null;
        const ioDevice:S3IODevice = {
            //clock: new Clock(this),
            keyboard: new Keyboard(this),
            mouse: new Mouse(this),
            mouseWheel: new MouseWheel(this),
            //userData: new UserData(),
            //video: new Video(this)
        }
        this.ioDevices = ioDevice;
    }
    [EventEmitter.captureRejectionSymbol]?<K>(error: Error, event: string | symbol, ...args: any[]): void {
        throw new Error('Method not implemented.');
    }
    [EventEmitter.captureRejectionSymbol]?<K>(error: Error, event: string | symbol, ...args: any[]): void {
        throw new Error('Method not implemented.');
    }
    addListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('Method not implemented.');
    }
    on<K>(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('Method not implemented.');
    }
    once<K>(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('Method not implemented.');
    }
    removeListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('Method not implemented.');
    }
    off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('Method not implemented.');
    }
    removeAllListeners(eventName?: string | symbol | undefined): this {
        throw new Error('Method not implemented.');
    }
    setMaxListeners(n: number): this {
        throw new Error('Method not implemented.');
    }
    getMaxListeners(): number {
        throw new Error('Method not implemented.');
    }
    listeners<K>(eventName: string | symbol): Function[] {
        throw new Error('Method not implemented.');
    }
    rawListeners<K>(eventName: string | symbol): Function[] {
        throw new Error('Method not implemented.');
    }
    emit<K>(eventName: string | symbol, ...args: any[]): boolean {
        throw new Error('Method not implemented.');
    }
    listenerCount<K>(eventName: string | symbol, listener?: Function | undefined): number {
        throw new Error('Method not implemented.');
    }
    prependListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('Method not implemented.');
    }
    prependOnceListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error('Method not implemented.');
    }
    eventNames(): (string | symbol)[] {
        throw new Error('Method not implemented.');
    }

    get GREEN_BUTTON_ENABLED () {
        return 'GREEN_BUTTON_ENABLED';
    }

    attachRenderer ( renderer:S3Renderer ) {
        this.renderer = renderer;
    }

    keyIsDown(key:string) {
        return this.ioDevices.keyboard.keyIsDown(key);
    }

}

module.exports = Runtime;