import express, { Request, Response } from "express"
import cors from "cors"
import { products, users } from "./database"
import { TProduct, TUser } from "./type"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server running on port 3003.")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

// getAllUsers
app.get("/users", (req: Request, res: Response) => {

    try {
        res.send(users)
    } catch (error) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Unexpected error.")
        }
    }
})

// getAllProducts
app.get("/products", (req: Request, res: Response) => {

    try {
        res.send(products)
    } catch (error) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Unexpected error.")
        }
    }
})

// findProductByName
app.get("/products/search", (req: Request, res: Response) => {

    try {
        // query são interpretados como string e não retorna error, retorna undefined
        const nameInput = req.query.name

        // error: request sem query
        if (typeof nameInput !== "string") {
            // status HTTP 422 é definido como "Unprocessable Entity" (Entidade Não Processável)
            // formulário de cadastro é enviado e alguns campos obrigatórios não foram preenchidos 
            // ou o formato dos dados não está correto
            res.statusCode = 422
            throw new Error("Name are required")
        }
        //error: request com string númerica, vazia e com espaço
        if (!isNaN(Number(nameInput))) {
            res.statusCode = 422
            throw new Error("This field must contain only letters, without special characters or numbers.");
        }

        // error: request com string vazia ou com espaço
        // if (nameInput.trim().length === 0) {
        //      res.statusCode = 422
        //     throw new Error("Please enter at least one character.")
        // }

        //error: request vazio
        // if (!nameInput) {
        //     res.statusCode = 422
        //     throw new Error("Name are required")
        // }

        if (nameInput) {
            const result: TProduct[] = products.filter((product) => {
                return product.name.toLowerCase().includes(nameInput.toLowerCase())
            })

            res.status(200).send(result)
        } else {
            res.status(200).send(products)
        }

    } catch (error) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Unexpected error.")
        }
    }
})

// createUser
app.post("/users", (req: Request, res: Response) => {

    try {
        const id = req.body.id
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        // errror: user com mesmo id
        const existingUserById = users.find(u => u.id === id)
        if (existingUserById) {
            throw new Error("User with the same ID already exists.")
        }

        // errror: user com mesmo email
        const existingUserByEmail = users.find(u => u.id === email)
        if (existingUserByEmail) {
            throw new Error("User with the same email already exists.")
        }

        // ID
        if (typeof id !== "string") {
            // error: request com number ou indefinido
            // status HTTP 422 "Unprocessable Entity" (Entidade Não Processável)
            res.statusCode = 422
            throw new Error("This field can not be a number or undefined")
        } else if (id.trim().length === 0) {
            // error: request com string vazia ou com espaço
            res.statusCode = 422
            throw new Error("ID are required")
        }

        // NAME
        if (typeof name !== "string") {
            // error: request com number ou indefinido
            res.statusCode = 422
            throw new Error("This field can not be a number or undefined")
        } else if (name.trim().length === 0) {
            // error: request com string vazia ou com espaço
            res.statusCode = 422
            throw new Error("Name are required")
        }

        // EMAIL
        if (typeof email !== "string") {
            // error: request com number ou indefinido
            res.statusCode = 422
            throw new Error("This field can not be a number.")
        } else if (email.trim().length === 0) {
            // error: request com string vazia ou com espaço
            res.statusCode = 422
            throw new Error("Email are required")
        }

        // PASSWORD
        if (typeof password !== "string") {
            // error: request com number ou indefinido
            res.statusCode = 422
            throw new Error("This field can not be a number.")
        } else if (password.trim().length === 0) {
            // error: request com string vazia ou com espaço
            res.statusCode = 422
            throw new Error("Password are required.")
        }

        const newUser: TUser = {
            id,
            name,
            email,
            password
        }

        users.push(newUser)

        res.status(201).send("User successfully added!")
    } catch (error) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Unexpected error.")
        }
    }

})

