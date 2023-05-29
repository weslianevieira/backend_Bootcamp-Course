/*
Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. Cada filme possui 3 informações essenciais: 
1. nome do filme; 
2. ano de lançamento e 
3. gênero do filme. 
Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: 
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 
4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).

Considerando todas estas informações, crie uma função que receba todas essas informações como parâmetros( 3 essenciais + 1 opcional) e retorne todas informações organizadas em um `type`.
*/

/* 
input: informacoes listadas / any
                            / string, number, ENUM, number
output: informacoes / any
                    / string, number, ENUM, number
*/

/* 
Entradas: "Duna", 2021, GENERO.ACAO, 74
Saída: {nome: "Duna", anoLancamento: 2021, genero: "ação", pontuacao: 74}

Entradas: "Duna", 2021, GENERO.ACAO
Saída: {nome: "Duna", anoLancamento: 2021, genero: "ação"}
*/

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type Informacoes = {
  nomeFilme: string;
  anoFilme: number;
  generoFilme: GENERO;
  pontuacaoFilme: number;
};

function allInfo(
  nomeFilme: string,
  anoFilme: number,
  generoFilme: GENERO,
  pontuacaoFilme?: number
): any {
  if (pontuacaoFilme) {
    return {
      nomeFilme,
      anoFilme,
      generoFilme,
      pontuacaoFilme,
    };
  } else {
    return {
      nomeFilme,
      anoFilme,
      generoFilme,
    };
  }
}

console.log(allInfo("Matrix", 1999, GENERO.ACAO, 87));
console.log(allInfo("Matrix", 1999, GENERO.ACAO));

