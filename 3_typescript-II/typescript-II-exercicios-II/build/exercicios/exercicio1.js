"use strict";
// A)
//let minhaString: number = "Olá, mundo!";
// o erro "tipo 'string' nao é atribuível ao tipo 'numero'"
// B)
let meuNumero;
meuNumero = 10;
meuNumero = "Dez";
// C) e D)
var CoresDoArcoIris;
(function (CoresDoArcoIris) {
    CoresDoArcoIris["Vermelho"] = "Vermelho";
    CoresDoArcoIris["Laranja"] = "Laranja";
    CoresDoArcoIris["Amarelo"] = "Amarelo";
    CoresDoArcoIris["Verde"] = "Verde";
    CoresDoArcoIris["Azul"] = "Azul";
    CoresDoArcoIris["Anil"] = "Anil";
    CoresDoArcoIris["Violeta"] = "Violeta";
})(CoresDoArcoIris || (CoresDoArcoIris = {}));
let pessoa1 = {
    nome: "João",
    idade: 30,
    corFavorita: CoresDoArcoIris.Verde
};
let pessoa2 = {
    nome: "Maria",
    idade: 25,
    corFavorita: CoresDoArcoIris.Laranja
};
let pessoa3 = {
    nome: "Pedro",
    idade: 40,
    corFavorita: CoresDoArcoIris.Amarelo
};
let pessoa4 = {
    nome: "Ana",
    idade: 35,
    corFavorita: CoresDoArcoIris.Azul
};
