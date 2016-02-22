var express = require('express');
var router = require('./router');
var database = require('./database');
var app = express();

exports.init = function(){
    
    database.init(function(){
        
        router.init(app);
    
        app.listen(3000, function(){

            console.log('Server listening on port 3000');

        });
        
    });
    
};