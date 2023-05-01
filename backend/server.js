const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')

const app = express()

app.use(express.json())
app.use(cors())

//connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/fancy-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error)

//calling database schema
const Todo = require('./models/Todo')

//GET method to access database
app.get('/todos', async (req, res) => {
    const todos = await Todo.find()

    res.json(todos)
})

//POST method to create new item into database
app.post('/todo/new', (req,res) => {
    const todo = new Todo({
        text: req.body.text
    })

    todo.save()

    res.json(todo)
})

//DELETE method to remove item from database
app.delete('/todo/delete/:id', async(req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)

    res.json(result)
})

//PUT method to update as a completed item into database
app.put('/todo/complete/:id', async(req, res) => {
    const todo = await Todo.findById(req.params.id)

    todo.complete = !todo.complete
    todo.save()

    res.json(todo)
    
})

//listening connection from the server
app.listen(3001, () => console.log("Server stated on port 3001"))