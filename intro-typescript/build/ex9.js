"use strict";
function validarInscricao(idade, ensinoMedio, horasDisponiveis, curso) {
    if (idade > 18 && ensinoMedio) {
        if (curso === "integral" && horasDisponiveis >= 40) {
            return true;
        }
        else if (curso === "noturno" && horasDisponiveis >= 20) {
            return true;
        }
    }
    return false;
}
const inscricaoValida = validarInscricao(26, true, 15, "integral");
console.log(inscricaoValida);
//# sourceMappingURL=ex9.js.map