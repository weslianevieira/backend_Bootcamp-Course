-- Active: 1715901387393@@127.0.0.1@3306

-- Criação de tabela custumers
CREATE TABLE customers (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    age INTEGER NOT NULL
);

-- Perdi a tabela SQL e quero saber a estrutura das colunas
PRAGMA table_info ('costumers');
-- extensão funciona melhor com aspas simples
-- Ler todas tabela custumers
SELECT * FROM customers;

-- Ler apenas colunas selecionadas
SELECT name, email FROM customers;

-- Inserir item na tabela (Inserir novas linhas)
INSERT INTO
    customers (id, name, email, age)
VALUES (
        'c001',
        'Wesliane',
        'wesliane@email.com',
        27
    ),
    (
        'c002',
        'Fulana',
        'fulana@email.com',
        25
    ),
    (
        'c003',
        'Ciclano',
        'ciclano@email.com',
        27
    );

-- Editando
UPDATE customers
SET
    email = 'wesliane_@email.com',
    age = 28
WHERE
    id = 'c001';

-- Deletar
DELETE FROM customers
WHERE id = 'c003';