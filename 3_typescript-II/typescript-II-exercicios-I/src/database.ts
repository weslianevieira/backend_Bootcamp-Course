import { TUsers, TProducts } from "./types";

export const users: TUsers[] = [
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
]

export const products: TProducts[] = [
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
]

export function createUser(id: string, name: string, email: string, password: string): string {

    const newUser = {
        id: id,
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };

    const initialLength: number = users.length
    users.push(newUser);

    if(users.length > initialLength){
         return "Cadastro realizado com sucesso."
    } else {
        return "Error. Cadastro não foi realizado."
    }
   
}

export function getAllUsers(): TUsers[] {
    return users;
}

export function createProduct(id: string, name: string, price: number, description: string, imageUrl: string): string {

    const newProduct = {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl
    };

    const initialLength: number = products.length
    products.push(newProduct);

    if(products.length > initialLength){
        return "Produto criado com sucesso."
    } else {
        return "Erro. Produto não foi criado."
    }
}

export function getAllProducts(): TProducts[] {
    return products;
}

export function searchProductsByName(name: string): TProducts[] {

    const produtosEncontrados = products.filter(produto =>
        produto.name.toLowerCase().includes(name.toLowerCase())
    );
    return produtosEncontrados;
}