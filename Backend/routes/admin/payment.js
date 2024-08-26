

const router = require('express').Router();

router.get('/', require('../../controllers/adminController/paymentController').show_all_payments);

router.post('/received', require('../../controllers/adminController/paymentController').payment_received);

router.post('/not-received', require('../../controllers/adminController/paymentController').payment_not_received);

// router.delete('/:id', require('../../controllers/adminController/paymentController').payment_delete);



module.exports = router;