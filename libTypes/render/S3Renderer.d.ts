/**
 * scratch3 renderer
 */
import { StageLayering } from '../../lib/stageLayering';
import { S3MonitorSkin } from '../../lib/monitor/s3MonitorSkin';
import type { S3Color3b } from '../color/S3Color';
import type { S3Drawable } from './S3Drowable';
import type { S3Skin } from '../monitor/S3Skin';
export interface S3Renderer {
    _allDrawables: S3Drawable[];
    _allSkins(): S3Skin[];
    createDrawable(layer:string): string;
    createBitmapSkin(bitmap:any):Promise<number>;
    createSVGSkin(svgText:string):number;
    createTextSkin(type:string, text:string, onSpriteRight:boolean): number; 
    destroyDrawable(drawableID:string, stageLayering:StageLayering): void;
    destroySkin(skinId:number):void;
    draw():void;
    getBounds(drawableID: string): {left: number, top: number, right: number, bottom:number};
    getBoundsForBubble(drawableID:string):{bottom:number, left:number, right:number};
    getCurrentSkinSize(drawableID:string):number[];
    getFencedPositionOfDrawable(drawableID: string, position: number[]): number[];
    getNativeSize (): number[];
    gl:any;
    isTouchingColor(drawableID:string, color3b:S3Color3b, mask3b?: S3Color3b): Promise<boolean>;
    isTouchingDrawables(drawableID:string, targetIds: string[]): boolean;
    _nextSkinId: number;
    pick(mouseX:number, mouseY:number, touchWidth:number, touchHeight:number, candidateIDs?: string[]): string;
    resize(w:number, h:number):void;
    setDrawableOrder(drawableID:string, layer:number, group: StageLayering, optIsRelative: boolean, optMin?:number): void;
    setLayerGroupOrdering(layerGroups:string[]):void;
    updateDrawablePosition(drawableID:string, position: number[]):void;
    updateDrawableProperties(drawableID: string, properties: any): void;
    updateDrawableScale(drawableID:string, scale: number[]):void;
    updateDrawableSkinId(drawableID:string, skinId: number):void;
    updateDrawableVisible(drawableID: string, visible: boolean): void;
    updateTextSkin(skinId: number, type:string, text:string, onSpriteRight:boolean):void;

    s3CreateMonitorSkin(drawableID:string, label:string): number;
    getS3Skin(skinId: number):S3MonitorSkin;
}