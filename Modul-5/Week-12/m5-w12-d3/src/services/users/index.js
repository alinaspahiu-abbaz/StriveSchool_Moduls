const express = require("express")
const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")
const {check, validationResult} = require("express-validator")

const router = express.Router()

const readFile = (fileName) => {
  const buffer = fs.readFileSync(path.join(__dirname, fileName))
  const fileContent = buffer.toString()
  return JSON.parse(fileContent)
}

// Get all: 
router.get("/", (req, res) => {
  const usersDB = readFile("users.json")

  if(req.query && req.query.name){
    const filteredUsers = usersDB.filter
    (user => user.hasOwnProperty("name")
     && user.name===req.query.name )

     res.send("ok")
     console.log(filteredUsers)
   } 
   
   else{ res.send(usersDB) 
            console.log("OK")}
})



// GET 

router.get("/:idu", (req, res, next) => {
  // GET http://localhost:3001/users/12
  try{
       const usersDB = readFile("users.json")
       const user = usersDB.filter((user) => user.ID === req.params.idu)
       if(user){}
       res.send(user) //if user.length===0
     } catch(error){
                      error.httpStatusCode = 404
                      next(error) // next is sending the error to errorHandler
                   }

})

// POST

router.post("/", 
    [
       check("name")
         .isLength({min: 4}).withMessage("Name is too short!")
         .exists().withMessage("Insert a name please!")
    ],
  (req, res, next) => {
  // POST http://localhost:3001/users/
  try{
    const errors = validationResult(req)
      if(!errors.isEmpty()) {
        let err = new Error()
        err.message = errors
        httpStatusCode = 400
        next(err) // I'm sending validation errors to the middleware
      }

    const usersDB = readFile("users.json")
  const newUser = {...req.body, ID: uniqid(), createdAt: new Date() }

  usersDB.push(newUser)

  fs.writeFileSync(path.join(__dirname, "users.json"), JSON.stringify(usersDB))
  res.status(201).send(newUser)

  }
  catch(error){
    next(error)

  }
  


})

// PUT
router.put("/:idu", (req, res) => {
  const usersDB = readFile("users.json")
  const newDB = usersDB.filter((user) => user.ID !== req.params.idu)
  const modifiedUser = {...req.body, ID: req.params.idu}
  newDB.push(modifiedUser)
  fs.writeFileSync(path.join(__dirname, "users.json"), JSON.stringify(newDB))

  res.send(newDB)

})

// DELETE
router.delete("/:idu", (req, res) => {
  const usersDB = readFile("users.json")
  const newDB = usersDB.filter((user) => user.ID !== req.params.idu)
  fs.writeFileSync(path.join(__dirname, "users.json"), JSON.stringify(newDB))
  res.send(newDB)
})
module.exports = router