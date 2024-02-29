"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polar = void 0;
const Vector2_1 = require("./Vector2");
class Polar {
    constructor(radius, angle) {
        this.radius = radius;
        this.angle = angle;
        this.toVector2 = () => {
            const radius = this.radius;
            const angle = this.angle;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return new Vector2_1.Vector2(x, y);
        };
    }
}
exports.Polar = Polar;
Polar.getDistance = (p1, p2) => {
    const r1 = p1.radius;
    const ang1 = p1.angle;
    const r2 = p2.radius;
    const ang2 = p2.angle;
    const distance = Math.sqrt(r1 * r1 + r2 * r2 - 2 * r1 * r2 * Math.cos(ang2 - ang1));
    return distance;
};
