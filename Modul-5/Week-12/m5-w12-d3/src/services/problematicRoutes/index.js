const express = require("express")
const { route } = require("../users")

const router = express.Router()

router.get("/houston", (req, res) => {
  throw new Error("Houston we have a problem!")
})

router.get("/notExistant", (req, res, next) => {

  let err = new Error("I cannot find it!")
  err.httpStatusCode = 404
  next(err) //pass the err as a parameter
})

router.get("/forbiddenRoute", (req, res, next) => {

  let err = new Error("Forbidden!")
  err.httpStatusCode = 403
  next(err) //pass the err as a parameter
})

router.get("/anotherProblem", (req, res, next) => {

  let err = new Error("ERROOOOORRRR!!")
  
  next(err) //pass the err as a parameter
})

module.exports = router