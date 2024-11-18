const mongoose = require ('mongoose');
const Blog = require('../Models/Blog');

const getAllBlogs =async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        if (blogs){
            res.status(200).json(blogs);
        }
    }catch(err){
        res.status(404).json(err);
    }
}

const getBlog =async (req, res) => {
    const { id } = req.params;
    try{
        const blog = await Blog.findById(id);
        if(blog){
            res.status(200).json(blog);
        }
    }catch(err){
        res.status(404).json(err);
    }
}

const createBlog =async (req, res) => {
    const { title, snippet, body } = req.body;
    const userID = "321456987"
    //console.log({ userID, title, snippet, body});
    try{
        const addedBlog = await Blog.create({ userID, title, snippet, body});
        if (addedBlog){
            res.status(200).json(addedBlog);
        }

    }catch (err){
        res.status(400).json(err);
    }
}

const updateBlog =async (req, res) => {
    const { id } = req.params;
    const  { title, snippet, body} = req.body;

    try{
        
        const updatedBlog = await Blog.findByIdAndUpdate(id, { title, snippet, body}, { new:true });
        if (updatedBlog){
            res.status(200).json(updatedBlog);
        }else{
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({error: 'No such Blog'})
            }
            res.status(404).json({message:"Blog Not Found"});
        }
    }catch (err){
        res.status(400).json(err);
    }
}

const deleteBlog =async (req, res) => {
    const { id } = req.params;
    try{    
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({error: 'No such workout'})
        }

        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (deletedBlog){
            res.status(200).json({"msg":"blog deleted"})
        }

    }catch(err){
        res.status(404).json({err:err.message});
    }
}

module.exports = {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
}