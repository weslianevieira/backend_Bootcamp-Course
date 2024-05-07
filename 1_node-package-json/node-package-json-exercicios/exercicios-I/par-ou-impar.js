// Obtendo as escolhas do jogador e do número
const jogadorEscolha = process.argv[2].toLowerCase() // impar ou par
const jogadorNumero = Number(process.argv[3]) 


// node par-ou-impar.js par 1
//  0        1           2  3 
//  1        2           3  4 process.argv.length

// Verificando se os argumentos foram passados corretamente
if (process.argv.length === 4) {
    // Verificando se a escolha do jogador é válida
    if (jogadorEscolha !== "par" && jogadorEscolha !== "ímpar") {
        console.log("Escolha inválida. Escolha entre 'par' ou 'impar'.")
    }
}

// Gerando um número aleatório para o computador entre 0 e 5
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const computadorNumero = getRndInteger(0, 5)

// Calculando a soma dos números
const soma = jogadorNumero + computadorNumero

// Determinando se a soma é par ou ímpar
const resultado = soma % 2 === 0 ? 'par' : 'impar'

// Verificando o resultado do jogo
if (jogadorEscolha === resultado) {
    console.log(`Você escolheu ${jogadorEscolha} e o computador escolheu ${resultado}. O resultado foi ${soma}. Você ganhou!`);
} else {
    console.log(`Você escolheu ${jogadorEscolha} e o computador escolheu ${resultado}. O resultado foi ${soma}. Você perdeu!`);
}

