const colors = require("colors");

//2
const operation = process.argv[2];
const firstNum = Number(process.argv[3]);
const secondNum = Number(process.argv[4]);

let result = "Resultado: ";
/* 
  parametro de verificacao:
  checar ser firstNum e secondNum sao validos, por exemplo, se o usuário inserir uma letra em vez de um número
*/

/* 
  isNaN() = is Not-a-Number function 
  true / false
*/

/* 
  operador logico OR
  true, se ao menos 1 parametro for true 
*/

/* 
  operador de atribuica composta da adicao +=
  adiciona o lado esquerdo ao direito
  var = var + value
  var += value
*/

if (isNaN(firstNum) || isNaN(secondNum)) {
  result += `Os numeros de entrada sao invalidos`;
} else {
  switch (operation) {
    case "add":
      result += firstNum + secondNum;
      break;
    case "sub":
      result += firstNum - secondNum;
      break;
    case "mult":
      result += firstNum * secondNum;
      break;
    case "div":
      if(secondNum !== 0){
        // .toFixed(1) arredonda em uma casa decimal
      result += (firstNum / secondNum).toFixed(1);
      } else {
        result += `Divisao por zero nao eh permitida`
      }
      break;
    default:
      result += "Operacao invalida";
  }
}

console.log(result.yellow);
//terminal: yarn start div 100 5
