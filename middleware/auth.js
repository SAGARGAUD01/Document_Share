require('dotenv').config();
const jwt=require('jsonwebtoken');
const User=require('../models/user');

const auth= async (req,res,next) =>{
    const token=req.cookies.jwt;
    if(!token){
        return res.redirect('/');
        // return res.status(403).send("A token is required for authentication");
    }
    try{
        const token=req.cookies.jwt;
        const varifyUser=jwt.verify(token,process.env.MY_SECRET_KEY)
        const user=await User.findOne({_id:varifyUser._id});
    } catch(err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}
module.exports=auth;