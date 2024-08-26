const router = require('express').Router();


// router.post('/register',require('../../controllers/adminController/authController').register);

router.post('/login',require('../../controllers/adminController/authController').login);


module.exports = router;