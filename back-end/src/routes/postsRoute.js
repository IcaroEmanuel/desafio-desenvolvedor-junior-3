const { Router } = require('express');
const PostController = require('../controllers/PostController');

const router = Router();

router.post('/posts', PostController.createPost);
router.put('/posts/:id', PostController.updatePost);
router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getPostById);
router.delete('/posts/:id', PostController.deletePost);

module.exports = router;
