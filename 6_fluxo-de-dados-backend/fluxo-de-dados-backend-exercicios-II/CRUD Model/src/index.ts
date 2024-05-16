import express, { Request, Response } from "express"
import cors from "cors"
import { products } from "./data"
import { TProduct } from "./type"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})


app.get("/test", (req: Request, res: Response) => {
    res.send("Hello World")
})


app.post("/products", (req: Request, res: Response) => {
    try {

        const { name, price } = req.body

        if (!name || !price) {
            throw new Error("Product name and price are required")
        }

        if (typeof name !== "string" || typeof price !== "number") {
            throw new Error("Product name and price must be strings and numbers")
        }

        if (price <= 0) {
            throw new Error("Price must be greater than zero")
        }

        const newProduct: TProduct = {
            id: (products.length + 1).toString(),
            name: name,
            price: price
        }

        products.push(newProduct)
        res.status(201).send(products)
        
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.status(422).send(error.message)
        }
    }

})


app.get("/products", (req: Request, res: Response) => {
    try {

        const search: string = req.query.search as string

        if(search){
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
            res.status(200).send(filteredProducts)
        } else {
            res.status(200).send(products)
        }

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})  


app.put("/products/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { price, name } = req.body

        if (!price && !name) {
            res.statusCode = 422
            throw new Error("Product name or price are required")
        } else if (typeof price !== "number" || typeof name !== "string") {
            res.statusCode = 422
            throw new Error("Product price must be a number and product name must be a string")
        } else if (price <= 0) {
            res.statusCode = 422
            throw new Error("Product price must be greater than zero")
        }


        const productIndex = products.findIndex(product => Number(product.id) == Number(id))

        if (productIndex < 0) {
            res.statusCode = 404
            throw new Error("Product not found")
        }

        // Caso a string seja vazia
        if (!name) {
            products[productIndex].price = price
            res.status(200).send(products)
        } else if (!price) {
            products[productIndex].name = name
            res.status(200).send(products)
        } else {
            products[productIndex].name = name
            products[productIndex].price = price
            res.status(200).send(products)
        }

        

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.send(error.message)
        }
    }
})  


app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const productIndex = products.findIndex(product => Number(product.id) == Number(id))

        if (productIndex < 0) {
            res.statusCode = 404
            throw new Error("Product not found")
        }

        products.splice(productIndex, 1)

        res.status(200).send(products)

    } catch (error: any) {
        res.status(404).send(error.message)
    }
})