// createProduct
app.post("/products", (req: Request, res: Response) => {

    try {
        const id = req.body.id
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const imageUrl = req.body.imageUrl


        // error: product com mesmo id
        const existingProductById = products.find(p => p.id === id)
        if (existingProductById) {
            throw new Error("Product with the same ID already exists.")
        }

        // ID
        if (typeof id !== "string") {
            // error: request com number ou indefinido
            res.statusCode = 422
            throw new Error("This field can not be a number or undefined")
        } else if (id.trim().length === 0) {
            // error: request com string vazia ou com espaço
            res.statusCode = 422
            throw new Error("ID are required")
        }

        // NAME
        if (typeof name !== "string") {
            // error: request com number ou indefinido
            res.statusCode = 422
            throw new Error("This field can not be a number or undefined")
        } else if (name.trim().length === 0) {
            // error: request com string vazia ou com espaço
            res.statusCode = 422
            throw new Error("Name are required")
        }

        // PRICE
        if (typeof price !== "number") {
            // error: request com string ou indefinido
            res.statusCode = 422
            throw new Error("This field can not be a string or undefined.")
        } else if (price <= 0) {
            // error: request vazia ou com espaço
            res.statusCode = 422
            throw new Error("Product price must be greater than zero")
        }

        // DESCRIPTION
        if (typeof description !== "string") {
            // error: request com number ou indefinido 
            res.statusCode = 422
            throw new Error("This field can not be a number or undefined.")
        } else if (description.trim().length === 0) {
            // error: request com string vazia ou com espaço
            res.statusCode = 422
            throw new Error("Description are required.")
        }

        //IMAGEURL

        if (typeof imageUrl !== "string") {
            // error: request com number ou indefinido
            res.statusCode = 422
            throw new Error("This field can not be a number or undefined.")
        } else if (imageUrl.trim().length === 0) {
            // error: request com string vazia ou com espaço
            res.statusCode = 422
            throw new Error("Image are required.")
        }

        const newProduct: TProduct = {
            id,
            name,
            price,
            description,
            imageUrl
        }

        products.push(newProduct)

        res.status(201).send("Product successfully added!")
    } catch (error) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Unexpected error.")
        }
    }

})


//deleteUser
app.delete("/users/:id", (req: Request, res: Response) => {
    try {
        const idToDelete = req.params.id

        // error: user com mesmo id não existe
        const existingUserById = users.find(u => u.id === idToDelete)
        if (!existingUserById) {
            throw new Error("User with this ID dosen't exists.")
        }

        const indexToDelete = users.findIndex(user => user.id === idToDelete)

        // error: igual a -1
        if (indexToDelete !== -1) {
            const userToDelete = users.splice(indexToDelete, 1)
            res.status(200).send("Item deleted successfully!")
        } else {
            res.statusCode = 404
            throw new Error("Item not found")
        }

    } catch (error) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Unexpected error.")
        }
    }

})

//deleteProduct
app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const idToDelete = req.params.id

         // error: product com mesmo id não existe
         const existingProductById = products.find(p => p.id === idToDelete)
         if (!existingProductById) {
             throw new Error("Product this same ID dosen't exists.")
         }

        const indexToDelete = products.findIndex(user => user.id === idToDelete)

        // error: igual a -1
        if (indexToDelete < 0) {
            res.statusCode = 404
            throw new Error("Product not found")
        }

        const userToDelete = products.splice(indexToDelete, 1)
        res.status(200).send("Product deleted successfully.")


    } catch (error) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Unexpected error.")
        }
    }
})

// editProduct

app.put("/products/:id", (req: Request, res: Response) => {
    const idToDelete = req.params.id

    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newDescription = req.body.description as string | undefined
    const newImageUrl = req.body.imageUrl as string | undefined

    if (!newId && !newName && !newPrice && !newDescription && !newImageUrl) {
        res.statusCode = 422
        throw new Error("Product id, name, price, description and image are required")
    } else if (typeof newPrice !== "number" || typeof newId !== "string" || typeof newName !== "string" || typeof newDescription !== "string" || typeof newImageUrl !== "string") {
        res.statusCode = 422
        throw new Error("Product price must be a number. Product id, name, description and image must be a string")
    } else if (newPrice <= 0) {
        res.statusCode = 422
        throw new Error("Product price must be greater than zero")
    }

    const productToEdit = products.find(product => product.id === idToDelete)

    if (productToEdit) {
        productToEdit.id = newId || productToEdit.id
        productToEdit.name = newName || productToEdit.name
        isNaN(Number(newPrice)) ? productToEdit.price : newPrice as number
        productToEdit.description = newDescription || productToEdit.description
        productToEdit.imageUrl = newImageUrl || productToEdit.imageUrl
    }

    res.status(200).send("Item editado com sucesso")
})