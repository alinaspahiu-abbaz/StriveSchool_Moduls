const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const BookSchema = new Schema(
  {
    _id: String,
    title: String,
    author: String,
    description: String,
    year: Number,
    genre: Array,
    price: Number,
  },
  { 
    _id: false // here we say to mongoDB  do not create the id automaticly
   }
)

BookSchema.post("save", function(error, doc, next){
  if(error.name === "MonggoError" && error.code === 11000){
    const err = new Error("duplicate key error")
    err.httpStatus = 400
    next(err)  
  } else {
    next(error)
  }
})

module.exports = mongoose.model("Book", BookSchema)