const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
    title:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    img:{
            type: String,
            required: false
    },
    category:{
        type: String,
        required: false
    },
    videoUrl:{
        type:String,
        required: false
    }

}, {timestamps : true});


module.exports = mongoose.model('News', NewsSchema)