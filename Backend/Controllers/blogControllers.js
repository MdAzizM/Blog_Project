const Blog = require('../Models/Blog');

const getAllBlogs =async (req, res) => {
    try {
        const blogs = await Blog.find().createdAt( -1 );
        if (blogs){
            res.status(200).json(blogs);
        }
    }catch(err){
        res.status(404).json(err);
    }
}

const getBlog =async (req, res) => {
    try{
        const id = get.params;
        const blog = await Blog.findById(id);
        if(blog){
            res.status(200).json(blog);
        }
    }catch(err){
        res.status(404).json(err);
    }
}

const createBlog =async (req, res) => {
    try{
        const { title, snippet, body } = req.body;
        const addedBlog = await Blog.save({ title, snippet, body});
        if (addedBlog){
            res.status(200).json(addedBlog);
        }
    }catch (err){
        res.status(400).json(err);
    }
}

const updateBlog =async (req, res) => {
    try{
        const id = get.params;
        const updatedBlog = await Blog.findByIdAndUpdate(id);
        if (updatedBlog){
            res.status(200).json(updatedBlog);
        }
    }catch (err){
        res.status(400).json(err);
    }
}

const deleteBlog =async (req, res) => {
    try{
        const id = get.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (deletedBlog){
            res.status(200).json({"msg":"blog deleted"})
        }
    }catch(err){
        res.status(404).json(err);
    }
}

module.exports = {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
}