import 'regenerator-runtime';
import 'core-js';
import { Buffer } from 'buffer';
// Scratch-Render の中で Bufferを使うのだが、
// Bufferは WEB-Browser上では参照できない。
// 回避策としてグローバル変数として windowに追加する。
window.Buffer = window.Buffer || Buffer

// 【PlayGroundのimport】
// import { PlayGround } from ・・・とした直後は
// PlayGroundのgetInstance() を呼び出せない
// await import を使うと呼び出せるが Bundleファイルの分割が起きる
// PlayGroundはrequire()で読み込むことにする
const { PlayGround } = require('../lib/playGround');
export const Pg = PlayGround.getInstance();
export const Lib = Pg.Libs;
const S3Element = Pg.Element;
S3Element.insertCss();

const Initialize = async function() {
    await Pg._init();
};

Initialize();