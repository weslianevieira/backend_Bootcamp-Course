type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

//4B 
// Deve-se criar um script, package.json, iniciando a transpilacao.
// "ex1": "tsc arq1.ts",

//4C
// Com o arq dentro do ./src, deve-se criar o path no ./tsconfig.json
// "rootDir": "./src" ou   
// "ex1": "tsc src/arquivo1.ts" no ./package.json

//4D
// Maneira de compilar varioas arqs de uma vez
// tsc arquivo1.ts arquivo2.ts arquivo3.ts