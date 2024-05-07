- **Exercício 2**
    
    Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
    
    - **Exemplos**
        
        ```bash
        npm run start add 2 2
        // "Resposta: 4"
        ```
        
        ```bash
        npm run start sub 10 2
        // "Resposta: 8"
        ```
        
        ```bash
        npm run start mult 50 2
        // "Resposta: 100"
        ```
        
        ```bash
        npm run start div 100 2
        // "Resposta: 50"
        ```
        
    - **Dicas** (clique aqui se travar em algum pedaço)
        - Lembre-se da ordem de recebimento de argumentos do node. Para acessar os argumentos, usamos o objeto `process.argv`, que é um array de todos os parâmetros usados pelo node. Os argumentos [0] e [1] são fixos, onde o primeiro é o próprio node e o segundo é o arquivo que está rodando. Todos os valores são armazenados como string.
        
        ```jsx
        process.argv[0] = //node
        process.argv[1] = //caminho para o arquivo sendo executado
        process.argv[2] = //primeiro argumento
        process.argv[3] = //segundo argumento
        ```
        
        - Você pode separar o tipo de operação usando um switch para avaliar o tipo de operação passada como parâmetro para o node.
        
        ```jsx
        switch(operacao){
        	case "soma":
        		//seu código aqui
        		break;
        	case "subt":
        		//seu código aqui
        		break;
        }
        ```

    - 🏅 Desafios
    - Ainda nos exercícios 1 e 2 adicione verificações para garantir que os parâmetros passados estão corretos e informe ao usuário caso não estejam. Exemplo: "Esperava 2 parâmetros só recebi um."
    - Volte nos exercícios 1 e 2 e faça com que o texto impresso no terminal (usando`console.log`) seja colorido.
    - Procure uma maneira de persistir os dados nas suas aplicações (**Dica**: consulte as referências do início dessa página. O Node possui um módulo nativo para gerenciar arquivos, o 'fs', que pode te ajudar nesse desafio. Está em **Node.js built-in modules**)