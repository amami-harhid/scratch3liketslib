import AudioEngine from 'scratch-audio';
import { Entity } from './entity';
import { SoundLoader } from './importer/soundLoader';
//const Process = require('./process');
import { SoundPlayer } from './soundPlayer';
import { S3AudioEffectChain } from 'libTypes/engine/S3AudioEffectChain';
import { S3SoundPlayerOptions } from '../libTypes/engine/S3SoundPlayerOptoins';

export class Sounds {
    public entity: Entity;
    public audioEngine: AudioEngine;
    public soundPlayers: Map<string, SoundPlayer>;
    public soundPlayer: SoundPlayer|undefined;
    public soundIdx: number;
    constructor(entity: Entity) {
        this.entity = entity;
        this.audioEngine = new AudioEngine();
        this.soundPlayers = new Map<string,SoundPlayer>();
        this.soundPlayer = undefined;
        this.soundIdx = 0;
    }
    // ==== 未使用 =====
    // async importSound( sound ) {
    //     const soundData = await SoundLoader.loadSound(sound);
    //     return soundData;
    // }

    async setSound( name:string, soundData:Uint8Array<ArrayBuffer>, options:S3SoundPlayerOptions = {} ) :Promise<void> {
        // audioEngine.decodeSoundPlayerの引数は {data} の形にする。変数名は dataでないといけない。
        const data = soundData;
        const _soundPlayer = await this.audioEngine.decodeSoundPlayer({data});
        const _effects:S3AudioEffectChain = this.audioEngine.createEffectChain();
        const _options = options;
        _options.effects = _effects;
        const soundPlayer = new SoundPlayer(name, _soundPlayer, _options);
        if(this.soundPlayer == null){
            this.soundPlayer = soundPlayer;
        }
        this.soundPlayers.set(name, soundPlayer);
        // effects は インスタンスを作るときに渡しているので引数省略。
        soundPlayer.connect();

    }
    async loadSound( name:string, sound:string , options = {}) : Promise<void>{
        const data = await SoundLoader.loadSound(sound, name);
        await this.setSound(name, data.data, options);
    }
    switch(name:string) :void{
        const me = this;
        const _keys = Array.from(this.soundPlayers.keys());
        if( _keys.length > 1) {
            _keys.map((_name,_idx) => {
                if(_name == name) {
                    me.soundIdx = _idx;
                    const soundPlayer = me.soundPlayers.get(name);
                    me.soundPlayer = soundPlayer;
                }
            });

        } 
    }
    getSoundKeys() {
        const _keys = Array.from(this.soundPlayers.keys());
        return _keys;
    }
    nextSound() {
        const me = this;
        const _keys = Array.from(this.soundPlayers.keys());
        if( _keys.length > 1) {
            const _nextIdx = this.soundIdx + 1;
            if(_nextIdx < _keys.length) {
                this.soundIdx = _nextIdx;
            }else{
                this.soundIdx = 0;
            }
            _keys.map( (_name, _idx) => {
                if (_idx == me.soundIdx ) {
                    me.soundPlayer = me.soundPlayers.get(_name);
                }
            });
        }
    }
    play() {
        if ( this.soundPlayer == null) return;
        //const _effects = this.soundPlayer.effects;
        this.soundPlayer.connect();
        this.soundPlayer.play();
    }
    setVolume(volume:number, name:string) {
        if(name) {
            const me = this;
            const _keys = Array.from(this.soundPlayers.keys());
            if ( _keys.length > 0 ) {
                _keys.map((_name,_idx)=>{
                    if ( _name == name ) {
                        const _soundPlayer = this.soundPlayers.get(name);
                        if(_soundPlayer){
                            _soundPlayer.volume = volume;               
                        }
                    }
                });
            } else {
                // soundPlayerがない
                return;
            }
        } else {
            if ( this.soundPlayer == null) return;
            this.soundPlayer.volume = volume;
        }
    }
    set volume(volume : number) {
        if ( this.soundPlayer == null) return;
        // 現在選択中の soundPlayerへ設定する
        this.soundPlayer.volume = volume;
    }
    get volume() :number{
        if ( this.soundPlayer == null) return -1;
        // 現在選択中の soundPlayerから取得する
        return this.soundPlayer.volume;
    }
    set pitch(pitch: number){
        if ( this.soundPlayer == null) return;
        // 現在選択中の soundPlayerへ設定する
        this.soundPlayer.pitch = pitch;
    }
    get pitch() : number {
        if ( this.soundPlayer == null) return Infinity;
        // 現在選択中の soundPlayerから取得する
        return this.soundPlayer.pitch;
    }
    async startSoundUntilDone(self:Entity) {
        if ( this.soundPlayer == null) return;
        if(self){
            const me = this;
            return new Promise<void>(async resolve=>{
                // Entity.$speechStopImmediately()でEmitされる
                if(me.soundPlayer == undefined) {
                    resolve();
                }else{
                    const _f = _=>{
                        me.stopImmediately();
                        resolve();
                    }
                    const EMIT_ID = self.SOUND_FORCE_STOP;
                    self.once(EMIT_ID,_f);
                    await me.soundPlayer.startSoundUntilDone(); // 終わるまで待つ
                    self.removeListener(EMIT_ID, _f);
                    resolve();        
                }
            })    
        }else{
            const me = this;
            //await this.soundPlayer.startSoundUntilDone(); // 終わるまで待つ
            return new Promise<void>(async resolve=>{
                // me.entity は constructorで受け取る Sprite/Stage のentity
                if(me.soundPlayer == undefined) {
                    resolve();
                }else{
                    const _f = _=>{
                        me.stopImmediately();
                        resolve();
                    }
                    const EMIT_ID = me.entity.SOUND_FORCE_STOP;
                    me.entity.once(EMIT_ID, _f);
                    await me.soundPlayer.startSoundUntilDone(); // 終わるまで待つ
                    me.entity.removeListener(EMIT_ID, _f);
                    resolve();
                }
            });
            
        }
    }
    stop() :void {
        if ( this.soundPlayer == null) return;
        this.soundPlayer.stop();
    }

    stopImmediately() :void{
        if ( this.soundPlayer == null) return;
        this.soundPlayer.stopImmediately();
    }
};