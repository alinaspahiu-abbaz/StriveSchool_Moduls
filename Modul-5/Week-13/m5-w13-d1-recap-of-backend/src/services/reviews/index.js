const express = require("express")
const {check, validationResult, santizieBody} = require ("express-validator")

const reviewRouter = express.Router()

// GET
reviewRouter.get("/", (req, res, next) => {})
reviewRouter.get("/:productId", (req, res, next) => {})
reviewRouter.post("/", (req, res, next) => {})
reviewRouter.put("/:productId", (req, res, next) => {})
reviewRouter.delete("/", (req, res, next) => {})

module.exports = reviewRouter