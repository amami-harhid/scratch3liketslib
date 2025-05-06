import { Buffer } from 'buffer';
console.log(Buffer);
import 'regenerator-runtime';
import 'core-js';

// @ts-ignore
window.Buffer = window.Buffer || Buffer

//const {Libs} = require('../lib/libs');
import {PlayGround} from '../lib/playGround';
import {libs} from '../lib/libs';
const playGround = PlayGround.getInstance();
const Element = playGround.Element;

Element.insertCss();

const Initialize = async function() {
    await playGround._init();
};

Initialize();

console.log(playGround);

export { playGround, libs};