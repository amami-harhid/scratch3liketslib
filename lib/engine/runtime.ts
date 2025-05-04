import type {S3Renderer} from 'libTypes/engine/S3Renderer';
import type {S3Runtime,S3IODevice} from 'libTypes/engine/s3Runtime';
import type {S3Keyboard} from 'libTypes/io/s3Keyboard';
import { EventEmitter } from 'events';
import { StageLayering } from 'lib/stageLayering';
// Virtual I/O devices.
//const Clock = require('../io/clock');
import { Keyboard } from 'lib/io/keyboard';
//const Mouse = require('../io/mouse');
//const MouseWheel = require('../io/mouseWheel');
/**
 * runtime
 */
export class Runtime extends EventEmitter{

    public ioDevices:S3IODevice;
    public renderer: S3Renderer|null;
    /**
     * @constructor
     */
    constructor() {
        super();
        //this._target = [];
        /** @type S3Renderer */
        this.renderer = null;
        const ioDevice:S3IODevice = {
            keyboard: new Keyboard(this),
        }
        this.ioDevices = ioDevice;
    }

    get GREEN_BUTTON_ENABLED () {
        return 'GREEN_BUTTON_ENABLED';
    }

    attachRenderer ( renderer:S3Renderer ) {
        this.renderer = renderer;
    }

    keyIsDown(key?:string) {
        return this.ioDevices.keyboard.keyIsDown(key);
    }

};