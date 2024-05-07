const colors = require("colors")
const fs = require('fs');

// Nome do arquivo para salvar as tarefas
const nomeArquivo = 'tarefas.json';

// Função para carregar as tarefas do arquivo
function carregarTarefas() {
    // Verificar se o arquivo existe
    if (fs.existsSync(nomeArquivo)) {
        // Ler as tarefas do arquivo
        const data = fs.readFileSync(nomeArquivo, 'utf8');
        // Converter os dados JSON de volta para um array JavaScript
        return JSON.parse(data);
    } else {
        console.log('O arquivo de tarefas ainda não existe.');
        return [];
    }
}

// Função para salvar as tarefas no arquivo
function salvarTarefas(tarefas) {
    // Converter as tarefas para JSON
    const tarefasJSON = JSON.stringify(tarefas, null, 2);

    // Escrever as tarefas no arquivo
    fs.writeFile(nomeArquivo, tarefasJSON, (err) => {
        if (err) {
            console.error('Erro ao salvar tarefas:', err);
        } else {
            console.log('Tarefas salvas com sucesso no arquivo!');
        }
    });
}

// Nova tarefa adicinada como string
const novasTarefas = process.argv.slice(2);
//slice(2) é um método que retorna uma cópia de uma parte de uma matriz, começando pelo índice fornecido até o final da matriz.

// Carregar tarefas existentes do arquivo
let tarefasExistente = carregarTarefas();

// Adicionar as novas tarefas às tarefas existentes
tarefasExistente.push(...novasTarefas);

// Salvar a lista atualizada de tarefas no arquivo
salvarTarefas(tarefasExistente);