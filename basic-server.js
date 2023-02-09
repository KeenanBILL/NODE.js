// A BASIC Node Server
const http = require('http');

const server = http.createServer(function(req, res){
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);

    let dataObj = {'id':123, 'name':'James', 'email':'james20.org'};
    let data = JSON.stringify(dataObj);

    res.end(data);
});

server.listen(1234, function(){
    console.log('Listening on port 1234')
})