/* eslint-env mocha */
const {expect} = require('chai');
const app = require('supertest')(require('../app'));

/*
  You can find all options for chai assertions in the docs here: https://www.chaijs.com/api/bdd/
*/



describe('Routes', () => {
  describe('GET /', () => {
    it('Contains info', async () => {
    const response = await app.get('/');
    expect(response.status).to.equal(200)
    expect(response.text).to.include("The Acme API")
    })
  });
});