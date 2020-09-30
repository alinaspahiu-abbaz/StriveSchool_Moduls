const jwt = require('jsonwebtoken');

const authenticate = async(user) => {
    try{
        const newToken = await generateJWT({_id: user._id})
        return newToken
        
    }catch(error){
        throw new Error("Problem with authentication!")
    }
    
}

// a function that generates a token:
const generateJWT = (payload) => {
    new Promise((res, rej) =>{
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 500}, (err, token) =>{
            if(err) rej(err)
            res(token)
        })
    })
}

// a function that verifies the genereted token:
const verifyJWT = (token) => new Promise((res, rej) =>{
    jwt.verify(token, process.env.JWT_SECRET, (err, verified) =>{
        if(err) rej(err)
        res(verified)
    })
})


module.exports = {authenticate, verifyJWT};
