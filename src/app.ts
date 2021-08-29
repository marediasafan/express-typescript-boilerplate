import express from 'express';
import dotenv from 'dotenv';
import logger from './components/logger';
import fs from 'fs';
import router from './routes';
import { Model, knexSnakeCaseMappers } from 'objection';
import Knex from 'knex';

// initialize dotenv configuration
if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
} else {
  logger.debug('Using .env.example file to supply config environment variables');
  dotenv.config({ path: '.env.example' });
}

// initialize database
const knex = Knex({
  client: 'mysql',
  useNullAsDefault: true,
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  },
  ...knexSnakeCaseMappers()
});

Model.knex(knex);

const app = express();
// set app variable
app.set('port', process.env.SERVER_PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

export default app;
