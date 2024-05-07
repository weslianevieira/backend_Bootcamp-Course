"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio2_1 = require("./exercicios/exercicio2");
const exercicio3_1 = require("./exercicios/exercicio3");
const exercicio5_1 = require("./desafio/exercicio5");
console.log((0, exercicio2_1.obterEstatisticas)([-5, -2, 5, 9, 7, 2, 0, 3]));
// { maior: 9, menor: -5, media: 2.375 }
console.log((0, exercicio3_1.buscarPostsPorAutor)("Lord"));
// [ { autor: 'Lord Voldemort', texto: 'Avada Kedavra!' } ]
console.log((0, exercicio5_1.ordenarConsultasPorNome)());
