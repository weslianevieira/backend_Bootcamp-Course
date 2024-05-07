const colors = require('colors') // colors é um pacote npm, instale-o com npm i colors
// A) Usando node arquivo.js parametro

const nameUser = process.argv[2]
const ageUser = Number(process.argv[3])

if (process.argv.length !== 4) {
   // const param = process.argv.length - 2 
   // console.log(`Esperava 2 parâmetros só recebi ${param}.`.red)
   console.log(`Esperava 4 parâmetros só recebi ${process.argv.length}.`.red)
} else {
    // B)
    console.log(`Olá, ${nameUser}! Você tem ${ageUser} anos.`.blue)

    // C)
    console.log(`Olá, ${nameUser}! Você tem ${ageUser} anos. Em sete anos você terá ${ageUser + 7}.`.blue)
    //node exercicio1.js Anne 27 
}


