import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import errMiddleware from './middlewares/error';
import notFoundMiddleware from './middlewares/notfound';
import courtsRoutes from './routes/courts';
import servicesRoutes from './routes/services';

require('dotenv').config();

const port = process.env.PORT || '3000';
const mongoUri = process.env.MONGO_URI || '';

const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.use('/courts', courtsRoutes);

app.use('/services', servicesRoutes);

app.use(notFoundMiddleware);

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
