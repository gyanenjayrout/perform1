const express = require('express');
var router = express.Router();
const app = express();
var con = require('../db')
app.use(express.urlencoded());


app.post('/createUser',(req,res)=>{
    const {
        body: { uname="", uemail = "", upswd = "" }
    } = req;
    // con.connect(function(err){
    //     if(err) throw err;
    //     console.log("connected");
    //     // var sql = "CREATE TABLE signup (username varchar(255) primary key, email varchar(255) not null unique, password varchar(50) not null)";
    //     var sql =`insert into signup values('${uname}', '${uemail}', '${upswd}')`;
    //     con.query(sql, function(err,result){
    //         if (err) throw err;
    //         console.log("Data inserted successfully....",result);
    //     });
    // });

    var sql =`insert into signup values('${uname}', '${uemail}', '${upswd}')`;
    con.query(sql, function(err,result){
        if (err) throw err;
        console.log("Data inserted successfully....",result);
    });
    res.end();
});
app.get('/seeUsers', (req,res)=>{
    con.connect(function(err){
        var sql1 = `select * from nodesql.signup`;
        con.query(sql1, function(err,result){
            if (err) throw err;
            res.send({
                messsage: "All data is here",
                body: result
            })
        });
    });
});
app.put('/updateUser', (req,res)=>{
    const {
        body: { uname="", updateemail=""}
    } = req;
    con.connect(function(err){
        var sql1 = `update nodesql.signup set email='${updateemail}' where (username = '${uname}')`;
        con.query(sql1, function(err,result){
            if (err) throw err;
            res.send({
                messsage: `${uname}'s email updated Successfully`,
            })
        });
    });
});
app.delete('/deleteUser', (req,res)=>{
    const {
        body: { uname=""}
    } = req;
    con.connect(function(err){
        var sql1 = `delete  from nodesql.signup where (username = '${uname}')`;
        con.query(sql1, function(err,result){
            if (err) throw err;
            res.send({
                messsage: `${uname} Deleted Successfully`
            })
        });
    });
});

module.exports = app ;