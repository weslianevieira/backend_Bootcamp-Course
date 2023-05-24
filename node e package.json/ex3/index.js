const colors = require("colors");
const fs = require("fs");

//3
const todoList = [
    "lavar quintal",
    "ler livro",
    "dar banho no cachorro",
];

const todo = process.argv[2]; //primeiro argumento

if (!todo) {
  return console.log(`Estava esperando ao menos 1 parametro por tarefa`.red);
} 

todoList.push(todo)
/* 
    concatenacao de array para string,
    para function funcionar o array nao pode estar vazio todoList != []
*/
const data = todoList.join("\n");

fs.writeFile("todoList.txt", data, (error) => {
  if (error) {
    console.error("Erro ao salvar a lista de tarefas:".red, error);
  } else {
    console.log("Lista de tarefas salva com sucesso!".green);
  }
});

console.log(`Tarefa ${todo} adicionada com sucesso!`.green);
// colors só funciona em strings, por isso convertemos o array tasks em string
console.log(`Lista de tarefas:`.magenta, todoList.toString().magenta);

//terminal: yarn start 'lavar roupa''beber agua' 'buscar pet'

/*
    - fs (File System) para fazer os dados persistirem, esta embutido no node.
    - Definir caminho do arq onde sera armazenado
    const filePath = 'caminho/dados.js'
    - salvar dado no arq usando o 
    method fs.writeFile()
    const fs = require('fs');

    const filePath = 'path/to/file.txt';
    const data = 'Hello, World!';

    fs.writeFile(filePath, data, (error) => {
        if (error) {
          console.error('Error writing file:', error);
        } else {
     console.log('File written successfully!');
    }
});
*/
