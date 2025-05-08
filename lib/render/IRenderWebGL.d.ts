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
    /** 全てのDrawableの配列 */
    _allDrawables: IDrawable[];
    /** 全てのskinの配列 */
    _allSkins: S3MonitorSkin[];
    /** canvas context */
    gl: WebGLRenderingContext;
    /** next skin id */
    _nextSkinId: number;
    /**
     * Bounds 取得
     * @param drawableID { number }
     * @returns {TBounds}
     */
    getBounds(drawableID: number): TBounds; 
    /**
     * Get the precise bounds for a Drawable around the top slice.
     * @param drawableID {number}
     * @returns {TBounds} - Bounds for a tight box around the Drawable top slice.
     */
    getBoundsForBubble(drawableID: number): TBounds;
    /**
     * Get the current skin (costume) size of a Drawable.
     * @param drawableID {number}
     * @returns {number[]} - Skin size, width and height.
     */
    getCurrentSkinSize(drawableID: number): number[];
    /**
     * get native size
     * @returns {number[]} - the "native" size of the stage, which is used for pen, query renders, etc.
     */
    getNativeSize(): number[];
    /**
     * モニター用スキンを取得する
     * @param skinId {number}
     */
    getS3Skin(skinId:number): S3MonitorSkin;
    
    /**
     * Drawableを作成する
     * @param group {StageLayering}
     * @returns {number} - drawableID
     */
    createDrawable(group: StageLayering): number;
    /**
     * 
     * @param type {string} - "say" or "think"
     * @param text {string} - the text for the bubble
     * @param pointsLeft {boolean} - which side the bubble is pointing
     * @returns {number} - skinID
     */
    createTextSkin(type: string, text: string, pointsLeft: boolean):number;
    /**
     * 
     * @param drawableID {number} - drawable id
     * @param group {StageLayering} - Group name that the drawable belongs to.
     */
    destroyDrawable(drawableID: number, group: StageLayering): void;
    /**
     * Destroy an existing skin. 
     * Do not use the skin or its ID after calling this.
     * @param skinId {number} - skin id.
     */
    destroySkin(skinId: number): void;
    /**
     * モニター用スキンを作成する
     * @param {number} drawableID - drawable id.
     * @param {string} label - layer name.
     * @returns {number} - skin id.  
     */
    s3CreateMonitorSkin(drawableID:number, label:string):number;
    /**
     * Set a drawable's order in the drawable list (effectively, z/layer).
     * Can be used to move drawables to absolute positions in the list,
     * or relative to their current positions.
     * 
     * @param drawableID {number}
     * @param order {number} - order New absolute order or relative order adjusment.
     * @param group {StageLayering} - group Name of layer group drawable belongs to.
     * @param optIsRelative {boolean} - If set, `order` refers to a relative change.
     * @param optMin {?number} - New order if changed, or null. 
     */
    setDrawableOrder(drawableID: number, order: number, group: StageLayering, optIsRelative: boolean, optMin?: number): void;
    /**
     * Update a drawable's position.
     * @param drawableID {number} - drawable id.
     * @param position {number[]} - the new position.
     */
    updateDrawablePosition(drawableID: number, position: number[]): void;
    /**
     * update position, direction, scale, or effect properties
     * @param drawableID {number}
     * @param properties {ScratchRenderProperties}
     */
    updateDrawableProperties(drawableID: number, properties:ScratchRenderProperties): void;
    /**
     * Update a drawable's scale.
     * @param drawableID 
     * @param scale 
     */
    updateDrawableScale(drawableID: number, scale: number[]): void;
    /**
     * Update a drawable's skin
     * @param drawableID {number}
     * @param skinId {number}
     */
    updateDrawableSkinId(drawableID: number, skinId: number): void;
    /**
     * 
     * @param skinId {number} - skin id.
     * @param type {string} - "say" or "think".
     * @param text {string} - the text for the bubble.
     * @param pointsLeft {boolean} - which side the bubble is pointing.
     */
    updateTextSkin(skinId: number, type: string, text: string, pointsLeft: boolean): void;
}