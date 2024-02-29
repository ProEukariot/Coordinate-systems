"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
}
exports.Random = Random;
Random.between = (a, b) => {
    if (a > b)
        [a, b] = [b, a];
    return Math.random() * (b - a) + a;
};
