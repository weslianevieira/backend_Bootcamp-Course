// variável de tipo, tipagem
export type TUser = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}

export type TPost = {
    id: number,
    userId: string,
    title: string,
    body: string
}