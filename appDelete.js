var deleteFile = require('fs');

deleteFile.unlink('test.txt', function(){
    console.log('File has been deleted');
});