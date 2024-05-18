"use strict";
const ajustaPreco = (preco) => {
    const valorAjustado = preco.toFixed(2).replace('.', ',');
    return "R$ " + valorAjustado;
};
const stock = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
// use a função ajustaPreco para corrigir os preços e retorne 
// a lista de estoque ordenada pela quantidade de cada produto.
function aplicaPreco(stock) {
    // forEach altera o array original
    stock.forEach((item) => (item.valorUnitario = ajustaPreco(item.valorUnitario)));
    const stockSorted = stock.sort((a, b) => a.quantidade - b.quantidade);
    return stockSorted;
}
console.log(aplicaPreco(stock));
// [
//     { nome: 'O precioso', quantidade: 1, valorUnitario: 'R$ 9181,92' },      
//     { nome: 'Plumbus', quantidade: 13, valorUnitario: 'R$ 140,44' },
//     { nome: 'Laço da verdade', quantidade: 32, valorUnitario: 'R$ 571,50'},
//     { nome: 'MacMugffin', quantidade: 37, valorUnitario: 'R$ 51,04' },       
//     { nome: 'Vassoura voadora', quantidade: 56, valorUnitario: 'R$ 210,00' },
//     { nome: 'Caneta de 250 cores', quantidade: 123, valorUnitario: 'R$ 17,00' },
//     { nome: 'Pokebola', quantidade: 200, valorUnitario: 'R$ 99,99' }
// ]
