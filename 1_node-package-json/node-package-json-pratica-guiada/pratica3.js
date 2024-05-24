// Prática 3
// Crie o arq pratica3.js e implemente o seguinte:
//     - Uma função "interate" que faz um número de loops baseado no process.argv[2]
//         - por exemplo, ao executar "node pratica3.js 5"
//             aparecem 5 console.logs no terminal


const interate = (numero) => {
    for (let i = 0; i < numero; i++) {
        console.log(i+1) // para aparecer número de vezes, sem ser da maneira de contagem do array

        
    }
}

interate(process.argv[2])