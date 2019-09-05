const mongoose = require('mongoose');
const config = require('../config/config.json');

mongoose.connect(config.mongodb.uri, {useNewUrlParser : true}).then( () => { console.log("Connection successful") } ).catch( err => { throw err;});
module.exports = mongoose;