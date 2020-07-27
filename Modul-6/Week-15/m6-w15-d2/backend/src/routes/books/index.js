const express = require("express")
const db = require("../../db")
const books = require("../../../books.json")

const bookRouter = express.Router()

bookRouter.post("/import", async (req, res) => {
    //retrieve previous ASINs
    const response = await db.query('SELECT asin  FROM "Books"')

    //mapping them out as a list of strings
    const asinList = response.rows.map(x => x.asin)

    let total = 0
    let skipped = 0

    books.forEach(async book => { //for each book in the books.json
        if (asinList.indexOf(book.asin) === -1){ //if the books is NOT in the list
            //ADD IT to the Database
            await db.query(`INSERT INTO "Books" (ASIN, Category, Img, Title, Price) 
                                                Values ($1, $2, $3, $4, $5)`, 
                                                [ book.asin, book.category, book.img, book.title, book.price])
            total++ //increment total
        } //if it's in the list
        else { //skip it!
            console.log(`Element ${book.asin} is already in the DB!`)
            skipped++ //increment skipped
        }
    })

    res.send({ //return the number of skipped and added
        added: total,
        skipped
    })
})

// bookRouter.post("/import", async(req, res)=>{
//     // retrive previous Asin's
//     const response = await db.query('SELECT asin FROM "Books"')

//     //mapping them ot as a list of strings
//     const asinList = response.rows.map( x => x.asin)
 
//     let total = 0
//     let skipped = 0

//     books.forEach( async book => {// for each book in the books.json
//         if(asinList.indexOf(book.asin) === -1)// if booj is not in the list
//         {
//             // add it to db
//         await db.query (`INSERT INTO "Books" (title, img, category, price, asin) VALUES( $1, $2, $3, $4, $5)`, 
//          [book.title, book.img, book.category, book.price, book.asin])
//           total++
//         } else{
//             console.log(`Element ${book.asin} is already on DB!`)
//             skipped ++
  
//         }
//     })

//     res.send({
//         added: total,
//         skipped
//     })
// })


// 1. Get all:
bookRouter.get("/", async(req, res) =>{

    const response = await db.query('SELECT asin, category, img, title, price FROM "Books"')
    res.send({
               rows: response.rows, 
               rowCount: response.rowCount
            })
})

// 2. Get by ID:
bookRouter.get("/:asin", async (req, res) =>{
    const response = await db.query('SELECT asin, category, img, title, price FROM "Books" WHERE ASIN = $1',
    [req.params.asin] )
  
    if(response.rowCount === 0)
         {   return res.status(404).send("Not found!")  }
    
    else {   res.send(response.rows[0])   }

})

// 3. POST:
bookRouter.post("/", async(req, res) => {
    const response = await db.query(`INSERT INTO "Books" (title, img, category, price, asin)
                                     VALUES( $1, $2, $3, $4, $5)
                                     RETURNING *`,
                                     //RETURNING * - i kerkon sistemit me e kthy vleren pas
                                     [req.body.title, req.body.img,
                                      req.body.category, req.body.price, req.body.asin])
console.log(response)
res.send(response.rows[0])

})

// 4. PUT:
module.exports = bookRouter

