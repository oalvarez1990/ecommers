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

// const getPostById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const post = await Post.findOne({ where: { id } });

//     res.status(200).json({
//       post,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const updatePost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, content } = req.body;

//     const post = await Post.findOne({ where: { id } });

//     await post.update({ title, content });

//     res.status(200).json({ status: 'success' });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const deletePost = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const post = await Post.findOne({ where: { id } });

//     await post.update({ status: 'deleted' });

//     res.status(200).json({
//       status: 'success',
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = {
//   getAllPosts,
//   createPost,
//   getPostById,
//   updatePost,
//   deletePost,
// };
