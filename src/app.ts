import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import errMiddleware from './middlewares/error';
import notFoundMiddleware from './middlewares/notfound';
import courtsRoutes from './routes/courts';
import servicesRoutes from './routes/services';
import regionsRoutes from './routes/regions';

require('dotenv').config();

const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.use('/courts', courtsRoutes);

app.use('/services', servicesRoutes);

app.use('/regions', regionsRoutes);

app.use(notFoundMiddleware);

app.use(errMiddleware);

export default app;
