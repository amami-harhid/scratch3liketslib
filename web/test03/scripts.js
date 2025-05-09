/**
 * test03
 * Scratch3 スピーチの実験
 * 
 * sample21では、音声スピーチを broadcast を経由していますが、
 * broadcastAndWait にて音声スピーチが終わりを検知できるようにしました。
 * 
 */
import {Pg, Lib} from '../../build/index.js'

Pg.title = "【test03】スピーチ機能：「スピーチを終わるまで待つ」の確認";

const AssetHost = "https://amami-harhid.github.io/scratch3likejslib/web";

const Jurassic = "Jurassic";
const Chill = "Chill";
const Cat = "Cat";

let stage, cat;

Pg.preload = async function preload() {

    this.Image.load(AssetHost+'/assets/Jurassic.svg', Jurassic );
    this.Sound.load(AssetHost+'/assets/Chill.wav', Chill );
    this.Image.load(AssetHost+'/assets/cat.svg', Cat );
}
Pg.prepare = async function prepare() {

    stage = new Lib.Stage();
    await stage.Image.add( Jurassic );
    await stage.Sound.add( Chill );
    cat = new Lib.Sprite( "Cat" );
    cat.Looks.setSize( {w:300,h:300} );//サイズを３倍にしています
    await cat.Image.add( Cat );
}

Pg.setting = async function setting() {

    stage.Event.whenFlag(async function*(){
        await this.Sound.setOption( Lib.SoundOption.VOLUME, 10 )
        while(true){
            await this.Sound.playUntilDone(Chill);
            yield;
        }
    })

    // ネコにさわったらお話する
    cat.Event.whenFlag( async function*(){
        const words = `なになに？`;
        const properties = {'pitch': 2, 'volume': 100};
        while(true){
            if( this.Sensing.isMouseTouching() ) {
                this.Looks.say(words);// フキダシを出す
                await this.Event.broadcastAndWait('SPEECH', words, properties, 'male');
                this.Looks.say(""); // フキダシを消す
                // 「送って待つ」を使うことで スピーチが終わるまで次のコードに進まない。
                // スピーチは２つ同時にできないので、スプライトクリックのイベントと重なってしまう。
                // 以下の「マウスタッチしている間、待つ」をして 「なになに？」のスピーチ開始を一旦とめる。
                await Lib.waitWhile(_=>this.Sensing.isMouseTouching()); 
            }else{
                await this.Event.broadcastAndWait('SPEECH_STOP');
            }
            yield;
        }
    });
    // ネコをクリックしたらお話する
    cat.Event.whenClicked(async function(){
        const words = `そこそこ。そこがかゆいの。`;
        const properties = {'pitch': 1.7, 'volume': 500}
        // スピーチを止めるためのメッセージを送る
        await this.Event.broadcastAndWait('SPEECH_STOP');
        // スピーチさせるメッセージを送る
        await this.Event.broadcastAndWait('SPEECH', words, properties, 'female');
    });
    
    /** スピーチのメッセージを受信したとき */
    cat.Event.whenBroadcastReceived('SPEECH', async function(words, properties, gender='male', locale='ja-JP') {
        // speechAndWait に await をつけて、音声スピーチが終わるまで待つ。
        await this.Extensions.speechAndWait(words, properties, gender, locale);
    });
    /** スピーチ停止のメッセージを受信したとき */
    cat.Event.whenBroadcastReceived('SPEECH_STOP', async function() {
        // スピーチを全て停止する
        this.Extensions.speechStopAll();
    });

}