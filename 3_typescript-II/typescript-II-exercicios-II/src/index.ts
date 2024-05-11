import { obterEstatisticas } from "./exercicios/exercicio2";
import { buscarPostsPorAutor } from "./exercicios/exercicio3";
import { ordenarConsultasPorNome } from "./desafio/exercicio5";
import { determinaIdadeHistorica } from "./desafio/exercicio6";
import { produtosComDesconto } from "./desafio/exercicio7";
import { cadastrarPrato, venderPrato, obterPrecoPorNome, calcularLucroRestaurante} from "./desafio/exercicio8";



// 2
console.log(obterEstatisticas([-5, -2, 5, 9, 7, 2, 0, 3]))
// { maior: 9, menor: -5, media: 2.375 }

// 3 
console.log(buscarPostsPorAutor("Lord"))
// [ { autor: 'Lord Voldemort', texto: 'Avada Kedavra!' } ]

// 5
console.log(ordenarConsultasPorNome())
// [
//     { nome: 'João', idade: 23, dataDaConsulta: '01/10/2021' },
//     { nome: 'Márcia', idade: 45, dataDaConsulta: '04/05/2021' },
//     { nome: 'Paula', idade: 26, dataDaConsulta: '03/11/2021' },
//     { nome: 'Pedro', idade: 31, dataDaConsulta: '02/07/2021' }
// ]

//6
console.log(determinaIdadeHistorica(1544, "DC"))
// Idade Moderna
console.log(determinaIdadeHistorica(1453))
// Idade Média
console.log(determinaIdadeHistorica())
// Por favor, insira um ano válido e uma sigla válida (AC ou DC).
console.log(determinaIdadeHistorica(2000, "CD"))
// Sigla inválida use AC ou DC.

// 7
console.log(produtosComDesconto)
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
console.log(cadastrarPrato("Baião de Dois", 14, 20, ["arroz", "feijão", "carne de sol"]))
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
console.log(obterPrecoPorNome("Feijo"))
// O preço é R$25.

// C) 
console.log(venderPrato("Baião de Dois", "Anne"))
// [ { nomePrato: 'Baião de Dois', nomeCliente: 'Anne' } ]

// D 
console.log(calcularLucroRestaurante())
// 6