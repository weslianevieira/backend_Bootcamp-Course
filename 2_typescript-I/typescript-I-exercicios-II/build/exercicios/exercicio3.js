"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checaAnoBissexto = void 0;
function checaAnoBissexto(ano) {
    const cond1 = ano % 400 === 0;
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0);
    return cond1 || cond2;
}
exports.checaAnoBissexto = checaAnoBissexto;
