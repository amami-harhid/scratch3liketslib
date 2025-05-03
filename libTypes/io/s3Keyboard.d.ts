export type S3DomEventData = {
    key: string;
    isDown: boolean;
}
export type S3Keyboard = {

    keyIsDown(key: string): boolean;
}
