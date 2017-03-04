var express = require('express');
var app = express();



app.get('/', function(req, res){
	console.log("LOADED");
	//res.send('Hello World');
	res.redirect('./public/index.html');
});

app.get('/hello', function(req, res){
	res.send('HELLO WORLD');
});

app.use(function(req,res){
	res.status(404);
	res.render('404');
});

app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});
app.listen(3000, function(){
	console.log('Listening on 3000');
});
