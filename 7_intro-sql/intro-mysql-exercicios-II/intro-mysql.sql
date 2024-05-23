-- Active: 1716408630358@@localhost@3306@db_movies
-- Criar banco de dados
CREATE DATABASE db_movies;

-- Criar tabela
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- Ver estrutura da tabela
DESCRIBE Actor;

-- Criar linha na tabela
INSERT INTO
    Actor (
        id,
        name,
        salary,
        birth_date,
        gender
    )
VALUES (
        "001",
        "Tony Ramos",
        400000,
        "1948-08-25",
        "male"
    );

-- Criar linha na tabela
INSERT INTO
    Actor (
        id,
        name,
        salary,
        birth_date,
        gender
    )
VALUES (
        "002",
        "Glória Pires",
        1200000,
        "1963-08-23",
        "female"
    );

-- Criar linha na tabela
INSERT INTO
    Actor (
        id,
        name,
        salary,
        birth_date,
        gender
    )
VALUES (
        "003",
        "Leonardo DiCaprio",
        "400000",
        "1974-11-11",
        "male"
    );

-- erro: "Contagem da coluna não combina com a contagem dos valores na linha 1"
INSERT INTO
    Actor (id, name, salary)
VALUES (
        "003",
        "Fernanda Montenegro",
        300000,
        "1929-10-19",
        "female"
    );

-- erro: "Campo 'name' não tem um valor padrão"
INSERT INTO
    Actor (
        id,
        salary,
        birth_date,
        gender
    )
VALUES (
        "004",
        400000,
        "1949-04-18",
        "male"
    );

-- erro: "Valor date incorreto: '1950' para coluna 'birth_date' na linha 1"
INSERT INTO
    Actor (
        id,
        name,
        salary,
        birth_date,
        gender
    )
VALUES (
        "005",
        "Juliana Paes",
        719333.33,
        1979 -03 -26,
        "female"
    );

-- Criar linha na tabela
INSERT INTO
    Actor (
        id,
        name,
        salary,
        birth_date,
        gender
    )
VALUES (
        "004",
        "Fernanda Montenegro",
        300000,
        "1929-10-19",
        "female"
    );

-- Criar linha na tabela
INSERT INTO
    Actor (
        id,
        name,
        salary,
        birth_date,
        gender
    )
VALUES (
        "005",
        "Antônio Fagundes",
        400000,
        "1949-04-18",
        "male"
    );

-- Criar linha na tabela
INSERT INTO
    Actor (
        id,
        name,
        salary,
        birth_date,
        gender
    )
VALUES (
        "006",
        "Juliana Paes",
        719333.33,
        "1979-03-26",
        "female"
    );

-- Criar linha na tabela
INSERT INTO
    Actor (
        id,
        name,
        salary,
        birth_date,
        gender
    )
VALUES (
        "007",
        "Angelina Jolie",
        4000000,
        "1975-06-4",
        "female"
    );

-- Criar linha na tabela
INSERT INTO
    Actor (
        id,
        name,
        salary,
        birth_date,
        gender
    )
VALUES (
        "008",
        "Robert Dowmey Jr.",
        6250000,
        "1965-04-04",
        "male"
    );

-- Ver todos os dados
SELECT * FROM Actor;

-- Ver dados específicos
SELECT id, salary from Actor;

-- Ver dados específicos com todos os atores
SELECT id, name from Actor WHERE gender = "male";

-- Ver todos os dados com todas as atrizes
SELECT * FROM Actor WHERE gender = "female";

-- Ver salario do Tony Ramos
SELECT salary FROM Actor WHERE name = "Tony Ramos";

-- Ver todas a informações com gender invalid
SELECT * FROM Actor WHERE gender = "invalid";

-- Ver id, nome e salário de quem tenham o salário com o valor máximo de R$500.000
SELECT id, name, salary FROM Actor WHERE salary <= 500000;

-- error: "Coluna desconhecida 'nome' na lista"
SELECT id, nome
from Actor
WHERE
    id = "002"
    -- atores com nome iniciado com A ou J e com salário maior que R$300.000
SELECT *
FROM Actor
WHERE (
        name LIKE "A%"
        OR name LIKE "J%"
    )
    AND salary > 300000;

-- atores com nome não iniciado com A e com salário maior que R$350.000,00
SELECT * FROM actor WHERE name NOT LIKE "A%" AND salary > 350000;

-- atores com g ou G em qualquer parte do nome
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

-- atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome
-- e o salário entre R$350.000,00 e R$900.000,00
SELECT *
FROM Actor
WHERE (
        name LIKE "%A%"
        OR name LIKE "%a%"
        OR name LIKE "%g%"
        OR name LIKE "%G%"
    )
    AND salary BETWEEN 350000 AND 900000;

