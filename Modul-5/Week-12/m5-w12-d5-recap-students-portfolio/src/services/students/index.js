const express = require ("express")
const path = require("path")
const readFile = require('../utilities')
const fs = require("fs-extra")
const uniqid = require("uniqid")
const { response } = require("express")


const studentsRouter = express.Router()

const studentsFilePath = path.join(__dirname, "students.json")

// -- CRUD for Students: --


studentsRouter.get("/", (req, res) => {
    //console.log(req)
    console.log(studentsFilePath)
 
    const arrayOfStudents = readFile(studentsFilePath)

    if(arrayOfStudents.length > 0) {
        res.send(arrayOfStudents)
    }else {res.status(404).send("not found") }
     
})



// 2. Get single Student

studentsRouter.get("/:sid", (req, res) => {
    console.log("Student id: ", req.params.sid)
    const arrayOfStudents = readFile(studentsFilePath)
   const studentFound = arrayOfStudents.find(student => student.id === req.params.sid)
   // find return just one, filter returns an array
    console.log("Student found: ", studentFound)
    if(!studentFound) { res.status(404).send(`student wth id: ${req.params.sid} not found`)}
  //  console.log(req.params)
    res.send("This is the get Single route")
})





studentsRouter.post("/", (req, res) => {
    const newStudent = {
        ...req.body, 
        id: uniqid(), 
        createdAt: new Date(),
        numberOfProjects: 0, 
    }

    console.log(newStudent)

    const arrayOfStudents = readFile(studentsFilePath)
    arrayOfStudents.push(newStudent)

    fs.writeFileSync(studentsFilePath, JSON.stringify(arrayOfStudents))
    res.status(201).send(newStudent)
})











studentsRouter.put("/", (req, res) => {
    
    res.send("This is the Edit post")
})





// 4. DELETE

studentsRouter.delete("/", (req, res) => {
    const arrayOfStudents = readFile(studentsFilePath)

    const everyoneButNotId = arrayOfStudents.filter(student =>student.id !== req.params.id)
    if(arrayOfStudents.length === everyoneButNotId.length)
    return res.status(404).send("Not found")

    fs.writeFileSync(studentsFilePath, JSON.stringify(everyoneButNotId))
    res.status(201).send("DELETED")
    
  //  res.send("Ok")
})




///---------------------
// Upload Files for Students

//studentsRouter.post()




//----------------
// Check Email:

// studentsRouter.get()




module.exports = studentsRouter