const express = require('express')
const noteRouter = express.Router();

noteRouter.post('/', (req,res)=>{
    res.send('Note post req')
} );

noteRouter.get('/', (req,res)=>{
    res.send('note get req')
})

module.exports = noteRouter