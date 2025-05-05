import { Canvas } from "./canvas";
import { Element } from "./element";
import { playGround } from "./playGround";
const ScratchRenderer = require('scratch-render');
//import { ScratchRenderer } from 'scratch-render/dist/node/scratch-render.js';
import { StageLayering } from "./stageLayering";
import { S3Renderer } from "../libTypes/render/S3Renderer";
export class Render {
    static get WHRate() {
        return 0.75;
    }
    static get W() {
        //const Scratch3StageWidth = 240;
        const WHRate = Render.WHRate; // ( 3/4 )
        const InnerWidthRate = 0.95;// 0.95; //0.8;
        const InnerHeightRate = 0.95;
        let w = innerWidth / devicePixelRatio * InnerWidthRate;
        let h = w * WHRate;
        const hLimit = innerHeight / devicePixelRatio * InnerHeightRate;
        if( h > hLimit ) {
            h = hLimit;
            w = h / WHRate;
        }
        return w;
    }
    static get H() {
        return Render.W * Render.WHRate;
    }
    private _renderer: S3Renderer|null;
    private layerGroups:string[];
    public stageWidth: number;
    public stageHeight: number;
    private canvas: HTMLElement|null;
    constructor(layerGroups = StageLayering.LAYER_GROUPS) {
        this.layerGroups = layerGroups;
        this.stageWidth = 0;
        this.stageHeight = 0;
        this._renderer = null;
        this.canvas = null;
        this.createRenderer();
        const me = this;
        const resizeWindow = function() {
            const main = playGround.main;
            Element.mainPositioning(main);
            me.stageResize();
        };
        window.addEventListener('resize', resizeWindow);
    }
    stageResize(w = Render.W , h = Render.H) {
        if(this._renderer){
            this._renderer.resize( w, h ); // stage(canvas)のサイズ property(width,height)の値をリサイズ
            const _nativeSize = this._renderer.getNativeSize ();
            this.stageWidth = _nativeSize[0];
            this.stageHeight = _nativeSize[1];
            Canvas.resize2DContext( w, h);
            Render.monitorCanvasResize( w, h);    
        }
    }
    static monitorCanvasResize(w = Render.W , h = Render.H) {
        Canvas.resizeMonitorCanvas(w, h);

    }
    createRenderer (w = Render.W , h = Render.H ) {
        this.canvas = Element.canvas;
        this._renderer = new ScratchRenderer(this.canvas);
        if(this._renderer){
            this._renderer.setLayerGroupOrdering(this.layerGroups);
            this.stageResize(w,h);    
        }    
}

    createDrawable(layer:string) : string {
        if(this._renderer){
            const drawableID = this._renderer.createDrawable(layer);
            return drawableID;    
        }
        throw `'createDrawable' failed, renderer is null `;
    }
    get renderer() :S3Renderer{
        if(this._renderer == undefined) throw 'Not found renderer error';
        return this._renderer;
    }
    
};