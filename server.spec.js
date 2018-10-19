const request = require('supertest');

describe('server start', () => {
    let server;
    beforeEach(function () {
        delete require.cache[require.resolve('./server')];
        server = require('./server')
    });
    afterEach(function (done) {
        server.close(done);
    });
    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
});
