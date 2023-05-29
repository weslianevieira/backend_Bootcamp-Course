/* 
Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 
*/

/* 
input : parametro/ any
output: tipo de varavel/ string
*/

function defineTipoVariavel(parametro?: any): string {
  const tipo = typeof parametro
   return tipo;
}

console.log(defineTipoVariavel(5)); //number
console.log(defineTipoVariavel('oi')); //string
console.log(defineTipoVariavel(true)); //boolean
console.log(defineTipoVariavel()); // undefined
console.log(defineTipoVariavel([])); //obj
console.log(defineTipoVariavel('')); // string
console.log(defineTipoVariavel({})); //object
