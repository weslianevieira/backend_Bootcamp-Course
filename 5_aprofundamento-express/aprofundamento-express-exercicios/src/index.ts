import express, { Request, Response } from 'express';
import cors from 'cors';
import { products, users } from './database';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

//deleteUser
app.delete("/users/:id", (req: Request, res: Response) => {
  const idToDelete = req.params.id

  const indexToDelete = users.findIndex(user => user.id === idToDelete)

  if (indexToDelete !== -1) {
    const userToDelete = users.splice(indexToDelete, 1)
    res.status(200).send("Item deletado com sucesso")
  } else {
    res.status(404).send("Item não encontrado")
  }

})

//deleteProduct
app.delete("/products/:id", (req: Request, res: Response) => {
  const idToDelete = req.params.id

  const indexToDelete = products.findIndex(user => user.id === idToDelete)

  if (indexToDelete !== -1) {
    const userToDelete = products.splice(indexToDelete, 1)
    res.status(200).send("Item deletado com sucesso")
  } else {
    res.status(404).send("Item não encontrado")
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

  const productToEdit = products.find(product => product.id === idToDelete)

  if(productToEdit){
    productToEdit.id = newId || productToEdit.id 
    productToEdit.name = newName || productToEdit.name 
    isNaN(Number(newPrice)) ? productToEdit.price : newPrice as number
    productToEdit.description = newDescription || productToEdit.description 
    productToEdit.imageUrl = newImageUrl || productToEdit.imageUrl 
  }

  res.status(200).send("Item editado com sucesso")
})