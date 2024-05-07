// A)
//let minhaString: number = "Olá, mundo!";
// o erro "tipo 'string' nao é atribuível ao tipo 'numero'"

// B)
let meuNumero: number | string;
meuNumero = 10;
meuNumero = "Dez";

// C) e D)
enum CoresDoArcoIris {
    Vermelho = "Vermelho",
    Laranja = "Laranja",
    Amarelo = "Amarelo",
    Verde = "Verde",
    Azul = "Azul",
    Anil = "Anil",
    Violeta = "Violeta"
}

type Pessoa = {
    nome: string;
    idade: number;
    corFavorita: CoresDoArcoIris;
};

let pessoa1: Pessoa = {
    nome: "João",
    idade: 30,
    corFavorita: CoresDoArcoIris.Verde
};

let pessoa2: Pessoa = {
    nome: "Maria",
    idade: 25,
    corFavorita: CoresDoArcoIris.Laranja
};

let pessoa3: Pessoa = {
    nome: "Pedro",
    idade: 40,
    corFavorita: CoresDoArcoIris.Amarelo
}

let pessoa4: Pessoa = {
    nome: "Ana",
    idade: 35,
    corFavorita: CoresDoArcoIris.Azul
};
