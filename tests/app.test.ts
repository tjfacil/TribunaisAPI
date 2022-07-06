// https://github.com/facebook/jest/issues/11665

import mongoose from 'mongoose';
import request from 'supertest';
import app from '../src/app';

describe('App tests', () => {
  beforeAll(async () => {
    const mongoUri = process.env.MONGO_TEST_URI || '';
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('root returns 404', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(404);
  });

  test('/courts endpoint returns 200', async () => {
    const response = await request(app).get('/courts');
    expect(response.statusCode).toBe(200);
  });

  test('/services endpoint returns 200', async () => {
    const response = await request(app).get('/services');
    expect(response.statusCode).toBe(200);
  });

  test('/regions endpoint returns 200', async () => {
    const response = await request(app).get('/regions');
    expect(response.statusCode).toBe(200);
  });

  test('unknown endpoint returns 404', async () => {
    const response = await request(app).get('/test');
    expect(response.statusCode).toBe(404);
  });

});
