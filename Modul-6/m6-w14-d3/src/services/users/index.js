const express = require("express")

const UserSchema= require("./schema")
const q2m = require("query-to-mongo")

const usersRouter = express.Router()


// 1. GET all users with queries: //http://localhost:3022/users
        //a Query example: http://localhost:3022/users?name=Alina&limit=3&sort=-age&offset=4&fields=name&surname=Spahiu
        // rezults: 
        // criteria: { name: 'Alina', surname: 'Spahiu' },
        // options: { fields: {name:1}, sort: {age: -1},skip: 4, limit:3 }    
        // links: [Function: links]
usersRouter.get("/", async (req, res, next) => {
 const parsedQuery = q2m(req.query)
 console.log(parsedQuery)
  try{
      const usersList = await UserSchema.find( 
        parsedQuery.criteria,
        parsedQuery.options.fields
      )
      .sort(parsedQuery.options.sort)
      .skip(parsedQuery.options.skip)
      .limit(parsedQuery.options.limit)
      
      res.status(200).send(usersList)
   } catch(error){
       next(error)
   }
})



// 2.GET only one user: //http://localhost:3022/users/5f0582f4190cd50454c37533
usersRouter.get("/:id", async (req, res, next) => {
  try{
        const user =   await UserSchema.findById(req.params.id)
    if(user)
        {res.send(user)}
    else{
         const error = new Error()
         error.httpStatusCode = 404
         next(error)
       }
        console.log(user)
  }catch(error){
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
     const user =  await UserSchema.findByIdAndUpdate(req.params.id, req.body)
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