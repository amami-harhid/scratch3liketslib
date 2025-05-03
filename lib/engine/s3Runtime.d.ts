// @filename: engine/s3Runtime.d.ts
import type { S3Renderer } from "lib/engine/s3Renderer";
import type { S3Keyboard } from "lib/io/s3Keyboard";
import { EventEmitter } from "events"; 
export interface S3IODevice {
    keyboard : S3Keyboard;
};

declare interface S3Emitter {
    on(emitId:string, func:CallableFunction): void;
    emit(emitId:string):void;
}

/**
 * runtime
 */
export interface S3Runtime extends S3Emitter{
    //new(): S3Runtime;
    GREEN_BUTTON_ENABLED: string;
    attachRenderer(renderer:S3Renderer);
    /**
     * 指定キー押下チェック
     * @param {string} key - 指定するキー
     * @return {boolean} isDown - 押されているとき TRUE
     */
    keyIsDown(key:string):boolean;

}