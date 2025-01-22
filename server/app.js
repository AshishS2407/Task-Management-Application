const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const task = require('./routes/task')
const TaskSchema = require("./model/Task")

const app = express();



app.use(cors({
    origin: "https://localhost:3000"
}))


const PORT = 5000
app.listen(PORT,()=> {
    console.log("Server is running at port 5000")
})

app.use(express.json())
app.use('/', task)


mongoose.connect("mongodb://localhost:27017/task")
.then(() => console.log("Connected to mongoDb"))
.catch(err => ("Error"))

