/*

1. get all users's data on url: localhost:3001/users/ Get
2. get single users's data on url: localhost:3001/users/:id GET
3. create single user record on url: localhost:3001/users/POST
4. modify single user's data on url: localhost:3001/users/:id PUT
5. delete single user's data on url: localhost:3001/users/:id DELETE
*/

const express = require("express")//hired party module
const fs = require('fs')// core module dedicated to file system interactions
const uniqid = require('uniqid')
const path = require("path") //core module

const router = express.Router()
// Route number 1.: the one who gets users data

const usersFilePath = path.join(__dirname, 'users.json')

router.get("/", (request, response)=>{ //(request, response) => is the handler for this specific route

    // a) retrive users list from a file on disk(bc we dont have a reale database yet.)

   // const fileContent = fs.readFileSync()
   // console.log(__dirname + '\\users.json')// avoid
   // console.log(path.join(__dirname, 'users.json')) // use path.join
    //const usersFilePath = path.join(__dirname, 'users.json') //we composed the path on disk
    const fileContentAsABuffer = fs.readFileSync(usersFilePath)// please read the file (we are getting a Buffer back) 
    //console.log(fileContentAsABuffer.toString())
    const fileContent = fileContentAsABuffer.toString()// we need to translate the buffer into something human readable

    // b) send the list as a json in the response
    response.send(JSON.parse(fileContent))
    
});


//Route number 2.
// retrive onluy single user data from a file on dissk and send it back

router.get("/:id", (request, response)=>{ 

      // a. read the file on disk and get back an array of users
    
    const fileContentAsABufer = fs.readFileSync(usersFilePath)
    const usersArray = JSON.parse(fileContentAsABufer.toString())
    console.log(usersArray)

      // b. filter out the array to retrive the specified user(we're gonna be using id to retrive the unique user)
    
    console.log("ID: ", request.params.id)
    const user = usersArray.filter((user)=> user.id=== parseInt(request.params.id))
    console.log(user)

      // c. send the user back into the response
      response.send(user)
 })


//Route number 3.
router.post("/", (request, response)=>{ 
    console.log(request.body)
    const newUser = {...request.body, id: uniqid()}

    //a. read the content of the file and get back an array
    const fileContentAsABufer = fs.readFileSync(usersFilePath)
    const usersArray = JSON.parse(fileContentAsABufer.toString())

    // b. adding the new element(in this case user) to the array
    const newId = uniqid()
    usersArray.push(newUser)
  //  console.log(usersArray)
    // c. writing the new content into the same file
    fs.writeFileSync(usersFilePath), JSON.stringify(usersArray)

    // d. respondeing with the status 201 which means "created"
    response.send(newUser)


})


//Route number 4.
router.put('/:id', (request, response)=>{ })


//Route number 5.
router.delete('/:id', (request, response)=>{ })



module.exports = router