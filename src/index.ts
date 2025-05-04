import 'regenerator-runtime'
import 'core-js'
import { Buffer } from 'buffer'
window.Buffer = window.Buffer || Buffer
import {Libs} from '../lib/libs';
import { playGround } from '../lib/playGround';

const Element = playGround.Element;
Element.insertCss();

const Initialize = async function() {
    await playGround._init();
};

Initialize();

export {playGround, Libs};

