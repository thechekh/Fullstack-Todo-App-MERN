
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const todoRoutes = require('./Routes/todo_routes')
const usersRoutes = require('./Routes/users_routes')
const port = 4000;
mongoose.connect('mongodb://localhost/todobd', { useNewUrlParser: true })

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/', todoRoutes)
app.use('/users', usersRoutes)

app.listen(port, () => console.log('Server is running on port:', port))