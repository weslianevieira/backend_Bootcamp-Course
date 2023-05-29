/* 
Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 

"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 
*/

/* 
input: nome/string, data de nascimento/stirng 
output: frase/string
*/
const colors = require('colors')

type Profile = {
  name: string;
  birthDate: string;
};

//
function greet(nome: string, birthDate: string): string {
  const nameRecived = nome;
  const birthDateRecived = birthDate;
  // 14/11/1996
  // 0123456789
  const slicedDay = birthDateRecived.slice(0, 2);
  const slicedMonth = birthDateRecived.slice(3, 5);
  const slicedYear = birthDateRecived.slice(6);

  const greeting = `Olá me chamo ${nameRecived}, nasci no dia ${slicedDay} do mês de ${slicedMonth} do ano de ${slicedYear}.`;

  return greeting;
}

console.log(greet("Anne", "14/11/1996"));
