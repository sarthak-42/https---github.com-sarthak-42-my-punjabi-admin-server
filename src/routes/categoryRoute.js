const express = require('express')
const {addCategory, showCategory } = require('../controllers/categoryController')
const categoryRouter = express.Router()
categoryRouter.post('/addCategory', addCategory)
categoryRouter.get('/getCategory', showCategory)

module.exports = categoryRouter