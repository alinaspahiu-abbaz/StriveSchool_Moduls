const express = require("express")
const studentsRouter = require('./services/students')
const listEndpoints = require("express-list-endpoints")
const projectRouter = require('./services/projects')
const middlewares = require("./services/middlewares")

const server = express()

const port = process.env.PORT || 3002




server.use(express.json())


server.use("/students", studentsRouter)
server.use("/projects", projectRouter)


console.log(listEndpoints(server))

server.listen(port, () => {
    console.log(`Server on port ${port}`)
})
