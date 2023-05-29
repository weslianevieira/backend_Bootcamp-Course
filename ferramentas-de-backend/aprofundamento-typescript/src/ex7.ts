/* 
   classificação: 
   roupas de verão, desconto 5%;
   roupas de inverno, desconto 10%;
   roupas de banho, desconto 4%;
   roupas íntimas. desconto 7%;

   Escreva uma função que receba um array de produtos com nome, preço e classificação; e retorne um array com essas informações e um campo mais: "preço com desconto"

   input: array com nome:string , preco: number, classificacao: enum
   output: array com as infos do input, mais preco com desconto: number
*/

type Produto = {
  nome: string;
  preco: number;
  classificacao: string;
};

enum Classificacao {
  INVERNO = "roupas de verão",
  VERAO = "roupas de inverno",
  BANHO = "roupas de banho",
  INTIMA = "roupas íntimas",
}

const produtos: Produto[] = [
  {
    nome: "Maio",
    preco: 50,
    classificacao: Classificacao.BANHO,
  },
  {
    nome: "Calcinha",
    preco: 10,
    classificacao: Classificacao.INTIMA,
  },
  {
    nome: "Short Jeans",
    preco: 100,
    classificacao: Classificacao.VERAO,
  },
  {
    nome: "Calça Moletom",
    preco: 70,
    classificacao: Classificacao.INVERNO,
  },
];

function aplicarDesconto(produtos: Produto[]): Produto[] {
  // map para conseguir acessar o obj
  const produtosComDesconto = produtos.map((produto) => {
    let desconto = 0;

    switch (produto.classificacao) {
      case Classificacao.VERAO:
        desconto = 0.05;
        break;
      case Classificacao.INVERNO:
        desconto = 0.1;
        break;
      case Classificacao.BANHO:
        desconto = 0.04;
        break;
      case Classificacao.INTIMA:
        desconto = 0.07;
        break;
    }

    const precoComDesconto = produto.preco - produto.preco * desconto;

    // copia obj original e acrescenta
    return { ...produto, "preço com desconto": precoComDesconto.toFixed(2) };
  });

  return produtosComDesconto;
}

console.table(aplicarDesconto(produtos));


