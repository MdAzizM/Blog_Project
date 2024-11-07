require('dotenv').config();
const express = require ('express');
const mongoose = require('mongoose');
const BlogRoutes = require ('./Routes/BlogRoutes');

//MIDDLEWARES
const app = express();


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
app.use('/Blog',BlogRoutes);
//not found
app.get('*',(req, res) => {
    res.status(404).send('not found');
})