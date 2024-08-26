const { route } = require('../admin');

const router = require('express').Router();

router.get('/',require('../../controllers/adminController/programController').all_Programs)

router.post('/',require('../../controllers/adminController/programController').add_Program)



module.exports = router;