// var express = require('express')

// var app = express();

// var server = app.listen(5000, function() {
//     console.log('Node server is running!');
// });

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-student-data', function(req, res){
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + 'Submitted Succesfully!');
});

var server = app.listen(3000, function(){
    console.log('Node server is running.');
});