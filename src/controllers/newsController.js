const newsModel = require('../models/newNews')
const addNews = async(req, res)=>{
    const {title, description, category, videoUrl} = req.body
    const image = req.file.path;
    // console.log(req.body)
    // console.log('image path-',req.file.path)
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
module.exports = {addNews}








 
