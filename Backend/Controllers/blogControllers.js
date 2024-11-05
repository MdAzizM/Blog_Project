const Blog = require('../Models/Blog');

const getAllBlogs = (req, res) => {
    console.log('getallblogs');
}

const getBlog = (req, res) => {
    console.log('get one blog');
}

const createBlog = (req, res) => {
    console.log('create a blog');
}

const updateBlog = (req,res) => {
    console.log('updating a blog ');
}

const deleteBlog = (req, res) => {
    console.log('delete a blog');
}

module.exports = {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
}