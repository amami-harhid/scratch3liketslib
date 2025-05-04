/**
 * scratch3 audio effect chain
 */
import {S3AudioVolumeEffect} from 'libTypes/engine/S3AudioVolumeEffect';
export interface S3AudioEffectChain {
    set? (effect:string, value:number):void;
    volume?: S3AudioVolumeEffect;
}