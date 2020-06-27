const express = require("express")
const { route } = require("../users")

const router = express.Router()

router.get("/houston", (req, res) => {
  throw new Error("Houston we have a problem!")
})

module.exports = router