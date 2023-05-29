/* 
Escreva uma função que receba uma string e retorne a string reversa.
*/

// loop FOR por decremento
function inverterString(str: string): string {
  let reversedStr = "";
//loop comeca pelo final da string
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

// Exemplo de uso
const texto = "Olá, mundo!";
const textoInvertido = inverterString(texto);
console.log(textoInvertido);


