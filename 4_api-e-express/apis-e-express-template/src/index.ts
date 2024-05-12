import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses, students } from './database'
import { COURSE_STACK, TCourse } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

// getAllCountries
app.get("/courses", (req: Request, res: Response) => {
    res.send(courses)
})

// findCourseByName
app.get("/courses/search", (req: Request, res: Response) => {
    const nameToFind = req.query.name as string
    const result: TCourse[] = courses.filter((course) => {
        return course.name.toLowerCase().includes(nameToFind.toLowerCase())
    })

    res.send(result)
})

// createNewCourse
app.post("/courses", (req: Request, res: Response) => {
    const id = req.body.id as string 
    const name = req.body.name as string
    const lessons = req.body.lessons as number
    const stack = req.body.stack as COURSE_STACK

    const newCourse = {
        id,
        name, 
        lessons,
        stack
    }

    courses.push(newCourse)

    res.status(201).send("Curso registrado com sucesso!")
})

// getAllStudents
app.get("/students", (req: Request, res: Response) => {
    res.send(students)
})

// findStudentsByName
app.get("/students/search", (req: Request, res: Response) => {
    const nameInput = req.query.name as string

    const result = students.filter((student) => {
        return student.name.toLowerCase().includes(nameInput.toLowerCase())
    })

    res.send(result)
})

// createNewStudent

app.post("/students", (req: Request, res: Response) => {
    const id = req.body.id
    const name = req.body.name
    const age = req.body.age

    const newStudent = {
        id,
        name,
        age
    }

    students.push(newStudent)

    res.status(201).send("Estudante adicionado com sucesso!")
})