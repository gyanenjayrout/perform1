var express = require('express');
var path = require('path');
// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(express.json());
app.listen(3000,()=>{
    console.log('Server started at port 3000..');
});
module.exports = app;