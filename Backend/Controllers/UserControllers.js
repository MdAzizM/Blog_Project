const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');
const User = require ('../Models/User');

const Get_All_Users =async (req, res) => {
    try{
        const users = await User.find().sort({ createdAt: -1 });
        if (users){
            res.status(200).json(users);
        }
    }catch(err){
        res.status(404).json({"msg":err})
    }
}

const Get_User =async (req, res) => {
    const { id } = req.params;
    try{
        const user = await User.findById(id);
        if(user){
            res.status(200).json(user);
        }
    }catch(err){
        res.status(404).json({"Read Error msg":err})
    }
}

const Create_User =async (req, res) => {
    const { First_name, Last_name, Email, Password } = req.body;
    //const crypted_password = await bcrypt.hash({ Password }, 10, process.env.HASH_KEY);
    const user = new User({ First_name, Last_name, Email, Password });
    try{
        console.log(user);  
        const newUser = await user.save();
        if (newUser){
            res.status(200).json({ message:"user created succefuly",newUser});
        }
    }catch(err){
        res.status(400).json({"Create User Error msg":err})
    }
}

const Update_User =async (req, res) => {
    const { id } = req.params;
    const { First_name, Last_name, Email, Password } = req.body;
    try{
        const Updated_User = await User.findByIdAndUpdate(id, { First_name, Last_name, Email, Password })
        if (Updated_User){
            res.status(200).json({Message:"User updated!", Updated_User});
        }
    }catch(err){
        res.status(404).json({"Update (all) msg":err});
    }
}

const Update_Onething_User = async(req, res) => {
    const { id } = req.params;
    const updateData = req.body; 
    try {
        const user = await User.findByIdAndUpdate(id, updateData, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found'});
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const Delete_User =async (req, res) => {
    const { id } = req.params;
    try{    
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: 'No such USER'})
        }

        const deletedUser = await User.findByIdAndDelete(id);
        if (deletedUser){
            res.status(200).json({"msg":"user deleted"})
        }

    }catch(err){
        res.status(404).json({"Delete User error ":err.message});
    }
}

module.exports = {
    Get_All_Users,
    Get_User,
    Create_User,
    Update_User,
    Update_Onething_User,
    Delete_User
}