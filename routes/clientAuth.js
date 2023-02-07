const { Router } = require('express');
const clientAuthController = require('../controllers/clientAuthController');
const auth = require('../middleware/auth');
const router = Router();

router.post('/register', clientAuthController.signup);
router.post('/login', clientAuthController.login);
router.get('/user', auth,clientAuthController.get_user);

module.exports = router;
