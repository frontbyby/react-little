var express = require('express');
var path = require('path')
var app = express();

var page = require('./page.generator.js').page;
var port = 8082;

app.use(express.static(path.join(__dirname, '..' , 'public')));

app.get('/',function(req,res) {
	var props = {
		initialCount:9
	};
var html = page(props);
res.end(html)
});
app.listen(port,function(){
	console.log('Listening on port'+ port)
})