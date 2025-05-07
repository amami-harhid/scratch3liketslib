/**
 * FontLoader
 */
export class FontLoader {
    static async fontLoad(url: string, name: string){
        if(url) {
            const font = new FontFace(name, `url(${url})`);
            const _font = await font.load();
            return _font;
        }
        // 例外を起こすべきところ。
        throw('Scratch3LikeJS loadFont: empty url')
    }
};