const express = require("express")
const {check, validationResult, sanitizeBody} = require("express-validator")
const uniqid = require("uniqid")
const { getProducts , writeProducts} = require("../../lib")


const productsRouter = express.Router()

// 1. GET all
productsRouter.get("/", async(req, res, next) => {
    //every error that happens inside this route handler will be sent to error handler middleware

    try{
        const products = await getProducts()
        res.send(products)
    } catch(error){
        console.log(error)
        const err = new Error ("Generic error happend")
        next(err)

    }
})


// Get only one
productsRouter.get("/:productId", async(req, res, next) => {
    try{
        const products = await getProducts()
        const product = products.find( prod => prod._id === req.params.productId)

        if(product) {//if product is found
            res.send(product)

        }else { 
            const err = new Error()
            err.httpStatusCode = 404
            next(err)

        }
    } catch(error){
        console.log(error)
        const err = new Error ("Generic error happend")
        next(err)

    }
})



// POST
productsRouter.post("/", 
[
  check("name")
   .isLength({min: 3}).withMessage("More than 3 chars!") 
], 
async(req, res, next) => {
    const validationErrors = validationResult(req)
    
    if(!validationErrors.isEmpty()){
     const error = new Error()
     error.httpStatusCode = 400
     error.message = validationErrors
     next(error)
    }
     else {
        try {
         const newProduct = { 
             ...req.body,
              createdAt: new Date(), 
              updateAt: new Date(), 
              _id: uniqid()
            }
            
     
     
     const products = await getProducts()
         products.push(newProduct)
         await writeProducts(products)
         res.send(newProduct)
    }
    catch(error){
        console.log(error)
        const err = new Error ("Generic error happend")
        next(err)
    }
}
})



// PUT
productsRouter.put("/:productId", async(req, res, next) => {
    try{
        const products = await getProducts()

        const productFound = products.find( (prod) => prod._id === req.params.productId)

        if(productFound){
            const position = products.indexOf(productFound)
            const body = req.body
            delete body.createdAt
            delete body._id
            delete body.updateAt

            const updateProduct = {...productFound, ... req.body}
            products[position] = updateProduct
            await writeProducts(products)
            res.send(updateProduct)
        } else {
            const err = new Error ()
                err.httpStatusCode = 404
                next(err)
        }
    }
        catch (error){
            console.log(error)
            const err = new Error("Generic")
            next(err)
        }
})
productsRouter.delete("/:productId", async (req, res, next) => {
    try{
        const products = await getProducts()
        const productFound = products.find((prod) => prod._id === req.params.productId)

        if(!productFound) {
            const error = new Error("Product not found!")
            error.httpStatusCode = 404
            next(error)
            
        } else {
            const filteredProducts = products.filter(prod => prod._id !== req.params.productId)
            await writeProducts(filteredProducts)
            res.send("Deleted")
            

        }

    }catch(error){
        console.log(error)
        
        next(err)
    }
})

module.exports = productsRouter