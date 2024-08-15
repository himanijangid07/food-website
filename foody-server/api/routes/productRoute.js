const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

const productController = require('../controllers/productControllers')

router.get('/', productController.getAllProductItems)

module.exports = router;