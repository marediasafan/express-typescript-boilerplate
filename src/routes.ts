import express from 'express';
import index from './controllers/index';

const router: express.Router = express.Router();

// list of routes
router.get('/', index.home);
router.get('/health', index.health);

export default router;
