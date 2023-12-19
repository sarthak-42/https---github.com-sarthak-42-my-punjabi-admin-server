const express = require('express')
const {addNews, getAllNews} = require('../controllers/newsController');
const {imageUploadMiddleware} = require('../middlewares/imageUpload')
// const { model } = require('mongoose');
const newsRouter = express.Router();

newsRouter.post('/addNews', imageUploadMiddleware('image'), addNews);
newsRouter.get('/getNews',  getAllNews);


module.exports = newsRouter 