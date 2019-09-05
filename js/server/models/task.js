let mongoose = require('../libs/mongoose.js');
let Schema = mongoose.Schema;

let schema = new Schema({
        description: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    });
    
module.exports = mongoose.model('Task', schema);