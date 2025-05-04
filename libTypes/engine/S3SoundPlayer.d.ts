/**
 * scratch3 sound player
 */
import { S3AudioEffectChain } from "libTypes/engine/S3AudioEffectChain";
export interface S3SoundPlayer {
    setPlaybackRate(pitch:number):void;
    connect(effects: S3AudioEffectChain):void;
    play():void;
    finished():Promise<void>;
    stop():void;
    stopImmediately():void;
    isPlaying:boolean;
    once(emmitId: string , callback: CallableFunction):void;
}