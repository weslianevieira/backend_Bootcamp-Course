- **Exercício 1**
    
    a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?
    
    b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
    
    ```jsx
    "Olá, (Nome)! Você tem (sua idade) anos."
    ```
    
    c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
    
    ```jsx
    "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
    ```
    
    - Dica
        
        Os parâmetros do node sempre chegam como `strings`. Para podermos fazer cálculos, precisamos transformar o valor em um `number`.
        
        ```jsx
        const valor = Number(valorEmString)
        ```

- 🏅 Desafios
    - Ainda nos exercícios 1 e 2 adicione verificações para garantir que os parâmetros passados estão corretos e informe ao usuário caso não estejam. Exemplo: "Esperava 2 parâmetros só recebi um."
    - Volte nos exercícios 1 e 2 e faça com que o texto impresso no terminal (usando`console.log`) seja colorido.
    - Procure uma maneira de persistir os dados nas suas aplicações (**Dica**: consulte as referências do início dessa página. O Node possui um módulo nativo para gerenciar arquivos, o 'fs', que pode te ajudar nesse desafio. Está em **Node.js built-in modules**)