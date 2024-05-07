"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checaTriangulo = void 0;
function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isósceles";
    }
}
exports.checaTriangulo = checaTriangulo;
