/**
 * Runtime
 */
import { EventEmitter } from 'events';
// Virtual I/O devices.
import { Keyboard } from '../io/keyboard';

import type {IScratchRenderer} from '../render/IScratchRenderer';
declare type IODEVICES = {
    keyboard: Keyboard,
}
export class Runtime extends EventEmitter {
    private renderer:IScratchRenderer|undefined;
    private ioDevices: IODEVICES;
    /**
     * @constructor
     */
    constructor() {
        super();
        //this._target = [];
        /** @type IRenderer */
        this.renderer;
        const ioDevice:IODEVICES = {
            keyboard: new Keyboard(this),
        }
        this.ioDevices = ioDevice;
    }

    get GREEN_BUTTON_ENABLED () :string{
        return 'GREEN_BUTTON_ENABLED';
    }
    /**
     * ScratchRendererを設定する
     * @param renderer {IScratchRenderer}
     */
    attachRenderer ( renderer: IScratchRenderer ) {
        this.renderer = renderer;
    }
    /**
     * 指定したキーが押されているかの判定
     * @param key {string}
     * @returns {boolean}
     */
    keyIsDown(key: string) : boolean{
        return this.ioDevices.keyboard.keyIsDown(key);
    }

};