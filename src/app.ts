import express from 'express';
import dotenv from 'dotenv';

// initialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Boilerplate application is running on port ${port}.`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Application powered by Express');
});
