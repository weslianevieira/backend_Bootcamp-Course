## Exercício 1
    
Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo
    
Abaixo está a query que cria essa tabela no MySQL

```sql
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
``` 

a) *Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*
VARCHAR(255) - strings de no máximo n caracteres
DATE - representa uma data (YYYY-MM-DD)
FLOAT - representa números não inteiros

b) *O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
`SHOW DATABASES` usado para conferir todos os bancos de dados criados.
`SHOW TABLES` usado para conferir todas as tabelas de um banco de dados específico. 

c) *O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
`DESCRIBE Actor` usado para conferir a estrutura de uma tabela.

## Exercício 2
    
O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
``` 
Atente-se a 3 fatos nessa query:

1. A ordem dos valores `(VALUES)` é definida pela lista colocada depois do nome da tabela `(ACTOR): (id, name, salary, birth_date)`.

2. Os valores `VARCHAR` (strings) devem ser indicados com "

3. As datas seguem o padrão: `YYYY-MM-DD`

a) *Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*
"Entrada duplicata '002' para chave 'actor.PRIMARY'"
A primary key deve ser única.

*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

c) 
```sql
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
"Contagem da coluna não combina com a contagem dos valores na linha 1" 

d)
```sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
``` 
"Campo 'name' não tem um valor padrão"

e)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
``` 
"Valor date incorreto: '1950' para coluna 'birth_date' na linha 1"

f) *Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.*

- Dicas

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

## Exercício 3
    
Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador `SELECT`. Talvez a query mais famosa que existe é:

```sql
SELECT * FROM Actor
``` 

Ela faz com que se retornem todas as **colunas** (ou "informações") de todas as **linhas** (ou "entradas") da nossa tabela. 

Se quisermos limitar as **colunas**, devemos indicar assim logo após o operador `SELECT`. Abaixo, está uma query que retorna somente o `id` e o `salários` de todos os atores

```sql
SELECT id, salary from Actor 
```

Agora, se quisermos colocar uma condição para retornar as **linhas** (entradas), devemos usar o operador `WHERE` e colocar a nossa condição que pode usar alguns operadores `(=, !=, >,` etc). Abaixo, está uma query que retorna somente o id e o nome dos atores.

```sql
SELECT id, name from Actor WHERE gender = "male"
```

a) *Escreva uma query que retorne todas as informações das atrizes*
SELECT * FROM Actor WHERE gender = "female";

b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*
SELECT salary FROM Actor WHERE name = "Tony Ramos";

c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*
SELECT * FROM Actor WHERE gender = "invalid";
Não retornou nenhum valor.

d) *Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*
SELECT id, name, salary FROM Actor WHERE salary < 500000;

e) *Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*

```sql 
SELECT id, nome from Actor WHERE id = "002"
```
"Coluna desconhecida 'nome' na lista"


## Exercício 4
    
Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:
    
    - cujos nomes começam com "A" ou "J"; e
    - cujos salários são maiores do que R$300.000
    
Para fazer a primeira parte, vamos usar o comparador `LIKE`, que permite comparar strings. Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: `LIKE "A%"` porque `%` indica uma string genérica. O operador "ou" é indicado por `OR`. Assim, a primeira condição é indicada por: `WHERE name LIKE "A%" OR name LIKE "J%"`. 
    
Já a segunda parte é simples: `salary > 300000`. O que pode confundir é o operador lógico "e" (`AND`). A ideia aqui é que todos os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". Dessa forma, a query vai ficar dessa forma (preste atenção nos parênteses):

```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
``` 

Assim como o `LIKE` existem os operadores: 

- `BETWEEN`: permite verificar se um valor está entre dois: `BETWEEN valor1 AND valor2`.
- `NOT`: que indica uma negação de comparação. Pode ser usado antes de outros operadores como: `NOT LIKE`, `NOT BETWEEN`

a) *Explique com as suas palavras a query acima*
Selecione na tabela Actors os atores que começam com a letra A ou J e recebem mais do que R$300.000

b) *Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*
SELECT * FROM actor WHERE name NOT LIKE "A%" AND salary > 350000;

c) *Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

d) *Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*
SELECT *
FROM Actor
WHERE (
        name LIKE "%A%"
        OR name LIKE "%a%"
        OR name LIKE "%g%"
        OR name LIKE "%G%"
    )
    AND salary BETWEEN 350000 AND 900000;


## Exercício 5
    
Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)
    
a) *Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.*
    
*Crie 4 filmes com as seguintes informações:* 
    
    - b) Clique aqui
        
        id: `001`
        
        Título: `Se Eu Fosse Você`
        
        Sinopse: `Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos`
        
        Data de lançamento: `06/01/2006`
        
        Avaliação: `7`
        
    - c) Clique aqui
        
        id: `002`
        
        Título: `Doce de mãe`
        
        Sinopse: `Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela`
        
        Data de lançamento: `27/12/2012`
        
        Avaliação: `10`
        
    - d) Clique aqui
        
        id: `003`
        
        Título: `Dona Flor e Seus Dois Maridos`
        
        Sinopse: `Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.`
        
        Data de lançamento: `02/11/2017`
        
        Avaliação: `8`
        
    - e) Clique aqui
        
        Pesquise algum filme e crie ele na tabela
        
    
- Dicas

```sql
CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)
``` 
Achamos que já demos muitos exemplos de `INSERT`. Então aqui vai uma query para o item `e`:

```sql 
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
)
```

## Exercício 6
    
Escreva uma query que:
    
a) Retorne o id, título e avaliação a partir de um id específico;
SELECT id, title, rating FROM Movie WHERE id = '007';

b) Retorne um filme a partir de um nome específico;
SELECT * FROM Movie WHERE title = 'Titanic';

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;  


## Exercício 7
    
Escreva uma query que:
    
a) Retorna um filme cujo título contenha a palavra `vida`
SELECT * FROM Movie WHERE title = "%vida%";

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
SELECT * FROM Movie
WHERE title LIKE "%TITANIC%" OR
      synopsis LIKE "%TITANIC%";

c) Procure por todos os filmes que já tenham lançado
SELECT * FROM Movie WHERE release_date < CURDATE();

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`. 
  SELECT *
FROM Movie
WHERE
    release_date < CURDATE()
    AND (title LIKE "%TITANIC%"
    OR synopsis LIKE "%TITANIC%")
    AND rating > 7;

Se você chegou até as soluções acima, parabéns! Terminou os exercícios. 
Só queremos fazer uma pequena observação. E se quiséssemos tornar as queries com a data de lançamento de tal forma que não precisemos atualizar o dia? 
Do jeito que está agora, amanhã, termos que trocar o valor do que está depois do `<`. 

Existe uma forma de pegar o dia atual no MySQL. Nessa linguagem, existe a possibilidade de usarmos funções existentes que fazem algumas operações ou dão alguns valores específicos. Para pegarmos o dia atual ("current date" em inglês), com a função: `CURDATE`. Podemos mudar nossa query para:

```sql
SELECT * FROM MOVIE
WHERE release_date < CURDATE() AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%");
```
Fiquem tranquilos porque veremos amanhã as Funções no MySQL