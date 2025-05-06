import { Element } from './element';
import { Entity } from './entity';
import { Env } from './env';
import { FontLoader } from './importer/fontLoader';
import { ImageLoader } from './importer/imageLoader';
import { NowLoadingSVG } from './nowLoading';
import { Libs, libs } from './libs';
import { Monitors } from './monitor/monitors';
import { Render } from "./render";
import { Runtime } from './engine/runtime';
import { SoundLoader } from './importer/soundLoader';
import { Sprite } from './sprite';
import { Stage } from './stage';
import { threads } from './threads';
import { Utils } from './utils';
import { text } from 'stream/consumers';
export class PlayGround {
    static _instance:PlayGround;
    /**
     * 
     * @return {PlayGround}
     */
    static getInstance():PlayGround {
        if( PlayGround._instance == undefined ) {
            PlayGround._instance = new PlayGround();
        }
        return PlayGround._instance;
    }
    private _render: Render|null;
    private _stage: Stage|null;
    private _id:string;
    private _canvas: HTMLCanvasElement|null;
    private _textCanvas: HTMLCanvasElement|null;
    private _runtime:Runtime|null;
    public runningGame: boolean;
    private _preloadDone: boolean;
    private _prepaeDone: boolean;
    private _preloadImagePromise: Promise<{name:string,data: any}>[];
    private _preloadSoundPromise: Promise<{name:string,data: any}>[];
    private _preloadFontPromise: Promise<FontFace>[];
    private _loadedImages: {[key:string]: {name:string,data: any}};
    private _loadedSounds: {[key:string]: {name:string,data: any}};
    private _monitors: Monitors|null;
    private _flag: HTMLElement|null;
    private mainTmp: HTMLElement|null;
    public main: HTMLElement|undefined;
    public preload: CallableFunction|null;
    public prepare: CallableFunction|null;
    public setting: CallableFunction|null;
    public draw: CallableFunction|null;
    constructor () {
        this._render = null;
        this._id = this._generateUUID();
        this._runtime = null;
        this._preloadImagePromise = [];
        this._preloadSoundPromise = [];
        this._preloadFontPromise = [];
        this._loadedImages = {};
        this._loadedSounds = {};
//        this._dataPools = {};
        this._preloadDone = false;
        this._prepaeDone = false;
        this._stage = null;
        this._monitors = null;
        this.runningGame = false;
        this._canvas = null;
        this._flag = null;
        this.mainTmp = null;
        this.main = undefined;
        this.preload = null;
        this.prepare = null;
        this.setting = null;
        this.draw = null;
        this._textCanvas = null;
    }
    get monitors() {
        return this._monitors;
    }
    set monitors(_monitors){
        this._monitors = _monitors;
    }
    isPrepareDone(){
        return this._prepaeDone;
    }
    // clearPools() {
    //     const _pool = this._dataPoolSprite;
    //     for (let key in _pool){ 
    //         delete this._dataPoolSprite[key]
    //     }
    // }
    get loadedImages() {
        return this._loadedImages;
    }
    get loadedSounds() {
        return this._loadedSounds;
    }
    // get dataPools() {
    //     return this._dataPools;
    // }
    // set dataPools(_dataPool) {
    //     this._dataPools = _dataPool;
    // }

    get Libs () {
        return Libs;
    }
    get Element () {
        return Element;
    }
    get Stage () {
        return Stage;
    }    
    _generateUUID () {
        return Utils.generateUUID();
    }
    get NowLoading () {
        return NowLoadingSVG;
    }
    get threads () {
        return threads;
    }
    get render () : Render {
        if(this._render == undefined) throw 'render undefined error';
        return this._render;
    }
    set render( render:Render ) {
        // _init() の中で設定される。
        this._render = render;
    }

    set runtime(runtime: Runtime) {
        this._runtime = runtime;
    }

    get runtime() : Runtime {
        if(this._runtime == undefined) throw 'runtime undefined error';
        return this._runtime;
    }

    set stage ( stage: Stage ) {
        this._stage = stage;
    }

    get stage () : Stage{
        if( this._stage == undefined) throw 'stage undefined error';
        return this._stage;
    }

    set canvas(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
    }
    get canvas() : HTMLCanvasElement {
        if(this._canvas == undefined) throw 'canvas undefined error';
        return this._canvas;
    }
    set textCanvas(textCanvas: HTMLCanvasElement) {
        this._textCanvas = textCanvas;
    }
    get textCanvas() : HTMLCanvasElement {
        if(this._textCanvas == undefined) throw 'textCanvas undefined error';
        return this._textCanvas;
    }
    get $stageWidth () {
        if(this._render){
            return this._render.stageWidth;
        }
        throw 'unable calclulate stageWidth';
    }

    get $stageHeight () {
        if(this._render){
            return this._render.stageHeight;
        }
        throw 'unable calclulate stageHeight';
    }


    /**
     * get randering rate ( when resized )
     * @returns 
     */
    getRenderRate() {
        return libs.renderRate;        
    }


    set flag ( flag:HTMLElement ) {
        this._flag = flag;
    }

    get flag () :HTMLElement{
        if(this._flag){
            return this._flag;
        }
        throw 'unable to get flag element';
    }

