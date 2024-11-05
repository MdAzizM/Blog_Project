const Blog = require('../Models/Blog');
const blogController = require ('../Controllers/blogControllers');
const express = require('express');

//MIDDLEWARE
const route = express.Router();

route.get('/',blogController.getAllBlogs);

route.get('/:id',blogController.getBlog);

route.post('/Create', blogController.createBlog);

route.patch('/:id', blogController.updateBlog);

route.delete('/:id',blogController.deleteBlog);

module.exports = route;