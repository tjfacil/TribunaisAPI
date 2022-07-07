// https://github.com/facebook/jest/issues/11665

import mongoose from 'mongoose';
import request from 'supertest';
import app from '../src/app';
import {
  expectedCourtByAbbr,
  expectedCourtByCode,
  expectedCourtById,
  expectedServiceByInternal,
} from './app-data';

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

  test('/courts returns 200 with data', async () => {
    const response = await request(app).get('/courts');
    expect(response.statusCode).toBe(200);
    expect(response.body.total).toBe(88);
    expect(response.body.courts.length).toBe(88);
  });

  test('/courts/summary returns 200 with data', async () => {
    const response = await request(app).get('/courts/summary');
    expect(response.statusCode).toBe(200);
    expect(response.body.total).toBe(88);
    expect(response.body.courts.length).toBe(88);
  });

  test('/courts/id/:id returns 200 with data on valid id param', async () => {
    const response = await request(app).get(
      '/courts/id/6139eb623084f8c72b1bbff4'
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.court).toEqual(expectedCourtById);
  });

  test('/courts/id/:id returns 404 on not found id param', async () => {
    const response = await request(app).get(
      '/courts/id/6139eb623084f8c72b1bb000'
    );
    expect(response.statusCode).toBe(404);
  });

  test('/courts/id/:id returns 400 on invalid id param', async () => {
    const response = await request(app).get('/courts/id/123');
    expect(response.statusCode).toBe(400);
  });

  test('/courts/code/:code returns 200 with data on valid code param', async () => {
    const response = await request(app).get('/courts/code/813');
    expect(response.statusCode).toBe(200);
    expect(response.body.court).toEqual(expectedCourtByCode);
  });

  test('/courts/code/:code returns 404 on not found code param', async () => {
    const response = await request(app).get('/courts/code/000');
    expect(response.statusCode).toBe(404);
  });

  test('/courts/code/:code returns 400 on invalid code param', async () => {
    const response = await request(app).get('/courts/code/test');
    expect(response.statusCode).toBe(400);
  });

  test('/courts/abbr/:abbr returns 200 with data on valid code param', async () => {
    const response = await request(app).get('/courts/abbr/JFSP');
    expect(response.statusCode).toBe(200);
    expect(response.body.court).toEqual(expectedCourtByAbbr);
  });

  test('/courts/abbr/:abbr returns 404 on not found code param', async () => {
    const response = await request(app).get('/courts/abbr/JFXX');
    expect(response.statusCode).toBe(404);
  });

  test('/courts/abbr/:abbr returns 400 on invalid code param', async () => {
    const response = await request(app).get('/courts/abbr/1234');
    expect(response.statusCode).toBe(400);
  });

  test('/regions endpoint returns 200', async () => {
    const response = await request(app).get('/regions');
    expect(response.statusCode).toBe(200);
    expect(response.body.total).toBe(1);
    expect(response.body.regions.length).toBe(1);
  });

  test('/regions/court/:code returns 200 with data on valid code param', async () => {
    const response = await request(app).get('/regions/court/819');
    expect(response.statusCode).toBe(200);
    expect(response.body.regions.length).toBe(1);
  });

  test('/regions/court/:code returns 404 on not found code param', async () => {
    const response = await request(app).get('/regions/court/813');
    expect(response.statusCode).toBe(404);
  });

  test('/regions/court/:code returns 400 on invalid code param', async () => {
    const response = await request(app).get('/regions/court/test');
    expect(response.statusCode).toBe(400);
  });

  test('/services endpoint returns 200', async () => {
    const response = await request(app).get('/services');
    expect(response.statusCode).toBe(200);
    expect(response.body.total).toBe(1714);
    expect(response.body.services.length).toBe(10);
  });

  test('/services/summary endpoint returns 200', async () => {
    const response = await request(app).get('/services/summary');
    expect(response.statusCode).toBe(200);
    expect(response.body.total).toBe(91);
    expect(response.body.summary.length).toBe(91);
  });

  test('/services/summary/court/:code endpoint returns 200', async () => {
    const response = await request(app).get('/services/summary/court/819');
    expect(response.statusCode).toBe(200);
    expect(response.body.total).toBe(91);
    expect(response.body.summary.length).toBe(91);
  });

  test('/services/summary/court/:code returns 404 on not found code param', async () => {
    const response = await request(app).get('/services/summary/court/813');
    expect(response.statusCode).toBe(404);
  });

  test('/services/summary/court/:code returns 400 on invalid code param', async () => {
    const response = await request(app).get('/services/summary/court/test');
    expect(response.statusCode).toBe(400);
  });

  test('/services/court/:code returns 200 with data on valid code param', async () => {
    const response = await request(app).get('/services/court/819');
    expect(response.statusCode).toBe(200);
    expect(response.body.total).toBe(1714);
    expect(response.body.services.length).toBe(10);
  });

  test('/services/court/:code returns 404 on not found code param', async () => {
    const response = await request(app).get('/services/court/813');
    expect(response.statusCode).toBe(404);
  });

  test('/services/court/:code returns 400 on invalid code param', async () => {
    const response = await request(app).get('/services/court/test');
    expect(response.statusCode).toBe(400);
  });

  test('/services/region/:code returns 200 with data on valid code param', async () => {
    const response = await request(app).get('/services/region/2001');
    expect(response.statusCode).toBe(200);
    expect(response.body.total).toBe(323);
    expect(response.body.services.length).toBe(10);
  });

  test('/services/region/:code returns 404 on not found code param', async () => {
    const response = await request(app).get('/services/region/2000');
    expect(response.statusCode).toBe(404);
  });

  test('/services/region/:code returns 400 on invalid code param', async () => {
    const response = await request(app).get('/services/region/test');
    expect(response.statusCode).toBe(400);
  });

  test('/services/internal/:code returns 200 with data on valid code param', async () => {
    const response = await request(app).get('/services/internal/2001216');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expectedServiceByInternal);
  });

  test('/services/internal/:code returns 404 on not found code param', async () => {
    const response = await request(app).get('/services/internal/2000000');
    expect(response.statusCode).toBe(404);
  });

  test('/services/internal/:code returns 400 on invalid code param', async () => {
    const response = await request(app).get('/services/internal/test');
    expect(response.statusCode).toBe(400);
  });

  test('unknown endpoint returns 404', async () => {
    const response = await request(app).get('/test');
    expect(response.statusCode).toBe(404);
  });
});
