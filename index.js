var koa = require('koa');
var app = module.exports = koa();

app.use(function *(next) {
	this.body = "Hello Koa";
});

var port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port === 'number') ? port : 3000;

if(!module.parent) {
	app.listen(port);	
}

console.log("Application is running at " + port + "...");