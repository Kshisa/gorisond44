'use strict';

const supertest = require('supertest'); 
const test = require('unit.js');
const app = require('../server.js');

const request = supertest(app);

describe('Tests app', function() {
  it('verifies get', function(done) {
    request.get('/').expect(200).end(function(err, result) {

      done(err);
    });
  });
});
