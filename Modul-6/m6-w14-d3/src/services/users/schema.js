const { Schema, model } = require("mongoose")
const v = require("validator")

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    //creating my own validator
    validate(value){
      if(value<0){
        throw new Error("Age should not be a negative number!")
      } else if(value < 15){
        throw new Error("You are to young to be a programmer. Finish your high school first!")
      }
    },
  },
  email: {
    type: String,  // this is validation
    required: true, // this is validation
    lowercase: true, //this is sanitization
    validate:{
         validator: async(value) =>{
           if(!v.isEmail(value)){
             throw new Error("Email not valid!")
           } else {
             // read in the db if the email is in use
             const checkEmail = await userModel.findOne({email:value})
             if(checkEmail){
               throw new Error("email already in use!")
             }
           }
         }
    },
  },
  professions: Array,
})

userSchema.post("validate", function(error, doc, next){
  if(error){
    console.log(error)
    error.httpStatusCode = 400
    next(error)
  } else {
    next()
  }
})

userSchema.post("update", function(error, res, next){
  if(error){
    console.log(error)
    error.httpStatusCode = 400
    next(error)
  } else {
    next()
  }
})
//userModel is a connection with users collection, and we use it here to perform a find, for example to validate if an email already exists.
const userModel = model("User", userSchema)
module.exports = userModel