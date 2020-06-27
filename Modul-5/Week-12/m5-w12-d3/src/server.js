const express = require("express")
const listEndpoints = require("express-list-endpoints")
const usersRouter = require("./services/users")

 
const server = express()

const port = process.env.PORT || 3002





server.use(express.json()) 

// ROUTES
server.use("/users", usersRouter)


server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})