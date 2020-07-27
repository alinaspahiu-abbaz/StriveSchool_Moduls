const Sequelize = require("sequelize")
const orm = require("../../db")
const {NUMBER, STRING} = require("sequelize")



const Review = orm.define("reviews", {
    id: {
        type: Number,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: Number,
        allowNull: false
    },
    bookid: {
        type: String,
        allowNull: false
    },
    comment: {
        type: STRING,
        allowNull: false
    },
    rate: {
        type: NUMBER,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Review
