const express = require("express")
const studentsRouter = require('./services/students')
const listEndpoints = require("express-list-endpoints")


const server = express()

const port = process.env.PORT || 3002






server.use(express.json())
server.use("/students", studentsRouter)
console.log(listEndpoints(server))


server.listen(port, () => {
    console.log(`Server on port ${port}`)
})
