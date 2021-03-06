var express = require('express');
var posts = require ('./routes/posts');

var http = require('http');
var app = express();

app.use(express.bodyParser());

app.set('port', process.env.PORT || 8080);

app.get('/posts', posts.findAll);
app.get('/posts/:position', posts.findOne);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

