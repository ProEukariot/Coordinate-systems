"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Performance = void 0;
class Performance {
    static timeTakes(func) {
        const start = performance.now();
        func();
        const end = performance.now();
        return end - start;
    }
}
exports.Performance = Performance;
