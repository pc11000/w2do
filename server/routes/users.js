const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.post('/signup', userController.createUser);
router.put('/updateProfile', userController.updateUser);
router.post('/login', userController.userLogin);

module.exports = router;
