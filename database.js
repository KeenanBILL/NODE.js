const { createPool } = require ('mysql')


pool.query('SELECT  * FROM signup', err, result, fields) => {
    if(err) {
        return console.log(result);
    }

}