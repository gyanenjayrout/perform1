var express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var path = require('path');
var app = express();
// var indexRouter = require('../sign-up/src/app/user-auth/login/login.component');
app.use(cors());
app.use(bodyparser.json());
var usersRouter = require('./routes/users');
// app.use('/', indexRouter);
app.use('/api/signup', usersRouter);
app.listen(3000,()=>{
    console.log('Server started at port 3000..');
});
module.exports = app;