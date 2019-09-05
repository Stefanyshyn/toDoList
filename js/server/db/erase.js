
const func = require('./functions');

function erase(id){
    const async = require('async');

    async.series([
        func.open,
        func.erase.bind(null, id),
        ],(err, result) => {
            if(err) console.log(err);
            else console.log(result[1]) 
            func.close();
            return result[1];
        });
}
module.exports = erase;