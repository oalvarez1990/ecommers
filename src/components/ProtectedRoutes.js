import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    
    if(localStorage.getItem("token")){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }
};

export default ProtectedRoutes;


const { Post } = require('../models/post.model');
const { User } = require('../models/user.model');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User }],
    });

    res.status(200).json({
      posts,
    });
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    const newPost = await Post.create({ title, content, userId });

    res.status(201).json({ newPost });
  } catch (error) {
    console.log(error);
  }
};
