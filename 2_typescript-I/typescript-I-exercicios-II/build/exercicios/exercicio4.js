"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparaDoisNumeros = void 0;
function comparaDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    }
    else {
        maiorNumero = num2;
        menorNumero = num1;
    }
    const diferenca = maiorNumero - menorNumero;
    return diferenca;
}
exports.comparaDoisNumeros = comparaDoisNumeros;
