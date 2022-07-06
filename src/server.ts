import mongoose from 'mongoose';
import app from './app';

const port = process.env.PORT || '3000';
const mongoUri = process.env.MONGO_URI || '';

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
