//1A
/* 
let minhaString: string = 5;
Aparece um erro dizendo que number nao pode ser atribuido ao tipo string.
*/

//1B
// a declaracao aceita mais tipos com uso de | Union type
let meuNumero: number | string = '5';

//1C
type Pessoa = {
   name: string,
   age: number,
   favoriteColor: string,
}

//1D
enum Rainbow {
   GREEN = 'green', 
   RED = 'red',
   ORANGE = 'orange',
   YELLOW = 'yellow',
   BLUE = 'blue',
   INDIGO = 'indigo',
   PURPLE = 'purple'
}

const pessoaA: Pessoa = {
  name: "Marcela",
  age: 25,
  favoriteColor: Rainbow.GREEN
};

const pessoaB: Pessoa = {
  name: "Andressa",
  age: 25,
  favoriteColor: Rainbow.BLUE,
};

const pessoaC: Pessoa = {
  name: "Anne",
  age: 26,
  favoriteColor: Rainbow.PURPLE,
};



