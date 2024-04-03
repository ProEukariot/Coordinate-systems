"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeTakes = void 0;
function timeTakes(func) {
    const start = performance.now();
    func();
    const end = performance.now();
    return end - start;
}
exports.timeTakes = timeTakes;
