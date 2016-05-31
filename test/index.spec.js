// Now the require("supertest").agent(app.listen()); 
// will get a port number but since I’m running the test continuously it will not shut down. 
// The next time I run my tests, the require("supertest").agent(app.listen()); 
// will be executed again. I will get the EADDRINUSE since it’s already running.
// Solution: http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html

var app = require('../index.js'),
	server = app.listen(),
    request = require('supertest').agent(server),
    should = require('should');

describe("Test home page", function () {
	it("should display correct text", function (done) {
		request.get('/')
		       .expect(200)
		       .expect("Hello Koa")
		       .end(done);
	});
});