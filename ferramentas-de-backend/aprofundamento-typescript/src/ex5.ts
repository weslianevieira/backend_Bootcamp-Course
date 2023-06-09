/*  A sua tarefa é criar uma função que receba o array abaixo como parâmetro e retorne um array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética). Para isso crie um type para as consultas.
 */

type Consultas = {
  nome: string;
  idade: number;
  dataDaConsulta: string;
};

const consultas: Consultas[] = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
];

function buscarNomeDoPaciente(
  consulta: Consultas[]
): Consultas[]  {
 
  // medoto que ordena elementos de um array 
  const consultasClassificadas = consultas.sort((a, b) => {
     // metodo que compara 2 strings
     return a.nome.localeCompare(b.nome);
  });
   
   return consultasClassificadas
}
console.table(buscarNomeDoPaciente(consultas))
