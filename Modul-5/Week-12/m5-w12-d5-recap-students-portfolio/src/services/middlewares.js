const myStupidAuth = (req, res, next) => {
    if(req.headers.authentication === "whatever")
    next()
    else res.status(401).send("Not autorizes!")
    
}

module.exports = {
    myStupidAuth
}