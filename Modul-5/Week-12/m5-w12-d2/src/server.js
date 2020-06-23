//the entred point. this is gonna be executed first
const express = require("express")

const server = express()

server.listen(3001, () => {
    console.log('serverrrr is running on port 3001!')
})