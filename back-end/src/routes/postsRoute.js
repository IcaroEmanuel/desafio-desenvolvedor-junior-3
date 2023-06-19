const { Router } = require('express');
const PostController = require('../controllers/PostController');
const auth = require('../middleware/auth');

const router = Router();

router.use(auth);

router
  .post('/posts', PostController.createPost)
  .put('/posts/:id', PostController.updatePost)
  .get('/posts', PostController.getAllPosts)
  .get('/posts/:id', PostController.getPostById)
  .delete('/posts/:id', PostController.deletePost)

module.exports = router;
