/* eslint-env mocha */
const {expect} = require('chai');
const app = require('supertest')(require('../app'));
const {syncAndSeed} = require("../db")
/*
  You can find all options for chai assertions in the docs here: https://www.chaijs.com/api/bdd/
*/



describe('Routes', () => {
  beforeEach(()=> syncAndSeed())
  describe('GET /', () => {
    it('Contains info', async () => {
    const response = await app.get('/');
    expect(response.status).to.equal(200)
    expect(response.text).to.include("The Acme API")
    })
  });
  describe('GET /api/movies', () => {
    it('return movies', async () => {
    const response = await app.get('/api/movies');
    expect(response.status).to.equal(200)
    expect(response.body.length).to.equal(4)
    })
  });
  describe('GET /api/actors', () => {
    it('return actors', async () => {
    const response = await app.get('/api/actors');
    expect(response.status).to.equal(200)
    expect(response.body.length).to.equal(5)
    })
  });
});
