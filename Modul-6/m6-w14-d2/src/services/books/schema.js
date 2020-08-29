const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const BookSchema = new Schema(
  {
    _id:  {type: String, required: true},
    title:       String,
    author:      String,
    description: String,
    year:        Number,
    genre:       Array,
    price:       Number,
  },
  { 
    _id: false // here we say to mongoDB  do not create the id automaticly
   }
)

module.exports = mongoose.model("Book", BookSchema)