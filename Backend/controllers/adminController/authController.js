
const adminModel = require("../../models/adminModel")
const { create_hash_password, verify_hash_password } = require("../../utils/hash")
const { create_jwt_token } = require("../../utils/jwt")

module.exports.register = async(req,res)=>{
    try {
        const {name,email,password} = req.body
        const admin = await adminModel.findOne({email})
        if(admin) {

            return res.send({
                status  : 400,
                message:"Admin already exists"
            })
        }
        const response = await create_hash_password(password)
        if(response.status !== 200){
            return res.send({
                status : 404,
                message : "Invalid Credential"
            });
        }
        const newAdmin = new adminModel({
            name, email,
            password : response.hashPassword
        })
        await newAdmin.save()
        return res.send({
            status:200,
            message:"Register Success"
        })
    } catch (error) {
        return res.send({
            status:500,
            message:"Register Failed"
        })
    }
}





module.exports.login = async(req,res)=>{
    try{
        const {email, password} = req.body;
        let admin = await adminModel.findOne({email});
        // if admin not registered
        if(!admin){
            return res.status(404).send({
                status : 404,
                message : "This is not currect email! please provied correcr email"
            });
        }
        const response = await verify_hash_password(password, admin.password);
        if(response.status !== 200){
            return res.status(404).send({
                status : 404,
                message : "Invalid Credential"
            });
        }
        if(!response.isVerify){
            return res.status(404).send({
                status : 404,
                message : "password not match"
            })
        }
        const result = create_jwt_token(admin._id);
        if(result.status !== 200){
            return res.status(404).send({
                status : 404,
                message : "Invalid Credential"
            });
        }

        return res.send({
            status : 200,
            admin,
            token : result.token,
            message : "Successfully Login",
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            status : 500,
            message : "Login Error"
        });
    }
}