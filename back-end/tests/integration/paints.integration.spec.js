const request = require('supertest');
const app = require('../../index');
const mocks = require('../mocks');

describe('Paints route', () => {
  it('should return the correct number of paint cans', async () => {
    const response = await request(app)
      .post('/paints')
      .send(mocks.validMock);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      "data": {
        "18": 0,
        "3.6": 3,
        "2.5": 0,
        "0.5": 4
      }
    }
    );
  });
});