const fs = require('fs-extra')

const readFile = (filePath) => {
    const buffer = fs.readFileSync(filePath)//getting content of the file specifing a path on disk
    const bufferToString = buffer.toString()//konverting the buffer into String

    return JSON.parse(bufferToString)
}

module.exports = readFile