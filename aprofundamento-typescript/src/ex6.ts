/* 
Tendo este pequeno texto em mente, você deve criar uma função que determine a que idade histórica (em negrito no texto) um ano pertence. Ela deve esperar receber o ano e um outro parâmetro que seja a sigla "AC" ou "DC". Algumas características a mais desta função:

- Caso ela seja chamada sem passar uma sigla, ela deve automaticamente concluir que se trata de um ano "DC"
- Caso ela seja chamada passando um valor inválido(tanto para o ano como para a sigla), ela deve retornar uma mensagem indicando um erro.
*/

/* 
input: ano, sigla
output: string informando nome da idade historica
*/

/* sigla? indica que posso chamar a funcao com ou sem o parametro*/
function determinarIdadeHistorica(ano: number, sigla?: string) {
  /* primeira parte verifica se a variável sigla possui um valor atribuído. Nesse contexto, se sigla não for undefined, null ou uma string vazia, será considerada uma sigla válida. */
  /* verifica se sigla existe e não é igual nem a "AC" nem a "DC". Ela retorna true apenas se todas as condições forem atendidas. */
  if (sigla && sigla !== "AC" && sigla !== "DC") {
    return "Erro: Sigla inválida. A sigla deve ser 'AC' ou 'DC'.";
  }

  if (sigla === "AC") {
    if (ano <= 100000) {
      return "Pré-história";
    }
  } else {
    if (ano >= 476 && ano <= 1453) {
      return "Idade Antiga";
    } else if (ano > 1453 && ano <= 1789) {
      return "Idade Média";
    } else if (ano > 1789) {
      return "Idade Contemporânea";
    }
  }

  return "Idade não encontrada";
}

console.log(determinarIdadeHistorica(3000, "AC"));
console.log(determinarIdadeHistorica(500));
console.log(determinarIdadeHistorica(1500, "AC"));
console.log(determinarIdadeHistorica(1500, "DC"));
console.log(determinarIdadeHistorica(1500));
console.log(determinarIdadeHistorica(3000));
