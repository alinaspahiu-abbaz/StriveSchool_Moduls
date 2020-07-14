const express = require("express")

const UserSchema = require("./schema")

const usersRouter = express.Router()


// 1. GET all:

usersRouter.get("/", async (req, res, next) => {
  try{
      const usersList = await UserSchema.find(req.query, {email:1, name:2})
      // (name:"Alina") // ({})
      res.send(usersList)
      //http://localhost:3022/users?name=Alina
      //http://localhost:3022/users?age=26
      // mongoDB: {"age": {$gt:26}}
  } catch(error){
    next(error)
  }
  
})



// 2. GET one:
usersRouter.get("/:id", async (req, res, next) => {
  try{
     const user =   await UserSchema.findById(req.params.id)
     if(user){res.send(user)}
     else {
       const error = new Error()
       error.httpStatusCode = 404
       next(error)
     }
     console.log(user)
     
     // if we type an id that doesnt exists we get an error : "Cast to ObjectId failed for value "5f04d25ca5688104a848d0d823" at path "_id" for model "user""
  } catch(error){
    next(error)
  }

})



// 3. POST:
usersRouter.post("/", async (req, res, next) => {
  try{

    const newUser = new UserSchema(req.body)
    const response = await newUser.save()
    res.send(response)

  } catch(error){
    next(error)

  }
  
})



// 4. PUT:
usersRouter.put("/:id", async (req, res, next) => {
  try{
    const user =    await UserSchema.findByIdAndUpdate(req.params.id, req.body)
    console.log(user)
    res.send(user)
  }catch(error){
    next(error)

  }

})



// 5. DELETE:
usersRouter.delete("/:id", async (req, res, next) => {
  try{
    const user = await UserSchema.findByIdAndDelete(req.params.id)
    console.log("Deleted!")
    res.send("Deleted!")
  } catch(error){
    next(error)
  }
  
})

module.exports = usersRouter