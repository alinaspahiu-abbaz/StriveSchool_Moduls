const express = require("express")

const UserSchema = require("./schema")

const usersRouter = express.Router()


// 1. GET all  //users:http://localhost:3023/users
               //http://localhost:3022/users?name=Alina&surname=Spahiu
               //http://localhost:3022/users?age=26
               // mongoDB: {"age": {$gt:26}}
usersRouter.get("/", async(req, res, next) => {
  try{
        const usersList = await UserSchema.find(req.query,   ['-professions'])
                   // req.query ==> e mundeson me bo querit ne URL,
                   // '-professions' - Merr gjithcka pervec professions,
                   // 'name' merr vetem emrin.
        res.status(200).send(usersList)     
     } catch(error){  
         next(error)  
        } 
})


// 2. GET only one user:  //http://localhost:3023/users/5f04d2a0a5688104a848d0da
usersRouter.get("/:id", async(req, res, next) => {
  try{
        const user =   await UserSchema.findById(req.params.id)
     if(user)
        {res.send(user)}
     else {
            const error = new Error()
            error.httpStatusCode = 404
            next(error)
          }
     console.log(user)
     // if we type an id that doesnt exists we get an error : "Cast to ObjectId failed for value "5f04d25ca5688104a848d0d823" at path "_id" for model "user""
  } catch(error){  next(error)  }
})


// 3. POST a new User:  //http://localhost:3023/users
usersRouter.post("/", async(req, res, next) => {
  try{
       const newUser = new UserSchema(req.body)
       const response = await newUser.save()// saves the document(newUser) inside the database
       res.send(response)  
     } catch(error){  next(error)  } 
})


// 4. PUT - update a specific user:  //http://localhost:3023/users/5f04d2a0a5688104a848d0da
usersRouter.put("/:id", async(req, res, next) => {
  try{
    const user = await UserSchema.findByIdAndUpdate(req.params.id, req.body)
            //req.body - What we need to modify from that user?! - So we are taking everything from the request body.
            // it modifes all the fields, or as many you want, one, two etc...    
    console.log(user)
    res.send(user)
  }catch(error){
     next(error)
   }
})


// 5. DELETE a specific user:  //http://localhost:3023/users/5f04d2a0a5688104a848d0da
usersRouter.delete("/:id", async(req, res, next) => {
  try{
       const user = await UserSchema.findByIdAndDelete(req.params.id);
       console.log(user);
       res.send("Deleted!");
    } catch(error){
        next(error);
      } 
})


module.exports = usersRouter;