-- Criar tabela de filmes
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synipsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

-- Ver tabela de filmes
SELECT * FROM Movie;

-- Criar linha na tabela de filmes
INSERT INTO
    Movie (
        id,
        title,
        synipsis,
        release_date,
        rating
    )
VALUES (
        "001",
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006-01-06",
        7
    );

-- Criar linha na tabela de filmes
INSERT INTO
    Movie (
        id,
        title,
        synipsis,
        release_date,
        rating
    )
VALUES (
        "002",
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27",
        10
    );

-- Criar linha na tabela de filmes
INSERT INTO
    Movie (
        id,
        title,
        synipsis,
        release_date,
        rating
    )
VALUES (
        "003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02",
        8
    );

-- Criar linha na tabela de filmes
INSERT INTO
    Movie (
        id,
        title,
        synipsis,
        release_date,
        rating
    )
VALUES (
        "004",
        "Lara Croft: Tomb Raider",
        "Lara Croft: Tomb Raider segue a heroína Lara Croft, uma arqueóloga e aventureira britânica, enquanto ela enfrenta inimigos e desvenda mistérios para encontrar um artefato poderoso chamado 'O Triângulo de Luz'. Este artefato, dividido em duas partes e escondido em locais diferentes do mundo, tem o poder de controlar o tempo. Lara deve recuperar as partes antes que a sociedade secreta Illuminati as obtenha para usar em seus próprios interesses malignos",
        "2001-06-15",
        3
    );

-- Criar tabela de filme
INSERT INTO
    Movie (
        id,
        title,
        synipsis,
        release_date,
        rating
    )
VALUES (
        "005",
        "Titanic",
        "Titanic é um drama romântico épico dirigido por James Cameron. O filme se passa a bordo do infame transatlântico RMS Titanic, que naufragou em sua viagem inaugural em 1912. A história central gira em torno de Jack Dawson (Leonardo DiCaprio), um artista pobre, e Rose DeWitt Bukater (Kate Winslet), uma jovem aristocrata, que se apaixonam durante a viagem. Enquanto enfrentam a desaprovação social e os desafios de classes, seu romance é interrompido pela trágica colisão do navio com um iceberg. O desastre subsequente testa a força e o amor do casal, culminando em um desfecho emocionante.",
        "1997-12-19",
        9
    );

INSERT INTO
    Movie (
        id,
        title,
        synipsis,
        release_date,
        rating
    )
VALUES (
        "006",
        "Iron Man",
        "Iron Man é um filme de super-herói baseado no personagem homônimo da Marvel Comics. O filme é dirigido por Jon Favreau e é o primeiro do Universo Cinematográfico Marvel (MCU). A história segue Tony Stark (Robert Downey Jr.), um bilionário gênio da tecnologia e magnata das armas. Após ser sequestrado por terroristas no Afeganistão, Stark desenvolve uma armadura tecnológica para escapar. De volta aos Estados Unidos, ele decide aperfeiçoar sua armadura e usa-la para combater o crime e proteger o mundo como o invencível Homem de Ferro.",
        "2008-05-02",
        8
    );

INSERT INTO
    Movie (
        id,
        title,
        synipsis,
        release_date,
        rating
    )
VALUES (
        "007",
        "Deus é Brasileiro",
        "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
        "2003-01-31",
        9
    );

-- Alterar nome da coluna
ALTER TABLE Movie CHANGE synipsis synopsis TEXT NOT NULL;

-- Ver tabela
SELECT * FROM Movie;

-- Retorne o id, título e avaliação a partir de um id específico
SELECT id, title, rating FROM Movie WHERE id = '007';

-- Retorne um filme a partir de um nome específico
SELECT * FROM Movie WHERE title = 'Titanic';

-- Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

-- Retorna um filme cujo título contenha a palavra `vida`
SELECT * FROM Movie WHERE title = "%vida%";

-- pesquise se o termo de busca está contido no título ou na sinopse.
SELECT * FROM Movie
WHERE title LIKE "%TITANIC%" OR
      synopsis LIKE "%TITANIC%";

-- Procure por todos os filmes que já tenham lançado
SELECT * FROM Movie WHERE release_date < CURDATE();

-- Procure por algum filme que já tenha lançado, 
-- com o termo de busca contido no título ou sinopse 
-- e com a avaliação maior do que `7`
SELECT *
FROM Movie
WHERE
    release_date < CURDATE()
    AND (title LIKE "%TITANIC%"
    OR synopsis LIKE "%TITANIC%")
    AND rating > 7;