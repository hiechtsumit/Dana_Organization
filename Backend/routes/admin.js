// "/admin"

const middleware = require('../middleware/middleware');

const router = require('express').Router();

router.use('/auth',require('./admin/auth'))

router.get('/', middleware, require('../controllers/adminController/adminController').admin)

// Program related router
router.use('/programs', middleware, require('./admin/program'));


// Payment related router
router.use('/payments', middleware, require('./admin/payment'));



module.exports = router;