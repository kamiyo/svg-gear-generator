export class Coordinate {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    rotate(radians: number) {
        const cosR = Math.cos(radians);
        const sinR = Math.sin(radians);
        const tempX = this.x;
        const tempY = this.y;
        return new Coordinate(tempX * cosR - tempY * sinR, tempX * sinR + tempY * cosR);
    }

    rotated(radians: number) {
        const cosR = Math.cos(radians);
        const sinR = Math.sin(radians);
        const tempX = this.x;
        const tempY = this.y;
        this.x = tempX * cosR - tempY * sinR
        this.y = tempX * sinR + tempY * cosR;
    }

    scale(size: number) {
        return new Coordinate(this.x * size, this.y * size);
    }

    toString() {
        return this.x + ' ' + this.y;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}