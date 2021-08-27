import express from 'express';
import dotenv from 'dotenv';
import logger from './components/logger';
import fs from 'fs';

// initialize dotenv configuration
if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
} else {
  logger.debug('Using .env.example file to supply config environment variables');
  dotenv.config({ path: '.env.example' });
}

const app = express();

// set app variable
app.set('port', process.env.SERVER_PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define express routes
app.get('/', (req, res) => {
  res.send('Welcome to the Application powered by Express');
});

export default app;
