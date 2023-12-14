// import {v2 as cloudinary} from 'cloudinary';
// import fs from 'fs'
// require('dotenv').config
// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloud = async(localFilePath)=>{
//     try {
//         if(!localFilePath) return null
//         // uploading flie on cloudinary
//      const response =  await  cloudinary.uploader.upload('localFilePath', {
//             resource_type:'auto'
//         })

//         console.log('file upload successfully')
//         return response.url
//     } catch (error) {
//         fs.unlinkSync(localFilePath) // remove locally saved temp file is upload fails
//         return null
//     }

// }


// export {uploadOnCloud};