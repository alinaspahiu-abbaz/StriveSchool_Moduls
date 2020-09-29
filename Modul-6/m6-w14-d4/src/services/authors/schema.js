const mongoose = require("mongoose")

const authorSchema = mongoose.Schema({
    firstName:String,
    lastName:String, 
    age:Number,
    books:{type: mongoose.Schema.Types.ObjectId, ref:"Book", required: true}
})

module.exports = mongoose.model("Authors", authorSchema)