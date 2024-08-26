
const adminModel = require('../models/adminModel');
const {verify_jwt_token} = require('../utils/jwt');

const middleware = async (req,res,next)=>{
    try{
        // console.log(req.headers.authorization)
        const token = req.headers.authorization;
        // console.log(token)
        if(!token){
            return res.send({
                status : 401,
                message : "Token not found"
            })
            // return res.redirect('/login');
        }
        const response = await verify_jwt_token(token);
        if(response.status !== 200){
            return res.send({
                status : 502,
                message : "Token is not valid"
            })
        }
        const admin = response.data
        let authAdmin = await adminModel.findById({_id : admin.userId});
        if(!authAdmin){
            return res.send({
                status : 404,
                message : "User not found"
            })
        }
        req.id = authAdmin._id;
        next();
    }catch(err){
        console.log(err);
        return res.send({
            status : 500,
            message : "Server Error"
        })
    }
}
module.exports = middleware;