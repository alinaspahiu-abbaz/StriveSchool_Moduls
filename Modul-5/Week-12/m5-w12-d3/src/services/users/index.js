const express = require("express")
const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")

const router = express.Router()

const readFile = (fileName) => {
  const buffer = fs.readFileSync(path.join(__dirname, fileName))
  const fileContent = buffer.toString()
  return JSON.parse(fileContent)
}

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
            console.log(usersDB)}
})



// GET 

router.get("/:idu", (req, res) => {
  // GET http://localhost:3001/users/12
  
  const usersDB = readFile("users.json")
  const retrivedUser = usersDB.filter((user) => user.ID === req.params.idu)
  res.send(retrivedUser)

})

// POST

router.post("/", (req, res) => {
  // POST http://localhost:3001/users/
  
  const usersDB = readFile("users.json")
  const newUser = {...req.body, ID: uniqid(), createdAt: new Date() }

  usersDB.push(newUser)

  fs.writeFileSync(path.join(__dirname, "users.json"), JSON.stringify(usersDB))
  res.status(201).send(newUser)

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