export function determinaIdadeHistorica(ano?: number, sigla?: string): string | undefined {
    enum SIGLA {
        AC = "AC",
        DC = "DC"
    }

    enum IDADE {
        PH = "Pré-História",
        IA = "Idade Antiga",
        IME = "Idade Média",
        IMO = "Idade Moderna", 
        IC = "Idade Contemporânea"
    }

    if (ano && sigla) {
        if (ano <= 4000 && sigla === SIGLA.AC) {
            return "Pré-História"
        } else if (ano === 0 && ano <= 476 && sigla === SIGLA.DC) {
            return "Idade Antiga"
        } else if (ano <= 1453 && sigla === SIGLA.DC) {
            return "Idade Média"
        } else if (ano <= 1789 && sigla === SIGLA.DC) {
            return "Idade Moderna"
        } else if (ano > 1789 && sigla === SIGLA.DC) {
            return "Idade Contemporânea"
        } else {
            return "Sigla inválida, use AC ou DC."
        }
    } else if (ano) {
        if (ano === 0 && ano <= 476) {
            return "Idade Antiga"
        } else if (ano <= 1453) {
            return "Idade Média"
        } else if (ano <= 1789) {
            return "Idade Moderna"
        } else if (ano > 1789) {
            return "Idade Contemporânea"
        } else {
            return "erro"
        }
    } else {
        return "Por favor, insira um ano válido e uma sigla válida (AC ou DC)."
    }
}