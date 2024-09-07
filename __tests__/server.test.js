// __tests__/server.test.js
const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.static('public')); // Serve the static files from the 'public' directory

describe('GET /', () => {
  it('should return the static HTML page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200); // Check that the server returns a 200 status code
    expect(res.text).toContain('<h1>Welcome to my simple Express server!</h1>'); // Check for specific content in the HTML
  });
});

