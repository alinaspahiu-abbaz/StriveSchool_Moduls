const {Schema, model} = require("mongoose")

const authorSchema = new Schema({
    firstName:String,
    lastName:String, 
    age:Number
})

module.exports = model("Authors", authorSchema)