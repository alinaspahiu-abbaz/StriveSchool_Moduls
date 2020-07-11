const express = require("express")
const multer = require("multer")
const fs = require('fs-extra')
const {join} = require("path")
const { writeFile, createReadStream } = require("fs-extra")

const router = express.Router()

const upload = multer({})

const studentsFolderPath = join(__dirname, "../../public/img/students")

//1. upload one file
//http://localhost:4002/files/upload
router.post('/upload', upload.single("avatar"), async(req, res, next) => {
    //req.files<-- here is where we're gonna find the file
    //console.log("console",req.file.buffer)
    //console.log(studentsFolderPath)
    try{
        await fs.writeFile(join(studentsFolderPath, req.file.originalname), req.file.buffer )

    }catch(error) {
        console.log(error)
    }
    res.send("ok")

})

//2. upload multiple files
router.post(
    '/uploadMultiple', 
    upload.array("multipleAvatar"), 
    async (req, res, next) => {
        try{
            const arrayOfPromises = req.files.map( (file) => 
            writeFile(join(studentsFolderPath, file.originalname), file.buffer))
        
            await Promise.all(arrayOfPromises)
            res.send("OK")
            }catch(error){
                console.log(error)
            }
   
    
})

// 3. Download
router.get('/:name/download', (req, res, next) => {
    // file as a stream is our source --> response (destination)
    const source = createReadStream(join(studentsFolderPath), `${req.params.name}`)
    
    res.setHeader("Content-Disposition", `attachment: filename=${req.params.name}`)
    source.pipe(res)

    source.on("error", (error) => {
        next(error)
      })
    
})

module.exports = router