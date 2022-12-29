const express = require('express');
const path = require('path');
var mysql = require('mysql');
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUF
app.use(express.urlencoded()); //This function used to get the url post code to used for save purpose.

//database connection
var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "jitu2001",
    database: "nodesql"

});


app.get("/",(req,res)=>{
    res.status(200).render("perform1/sign-up/src/app/user-auth/login/login.component.html");
});
app.post('/',(req,res)=>{
    // name = req.body.uname;
    // email = req.body.uemail;
    // password = req.body.upswd;
    const {
        body: { uname="", uemail = "", upswd = "" }
    } = req;

    // const outputToWrite = `The name of the client is ${uname}, email is ${uemail}, password is ${upswd}`

    // fs.writeFileSync('Result From The Text.txt', outputToWrite);

    // params = {'message': 'Your form has been submited successfully.'}
    // res.status(200).render("index", params);



    con.connect(function(err){
        if(err) throw err;
        console.log("connected");
        // var sql = "CREATE TABLE signup (username varchar(255) primary key, email varchar(255) not null unique, password varchar(50) not null)";
        var sql =`insert into signup values('${uname}', '${uemail}', '${upswd}')`;
        con.query(sql, function(err,result){
            if (err) throw err;
            console.log("Data inserted successfully....",result);
        });
        var sql1 = "select * from signup";
        con.query(sql1, function(err,result){
            if (err) throw err;
            console.log("All data is here",result);
        });
    });
});

// app.post('/',(req,res)=>{
//     con.connect(function(err){
//         if(err) throw err;
//         console.log("connected");
//         var sql1 = "select * from signup";
//         con.query(sql1, function(err,result){
//             if (err) throw err;
//             console.log("All data is here",result);
//         });
//     });
// });


// START THE SERVER
app.listen(port, ()=>{
    console.log(`the application started successfully at port ${port}`);
});