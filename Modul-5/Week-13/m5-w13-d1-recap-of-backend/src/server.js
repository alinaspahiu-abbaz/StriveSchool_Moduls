const express = require("express")
const path = require ("path")
const cors = require("cors")
const listEndpoints = require("express-list-endpoints")
const productsRouter =  require("./services/products")
const reviewRouter = require("./services/reviews")
const { notFoundHandler, badRequestHandler, genericErrorHandler} = require('./errorHandlers')

const server = express()
const port = process.env.PORT

//MiddleWares
server.use(express.json())
server.use(cors())

// Routers:
server.use("/products", productsRouter)
server.use("/review", reviewRouter)


// Error Handlers
server.use(notFoundHandler)
server.use(badRequestHandler)
server.use(genericErrorHandler)


console.log(listEndpoints(server))


server.listen(port, () =>{
    console.log(`Server on port: ${port}`)
})