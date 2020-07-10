const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const BookSchema = new Schema(
  {
    _id: {type: String, required: true},
    title: String,
    author: String,
    description: String,
    // year: Number,
    // genre: Array,
    // price: Number,
    authors:[{
      type: Schema.Types.ObjectId, 
      ref: "Author"
    }]
  },
  { 
    _id: false // here we say to mongoDB  do not create the id automaticly
   }
)

BookSchema.static("findBooksWithAuthors", async function(){
  const booksList = await BookSchema.find(req.query).populate("authors")
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

module.exports = mongoose.model("Book", BookSchema)