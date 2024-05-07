import { checaTriangulo } from "./exercicios/exercicio1";
import { imprimeTresCoresFavoritas } from "./exercicios/exercicio2";
import { checaAnoBissexto } from "./exercicios/exercicio3";
import { comparaDoisNumeros } from "./exercicios/exercicio4";
import { checaRenovacaoRG } from "./exercicios/exercicio5";
import { checaOperacao } from "./desafio/exercicio6";
import { formaRNA } from "./desafio/exercicio7";

// Exercício 1 está em exercicios/exercio1
console.log(checaTriangulo(15,5,10))
// Escaleno

// Exercício 2 está em exercicis/exercio2
console.log(imprimeTresCoresFavoritas("Azul", "Vermelho", "Branco"))
// [ 'Azul', 'Vermelho', 'Branco' ]

// Exercício 3 está em exercicis/exercio3
console.log(checaAnoBissexto(1996))
// true

// Exercício 4 está em exercicis/exercio4
console.log(comparaDoisNumeros(25,40))
// 15

// Exercício 5 está em exercicis/exercio5
console.log(checaRenovacaoRG(2024, 1996, 2017))
// ainda não passou os 10 anos

// Exercício 6 está em exercicis/exercio6
console.log(checaOperacao("mult", 11, 10))
// 4520
console.log(checaOperacao("maior deles", 5.9, 10))
// 10

// Exercício 7 está em exercicis/exercio7
console.log(formaRNA())
// UAA CGA CGC GUA AUU GCU GCG CAU
