"use strict";
function checarTriangulo(a, b, c) {
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
console.log(checarTriangulo(12, 45, 76));
//# sourceMappingURL=ex1.js.map