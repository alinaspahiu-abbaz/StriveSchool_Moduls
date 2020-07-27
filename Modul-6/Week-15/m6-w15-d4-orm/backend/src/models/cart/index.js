const orm = require("../../db")
const Sequelize = require("sequelize")

const Cart =  orm.define("shoppingcart", {
    id:{
        type: Sequelize.Number,
        primaryKey: true,
        autoIncrement: true
    
    }
})
