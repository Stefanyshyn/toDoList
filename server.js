const express = require('express');
const bodyParser = require('body-parser');

let app = express();

const jsonParser = express.json();

app.post('/find', jsonParser,  function(request, response){
    const find = require('./js/server/db/find.js');
    let tasks = find()
    response.send(tasks);
})

app.post('/insert', jsonParser, function(request, response){
    const insert = require('./js/server/db/insert.js');
    
    insert(request.body.id, request.body.task);
    response.end();
})

app.post('/erase', jsonParser, function(request, response){
    const erase = require('./js/server/db/erase.js');
    erase(request.body.id);
    response.end();
})

app.get("/", function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.get('/index.css', function(req, res) {
    res.sendFile(__dirname + "/" + "index.css");
});

app.get('/js/client/vue.js', function(req, res) {
    res.sendFile(__dirname + "/" + "js/client/vue.js");
});




app.listen(3000);