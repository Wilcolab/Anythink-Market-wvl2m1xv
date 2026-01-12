var supertest = require('supertest');
var chai = require('chai');
var app = require('../server');

global.app = app;
global.expect = chai.expect;
global.request = supertest(app);



function exponent(base, power) {
  if (typeof base !== 'number' || typeof power !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return Math.pow(base, power);
}

module.exports = { exponent };
