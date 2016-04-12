/*var http = require('http');

http.createServer(function(request, response){
    response.end("Hello");
}).listen(8080, function(){
    console.log("on 8080");
});*/

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/user', function(request,response){
    /*var name = request.query.name;
    var age = request.query.age;
    var id = request.query.id;
    response.end("Hello, "+ name + ". Your age is- " + age);*/
    response.sendfile(path.join(__dirname, '/views/index.html'));
});
app.listen(8080);
//end of file
