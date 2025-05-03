const SoundLoader = class {

    /**
     * 
     * @param {string} sound 
     * @param {string} name 
     * @return {{name:string, data:Uint8Array<ArrayBuffer>}} data
     */
    static async loadSound(sound:string, name:string)
                :Promise<{name:string, data:Uint8Array<ArrayBuffer>}> {
        if(sound) {
            if(typeof sound === 'string') {
                let responce:Response = await fetch(sound);
                let buffer:ArrayBuffer = await responce.arrayBuffer();
                let data:Uint8Array<ArrayBuffer> =  new Uint8Array(buffer);
                return {name:name, data:data};
            }
        }
        // 例外を起こすべきところ。
        throw('Scratch3LikeJS loadSound: empty url')
    }

};

module.exports = SoundLoader;