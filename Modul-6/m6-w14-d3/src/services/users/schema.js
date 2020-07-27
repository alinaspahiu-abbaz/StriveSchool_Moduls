const { Schema, model } = require("mongoose")
const theValidator = require("validator")

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
    validate(value){
      if(value<0){
        throw new Error("Age should not be a negative number!")
      }
    },
  },
  email: {
    type: String,  // this is validation
    required: true, // this is validation
    lowercase: true, //this is sanitization
    validate:{
         validator: async(value) =>{
           if(!theValidator.isEmail(value)){
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

const userModel = model("user", userSchema)
module.exports = userModel