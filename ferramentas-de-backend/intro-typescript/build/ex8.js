"use strict";
function inverterString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
const texto = "Olá, mundo!";
const textoInvertido = inverterString(texto);
console.log(textoInvertido);
//# sourceMappingURL=ex8.js.map