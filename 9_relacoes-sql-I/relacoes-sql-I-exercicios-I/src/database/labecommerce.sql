-- Active: 1716642870419@@127.0.0.1@3306

-- Excluir tabela users
DROP TABLE users;

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
        'u001',
        'Wesliane',
        'weslianebsb@gmail.com',
        '123456',
        CURRENT_TIMESTAMP
    ),
    (
        'u002',
        'Júlia',
        'juju25@gmail.com',
        'juju1234',
        CURRENT_TIMESTAMP
    ),
    (
        'u003',
        'Mateus',
        'mateus@gmail.com',
        '654321',
        CURRENT_TIMESTAMP
    );

DROP TABLE products;

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
        'pro001',
        'Mouse Gamer',
        250,
        'Melhor mouse do mercado!',
        'https://picsum.photos/seed/Mouse%20gamer/400'
    ),
    (
        'pro002',
        'Monitor',
        900,
        'Monitor LED Full HD 24 polegadas',
        'https://picsum.photos/seed/Monitor/400'
    ),
    (
        'pro003',
        'Caixa de Som Mini System Sony Mhc-v13',
        2190,
        'Mini System Sony Mhc-v13 preto com bluetooth 120v/240v, reproduz MP3, CD, DVD, possui conexão USB, com função karaokê. Inclui controle remoto, iluminaçõa de festa.',
        'https://http2.mlstatic.com/D_NQ_NP_2X_617738-MLA46887835872_072021-F.webp'
    ),
    (
        'pro004',
        'Teclado Gamer',
        249.99,
        'Teclado mecânico com iluminação RGB',
        'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/aw420k/media-gallery/keyboard-aw420k-xkb-05-bk-gallery-01.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=1645&qlt=100,1&resMode=sharp2&size=1645,476&chrss=full'
    ),
    (
        'pro005',
        'Cadeira de Escritório',
        291.08,
        'Cadeira ergonômica para escritório',
        'https://static.mobly.com.br/p/Mobly-Cadeira-de-EscritC3B3rio-SecretC3A1ria-GiratC3B3ria-Clean-Preta-5682-244481-1-zoom.jpg'
    ),
    (
        'pro006',
        'Suporte para Notebook',
        28.99,
        'Suporte ajustável para notebooks',
        'https://www.araujo.com.br/dw/image/v2/BGTX_PRD/on/demandware.static/-/Sites-araujo-master/default/dw607c8e01/images/31117/07908414405868_1.jpg?sw=1000&sh=1000&sm=fit?sw=500&amp;sh=500&amp;sm=fit'
    ),
    (
        'pro007',
        'Mesa Gamer TGT Barrire, Preto, TGT-BRR-BK01',
        369.99,
        'Mesa espaçosa para gamers',
        'https://images.kabum.com.br/produtos/fotos/472370/mesa-gamer-kbm-gaming-dg150-preto-com-tampo-resistente-a-umidade-suporte-para-headset-e-copo-base-em-z-kgdg150_1705582454_g.jpg'
    );

-- getAllUsers
SELECT * FROM users;

-- getAllProducts
SELECT * FROM products;

SELECT *
FROM products
WHERE
    name LIKE '%gamer%'

-- createUser
INSERT INTO
    users (
        id,
        name,
        email,
        password,
        created_at
    )
VALUES (
        'u004',
        'Gláucia',
        'glaucia@gmail.com',
        '857522',
        CURRENT_TIMESTAMP
    );

-- createProduct
INSERT INTO
    products (
        id,
        name,
        price,
        description,
        image_url
    )
VALUES (
        'p008',
        'Headset Gamer Havit',
        175.99,
        'Headset Gamer Havit, Drivers 53mm, Microfone Plugável, P2, PC, PS4, XBOX ONE, Preto - HV-H2002D',
        'https://images.kabum.com.br/produtos/fotos/102770/headset-gamer-havit-drivers-53mm-hv-h2002d_headset-gamer-havit-drivers-53mm-hv-h2002d_1564056874_g.jpg'
    );

-- deleteUserById

DELETE FROM users WHERE id = 'u004';

-- deleteProductById

DELETE FROM products WHERE id = 'p008';

-- updateUserById
UPDATE users SET email = 'glaucia@email.com' WHERE id = 'u004';

-- updateProductById
UPDATE products
SET
    description = 'Headset Gamer Havit, drivers 53mm, microfone plugável, P2, PC, PS4, XBOX ONE, preto - HV-H2002D'
WHERE
    id = 'p008';

DROP TABLE purchases;

-- Criar tabela purchases
CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    buyer TEXT NOT NULL,
    total_price REAL NOT NULL,
    created_at TEXT NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO
    purchases (
        id,
        buyer,
        total_price,
        created_at,
        user_id
    )
VALUES (
        'p001',
        'Wesliane',
        1150,
        CURRENT_TIMESTAMP,
        'u001'
    ),
    (
        'p002',
        'Júlia',
        2190,
        CURRENT_TIMESTAMP,
        'u002'
    ),
    (
        'p003',
        'Mateus',
        900,
        CURRENT_TIMESTAMP,
        'u003'
    );

SELECT * FROM purchases;

UPDATE purchases
SET
    total_price = 928.99
WHERE
    id = 'p008';

-- Para juntar as colunas das duas tabelas: users e purchases
SELECT *
FROM purchases
    INNER JOIN users ON purchases.user_id = users.id;