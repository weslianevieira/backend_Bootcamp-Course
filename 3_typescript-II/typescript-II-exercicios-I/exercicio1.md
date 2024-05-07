# Antes de começar
Vimos usos mais complexos do type e também um novo tipo chamado enum.
Esses conceitos serão aplicados mais pra frente, quando estivermos com mais ferramentas disponíveis, e por isso não iremos implementá-los nesse momento. Mas não se preocupe, você terá a oportunidade de praticá-los no próximo projeto.

# Exercício 1
O foco aqui é praticar a manipulação de arrays e objetos!<br>
No arquivo database.ts temos os mocks dos dados da aplicação, mas por enquanto eles estão totalmente inérteis e sem dinamicidade.<br>

## Funcionalidades
Desenvolva uma função para cada funcionalidade.
Você pode implementá-las dentro do arquivo ```src/database.ts``` e exportá-las para serem utilizadas no ```src/index.ts```.<br>
Chame cada uma no index.ts e verifique se estão funcionando dando console.log.<br>
Não se preocupe em validar os dados por enquanto (se email é válido ou preço do produto é maior que 0), desenvolva somente os casos de sucesso (caminho feliz, onde todos os dados são válidos).

### User
- createUser (cria uma nova pessoa na lista de users)
    - input: quatro parâmetros (id, name, email e password)
        - o createdAt é gerado automaticamente pelo código com ```new Date().toISOString()```
    - output: frase de sucesso ("Cadastro realizado com sucesso")
    - exemplo de chamada:
        ```createUser("u003", "Astrodev", "astrodev@email.com", "astrodev99")```
- getAllUsers (busca todas as pessoas da lista de users)
    - input: nenhum
    - output: lista atualizada de users
    - exemplo de chamada:
        ```getAllUsers()```
