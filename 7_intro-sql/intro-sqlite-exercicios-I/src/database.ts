import { TProduct, TUser } from "./type";

export const users: TUser[] = [
    {
        id: "u001",
        name: "Wesliane",
        email: "weslianebsb@gmail.com",
        password: "123456"
    },
    {
        id: "u002",
        name: "Júlia",
        email: "juju25@gmail.com",
        password: "juju1234"
    },
]

export const products: TProduct[] = [
    {
        id: "p001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        id: "p002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400"
    },
]