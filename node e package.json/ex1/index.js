const colors = require('colors') 
/* 
    1A- Acessar parametros passados por node 
    process.argv[0] = //node
    process.argv[1] = //caminho para o arquivo sendo executado
    process.argv[2] = //primeiro argumento
    process.argv[3] = //segundo argumento
*/

/*  
    1B- Node parameters sempre chegam como string.
    Para calculos tranforme string em number. 
    var value = Number('5')
*/

//"name" é uma palavra reservada do sistema
const myName = process.argv[2];
var actualAge = Number(process.argv[3]);
//ultimo item
const laterAge = process.argv.length - 2;

//parametros de verificacao
if(laterAge < 2){
    return console.log(`Estava esperando 2 parametros, recebeu ${laterAge}`.red);
}

//terminal: yarn add welisne 26
console.log(`Ola, ${myName}! Voce tem ${actualAge} anos.`);

//1C
console.log(`Ola, ${myName}! Voce tem ${actualAge} anos. Em sete anos voce tera ${laterAge + 7}`.green);

//terminal: yarn start 'Anne' 26