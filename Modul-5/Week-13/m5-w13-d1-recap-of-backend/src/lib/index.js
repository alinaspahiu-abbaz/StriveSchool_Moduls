
const path = require("path")
const {readDB, writeDB} = require ('./utilities')

const productsPath = path.join(__dirname, "../data/products.json")
const reviewsPath = path.join(__dirname, "../data/reviews.json")

module.exports={
    getProducts: async() =>readDB(productsPath),
    writeProducts: async (data) => writeDB(productsPath, data),
    getReviews: async() => readDB(reviewsPath), 
    writeReviews: async (data) => writeDB(reviewsPath, data)
}