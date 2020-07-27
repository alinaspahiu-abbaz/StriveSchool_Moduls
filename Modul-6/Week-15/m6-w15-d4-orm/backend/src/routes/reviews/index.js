const express = require("express")
const Review = require("../../models/review")

const router = express.Router()


// 1. rev for a single book
router.get("/:asin", async(req, res) =>{
    try{
       res.send(await Review.findAll({
           where:{
               bookid: req.params.asin
           }
       }))
    }catch(e){}
})

//2. POST
router.post("/", async(req, res) => {
    try{
        res.send(await Review.create({
            ...req.body,
            bookid: req.params.asin
        }))
     }catch(e){}

})

//3. PUT
router.post("/:reviewId", async(req, res) => {
    try{
        delete req.body.bookid
        delete req.body.userid

    const result = await Review.update({ 
        ... req.body
    },
    {
        where:{
            id: req.params.reviewId
        }
    })

    if(result[0]===1)
          return res.send("OK")
    else 
         res.status(404).send("Not found")
     }catch(e){}

})

router.delete(":/reviewId", async (req, res) => {
    try{
res.send(await Review.destroy({
    where: {id: req.params.reviewId}
}))
    }catch(e){}
})

module.exports = router