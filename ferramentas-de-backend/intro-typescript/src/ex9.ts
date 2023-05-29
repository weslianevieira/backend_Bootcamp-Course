/* 
Escreva uma função que valida se uma pessoa pode ser estudante da Labenu 

A função deve retornar um booleano (true ou false) que indica se a inscrição para o curso é válida, ou seja, se o usuário pode ou não fazer o curso da Labenu. A inscrição é válida quando todos os seguintes requisitos forem atendidos:

- A pessoa possui mais de 18 anos;
- Possui ensino médio completo;
- Possui pelo menos 40 horas livres na semana para o curso integral e 20 horas para o curso noturno.
*/

function validarInscricao(
  idade: number,
  ensinoMedio: boolean,
  horasDisponiveis: number,
  curso: string
): boolean {
  if (idade > 18 && ensinoMedio) {
    if (curso === "integral" && horasDisponiveis >= 40) {
      return true;
    }

    if (curso === "noturno" && horasDisponiveis >= 20) {
      return true;
    }
  }
  return false;
}

const inscricaoValida = validarInscricao(26, true, 15, "integral");

console.log(inscricaoValida);
