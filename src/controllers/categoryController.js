const category = require('../models/category')
const categoryModel = require('../models/category')
const addCategory = async (req, res)=>{
    const {category} = req.body
    console.log(category)
    try {
        const createCategory = await categoryModel.create({
            category: category
        })
        console.log('category created')
        res.status(201).json({category: createCategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
}




const showCategory = async (req, res) =>{
    try {
        const categories = await categoryModel.find()
        // console.log(categories);
        res.status(200).json({ categories });   
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
    
}

module.exports = {addCategory, showCategory}
