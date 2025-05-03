// @filename: engine/s3Runtime.d.ts
import type { S3Renderer } from "lib/engine/s3Renderer";
import type { S3Keyboard } from "lib/io/s3Keyboard";
import { EventEmitter } from "events"; 
export interface S3IODevice {
    keyboard : S3Keyboard;
};

/**
 * runtime
 */
export interface S3Runtime extends EventEmitter{
    new(): S3Runtime;
    GREEN_BUTTON_ENABLED: string;
    attachRenderer(renderer:S3Renderer);
    /**
     * 指定キー押下チェック
     * @param {string} key - 指定するキー
     * @return {boolean} isDown - 押されているとき TRUE
     */
    keyIsDown(key:string):boolean;

    ioDevices : S3IODevice;

}