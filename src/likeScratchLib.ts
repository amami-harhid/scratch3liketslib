import 'regenerator-runtime';
import 'core-js';
//const { Buffer } = require('buffer');
const { Buffer } = await import(/* webpackMode: "eager" */ 'buffer');
// 【Buffer】
// BufferはNodeAPIでありNODEの外では利用できない仕様である
// Srratch-Render内で利用するGraphemeBreaker.jsの中で
// Bufferを参照しており参照させるには工夫を要する。
// 【工夫】ブラウザ動作を前提とし グローバル変数にする
window.Buffer = window.Buffer || Buffer
// 【import の eagerモード】
// import { Buffer } from 'buffer';のように
// Bufferを importで読み込むと 【工夫】の対処をしても
// 不完全である。
// importの読み込みは非同期型、requireは同期型であるため
// Bufferの読み込みが終わらないうちに Window.Bufferとして
// 格納してしまうことがあり得るためBufferは「同期型」で
// 読み込むことにする。requireで読み込むか、または
// await import()で読み込むかの選択になるが、ここでは 
// eagerモードによるawait import()としてみたい。
// await importにすると webpackでは出力ファイルが自動的に
// 分割されてしまう。分割は好きではないので 
// 「/* webpackMode: "eager" */」をつけて eagerモードにする

const { PlayGround } = await import(/* webpackMode: "eager" */ '../lib/playGround');
// 【PlayGroundのimport】
// PlayGroundの中では多数のimportを行っている。
// import { PlayGround } from '../lib/playGround'; のように
// 非同期で読み込みその直後に PlayGroundの参照をするとタイミングにより
// PlayGround型の読み込み未完了の場合があり得る。
// よって await import 、webpack出力ファイル分割を回避したいので
// Bufferの読み込みと同様にeagerモードとしている

export const Pg = PlayGround.getInstance();
export const Lib = Pg.Libs;
const S3Element = Pg.Element;
S3Element.insertCss();

const Initialize = async function() {
    await Pg._init();
};

Initialize();