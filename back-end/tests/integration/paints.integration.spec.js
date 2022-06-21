const request = require('supertest');
const app = require('../../api/app');
const mocks = require('../mocks');

describe('Paints route', () => {
  it('should return the correct number of paint cans', async () => {
    const response = await request(app)
      .post('/v1/paints')
      .send(mocks.validMock);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mocks.validResponse);
  });

  it('should return error message when area is small than 1m² or bigger than 50m²', async () => {
    const response = await request(app)
      .post('/v1/paints')
      .send(mocks.invalidAreaMock);

    expect(response.status).toBe(400);
    expect(response.body).toEqual(mocks.invalidAreaResponse);
  });

  it('should return error message when total area of doors and windows is bigger than 50% of the total area of the walls', async () => {
    const response = await request(app)
      .post('/v1/paints')
      .send(mocks.invalidAreaWithDoorsOrWindowsMock);

    expect(response.status).toBe(400);
    expect(response.body).toEqual(mocks.invalidAreaWithDoorsOrWindowsResponse);
  });

  it('should return error message when wall height is less than 2.2m and doors are bigger than 0', async () => {
    const response = await request(app)
      .post('/v1/paints')
      .send(mocks.invalidAreaWithDoorsOrWindowsMock);

    expect(response.status).toBe(400);
    expect(response.body).toEqual(mocks.invalidAreaWithDoorsOrWindowsResponse);
  });

  it('should return error message when one field is not inserted', async () => {
    const response = await request(app)
      .post('/v1/paints')
      .send(mocks.invalidMock);

    expect(response.status).toBe(400);
    expect(response.body).toEqual(mocks.invalidResponse);
  })
});