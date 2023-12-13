const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY
const signup = async (req,res)=>{

    const {email , password} = req.body;
     
    
    try {
        //Existing user Check
        const exixtingUser = await userModel.findOne({email:email})
        if(exixtingUser){
            return res.status(400).json({message: 'User Already Exixts'})
        }

        // Hashing Password
        const hashPassword = await bcrypt.hash(password,10)
       
        // Create User
        const  create = await userModel.create({
            // userName: userName,
            email: email,
            password: hashPassword
        })
        // Token Generation

        const token = jwt.sign({
            email: create.email, id: create._id
        }, SECRET_KEY)

        res.status(201).json({user: create, token: token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
   
    
  
}
const signin = async(req, res)=>{
    const {userName, email , password} = req.body;
    try {
        const exixtingUser = await userModel.findOne({email:email})
        if(!exixtingUser){
            return res.status(400).json({message: 'User not Found'})
        }
        const isMatched = await bcrypt.compare(password, exixtingUser.password);
        if (!isMatched){
            return res.status(400).json({message:'Invalid Credentials'});
            }
            const token = jwt.sign({
                email: exixtingUser.email, id: exixtingUser._id
            }, SECRET_KEY)
    
            res.status(201).json({user: exixtingUser, token: token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}


module.exports={signin,signup}