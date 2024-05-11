"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularLucroRestaurante = exports.venderPrato = exports.obterPrecoPorNome = exports.cadastrarPrato = void 0;
const pratos = [
    {
        nome: "Feijoada",
        custo: 10,
        valorDeVenda: 25,
        ingredientes: ["arroz", "feijão", "partes do porco", "couve"]
    },
    {
        nome: "Strogonoff",
        custo: 15,
        valorDeVenda: 25,
        ingredientes: ["arroz", "frango", "creme de leite", "batata palha"]
    },
];
// a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.
function cadastrarPrato(nome, custo, valorDeVenda, ingredientes) {
    const novoPrato = {
        nome: nome,
        custo: custo,
        valorDeVenda: valorDeVenda,
        ingredientes: ingredientes
    };
    pratos.push(novoPrato);
    return pratos;
}
exports.cadastrarPrato = cadastrarPrato;
// B) 
function obterPrecoPorNome(nomeInput) {
    const pratoEncontrado = pratos.find(prato => prato.nome.toLowerCase().includes(nomeInput.toLowerCase()));
    return pratoEncontrado ? `O preço é R$${pratoEncontrado.valorDeVenda}.` : "Preço do prato não disponível";
}
exports.obterPrecoPorNome = obterPrecoPorNome;
const vendas = [];
function venderPrato(nomePrato, nomeCliente) {
    vendas.push({ nomePrato, nomeCliente });
    return vendas;
}
exports.venderPrato = venderPrato;
// D)
function calcularLucroRestaurante() {
    let lucroTotal = 0;
    for (const venda of vendas) {
        const produtoVendido = pratos.find(prato => prato.nome === venda.nomePrato);
        if (produtoVendido) {
            const lucro = produtoVendido.valorDeVenda - produtoVendido.custo;
            lucroTotal += lucro;
        }
    }
    return lucroTotal;
}
exports.calcularLucroRestaurante = calcularLucroRestaurante;
