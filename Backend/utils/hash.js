

const bcrypt = require('bcrypt');

const create_hash_password = async(password)=>{
    try {
        const hashPassword = await bcrypt.hash(password,5);
        return {
            status : 200,
            message : "Successfully create hash password",
            hashPassword
        }
    } catch (error) { 
        return {
            status : 500,
            message : "Hash password create failed!"
        }
    }
}

const verify_hash_password = async(plain_password, hs_password)=>{
    try {
        const isVerify = await bcrypt.compare(plain_password,hs_password);
        return {
            status : 200,
            message : "Successfully verify password",
            isVerify
        }
    } catch (error) {
        return {
            status : 500,
            message : "Error verify password",
        }
    }
}


module.exports = {create_hash_password, verify_hash_password};