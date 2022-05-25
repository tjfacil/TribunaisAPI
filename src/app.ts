import express from 'express';
import mongoose from 'mongoose';
import errMiddleware from './middlewares/error';
import courtsRoutes from './routes/courts';

require('dotenv').config();

const app = express();
const port = process.env.PORT || '3000';
const mongoUri = process.env.MONGO_URI || '';

app.use('/courts', courtsRoutes);

app.use(errMiddleware);

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log('Listening on: ' + port);
    });
  })
  .catch((e: any) => {
    console.log(e);
  });
