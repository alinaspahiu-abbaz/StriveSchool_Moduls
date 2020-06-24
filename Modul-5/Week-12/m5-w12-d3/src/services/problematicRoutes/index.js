const express = require("express")
const { route } = require("../users")

const router = express.Router()

router.get("/houston", (req, res) => {
  throw new Error("Houston we have a problem!")
})
router.get("/nonExistant", (req, res, next) => {
  
  let err = new Error("I cannot find it!")
  err.httpStatusCode = 404
  next(err)

})

router.get("/forbiddenRoute", (req, res, next) => {
  
  let err = new Error("Forbidden!")
  err.httpStatusCode = 403
  next(err)

})

router.get("/anotherProblem", (req, res, next) => {
  
  let err = new Error("Erroooorrrrrr!!!")
  next(err)

})
module.exports = router