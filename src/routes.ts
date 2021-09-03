import express from 'express';
import index from './controllers/index';
import PostsController from './controllers/post';

const router: express.Router = express.Router();

// list of routes
router.get('/', index.home);

// posts
router.get('/posts', PostsController.getAll);
router.get('/post/:id(\\d+)', PostsController.get);

export default router;
