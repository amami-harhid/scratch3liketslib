import { playGround } from "./playGround";
import { S3Renderer } from "../libTypes/render/S3Renderer";
import { Sprite } from "./sprite";
import { StageLayering } from "./stageLayering";
import { uid } from "./uid";
declare type BUBBLE_STATE = {
    drawableID: string,
    skinId:number,
    text:string,
    type:string,
    onSpriteRight:boolean,
    uid:string,
};
export declare type SPEAK_PROPERTY = {
    scale?:{w:number, h:number},    
}
export class Bubble{
    private sprite: Sprite;
    //private playground: PlayGround;
    private renderer: S3Renderer|null;
    private _scale: {w:number, h:number};
    private bubbleState: BUBBLE_STATE;
    private _direction: number;
    constructor( sprite: Sprite ) {
        this.bubbleState = this._createBubbleState();
        this.sprite = sprite;
        //this.playground = playGround;
        this.renderer = null;
        if(playGround.render){
            this.renderer = playGround.render.renderer;
        }
        this._scale = {w:100, h:100};
        this._direction = 90;
    }
    _createBubbleState(): BUBBLE_STATE {
        const state:BUBBLE_STATE = {
            drawableID : '',
            skinId: 0,
            text : '',
            type : 'say',
            onSpriteRight : true,
            uid : '', // <--- 使用用途不明
        }
        return state;
    }
    isBubbleActive() :boolean{
        if( this.bubbleState.uid == null) {
            return false;
        }
        return true;
    }
    get direction() : number {
        return this._direction;
    }
    set direction( _direction:number ) {
        this._direction = _direction;
    }
    setScale( w:number, h:number ): void {
        if( w == 0 || h == 0 ) {
            // ゼロスケールではDrawできないので回避する。
            return;
        }
        // マイナススケールのとき 文字が反転（鏡文字）となるのでそれを回避する。
        let _w = Math.abs(w);
        let _h = Math.abs(h);
        this._scale.w = _w;
        this._scale.h = _h;    
}
    async createDrawable() :Promise<void> {
        if(this.renderer && this.bubbleState.drawableID == null ) {
            const bubbleDrawableID = this.renderer.createDrawable( StageLayering.SPRITE_LAYER );
            this.bubbleState.drawableID = bubbleDrawableID;
        }
    }

    async createTextSkin() :Promise<void> {
        if(this.renderer && this.bubbleState.skinId == 0 ) {
            this.bubbleState.skinId = this.renderer.createTextSkin(
                this.bubbleState.type, 
                this.bubbleState.text, 
                this.bubbleState.onSpriteRight
            );
            this.bubbleState.uid = uid();    
        }
    }
    async say( _text:string, _properties:SPEAK_PROPERTY) {
        this.bubbleState.type = 'say';
        this.bubbleState.text = _text;
        await this._renderBubble(_properties);
    }
    async think(_text:string,  _properties:SPEAK_PROPERTY) {
        this.bubbleState.type = 'think';
        this.bubbleState.text = _text;
        await this._renderBubble(_properties);
    }
    updateScale( w, h ) { 
        if(this.bubbleState.drawableID != null){
            if( w == 0 || h == 0 ) {
                // ゼロスケールではDrawできないので回避する。
                return;
            }
            if(this.renderer){
                // マイナススケールのとき 文字が反転（鏡文字）となるのでそれを回避する。
                let _w = Math.abs(w);
                let _h = Math.abs(h);
                this._scale.w = _w;
                this._scale.h = _h;
                this.renderer.updateDrawableScale ( this.bubbleState.drawableID , [_w, _h] );
            }
       }
    }
    async _renderBubble(_properties:SPEAK_PROPERTY={scale:{w:0,h:0}}) {
        if(this.sprite.visible == false || this.bubbleState.text === '') {
            if( this.bubbleState.uid != null ) {
                this.destroyBubble();
            }
            return;
        }
        if(this.renderer){
            if( this.bubbleState.uid == null ) {
                this.createDrawable();
                await this.createTextSkin();    
                if( Object.keys(_properties).length > 0 ) {
                    if( _properties.scale ) {
                        this.updateScale( _properties.scale.w, _properties.scale.h );
                    }
                }
                this.renderer.updateDrawableSkinId(this.bubbleState.drawableID, this.bubbleState.skinId);
            }else if(this.bubbleState.skinId) {
                if( Object.keys(_properties).length > 0 ) {
                    if( _properties.scale ) {
                        this.updateScale( _properties.scale.w, _properties.scale.h );
                    }
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
        if(this.renderer && this.bubbleState.skinId) {
            try{
                const [_bubbleWidth, _bubbleHeight] = this.renderer.getCurrentSkinSize( this.bubbleState.drawableID );
                const bubbleWidth = _bubbleWidth * this._scale.w / 100; 
                const bubbleHeight = _bubbleHeight * this._scale.h / 100;
                const targetBounds = this.renderer.getBoundsForBubble( this.sprite.drawableID );
                const stageSize = this.renderer.getNativeSize();
                const stageBounds = {
                    left: -stageSize[0] / 2,
                    right: stageSize[0] / 2,
                    top: stageSize[1] / 2,
                    bottom: -stageSize[1] / 2
                };
                if( this.bubbleState.onSpriteRight === true 
                    && bubbleWidth + targetBounds.right > stageBounds.right && (targetBounds.left - bubbleWidth > stageBounds.left) ) {
                    if( this._scale.w > 0) {
                        this.bubbleState.onSpriteRight = false;
                    } else {
                        this.bubbleState.onSpriteRight = false;
                    }
                    this.renderer.updateTextSkin(this.bubbleState.skinId, this.bubbleState.type, this.bubbleState.text, this.bubbleState.onSpriteRight);
                } else if( this.bubbleState.onSpriteRight === false 
                    && targetBounds.left - bubbleWidth < stageBounds.left && (bubbleWidth + targetBounds.right < stageBounds.right) ) {
                    if( this._scale.w > 0) {
                        this.bubbleState.onSpriteRight = true;
                    } else {
                        this.bubbleState.onSpriteRight = false;
                    }
                    this.renderer.updateTextSkin(this.bubbleState.skinId, this.bubbleState.type, this.bubbleState.text, this.bubbleState.onSpriteRight);
                } else {
                    const positionX = (this.bubbleState.onSpriteRight)? 
                        (Math.max(stageBounds.left,Math.min(stageBounds.right - bubbleWidth, targetBounds.right)))
                        :(Math.min(stageBounds.right - bubbleWidth, Math.max(stageBounds.left, targetBounds.left - bubbleWidth )));
                    const positionY = Math.min(stageBounds.top, targetBounds.bottom + bubbleHeight);
                    this.renderer.updateDrawablePosition(this.bubbleState.drawableID, [positionX, positionY]);
                }
        
            } catch(e) {
                //console.log(e);
            }
        }
    }
    destroyBubble() {
       if(this.renderer && this.isBubbleActive() && this.bubbleState.drawableID.length > 0) {
            this.renderer.destroyDrawable( this.bubbleState.drawableID, StageLayering.SPRITE_LAYER);
            this.renderer.destroySkin( this.bubbleState.skinId )
            this._createBubbleState();    
        }
    }
};