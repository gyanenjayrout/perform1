const mysql = require('mysql');
const express = require('express');
const app = express();

var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "jitu2001",
    database: "nodesql"

});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    // var sql = "CREATE TABLE signup (username varchar(255) primary key, email varchar(255) not null unique, password varchar(50) not null)";
    var sql = `select username, password from signup where email='jitu@gmail.com'`;
    // var sql = "insert into signup values('vicky', 'vicky@gmail.com', 'Vky1234')";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("All data is here",result);
    });
    
    app.listen(8000,"127.0.0.1",()=>{
        console.log("server is connected")
    });
});