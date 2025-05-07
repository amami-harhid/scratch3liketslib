import 'regenerator-runtime';
import 'core-js';
import { Buffer } from 'buffer';
// Scratch-Render の中で Bufferを使うのだが、
// Bufferは WEB-Browser上では直接には参照できないらしい。
// 回避策としてグローバル変数として windowに追加する。
window.Buffer = window.Buffer || Buffer

// 【PlayGroundのimport】
// import { PlayGround } from '../lib/playGround';
// とした直後は『Buffer is not defined』エラー(GraphemeBreaker.js)が発生
// PlayGroundのgetInstance() を呼び出せない。
// 
// const { PlayGround } = await import('../lib/playGround')
// dynamic import を使うとエラーを回避できるが
// Bundleファイルの分割が起きてしまいBundle結果が１つにならない
//
// 【最終案】PlayGroundはrequire()で読み込むことにする
const { PlayGround } = require('../lib/playGround');
export const Pg = PlayGround.getInstance();
export const Lib = Pg.Libs;
const S3Element = Pg.Element;
S3Element.insertCss();

const Initialize = async function() {
    await Pg._init();
};

Initialize();