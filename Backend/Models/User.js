const mongoose = require ('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    First_name: {
        type: String,
        required: true
    },
    Last_name:{
        type:String,
        required: true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Blogs:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
},{ timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User;