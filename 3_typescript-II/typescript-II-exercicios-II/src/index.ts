import { obterEstatisticas } from "./exercicios/exercicio2";
import { buscarPostsPorAutor } from "./exercicios/exercicio3";
import { ordenarConsultasPorNome } from "./desafio/exercicio5";

console.log(obterEstatisticas([-5, -2, 5, 9, 7, 2, 0, 3]))
// { maior: 9, menor: -5, media: 2.375 }

console.log(buscarPostsPorAutor("Lord"))
// [ { autor: 'Lord Voldemort', texto: 'Avada Kedavra!' } ]

console.log(ordenarConsultasPorNome())
// [
//     { nome: 'João', idade: 23, dataDaConsulta: '01/10/2021' },
//     { nome: 'Márcia', idade: 45, dataDaConsulta: '04/05/2021' },
//     { nome: 'Paula', idade: 26, dataDaConsulta: '03/11/2021' },
//     { nome: 'Pedro', idade: 31, dataDaConsulta: '02/07/2021' }
// ]