const UserModel = require("./users/schema")
const {verifyJWT} = require("./authTools")
const { decode } = require("jsonwebtoken")

const jwtMiddleWare = async(req, res, next) =>{
  try{
const token = req.header("Authorization").replace("Bearer ","")
const decoded = await verifyJWT(token)
console.log(decoded);

const user = await UserModel.findOne({_id: decoded._id})

if(!user){
  throw new Error("User not found!");
   req.user = user;
   next()
}
  }catch(error){
    next(error)
  }
}

const adminOnlyMiddleware = async (req, res, next) => {
  if (req.user && req.user.role === "admin") next()
  else {
    const err = new Error("Only for admins!")
    err.httpStatusCode = 403
    next(err)
  }
}

module.exports = {
  jwt: jwtMiddleWare,
  adminOnly: adminOnlyMiddleware,
}
