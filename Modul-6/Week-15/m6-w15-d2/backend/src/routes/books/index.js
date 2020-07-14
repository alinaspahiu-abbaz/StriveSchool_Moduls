const express = require("Express")
const db = require("../../db")

const router = express.Router()

router.get("/", async(req, res) =>{

    const response = await db.query('SELECT asin, category, img, title, price FROM "Books"')
    res.send({
        rows: response.rows, 
        rowCount: response.rowCount
    })
})

module.exports = router

