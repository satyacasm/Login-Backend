const { Router } = require('express');
const adminAuthController = require('../controllers/adminAuthController');
const router = Router();

router.post('/register', adminAuthController.signup);
router.post('/login', adminAuthController.login);
router.get('/user', adminAuthController.get_user);

module.exports = router;