    ifMainExist() {
        const main = document.getElementById('main');
        if(main) return main;
        return false;
    }
    removeMainIfExist(){
        const main = this.ifMainExist();
        if(main){
            main.remove();
        }
    }
    async _reStart() {
//        this.clearPools();
//        console.log('befor _prepare');
//        await this._prepare();
        await this._setting();

    }
    /**
     * HTMLヘッダーtitle
     */
    get title(): string {
        return document.title;
    }
    public set title(_title: string) {
        document.title = _title;
    }

    async _init() : Promise<void> {
//        const keyboard = Keyboard.default;
//        keyboard.startWatching();
        // Now Loading 準備 START
        const mainTmp = document.createElement('main');
        this.mainTmp = mainTmp;
        mainTmp.id = 'mainTmp';
        mainTmp.classList.add('nowLoading');
        mainTmp.style.zIndex = '9999' ; // 一番手前 ( 本体main z-index= 999)
        mainTmp.style.position = 'absolute'
        mainTmp.style.touchAction = 'manipulation'
        mainTmp.style.width = `${innerWidth}px`
        mainTmp.style.height = `${innerHeight}px`

        document.body.appendChild(mainTmp);
        await Utils.wait(100);
        this._preload();
        await this._waitUntilPreloadDone();   
        await Element.init();
        const main = this.main;
        if(main == undefined){
            throw 'unable to add main classList';
        }
        main.classList.add(Element.DISPLAY_NONE);
        this._render = new Render();
        this._runtime = new Runtime();
        if(this._render == undefined || this._render.renderer == undefined){
            throw 'unable to execute attachRenderer';
        }
        this._runtime.attachRenderer(this._render.renderer);    

//        this.clearPools();

        await this._prepare();
        this._prepaeDone = true;
        await this._setting();
        await Element.flagInit();
        //await this._setting();

        this.runningGame = false;
        this._runtime.on('RUNNING_GAME', ()=>{
            this.runningGame = true;
        });
        this._runtime.on('PAUSING_GAME', ()=>{
            this.runningGame = false;
        });
        await Utils.wait(100);
        // Mainタグから非表示のクラスを除去しフラグとキャンバスを表示する
        main.classList.remove(Element.DISPLAY_NONE);
        // NowLoadingを消す。
        this.mainTmp.remove();

    }
    async _preload () {
        if( this.preload ) {
            this.preload( this );
        }
    }

    async _prepare () {

        // prepareメソッドの実行を開始する
        if( this.prepare ) {
            await this.prepare(this);
            await Utils.wait(Env.pace);
            if( this._stage ) {
                this._stage.update();
                this._stage.draw();
            }
        }
    }
    async _setting () {

        if( this.setting ) {
            await this.setting (this);
        }

    }

    _draw () {
        if( this._stage ) {
            this._stage.update ();
            this._stage.draw();
            // draw関数を定義済であれば実行する
            // これは p5.js の名残り。なくてもよいと思う。
            if( this.draw ) {
                this.draw();
            }
        }
        if( this._monitors ) {
            this._monitors.draw();
        }
    }

    $loadImage(imageUrl:string, name:string, translate) {
        let _name ;
        if( name ) {
            _name = name;
        }else{
            _name = imageUrl.replace(/\.[^.]+$/, '');
        }
        const data = ImageLoader.loadImage(imageUrl, _name, translate);
        this._preloadImagePromise.push(data);
        return data;
    }
    $loadSound(soundUrl:string, name:string) :Promise<
            {name: string, data: Uint8Array<ArrayBuffer>}> {
        let _name:string ;
        if( name ) {
            _name = name;
        }else{
            _name = soundUrl.replace(/\.[^.]+$/, '');
        }
        const data = SoundLoader.loadSound(soundUrl, _name);
        this._preloadSoundPromise.push(data);
        return data;
    }
    loadFont(fontUrl:string, name:string) : Promise<FontFace> {
        const font = FontLoader.fontLoad(fontUrl, name);
        this._preloadFontPromise.push(font);
        return font;
    }
    spriteClone( src: Object, callback: CallableFunction ) {
        if( src instanceof libs.Sprite ) {
            const _src:Sprite = src as Sprite;
            _src.$clone().then( async( c:Entity ) =>{
                if( callback ) {
                    const _callback = callback.bind( c );
                    _callback();
                }
            });
        }
    }

    get preloadDone() {
        return this._preloadDone;
    }
    async _waitUntilPreloadDone() {
        if(this._preloadImagePromise.length > 0 ) {
            const _images = await Promise.all(this._preloadImagePromise);
            for(const v of _images) {
                this._loadedImages[v.name] = {'name': v.name, 'data': v.data };
            }    
        }
        if( this._preloadSoundPromise.length > 0 ) {
            const _sounds = await Promise.all(this._preloadSoundPromise);
            for(const v of _sounds) {
                this._loadedSounds[v.name] = {'name' : v.name, 'data': v.data };
            }    
        }
        if ( this._preloadFontPromise.length > 0 ) {
            const _fonts = await Promise.all( this._preloadFontPromise);
            for(const v of _fonts) {
                // Font を登録する
                document.fonts.add( v );
            }
        }

        this._preloadDone = true;
    }

    get Image () {
        return {
            "load": this.$loadImage.bind(this),
        }
    }
    get Sound () {
        return {
            "load": this.$loadSound.bind(this),
        }
    }

    $stopAll() {
        threads.stopThreadsInterval();
    }

    
    get Control(){
        return {
            "stopAll": this.$stopAll.bind(this),
        }
    }
}
const playGround = PlayGround.getInstance();

export {playGround};