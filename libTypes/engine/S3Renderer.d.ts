/**
 * scratch3 renderer
 */
import { StageLayering } from 'lib/stageLayering';
import { S3MonitorSkin } from 'lib/monitor/s3MonitorSkin';
import type { S3Drawable } from './S3Drowable';
import type {S3Skin} from './S3Skin';
export interface S3Renderer {
    _allDrawables: S3Drawable[];
    _allSkins(): S3Skin[];
    createDrawable(layer:string): string;
    createBitmapSkin(bitmap:any):Promise<number>;
    createSVGSkin(svgText:string):number;
    createTextSkin(type:string, text:string, onSpriteRight:boolean): number; 
    destroyDrawable(drawableID:string, stageLayering:StageLayering): void;
    destroySkin(skinId:number):void;
    getBoundsForBubble(drawableID:string):{bottom:number, left:number, right:number};
    getCurrentSkinSize(drawableID:string):number[];
    getNativeSize (): number[];
    _nextSkinId: number;
    pick(mouseX:number, mouseY:number, touchWidth:number, touchHeight:number, candidateIDs: string[]): string;
    resize(w:number, h:number):void;
    setLayerGroupOrdering(layerGroups:string[]):void;
    updateDrawablePosition(drawableID:string, position:number[]):void;
    updateDrawableProperties(drawableID: string, properties: any): void;
    updateDrawableScale(drawableID:string, scale: number[]):void;
    updateDrawableSkinId(drawableID:string, skinId: number):void;
    updateTextSkin(skinId: number, type:string, text:string, onSpriteRight:boolean):void;

    s3CreateMonitorSkin(drawableID:string, label:string):void;
    getS3Skin(skinId: number):S3MonitorSkin;
}