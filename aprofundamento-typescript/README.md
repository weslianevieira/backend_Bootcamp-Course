## O que esperamos que você entenda com esse exercício?

Esperamos que ao fim deste dia, você esteja **familiarizado** com os conceitos abaixo em T**ypescript:**

- Revisão dos types que vimos até agora
- Types:
    - Union Types
    - Type Aliases
    - Intersection Types
    - Type Inference
    - Enum

------------------------------
# Aprofundamento em TS

## Types
- Types = responsaveis por **definir o tipo de valor;
    - Valores Primitivos: stings, numbers e booleans;
    - Valores de Alto Nivel: arrays e objects;
- Sao escritos com letra inicial maiuscula

### Type Basicos
String
const name: string = "Jules"

Boolean
const online: boolean = true

Number
const age: number = 21

Arrays
const arr: Array<number> = [1, 2, 3]
const array: number[] = [1, 2, 3]

Objetos
const person: { name: string, age: number} = {
    name: "Astrodev",
    age: 30,
    greet: () => void; // void eh um método sem parâmetros e sem retorno
}
const person: Person = {
  name: "João",
  age: 30,
  greet: () => {
    console.log(`Olá, meu nome é ${person.name} e eu tenho ${person.age} anos.`);
  }
};


Any
let aux: any
aux = "Oi"
aux = 12

### Union Type ('|')

- Union Type permite que um tipo de valor seja um ou outro. ex: string | undefined. (*Lembram do operador lógico || em Javascript, que representa OU? No Typescript
utilizamos apenas | )

let text: string | undefined
let message: string | null = null

### Type Aliases ('esqueleto')
- Type Aliases são esqueletos que um conjunto de dados pode assumir;
- Evitar repeticoes, declarar variavel de tipo aka type.

type person = {
    name: string,
    age: number
}

const astrodev: person = {
    name: "Astrodev",
    age: 30
}

###  Union Type + Type Aliases 

type BirthDate = number | string | undefined

function user (
    name: string
    birthDate: BirthDate
){}

function userProfile (
    name: string,
    age: number,
    birthDate: BirthDate
){}

### Intersection Types ('&')
- Cria novo tipo. Combina multiplos types ja existentes;

type User = {
    name: string,
    age: number
}

type Account = {
    userName: string,
    password: string
}

type UserInfo = User & Account

const user: UserInfo = {
    name: "Lua",
    age: 27,
    userName: lualua,
    password: "123abc"
}

### Type Inference
- Type Inference permite declararmos uma variável diretamente com o
tipo de valor que irá assumir

const name: string = "Labenu"
const name = "Labenu"

### Enum
- Enum são estruturas que permitem que declaremos os valores que uma variável pode assumir, se estes forem fixos e limitados, ou seja, dados que nao mudam.

enum LabenuClasses {
    LOVELACE = "Lovelace",
    MARYAM = "Maryam",
    CARVER = "Carver",
    JOY = "Joy",
    GUIMARAES = "Guimarães",
    GEBRU = "Gebru"
}

const labenuTeacher = {
name: "Janaylla",
class: LabenuClasses.MARYAM //acessamos a propriedade do enum com ponto
}

### Interface 
- Definir estrutura de objetos. Descreve as props e metodos que o obj deve ter, mas nao fornece uma implementacao real dessas props e metodos.
- Usadas para verificacao estatica de tipos durante desenvolvimento.

interface Person {
  name: string;
  age: number;
  greet: () => void;
}

// Implementação da interface
const person: Person = {
  name: "João",
  age: 30,
  greet: () => {
    console.log(`Olá, meu nome é ${person.name} e eu tenho ${person.age} anos.`);
  }
};

person.greet(); // Saída: Olá, meu nome é João e eu tenho 30 anos.

