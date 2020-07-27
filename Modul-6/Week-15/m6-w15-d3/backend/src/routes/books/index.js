const express = require("express")
const db = require("../../db")


const bookRouter = express.Router()

// 1. GET all Books:
//--------------------
// bookRouter.get("/", async(req, res) =>{

//     const response = await db.query('SELECT * FROM "Books"')
//     res.send({
//         rows: response.rows, 
//         rowCount: response.rowCount
//     })
// })
//----------------------
bookRouter.get("/", async(req, res) =>{
    //localhost:3023/books/?order=desc

    // 1. Order by: asc or desc
    const order = req.query.order || "asc"
    // 2. Offset
    const offset = req.query.offset || 0
    //localhost:3023/books/?order=desc &category=Education&limit=2&offset=3
   // 3. Limit
    const limit = req.query.limit || 6
    //localhost:3023/books/?order=desc &category=Education&limit=2

     // Removing them from Query since otherwise I'll automaticlly filter on them
     delete req.query.order
     delete req.query.offset
     delete req.query.limit


    let query = 'SELECT * FROM "Books"'// create my Query

    const params = []
    for (queryParam in req.query) { //for each value in query string, I'll filter
        params.push(req.query[queryParam])

        if (params.length === 1) // for the first, I'll add the where clause
            query += `WHERE ${queryParam} = $${params.length} `
        else // the all the rest, it'll start with AND
            query += ` AND ${queryParam} = $${params.length} `
    }

        query += " ORDER BY title " + order // adding the sorting
        query += ` LIMIT $${params.length+1} OFFSET $${params.length+2}`// adding the pagination
        params.push(limit)
        params.push(offset)
        console.log(query)


    const response = await db.query(query, params)
    res.send({
        rowCount: response.rowCount,
        rows: response.rows
       
    })
})

// 2. GET Books by ID:
bookRouter.get("/:asin", async(req, res)=>{
    const response = await db.query(' Select * FROM "Books" WHERE asin = $1', [req.params.asin] )

    if(response.rowCount === 0)
       { 
        return res.status(404).send("Not Found!")
      } else { 
          res.send(response.rows[0])
      }
})

// 3. POST Students:
bookRouter.post("/", async(req, res) => {
    const response = await db.query(`INSERT INTO "Books" (asin, title, img, category, price) VALUES($1, $2, $3, $4, $5) RETURNING *`, [req.body.asin, req.body.title, req.body.img, req.body.category, req.body.price])

    console.log(response.rows[0])
    res.send(response.rows[0])
})

// 4. PUT Students:
bookRouter.put("/:asin", async(req, res) => {
    try{
         let params = []
         let query = 'UPDATE "Books" SET '
         for(bodyParamName in req.body){

            query += // for each element in the body I'll add something like parameterName = $Position
            (params.length > 0 ? ", ": '') +// I'll add a coma before the parameterName for every parameter, but the first
            bodyParamName + " = $" + (params.length + 1)// += Category = $1
          //
          params.push(req.body[bodyParamName])// save the current body parameter intro the params array
       }
       params.push(req.params.asin)// push the asin into the aray
       query +=" WHERE asin = $" +(params.length) + " RETURNING *"// adding filtering for ASIN + returning
       console.log(query)

       const result = await db.query(query, params)// querying the DB for updating the row
    
        if(result.rowCount === 0)
        return res.status(404).send("Not Found!")
        
            console.log(result.rows[0]) 
            res.send(result.rows[0])
    } catch(ex){
        console.log(ex)
        res.status(500).send(ex)
    }
})

// 5. DELETE
bookRouter.delete("/:asin", async (req, res) => {
    const response = await db.query(`DELETE FROM "Books" WHERE asin = $1`, [ req.params.asin ])

    if (response.rowCount === 0)
        return res.status(404).send("Not Found")
    
    res.send("OK")
})


module.exports = bookRouter
