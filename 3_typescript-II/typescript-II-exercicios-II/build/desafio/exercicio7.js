"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtosComDesconto = exports.calcularPrecoComDesconto = void 0;
const listaDeProdutos = [
    {
        nome: "Camisa Cavada",
        preco: 60,
        classificacao: "Roupa de verão",
    },
    {
        nome: "Casaco",
        preco: 120,
        classificacao: "Roupa de inverno",
    },
    {
        nome: "Toalha",
        preco: 80,
        classificacao: "Roupa de banho",
    },
    {
        nome: "Calcinha",
        preco: 15,
        classificacao: "Roupa íntima",
    },
];
function calcularPrecoComDesconto(listaDeProdutos) {
    const descontoPorClassificacao = {
        "Roupa de verão": 0.05,
        "Roupa de inverno": 0.10,
        "Roupa de banho": 0.04,
        "Roupa íntima": 0.07
    };
    return listaDeProdutos.map(produto => {
        const desconto = descontoPorClassificacao[produto.classificacao] || 0;
        const precoComDesconto = produto.preco * (1 - desconto);
        return Object.assign(Object.assign({}, produto), { precoComDesconto });
    });
}
exports.calcularPrecoComDesconto = calcularPrecoComDesconto;
exports.produtosComDesconto = calcularPrecoComDesconto(listaDeProdutos);
