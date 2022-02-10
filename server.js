var express = require('express');
var app = express();
var module = require('node modules');
var server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port)
})

app.use(express.static(__dirname));