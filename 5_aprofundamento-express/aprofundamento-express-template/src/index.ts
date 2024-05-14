import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts } from './database'
import { ACCOUNT_TYPE } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

// getAccountById
app.get("/accounts/:id", (req: Request, res: Response) => {
    const idToFind = req.params.id

    const accountToFind = accounts.find(
        account => account.id === idToFind)

    res.status(200).send(accountToFind)
})

//deleteAccount
app.delete("/accounts/:id", (req: Request, res: Response) => {
    const idToDelete = req.params.id

    const indexToDelete = accounts.findIndex(account => account.id === idToDelete)

    if(indexToDelete !== -1){
        const deletedAccount = accounts.splice(indexToDelete,1)
        res.status(200).send("Item deletado com sucesso")
    } else {
        res.status(404).send("Item não encontrado")
    }
})

// editAccount
app.put("/accounts/:id", (req: Request, res: Response) => {
    const idToEdit = req.params.id

    const newId = req.body.id as string | undefined
    const newOwnerName = req.body.ownerName as string | undefined
    const newBalance = req.body.balance as number | undefined
    const newType = req.body.type as ACCOUNT_TYPE | undefined

    const accountToFind = accounts.find(
        account => account.id === idToEdit)

    if(accountToFind){
        accountToFind.id = newId || accountToFind.id
        accountToFind.ownerName = newOwnerName || accountToFind.ownerName
        accountToFind.type = newType || accountToFind.type 
        accountToFind.balance = isNaN(Number(newBalance)) ? accountToFind.balance : newBalance as number

        res.status(200).send("Atualização realizada com sucesso")
    }
})


