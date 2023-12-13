require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/userRoutes');
const bodyParser = require('body-parser')
const noteRouter = require('./routes/noteRoutes');
const cors = require('cors');
const app = express();
// app.use(cors());
const mongoose = require('mongoose')
const newsRouter = require('./routes/newsRouts');

const PORT = process.env.PORT
app.use(express.json())


const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// const multer = require('multer')
// const storage = multer.diskStorage({
//     destination:  (req, file, cb)=> {
//      return cb(null, '');
//     },
//     filename: (req, file, cb) =>{
//       cb(null, Date.now() + '-' + file.originalname);
//     },
//   });
//   const upload = multer({ storage: storage })





// Express.js example

  

app.use('/api/users', userRouter)
// app.use('/notes', noteRouter)
app.use('/api/news', newsRouter )
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.send("Hello World");
})

// app.post('/thumbnail', upload.single(), function (req, res, next) {
//     console.log(req.body)
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// })

// app.post('/upload', upload.single('profileImage'), (req,res)=>{
  //   console.log(req.file)
  //   return res.redirect('/')
// })

// const upload = multer({ dest: 'uploads/' })

 
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
    // console.log(storage)
})
}).catch((error)=>{
    console.log(error)
})

