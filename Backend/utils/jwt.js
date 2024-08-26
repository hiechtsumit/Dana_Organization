const jwt = require('jsonwebtoken');


const create_jwt_token = (userID)=>{
   try {
    const token = jwt.sign({
        userId : userID,
        },process.env.jwt_secret,
        {
            expiresIn : '60d'
        }
    );
    return {
        token,
        status : 200,
        message : 'jwt token created',
    };
   } catch (error) {
    return {
        status : 500,
        message : 'jwt token not created',
    };
   }
}

const verify_jwt_token = async (token)=>{
    try {
        const data = jwt.verify(token, process.env.jwt_secret);
        return {
            status : 200,
            message : 'jwt token verified',
            data
        };
    } catch (error) {
        return {
            status : 500,
            message : 'jwt token verification failed!',
        };
    }
}


module.exports = {create_jwt_token, verify_jwt_token}