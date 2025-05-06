import 'regenerator-runtime';
import 'core-js';
import { Buffer } from 'buffer';

// Scratch-Render の中で Bufferを使うのだが、
// Bufferは WEB-Browser上では参照できない。
// 回避策としてグローバル変数として windowに追加する。
// @ts-ignore
window.Buffer = window.Buffer || Buffer

const playGround = require('../lib/playGround');
const Libs = playGround.default.Libs;
const Element = playGround.default.Element;

Element.insertCss();

const Initialize = async function() {
    await playGround.default._init();
};

Initialize();
const PlayGround = playGround.default;
export { PlayGround, Libs};