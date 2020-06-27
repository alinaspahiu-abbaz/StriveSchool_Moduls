const express = require("express")
const listEndpoints = require("express-list-endpoints")
const usersRouter = require("./services/users")
const moviesRouter = require("./services/movies")

 
const server = express()

const port = process.env.PORT || 3002

const loggerMiddleware = (req, res, next) =>{ //next - is a function that sents record to the next element in the chain
  console.log(`Logged url: ${req.url}| method: ${req.method} --date: ${new Date()}`)
  next()
}
// mund ta perdorim per te gjithe routerat. ose vete per nje specifik,
//
server.use(express.json()) // Built in middleware
// server.use(loggerMiddleware)

// ROUTES
server.use("/users", usersRouter)
server.use("/movies", loggerMiddleware, moviesRouter)// dhe kjo vlen vetem per movies

console.log(listEndpoints(server))
server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})