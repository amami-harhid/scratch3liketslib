import { StageLayering } from '../stageLayering';
import { S3MonitorSkin } from '../monitor/s3MonitorSkin';
import { IDrawable } from './IDrawable';
import { TBounds } from '../common/typeCommon';

declare type ScratchRenderProperties = {
    skindId: number,
    position: number[],
    scale: number[],
    visible : boolean,
}


export declare interface IRenderWebGL {
    /**
     * 全てのDrawableの配列
     */
    _allDrawables: IScratchDrawable[];
    gl: WebGLRenderingContext;
    /**
     * Bounds 取得
     * @param drawableID {string}
     * @returns {TBounds}
     */
    getBounds(drawableID: string): TBounds; 
    /**
     * モニター用スキンを取得する
     * @param skinId {number}
     */
    getS3Skin(skinId:number): S3MonitorSkin;
    /**
     * モニター用スキンを作成する
     * @param drawableID {string}
     * @param label {string}
     * @returns skinId {number}
     */
    s3CreateMonitorSkin(drawableID:string, label:string):number;
    setDrawableOrder(drawableID: string, order: number, group: StageLayering, optIsRelative: boolean, optMin?: number): void;
    /**
     * update position, direction, scale, or effect properties
     * @param drawableID {string}
     * @param properties {ScratchRenderProperties}
     */
    updateDrawableProperties(drawableID, properties:ScratchRenderProperties): void;
    /**
     * Update a drawable's skin
     * @param drawableID {string}
     * @param skinId {number}
     */
    updateDrawableSkinId(drawableID: string, skinId: number): void;
}