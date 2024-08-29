import { app, server } from '../src/index';
const request = require('supertest'); // Require import to prevent type error with supertest

describe('GET /', () => {
    // This block runs after all the tests in this describe block are complete
    afterAll(() => {
        server.close(); // Close the server to prevent open handle issues with Jest
    });

    // This is an individual test case
    it('should return Hello, TypeScript with Express!', async () => {
        // Make a GET request to the root endpoint ('/') using Supertest
        const res = await request(app).get('/');

        // Assert that the HTTP status code of the response is 200 (OK)
        expect(res.statusCode).toEqual(200);

        // Assert that the response body contains the expected text
        expect(res.text).toBe('Hello, TypeScript with Express!');
    });
});