// Escolha aleatória do computador 
const opcoes = ["pedra", "papel", "tesoura"]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const indiceAleatorio = getRndInteger(0, 2)

const escolhaComputador = opcoes[indiceAleatorio]

// console.log(escolhaComputador)

// Escolha do jogador colocada pelo terminal 
const escolhaJogador = process.argv[2].toLowerCase()

if (escolhaJogador === 'papel' && escolhaComputador === 'pedra') {
console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaComputador}. Você ganhou!`)
} else if (escolhaJogador === 'tesoura' && escolhaComputador === 'papel') {
    console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaComputador}. Você ganhou!`)
} else if (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') {
    console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaComputador}. Você ganhou!`)
} else if (escolhaJogador === 'pedra' && escolhaComputador === 'papel') {
    console.log(`Você escolheu papel e o computador escolheu tesoura. Você perdeu!`)
} else if (escolhaJogador === 'papel' && escolhaComputador === 'tesoura') {
    console.log(`Você escolheu papel e o computador escolheu tesoura. Você perdeu!`)
} else if (escolhaJogador === 'tesoura' && escolhaComputador === 'pedra') {
    console.log(`Você escolheu papel e o computador escolheu tesoura. Você perdeu!`)
} else if (escolhaJogador === 'papel' && escolhaComputador === 'papel') {
    console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaComputador}. Empate!`)
} else if (escolhaJogador === 'pedra' && escolhaComputador === 'pedra') {
    console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaComputador}. Empate!`)
} else if (escolhaJogador === 'tesoura' && escolhaComputador === 'tesoura') {
    console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaComputador}. Empate!`)
} else {
    console.log("Escolha inválida! Escolha entre pedra, papel ou tesoura.")
}



