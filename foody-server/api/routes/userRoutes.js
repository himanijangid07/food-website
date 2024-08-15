const express = require("express");
const router = express.Router();

const userController = require('../controllers/userControllers');
const verifyToken = require('../middleware/verifyToken')

router.get('/', verifyToken,  userController.getAllUsers);
router.post('/', userController.createUsers);
router.delete('/:id', userController.deleteUser);
router.get('/admin/:email', userController.getAdmin);
router.patch('/admin/:id', userController.makeAdmin);

module.exports = router;