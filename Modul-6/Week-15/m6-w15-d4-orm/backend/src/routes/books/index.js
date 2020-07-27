const express = require("express")
const Book = require("../../models/book")
const {Op, QueryTypes, Sequelize} = require("sequelize")
const sequelize = require("../../db")
const Review = require("../../models/review")

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const limit = req.query.limit || 10
        const offset = req.query.offset || 0
        const order = req.query.order || "asc"
      ///localhost:3356/books?limit=3&order=desc

        delete req.query.limit
        delete req.query.offset
        delete req.query.order

        const books = await Book.findAll({
            where: {
                ...req.query
            },
            offset: offset,
            limit: limit,
            order: [
                ["title", order]// vetem nese e japim titullin e plote
            ],
            include: Review
        })
        res.send(books)
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.get("/search/", async(req, res)=>{
    try{
        const result = await Book.findAll({

        })
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})


router.get("/:asin", async (req, res) => {
    try {
        const book = await Book.findOne({
            where: {
                asin: req.params.asin
            },
            include: Review
        })

        if (book)
            res.send(book)
        else
            res.status(404).send("Not found")

    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.post("/", async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.send(book)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.put("/:asin", async (req, res) => {
    try {
        const book = await Book.update({
            ...req.body
        }, {
            where: { asin: req.params.asin }
        })

        if (book[0] === 1)
            res.send("OK")
        else
            res.status(404).send("Not found")

    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.delete("/:asin", async (req, res) => {
    try {
        const result = await Book.destroy({
            where: {
                asin: req.params.asin
            }
        })

        if (result === 1)
            res.send("DELETED")
        else
            res.status(404).send("Not Found")

    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = router;