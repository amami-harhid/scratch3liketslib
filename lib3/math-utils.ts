export class MathUtils {
    static degToRad (deg: number) : number {
        return deg * Math.PI / 180;
    }
    static radToDeg (rad: number): number {
        return rad * 180 / Math.PI;
    }
};