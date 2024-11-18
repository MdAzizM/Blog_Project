require('dotenv').config();
const express = require ('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const BlogRoutes = require ('./Routes/BlogRoutes');
const UserRoutes = require('./Routes/UserRoutes');


//MIDDLEWARES
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DATABASE conncetion 
try {
  mongoose.connect(process.env.DB_STRING)
  .then(() => {console.log('Connected to MongoDB')
    try{
        console.log("trying to connect to port...");
        app.listen(process.env.Port,() => {
            console.log("connectedS to port ",process.env.Port)
        })
    }catch(err){
        console.log(err);
    }
  })
  .catch(err => console.error('Could not connect to MongoDB:', err));
}catch (err){
  console.log(err);
}

//ROUTES
app.use('/Blog', BlogRoutes);
app.use('/User', UserRoutes);
//not found
app.get('*',(req, res) => {
    res.status(404).send('not found');
})