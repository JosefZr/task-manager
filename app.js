
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require("./db/connect")
require('dotenv').config()
const noteFound = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

//midlware
app.use(express.static('./public'))
app.use(express.json())

//routes 
app.use('/api/v1/tasks',tasks)
app.use(noteFound)
app.use(errorHandlerMiddleware)
const port = 3000

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(` server is listeing in the port ${port}....`))
    }catch{
        console.log(err)
    }
}
start()