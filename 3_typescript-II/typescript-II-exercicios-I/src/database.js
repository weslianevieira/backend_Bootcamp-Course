"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProductsByName = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "u001",
        name: "Wesliane",
        email: "weslianebsb@gmail.com",
        password: "123456",
        createdAt: new Date().toISOString()
    },
    {
        id: "u002",
        name: "Júlia",
        email: "juju25@gmail.com",
        password: "juju1234",
        createdAt: new Date().toISOString()
    },
];
exports.products = [
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400"
    },
];
function createUser(id, name, email, password) {
    const newUser = {
        id: id,
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };
    const initialLength = exports.users.length;
    exports.users.push(newUser);
    if (exports.users.length > initialLength) {
        return "Cadastro realizado com sucesso.";
    }
    else {
        return "Error. Cadastro não foi realizado.";
    }
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, description, imageUrl) {
    const newProduct = {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl
    };
    const initialLength = exports.products.length;
    exports.products.push(newProduct);
    if (exports.products.length > initialLength) {
        return "Produto criado com sucesso.";
    }
    else {
        return "Erro. Produto não foi criado.";
    }
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
function searchProductsByName(name) {
    const produtosEncontrados = exports.products.filter(produto => produto.name.toLowerCase().includes(name.toLowerCase()));
    return produtosEncontrados;
}
exports.searchProductsByName = searchProductsByName;
