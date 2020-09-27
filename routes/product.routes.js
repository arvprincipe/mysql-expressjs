'use strict'

const router = require('express').Router()

// controller
const {
  getProducts,
  insertProducts,
  updateProducts,
  deleteProducts
} = require('../controller/product.controller')

// http routes
router.get('/products', getProducts)
router.post('/products', insertProducts)
router.put('/products', updateProducts)
router.delete('/products/:productId', deleteProducts)

module.exports = router