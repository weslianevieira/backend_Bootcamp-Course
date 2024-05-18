import { homedir } from "os"

function renovarCarteira(dataNascimento: string, dataEmissao: string) {
    // timestamp retorna em milisegundos
    const hojeTimestamp: number = new Date().getTime()

    const [diaNasc, mesNasc, anoNasc] = dataNascimento.split("/")

    // formato new Date '1990-05-17T00:00:00'
    const anoNascTimestamp: number = new Date(
        `${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`
    ).getTime()

    const [diaDoc, mesDoc, anoDoc] = dataEmissao.split("/")
    const anoDocTimestamp: number = new Date(
        `${anoDoc}-${mesDoc}-${diaDoc}T00:00:00`
    ).getTime()

    const idade: number = hojeTimestamp - anoNascTimestamp
    const ultimaRenovacao: number = hojeTimestamp - anoDocTimestamp
    const umAnoEmTimestamp: number = 31556926000;

    // lemrar de converter idade pra milisegundos
    if (idade <= 20 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 5 * umAnoEmTimestamp ? true : false
    } else if (idade >= 20 * umAnoEmTimestamp && idade <= 50 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 10 * umAnoEmTimestamp ? true : false
    } else if (idade >= 50 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 15 * umAnoEmTimestamp ? true : false
    }
}

console.log(renovarCarteira("24/04/1993", "07/11/2015"))
// false