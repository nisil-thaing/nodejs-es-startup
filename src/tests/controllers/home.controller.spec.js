import request from 'supertest';
import { expect } from 'chai';
import { app, server } from '../../app';

describe('GET /', () => {
  it('should return 200 OK', async done => {
    try {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.body).have.property('message');
      done();
    } catch(e) {
      done(e);
    }
  });

  afterAll(() => server.close());
});