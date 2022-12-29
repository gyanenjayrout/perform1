const mysql = require('mysql');


var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "jitu2001",
    database: "nodesql"

});

con.connect(function(err){
    if(err) throw err;
    console.log("Mysql connected");
});
module.exports=con;