import 'regenerator-runtime'
import 'core-js'
//import { Buffer } from 'buffer'
//window.Buffer = window.Buffer || Buffer
import { libs } from '../lib/libs';
import { playGround } from '../lib/playGround';

const Element = playGround.Element;
Element.insertCss();

const Initialize = async function() {
    await playGround._init();
};

Initialize();
const PlayGround = playGround;
const Library = libs;
export const ScratchLikeLib = {"Pg":PlayGround, "Libs":Library};
