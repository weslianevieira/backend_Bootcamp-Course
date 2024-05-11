"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio2_1 = require("./exercicios/exercicio2");
const exercicio3_1 = require("./exercicios/exercicio3");
const exercicio5_1 = require("./desafio/exercicio5");
const exercicio6_1 = require("./desafio/exercicio6");
const exercicio7_1 = require("./desafio/exercicio7");
const exercicio8_1 = require("./desafio/exercicio8");
// 2
console.log((0, exercicio2_1.obterEstatisticas)([-5, -2, 5, 9, 7, 2, 0, 3]));
// { maior: 9, menor: -5, media: 2.375 }
// 3 
console.log((0, exercicio3_1.buscarPostsPorAutor)("Lord"));
// [ { autor: 'Lord Voldemort', texto: 'Avada Kedavra!' } ]
// 5
console.log((0, exercicio5_1.ordenarConsultasPorNome)());
// [
//     { nome: 'João', idade: 23, dataDaConsulta: '01/10/2021' },
//     { nome: 'Márcia', idade: 45, dataDaConsulta: '04/05/2021' },
//     { nome: 'Paula', idade: 26, dataDaConsulta: '03/11/2021' },
//     { nome: 'Pedro', idade: 31, dataDaConsulta: '02/07/2021' }
// ]
//6
console.log((0, exercicio6_1.determinaIdadeHistorica)(1544, "DC"));
// Idade Moderna
console.log((0, exercicio6_1.determinaIdadeHistorica)(1453));
// Idade Média
console.log((0, exercicio6_1.determinaIdadeHistorica)());
// Por favor, insira um ano válido e uma sigla válida (AC ou DC).
console.log((0, exercicio6_1.determinaIdadeHistorica)(2000, "CD"));
// Sigla inválida use AC ou DC.
// 7
console.log(exercicio7_1.produtosComDesconto);
// [
//     {
//       nome: 'Camisa Cavada',
//       preco: 60,
//       classificacao: 'Roupa de verão',
//       precoComDesconto: 57
//     },
//     {
//       nome: 'Casaco',
//       preco: 120,
//       classificacao: 'Roupa de inverno',
//       precoComDesconto: 108
//     },
//     {
//       nome: 'Toalha',
//       preco: 80,
//       classificacao: 'Roupa de banho',
//       precoComDesconto: 76.8
//     },
//     {
//       nome: 'Calcinha',
//       preco: 15,
//       classificacao: 'Roupa íntima',
//       precoComDesconto: 13.95
//     }
//   ]
// 8 A)
console.log((0, exercicio8_1.cadastrarPrato)("Baião de Dois", 14, 20, ["arroz", "feijão", "carne de sol"]));
// [
//     {
//       nome: 'Feijoada',
//       custo: 10,
//       valorDeVenda: 25,
//       ingredientes: [ 'arroz', 'feijão', 'partes do porco', 'couve' ]
//     },
//     {
//       nome: 'Strogonoff',
//       custo: 15,
//       valorDeVenda: 25,
//       ingredientes: [ 'arroz', 'frango', 'creme de leite', 'batata palha' ]
//     },
//     {
//       nome: 'Baião de Dois',
//       custo: 14,
//       valorDeVenda: 20,
//       ingredientes: [ 'arroz', 'feijão', 'carne de sol' ]
//     }
//   ]
// B)
console.log((0, exercicio8_1.obterPrecoPorNome)("Feijo"));
// O preço é R$25.
// C) 
console.log((0, exercicio8_1.venderPrato)("Baião de Dois", "Anne"));
// [ { nomePrato: 'Baião de Dois', nomeCliente: 'Anne' } ]
// D 
console.log((0, exercicio8_1.calcularLucroRestaurante)());
