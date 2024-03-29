const request = require('supertest');
const app = require('../app');
import { getUserId } from '../testFunctions/generateTestUser';
import { getTaskId } from '../testFunctions/generateTestTask';

describe('GET Tasks', function () {
  it('respond with json containing a list of all tasks', function (done) {
    request(app)
      .get('/tasks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
});

describe('Add Tasks', async function () {
  let data = {
    title: 'Book Event',
    description: 'Book event for football',
    user_id: await getUserId(),
  }
  it('respond with 200 created', function (done) {
    request(app)
      .post('/tasks')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
describe('Add tasks', function () {
  let data = {}
  it('respond with 500 not created', function (done) {
    request(app)
      .post('/tasks')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .expect('{"message":"User id shouldn\'t be null."}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('Update tasks', async function () {
  const data = {
    title: 'Book Hall',
    description: 'Book event for football',
  }
  let taskId = await getTaskId()
  it('respond with 200 updated', function (done) {
    request(app)
      .put(`/tasks/${taskId}`)
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('Update tasks', async function () {
  const data = {}
  let taskId = await getTaskId()
  it('respond with 500 error', function (done) {
    request(app)
      .put(`/tasks/${taskId}`)
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});


describe('Delete tasks', async function () {
  let taskId = await getTaskId()
  it('respond with 200 task deleted', function (done) {
    request(app)
      .delete(`/tasks/${taskId}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});


