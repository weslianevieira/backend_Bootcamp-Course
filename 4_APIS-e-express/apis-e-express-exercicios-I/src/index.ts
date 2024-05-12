import express, { Request, Response } from "express"
import cors from "cors"
import { products, users } from "./database"
import { TProduct, TUser } from "./type"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

// getAllUsers
app.get("/users", (req: Request, res: Response) => {
    res.send(users)
})

// getAllProducts
app.get("/products", (req: Request, res: Response) => {
    res.send(products)
})

// findProductByName
app.get("/products/search", (req: Request, res: Response) => {
    
    const nameInput = req.query.name as string

    if(nameInput){
        const result: TProduct[] = products.filter((product) => {
            return product.name.toLowerCase().includes(nameInput.toLowerCase())
        })

        res.status(200).send(result) 
    } else {
        res.status(200).send(products)
    }
})

// createNewUser
app.post("/users", (req: Request, res: Response) => {
    const id: string = req.body.id
    const name: string = req.body.name
    const email: string = req.body.email
    const password: string = req.body.password

    const newUser: TUser = {
        id,
        name, 
        email,
        password
    }

    users.push(newUser)

    res.status(201).send("Usuário adicionado!")
})

// createNewProduct
app.post("/products", (req: Request, res: Response) => {
    const id: string = req.body.id
    const name: string = req.body.name
    const price: number = req.body.price
    const description: string = req.body.description
    const imageUrl: string = req.body.imageUrl

    const newProduct: TProduct = {
        id,
        name, 
        price,
        description,
        imageUrl
    }

    products.push(newProduct)

    res.status(201).send("Produto adicionado!")
})