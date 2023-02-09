var openFile = require('fs');

openFile.open('test.txt', 'r', function(err, data){
    if(err){
        return console.error(err);
    }
    var buffer = new Buffer.alloc(1024);
    openFile.read(data, buffer, 0, buffer.length, 0, function(err, bytes){
        if(err)
        throw err;

        if(bytes > 0){
            console.log(buffer.slice(0, bytes).toString());

        }
        openFile.close(data, function(err){
            if(err) throw err;
        });
    });
});