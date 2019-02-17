import request from 'supertest';
import { expect } from 'chai';
import { app, server } from '@app';

describe('GET /', () => {
  const killServer = () => server.close();
  const errorHandler = (e, done) => {
    killServer();
    if (done) done(e);
  };
  const appRequest = request(app);

  it('should return 200 OK', async done => {
    try {
      const res = await appRequest.get('/');
      expect(res.status).to.equal(200);
      expect(res.body).have.property('message');
      done();
    } catch(e) {
      errorHandler(e, done);
    }
  });

  afterEach(killServer.bind(this));
});
