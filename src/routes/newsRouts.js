const express = require('express')
const {addNews} = require('../controllers/newsController');
const {imageUploadMiddleware} = require('../middlewares/imageUpload')
// const { model } = require('mongoose');
const newsRouter = express.Router();

newsRouter.post('/addNews', imageUploadMiddleware('image'), addNews);


module.exports = newsRouter