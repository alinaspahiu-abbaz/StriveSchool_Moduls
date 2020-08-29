const express = require("express")

const BookSchema = require("./schema")

const booksRouter = express.Router()

// Get all books:  //
booksRouter.get("/", async (req, res, next) => {
  try {
      const books = await BookSchema.find(req.query)
      res.send(books)
   } catch (error) {
       next(error)
   }
})


// Get only one book:  //
booksRouter.get("/:asin", async (req, res, next) => {
  try {
        const book = await BookSchema.findOne({_id: req.params.asin})
     if (book) {
        res.send(book)
     }else {
        const error = new Error()
        error.httpStatusCode = 404
        next(error)
     }
  }catch (error) {
      console.log(error)
      next("While reading books list a problem occurred!")
  }
})


// POST a new book:  //
booksRouter.post("/", async (req, res, next) => {
  try {
    const newbook = new BookSchema(req.body)
    //const { _id } = await newbook.save()
    const response = await newbook.save()
    res.status(201).send(response)
  } catch (error) {
    next(error)
  }
})


// PUT - Update a specific book:  //
booksRouter.put("/:asin", async (req, res, next) => {
  try {
    // const book = await BookSchema.findByIdAndUpdate(req.params.id, req.body)
    const book = await BookSchema.findOneAndUpdate({_id: req.params.asin}, req.body)
    console.log(book)
    if (book) {
      res.send("Ok")
    } else {
      const error = new Error(`book with id ${req.params.id} not found`)
      error.httpStatusCode = 404
      next(error)
    }
  } catch (error) {
    next(error)
  }
})


// DELETE a specific book:  //
booksRouter.delete("/:asin", async (req, res, next) => {
  try{
    await BookSchema.findOneAndDelete({_id: req.params.asin})
     res.send("Deleted!")
  }catch(error) {
    next(error)
  }
})

module.exports = booksRouter