const { Schema, model } = require("mongoose")
const mongoose = require("mongoose")

const BookSchema = new Schema(
  {
    _id: {type: String, required: true},
    title: String,
    price: Number,
    description: String,
    // year: Number,
    // genre: Array,
    // price: Number,
    authors:[{
      type: Schema.Types.ObjectId, 
      ref: "Authors"
    }]
  },
   { 
    _id: false // here we say to mongoDB  do not create the id automaticly
    }
)

// BookSchema.static("findBooksWithAuthors", async function(query){
  
//   const booksList = await BookSchema.find(query).populate("authors")
//   return booksList
 
// })

BookSchema.static("findBooksWithAuthors", async function(query){
  const booksList = await BookSchema.find(query).populate("authors")
  return booksList
})

BookSchema.post("save", function(error, doc, next){
  if(error.name === "MonggoError" && error.code === 11000){
    const err = new Error("duplicate ker error")

    err.httpStatus = 400
    next(err)  
  } else {
    next()
  }
})

module.exports = model("Book", BookSchema)