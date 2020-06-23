/*

1. get all users's data on url: localhost:3001/users/ Get
2. get single users's data on url: localhost:3001/users/:id GET
3. create single user record on url: localhost:3001/users/POST
4. modify single user's data on url: localhost:3001/users/:id PUT
5. delete single user's data on url: localhost:3001/users/:id DELETE
*/

const express = require("express")//hired party module
const fs = require('fs')// core module dedicated to file system interactions
const path = require("path") //core module

const router = express.Router()
// Route number 1.: the one who gets users data
router.get("/", (request, response)=>{ //(request, response) => is the handler for this specific route

    // a) retrive users list from a file on disk(bc we dont have a reale database yet.)

   // const fileContent = fs.readFileSync()
   // console.log(__dirname + '\\users.json')// avoid
   // console.log(path.join(__dirname, 'users.json')) // use path.join
    const usersFilePath = path.join(__dirname, 'users.json') //we composed the path on disk
    const fileContentAsABuffer = fs.readFileSync(usersFilePath)// please read the file (we are getting a Buffer back) 
    //console.log(fileContentAsABuffer.toString())
    const fileContent = fileContentAsABuffer.toString()// we need to translate the buffer into something human readable

    // b) send the list as a json in the response
    response.send(JSON.parse(fileContent))
    
});


//Route number 2.
router.get("/:id", (request, response)=>{ })


//Route number 3.
router.post("/", (request, response)=>{ })


//Route number 4.
router.put('/:id', (request, response)=>{ })


//Route number 5.
router.delete('/:id', (request, response)=>{ })



module.exports = router