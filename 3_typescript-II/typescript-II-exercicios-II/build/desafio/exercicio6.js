"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determinaIdadeHistorica = void 0;
function determinaIdadeHistorica(ano, sigla) {
    let SIGLA;
    (function (SIGLA) {
        SIGLA["AC"] = "AC";
        SIGLA["DC"] = "DC";
    })(SIGLA || (SIGLA = {}));
    let IDADE;
    (function (IDADE) {
        IDADE["PH"] = "Pr\u00E9-Hist\u00F3ria";
        IDADE["IA"] = "Idade Antiga";
        IDADE["IME"] = "Idade M\u00E9dia";
        IDADE["IMO"] = "Idade Moderna";
        IDADE["IC"] = "Idade Contempor\u00E2nea";
    })(IDADE || (IDADE = {}));
    if (ano && sigla) {
        if (ano <= 4000 && sigla === SIGLA.AC) {
            return "Pré-História";
        }
        else if (ano === 0 && ano <= 476 && sigla === SIGLA.DC) {
            return "Idade Antiga";
        }
        else if (ano <= 1453 && sigla === SIGLA.DC) {
            return "Idade Média";
        }
        else if (ano <= 1789 && sigla === SIGLA.DC) {
            return "Idade Moderna";
        }
        else if (ano > 1789 && sigla === SIGLA.DC) {
            return "Idade Contemporânea";
        }
        else {
            return "Sigla inválida, use AC ou DC.";
        }
    }
    else if (ano) {
        if (ano === 0 && ano <= 476) {
            return "Idade Antiga";
        }
        else if (ano <= 1453) {
            return "Idade Média";
        }
        else if (ano <= 1789) {
            return "Idade Moderna";
        }
        else if (ano > 1789) {
            return "Idade Contemporânea";
        }
        else {
            return "erro";
        }
    }
    else {
        return "Por favor, insira um ano válido e uma sigla válida (AC ou DC).";
    }
}
exports.determinaIdadeHistorica = determinaIdadeHistorica;
