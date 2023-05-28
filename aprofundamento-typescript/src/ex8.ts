/* 
Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes. Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.

a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.

b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.

c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.

d) Escreva uma função que determine o lucro do restaurante.
 */

type Produtos = {
  name: string;
  custo: number;
  valorVenda: number;
  ingredientes: string[];
};

// array para salvar novos produtos adicionados
const produto: Produtos[] = [
  {
    name: "Jantinha de Carne",
    custo: 8,
    valorVenda: 15,
    ingredientes: [
      "Arroz",
      "Feijao",
      "Mandioca",
      "Vinagrete",
      "Espetinho de Carne",
    ],
  },
];

function cadastrarProduto(
  name: string,
  custo: number,
  valorVenda: number,
  ingredientes: string[]
): Produtos {
  const novoProduto: Produtos = {
    name: "Jantinha de Frango",
    custo: 10,
    valorVenda: 20,
    ingredientes: [
      "Arroz",
      "Feijao",
      "Mandioca",
      "Vinagrete",
      "Espetinho de Frango",
    ],
  };

  // adiciona novo produto no final do array de produtos
  produto.push(novoProduto);

  return novoProduto;
}
/* 
console.table(
  cadastrarProduto("Jantinha de Frango", 0, 20, [
    "Arroz",
    "Feijao",
    "Mandioca",
    "Vinagrete",
    "Espetinho de Frango",
  ])
); */

function obterValorProduto(nome: string): number | undefined {
  const precoPeloNome = produto.find(
    (p) => p.name.toLocaleLowerCase() === nome.toLocaleLowerCase()
  );

  if (precoPeloNome) {
    return precoPeloNome.valorVenda;
  }

  return undefined;
}

console.log(obterValorProduto("JANTINHA DE CARNE"));

type Venda = {
  nomePrato: string;
  nomeCliente: string;
};

// array para salvar novas vendas adicionads
/* const vendas: Venda[] = []; */
const vendas: Venda[] = [
  {
    nomePrato: "Arroz Birobiro",
    nomeCliente: "Mateus",
  },
  {
    nomePrato: "JANtinha de carne",
    nomeCliente: "Mateus",
  },
  {
    nomePrato: "JANtinha de carne",
    nomeCliente: "Marcela",
  },
];

function realizarVenda(nomePrato: string, nomeCliente: string): Venda {
  const venda: Venda = {
    nomePrato,
    nomeCliente,
  };

  vendas.push(venda);

  return venda;
}

console.table(realizarVenda("Jantinha de Carne", "Wesliane"));

function calcularLucro(): number {
  let lucro = 0;

  vendas.forEach((venda) => {
    const produtoConsumido = produto.find(
      (p) => p.name.toLocaleLowerCase() === venda.nomePrato.toLocaleLowerCase()
    );

    if (produtoConsumido) {
      lucro += produtoConsumido.valorVenda - produtoConsumido.custo;
    }
  });

  return lucro;
}
console.table(calcularLucro()); //14
