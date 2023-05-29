/* 
O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:

Considerando o array abaixo, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este array como parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 
*/

enum SETOR {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}

type Colaboradores = {
  nome: string;
  salario: number;
  setor: SETOR;
  presencial: boolean;
};

const colaboradores: Colaboradores[] = [
  { nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
  { nome: "Maria", salario: 1500, setor: SETOR.VENDAS, presencial: false },
  { nome: "Salete", salario: 2200, setor: SETOR.FINANCEIRO, presencial: true },
  { nome: "João", salario: 2800, setor: SETOR.MARKETING, presencial: false },
  { nome: "Josué", salario: 5500, setor: SETOR.FINANCEIRO, presencial: true },
  { nome: "Natalia", salario: 4700, setor: SETOR.VENDAS, presencial: true },
  { nome: "Paola", salario: 3500, setor: SETOR.MARKETING, presencial: true },
];

function marketingPresencial(colaboradores: Colaboradores[]): Colaboradores[] {
   return colaboradores.filter((c) => {
     return c.setor === SETOR.MARKETING && c.presencial === true;  
  })
}

console.log(marketingPresencial(colaboradores));
