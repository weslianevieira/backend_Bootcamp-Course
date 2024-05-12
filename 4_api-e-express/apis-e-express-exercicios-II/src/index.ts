import express, { Request, Response} from 'express';
import cors from 'cors';
import { posts, users } from './database';
import { TPost } from './type';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

// getAllUsers
app.get("/users", (req: Request, res: Response) => {
    if(!users.length){
        res.status(401).send("Não tem usuários.")
    }

    res.status(200).send(users)
})

// getAllPosts
app.get("/posts", (req: Request, res: Response) => {
    if(!posts.length){
        res.status(401).send("Não tem post.")
    }

    res.status(200).send(posts)
})

// findPostById
app.get("/posts/:userId", (req: Request, res: Response) => {
    let user = req.params.userId

    const post = posts.filter((post) => {
        return post.userId == user 
    })

    if(!users) {
        return res.status(400).send("Entre com userId válido.")
     } else if(posts.length === 0) {
        return res.status(400).send("Nenhum resultado encontrado.")
     }
        
        res.status(201).send(post)   
})

// deletePost
app.delete("/posts/:userId", (req: Request, res: Response) => {
    let user = req.params.userId

    const deletePost = posts.filter((post) => {
        return post.userId !== user 
    })


    if(!users) {
        return res.status(400).send("Entre com userId válido.")
     } else if(posts.length === 0) {
        return res.status(400).send("Nenhum resultado encontrado.")
     }
        
        res.status(201).send(deletePost)  
})

// deleteUser
app.delete("/users/:id", (req: Request, res: Response) => {
    let idToDelete = req.params.id

    const deleteUser = users.filter(
        user => user.id !== idToDelete
    )

    if(!users) {
        return res.status(400).send("Entre com id válido.")
    } else if(users.length === 0){
        return res.status(400).send("Nenhum resultado encontrado.")
    } else {
        res.status(201).send(deleteUser)
    }
})