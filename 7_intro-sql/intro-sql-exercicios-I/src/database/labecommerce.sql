-- Active: 1715975494130@@127.0.0.1@3306

-- Criação de tabela users
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL
);

-- Ver tabela users
SELECT * FROM users;

-- Inserir users
INSERT INTO
    users (
        id,
        name,
        email,
        password,
        created_at
    )
VALUES (
        'U001',
        'Wesliane',
        'weslianebsb@gmail.com',
        '123456',
        CURRENT_TIMESTAMP
    ),
    (
        'U002',
        'Júlia',
        'juju25@gmail.com',
        'juju1234',
        CURRENT_TIMESTAMP
    ),
    (
        'U003',
        'Mateus',
        'mateus@gmail.com',
        '654321',
        CURRENT_TIMESTAMP
    );

-- Criação de tabela products
CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

-- Ver products
SELECT * FROM products;

-- Inserir products
INSERT INTO
    products (
        id,
        name,
        price,
        description,
        image_url
    )
VALUES (
        'p001',
        'Mouse gamer',
        250,
        'Melhor mouse do mercado!',
        'https://picsum.photos/seed/Mouse%20gamer/400'
    ),
    (
        'p002',
        'Monitor',
         900,
        'Monitor LED Full HD 24 polegadas',
        'https://picsum.photos/seed/Monitor/400'
    ),
    (
        'p003',
        'Caixa de som',
        150,
        'Caixa de som Sony dolby audio 5.0',
        'https://picsum.photos/seed/Estereo/400'
    );