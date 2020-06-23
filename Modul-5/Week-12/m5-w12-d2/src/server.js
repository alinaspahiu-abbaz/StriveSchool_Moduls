//the entred point. this is gonna be executed first
const express = require("express")
const usersRoutes = require('./services/users')

const server = express()

server.use("/users", usersRoutes)

server.listen(3001, () => {
    console.log('server is running on port 3001!')
})