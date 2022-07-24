require('dotenv').config()
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.token; 
//function for admin page access
exports.adminAuth = (req, res, next) => {
    //setting a token variable and setting it to the token from the cookie
    const token = req.cookies.jwt
    //if the token exists, then verify
    if(token){
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err){
                return res.status(401).json({message: "1not authorized"})
            }
            else{
                if(decodedToken.role !== "Admin"){
                    return res.status(401).json({message: "2not authorized, not admin"})
                } else {
                    //next moves to the next middleware
                    next()
                }
            }
        })
    }else {
        return res.status(401).json({message: "not auth, token on available"})
    }
}

exports.userAuth = (req, res, next) => {
    //setting a token variable and setting it to the token from the cookie
    const token = req.cookies.jwt
    //if the token exists, then verify
    if(token){
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err){
                return res.status(401).json({message: "3not authorized"})
            }
            else{
                if(decodedToken.role !== "Basic"){
                    return res.status(401).json({message: "4not authorized"})
                } else {
                    //next moves to the next middleware
                    next()
                }
            }
        })
    }else {
        return res.status(401).json({message: "not auth, token on available"})
    }
}