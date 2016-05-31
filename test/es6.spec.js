var should = require('should');
var Person = require('../lib/person.js');

describe("ES6 script is compiled", function () {
	it("when compiled successfully", function () {
		var p = new Person("foobar", 30);
		p.toString().should.equal("name is foobar and age is 30");
	});
});