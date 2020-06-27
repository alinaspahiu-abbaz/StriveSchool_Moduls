 const express = require ("express")
 const path = require("path")
 const readFile = require ("../utilities")
 const uniqid = require("uniqid")
 const fs = require("fs-extra")
const { request } = require("http")
const { response } = require("express")


const studentsFilePath = path.join(__dirname, "students.json")
const studentsRouter = express.Router()
const arrayOfStudents = readFile(studentsFilePath)


//1. Get all of data:
//--------------------
studentsRouter.get("/", (request, response) =>{
    
try{
      
        if(arrayOfStudents.length > 0) 
        {
           response.send(arrayOfStudents)
           console.log(arrayOfStudents)
        } else { 
                 response.status(404).send("There are no students here!")
                 console.log("There are no students here!")
                }
  } catch(error){   
                  response.status(505).send("This file does not exists"), 
                  console.log("This file does not exists!") 
                }
}) 


// 2. GET just one student

studentsRouter.get("/:sid", (request, response) => {
    
    console.log(request.params.id)

    const studentFound = arrayOfStudents.find((student) => student.id === request.params.sid)
   if(studentFound) {
    response.status(200).send("OK")
    console.log(`the student with id: ${request.params.sid} is: `,studentFound)
   } else if (!studentFound) {
    response.status(404).send("Student not found")
    console.log(`the student with id: ${request.params.sid} does not exists! `)

   } else {
    response.status(500).send("General Error")
    console.log(`General Error `)
   }
    
})


// 3. POST

studentsRouter.post("/", (request, response) => {
    const newStudent = {
        ...request.body,
        id:uniqid(),
        createdAt: new Date(),
        numberOfProjects: 0,

    }
    console.log(newStudent)

    arrayOfStudents.push(newStudent)

    fs.writeFileSync(studentsFilePath, JSON.stringify(arrayOfStudents))
    response.send("This is the post")
})



// PUT

studentsRouter.put("/:ids", (request, response) =>{
    delete request.body.ids
    delete request.body.numberOfProjects
    delete request.body.createdAt

    
    const studentIndex = arrayOfStudents
                        .map( x => x.id) //Mapping only the ID
                        .indexOf(request.params.ids) //to find the postion in the array
                        console.log("The students indeX: ", studentIndex)

    if(studentIndex === -1)
    return response.status(404).send("Not found")

    arrayOfStudents[studentIndex] = {
        ...arrayOfStudents[studentIndex],
        ...request.body
    }

    fs.writeFileSync(studentsFilePath, JSON.stringify(arrayOfStudents))
    response.status(201).send(arrayOfStudents[studentIndex])
})

// 4. DELETE

studentsRouter.delete("/:ids", (request, response) => {
    // [1, 2, 3, 4, 5]
    // I have to delete ID=3
    //I keep all the elements that have an ID!==3

    const everyoneButNotThatID = arrayOfStudents.filter(student => student.id !== request.params.ids )

    if(arrayOfStudents.length === everyoneButNotThatID.length)
    return response.status(404).send("Not found!")

    fs.writeFileSync(studentsFilePath, JSON.stringify(everyoneButNotThatID))

    response.status(201).send("Ok")
})




module.exports = studentsRouter