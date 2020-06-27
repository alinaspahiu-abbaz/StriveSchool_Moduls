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



// GET all

router.get("/:idu", (req, res) => {
  // GET http://localhost:3001/users/12
  
})
module.exports = router