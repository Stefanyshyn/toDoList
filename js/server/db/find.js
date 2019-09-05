const func = require('./functions');

function find(){
    const async = require('async');

    async.series([
        func.open,
        func.findAll,
    ],(err, result) => {
            if(err) console.log(err);      
            func.close();
            return result[1];
        });
}
find();

module.exports = find;