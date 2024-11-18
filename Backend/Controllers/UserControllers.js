const mongoose = require ('mongoose');
const User = require ('../Models/User');

const Get_User = (req, res) => {
    const { id } = req.params;
    try{
        console.log('get user is working');
    }catch(err){
        res.status(404).json({"msg":err})
    }
}

const Create_User = (req, res) => {
    try{
        console.log('create user is working');
    }catch(err){
        res.status(404).json({"msg":err})
    }
}

const Update_User = (req, res) => {
    const { id } = req.params;
    try{
        console.log('update user is working');
    }catch(err){
        res.status(404).json({"msg":err})
    }
}

const Delete_User = (req, res) => {
    const { id } = req.params;
    try{
        console.log('delete user is working');
    }catch(err){
        res.status(404).json({"msg":err})
    }
}

module.exports = {
    Get_User,
    Create_User,
    Update_User,
    Delete_User
}