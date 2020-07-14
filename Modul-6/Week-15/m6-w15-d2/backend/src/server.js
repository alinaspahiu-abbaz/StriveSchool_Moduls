const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const db = require("./db")
const bookRouter = require("./routes/books")

const server = express()

server.use(cors())
server.use(express.json())

server.get("/", (req, res) => {
res.send("The server is running")
})

server.use("/books", bookRouter)


server.listen(3022 || 3456, ()=>
console.log("Runing on: 3022 " ))