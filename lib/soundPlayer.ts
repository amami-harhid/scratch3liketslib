const {SoundOption} = require('./types');
import {S3SoundPlayer} from 'libTypes/engine/S3SoundPlayer';
import {S3AudioEffectChain} from 'libTypes/engine/S3AudioEffectChain';
declare type SoundPlayerOptions = {
    volume?:number,
    pitch?:number,
    effects?:S3AudioEffectChain,
};
export class SoundPlayer {
    private _name: string;
    private _soundPlayer: S3SoundPlayer;
    private _options: SoundPlayerOptions;
    private _volume: number;
    private _pitch: number;
    private connectDone: boolean;
    private _effects: S3AudioEffectChain|null;
    constructor(name: string, _soundPlayer:S3SoundPlayer, options:SoundPlayerOptions = {}) {
        this._name = name;
        this._soundPlayer = _soundPlayer;
        this._options = options;
        this._volume = ( options.volume )? options.volume: 100;
        this._pitch = ( options.pitch )? options.pitch: 1;
        this.connectDone = false;
        if(this._options.effects ) {
            this._effects = this._options.effects;
            this._soundPlayer.setPlaybackRate(this._pitch);
            this._effects.set(this._effects.volume.name, this._volume);
            this._effects.volume.update();
            this.connect();
        }else{
            this._effects = null;
        }
    }
    set pitch( pitch ) {
        this._pitch = pitch;
        this._soundPlayer.setPlaybackRate(pitch);
    }
    get pitch() {
        return this._pitch;
    }
    set volume( volume) {
        if(this._effects){
            this._volume = volume;
            this._effects.set(this._effects.volume.name, this._volume);
            this._effects.volume.update();    
        }
    }
    get volume() {
        return this._volume;
    }

    get soundPlayer() {
        return this._soundPlayer;

    }
    get name() {
        return this._name;
    }
    set effects ( effects ){
        this._effects = effects;
    }
    get effects() {
        return this._effects;
    }
    connect() {
        if(this.connectDone === false) {
            if(this._effects) {
                this._soundPlayer.connect(this._effects);
                this.connectDone = true;
            }
        }
    }
    play() {
        this._soundPlayer.play();
    }
    async startSoundUntilDone() {

        const __soundPlayer = this._soundPlayer;
        // --- replace finished.
        // --- when sounds stoped, change property(isPlaying) to false
        this._soundPlayer.finished = function(){
            return new Promise<void>(resolve=>{
                __soundPlayer.once('stop', ()=>{
                        __soundPlayer.isPlaying = false;
                        resolve();
                    }
                );
            })
        }

        this.play();
        await this._soundPlayer.finished();
    }
    stop() {
        this._soundPlayer.stop();
    }
    stopImmediately() {
        this._soundPlayer.stopImmediately();
    }

};