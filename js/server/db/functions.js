
function open(callback){ 
    const mongoose = require('../libs/mongoose.js');
    mongoose.connection.on('open', callback);
}

function insert(id, description, callback){
    const Task = require('../models/task.js')
    let task = new Task({ id: id, description: description });
    task.save(callback);
}

function close(callback){
    const mongoose = require('mongoose');
    mongoose.disconnect(callback);
}

function erase(id, callback){
    const Task = require('../models/task.js');
    Task.findOneAndDelete({id: id}, callback);
}

function findAll(callback){
    const Task = require('../models/task.js');
    Task.find(callback);
}

module.exports = {
    open: open,
    insert: insert,
    erase: erase,
    close: close,
    findAll: findAll,
}