const express = require('express')
const app = express()
const dbconnect = require('./config/db')
const projects = require('./models/projectModel')

require('dotenv').config()

const port = process.env.PORT || 7778

app.use(express.json()) //Middleware
app.get('/', (req, res) => {
    res.json({ message: "Welcome All"})
})

app.listen(port, () => {
    console.log(`server running in : ${port}`)
})
