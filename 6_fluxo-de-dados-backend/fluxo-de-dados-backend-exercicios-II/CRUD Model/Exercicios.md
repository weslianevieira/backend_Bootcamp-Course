- Exercício 1
    
    Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de teste com método `**GET`** no path **`“/test”`** que retorna uma mensagem genérica avisando que a API está funcional.

- Exercício 2
    
    Crie um arquivo chamado **`data.ts`** que exporta um array de produtos. Cada produto será representado por um objeto com propriedades: id (`string`), name (`string`) e price (`number`). Popule manualmente o array com pelo menos 3 produtos.

- Exercício 3
    
    Desenvolva um endpoint que **cria um novo produto** e retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API.

- Exercício 4
    
    Crie um endpoint que **retorna todos os produtos**.

- Exercício 5
    
    Crie um endpoint que **edita** **o preço de** **um determinado produto** e retorna a lista de produtos atualizada.

- Exercício 6
    
    Construa um endpoint que **deleta um determinado produto** e retorna a lista de produtos atualizada.

- Exercício 7
    
    Refatore o endpoint do exercício 3 (criar produto) para que sejam implementados fluxos de validação dos dados recebidos (`name` e `price`)
    
    - erro caso um ou nenhum deles forem recebidos
    - erro caso `name` seja diferente de `string`
    - erro caso `price` seja diferente de `number`
    - erro caso `price` seja igual ou menor que `0`
    - erro caso algo inesperado aconteça

- Exercício 8
    
    Refatore o endpoint do exercício 5 (editar produto) para que sejam implementados fluxos de validação dos dados recebidos (`price`)
    
    - erro caso `price` não seja recebido
    - erro caso `price` seja diferente de `number`
    - erro caso `price` seja igual ou menor que `0`
    - erro caso id não seja recebida (exceto em casos de path params)
    - erro caso o produto a ser editado não seja encontrado
    - erro caso algo inesperado aconteça

- Exercício 9
    
    Refatore o endpoint do exercício 6 (deletar produto) para que sejam implementados fluxos de validação dos dados recebidos (`id`)
    
    - erro caso `id` não seja recebido (exceto em casos de path params)
    - erro caso o produto escolhido não seja encontrado
    - erro caso algo inesperado aconteça

- Exercício 10
    
    Implemente no endpoint do exercício 4 a seguinte lógica:
    
    - o endpoint retorna todos os produtos por padrão, mas caso seja recebido uma query `“search”` válida, é retornado o resultado da busca por nome dos produtos
        - para a query ser válida, é necessário que ela não seja `undefined`

- Exercício 11
    
    Refatore o endpoint do exercício 5 para que seja possível editar também o nome do produto escolhido. Isso quer dizer que existirão 3 casos de uso:
    
    - 1: tanto o nome quanto o preço são recebidos (produto será editado com sucesso)
    - 2: apenas o nome ou o preço é recebido (produto será editado com sucesso)
    - 3: nem o nome nem o preço é recebido (erro com mensagem explicativa)