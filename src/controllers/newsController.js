const newsModel = require('../models/newNews')
const addNews = async(req, res)=>{
    const {title, description, category, videoUrl} = req.body
    const image = req.file.filename;
    console.log(req.body)
    console.log('image path-', req.file.filename)
    try {
        const createNews = await newsModel.create({
            title: title,
            description: description,
            category: category,
            img: image ,
            videoUrl: videoUrl
            
        }
         
        )
        console.log('news created')
        res.status(201).json({news: createNews})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}

const getAllNews=async(req,res)=> { 
    // console.log("token",req.user.id);
    let pageSize = +req.query.pagesize || 6;
    let currentPage = +req.query.pagenum || 1;
    if (pageSize > 100){
        pageSize = 100;
        }
        const totalNewsCount =await newsModel.countDocuments();
        const news = await newsModel.find()
        .skip((currentPage - 1)*pageSize)
        .limit(pageSize)
        .sort({_id:-1});
        /* if(!req.user.isAdmin){
            news.forEach(item => delete item.isApproved);
            }*/
            console.log(totalNewsCount);
            res.status(200).json({
                totalPages: Math.ceil(totalNewsCount / pageSize),
                currentPage: currentPage,
                newsPerPage: pageSize,
                totalItems: totalNewsCount,
                news: news
                })
                };
module.exports = {addNews , getAllNews}








 
