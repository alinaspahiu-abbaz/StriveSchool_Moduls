const { Schema, model } = require("mongoose")

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,  // this is validation
    required: true, // this is validation
    lowercase: true //this is sanitization
  },
  professions: Array,
})

module.exports = model("user", userSchema)