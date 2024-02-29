"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
const Polar_1 = require("./Polar");
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.toPolar = () => {
            const x = this.x;
            const y = this.y;
            const radius = Math.sqrt(x * x + y * y);
            const angle = Math.atan2(y, x);
            return new Polar_1.Polar(radius, angle);
        };
    }
}
exports.Vector2 = Vector2;
Vector2.getDistance = (p1, p2) => {
    const x1 = p1.x;
    const y1 = p1.y;
    const x2 = p2.x;
    const y2 = p2.y;
    const distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    return distance;
};
