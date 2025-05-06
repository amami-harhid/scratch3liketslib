import 'regenerator-runtime';
import 'core-js';
import { Buffer } from 'buffer';
console.log(Buffer);

// @ts-ignore
window.Buffer = window.Buffer || Buffer

//const {Libs} = require('../lib/libs');
const playGround = require('../lib/playGround');
const Libs = playGround.default.Libs;
//const playGround = PlayGround.getInstance();
const Element = playGround.default.Element;

Element.insertCss();

const Initialize = async function() {
    await playGround.default._init();
};

Initialize();
const PlayGround = playGround.default;
export { PlayGround, Libs};