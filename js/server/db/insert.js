
const func = require('./functions');

function insert(id, task){
    const async = require('async');

    async.series([
        func.open,
        func.insert.bind(null, id, task),
    ],(err, result) => {
        if(err) console.log(err);
        else console.log(result) 
        func.close();
        return result[1];
    });
}

module.exports = insert;