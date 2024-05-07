"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checaOperacao = void 0;
function checaOperacao(operacao, a, b) {
    switch (operacao) {
        case "soma":
            return a + b;
            break;
        case "sub":
            return a - b;
            break;
        case "mult":
            return a * b;
            break;
        case "div":
            if (b != 0) {
                return a / b;
            }
            else {
                return "Não é possível dividir por zero.";
            }
            break;
        case "maior deles":
            if (a > b) {
                return a;
            }
            else {
                return b;
            }
            break;
        default:
            return "Operação inválida.";
            break;
    }
}
exports.checaOperacao = checaOperacao;
