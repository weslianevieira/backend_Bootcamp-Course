const colors = require("colors") 
// npm i colors 
// colors só funciona em string

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

let resultado = ""

switch (operacao) {
    case "add":
       resultado += num1 + num2
        break
    case "sub":
       resultado += num1 - num2
        break
    case "mult":
        resultado += num1 * num2
        break
    case "div":
        resultado += num1 / num2
        break
    default:
        resultado +="Opção inválida."
        break
}

console.log(resultado.red)