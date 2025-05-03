class SVGParser {
    
    static instance:SVGParser|null = null;
    static getInstance() {
        if(SVGParser.instance){
            return SVGParser.instance;
        }
        return new SVGParser();
    }
    private domParser:DOMParser;
    private serializer:XMLSerializer;
    private svgDoc: Element|null;
    /**
     * @constructor
     */
    constructor() {
        this.domParser = new DOMParser();
        this.serializer = new XMLSerializer();
        this.svgDoc = null;
    }
    /**
     * SVG Text をパースする
     * 
     * @param {string} svgText 
     * @return {Element} 
     */
    parseFromString(svgText:string): Element {
        const parsedSVGDoc:XMLDocument = this.domParser.parseFromString(svgText, 'image/svg+xml');
        this.svgDoc = parsedSVGDoc.childNodes[0] as Element;
        return this.svgDoc;        
    }
    /**
     * 
     * @return {{w:number,h:number}}
     */
    getSize(): {w:number, h:number} {
        if(this.svgDoc){
            const element:Element = this.svgDoc;
            const w = element.getAttribute('width');
            const h = element.getAttribute('height');
            const _w = `${w}`.replace('px', '');
            const _h = `${h}`.replace('px', '');
            return {w: Number(_w), h: Number(_h)};
        }
        return {w: 0, h: 0};
    }
    /**
     * 
     * @param {Element} svgDoc 
     * @param {number} w 
     * @param {number} h 
     * @param {object} translate 
     * @return {string} 変更後のsvgDoc文字列
     */
    sizeChange(svgDoc:Element, w: number=480, h: number=360, 
                    translate:{x:number,y:number} ={x:0, y:0}): string {
        // svgタグ
        svgDoc.setAttribute('width', `${w}px`);
        svgDoc.setAttribute('height', `${h}px`);
        svgDoc.setAttribute('viewBox', `0 0 ${w} ${h}`);
        // transformをもつgTag
        const gTagTransform:NodeListOf<Element> = svgDoc.querySelectorAll('g[transform]');
        if(gTagTransform && gTagTransform.length && gTagTransform.length > 0){
            const translateX:number = translate.x;
            const translateY:number = translate.y;
            gTagTransform[0].setAttribute('transform', `translate(${translateX}, ${translateY})`);    
        }
        const changed:string = this.serializer.serializeToString(svgDoc);
        return changed;
    }
}
const svgParser = SVGParser.getInstance();
export {svgParser};