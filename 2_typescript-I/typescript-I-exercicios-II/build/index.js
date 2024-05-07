"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio1_1 = require("./exercicios/exercicio1");
const exercicio2_1 = require("./exercicios/exercicio2");
const exercicio3_1 = require("./exercicios/exercicio3");
const exercicio4_1 = require("./exercicios/exercicio4");
const exercicio5_1 = require("./exercicios/exercicio5");
const exercicio6_1 = require("./desafio/exercicio6");
const exercicio7_1 = require("./desafio/exercicio7");
// Exercício 1 está em exercicios/exercio1
console.log((0, exercicio1_1.checaTriangulo)(15, 5, 10));
// Escaleno
// Exercício 2 está em exercicis/exercio2
console.log((0, exercicio2_1.imprimeTresCoresFavoritas)("Azul", "Vermelho", "Branco"));
// [ 'Azul', 'Vermelho', 'Branco' ]
// Exercício 3 está em exercicis/exercio3
console.log((0, exercicio3_1.checaAnoBissexto)(1996));
// true
// Exercício 4 está em exercicis/exercio4
console.log((0, exercicio4_1.comparaDoisNumeros)(25, 40));
// 15
// Exercício 5 está em exercicis/exercio5
console.log((0, exercicio5_1.checaRenovacaoRG)(2024, 1996, 2017));
// ainda não passou os 10 anos
// Exercício 5 está em exercicis/exercio5
console.log((0, exercicio6_1.checaOperacao)("mult", 11, 10));
// 4520
console.log((0, exercicio6_1.checaOperacao)("maior deles", 5.9, 10));
// 10
console.log((0, exercicio7_1.formaRNA)());
