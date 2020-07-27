const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const sequelize = require("./db")
const bookRouter = require("./routes/books")
const reviewRouter = require("./routes/reviews")

sequelize.authenticate()
         .then(() => console.log("It's working"))
         .catch((e) => console.log(e))

const server = express()
server.use(cors())
server.use(express.json())

server.use("/books", bookRouter)
server.use("/reviews", reviewRouter)

server.listen(process.env.PORT || 4000, () => console.log(process.env.PORT || 4000))