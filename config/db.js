const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURL || "mongodb+srv://Sanji:1234@admin.rww1c.mongodb.net/?retryWrites=true&w=majority&appName=admin")

const connection = mongoose.connection;
connection.on('connected',() => {
    console.log("DB Connected")
})
connection.on('error',() => {
    console.log("DB Error")
})

module.exports = mongoose