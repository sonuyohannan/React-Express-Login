// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const mysql=require('mysql2');
//create a mysql connection pool
console.log("inside the db.js file");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const connection=mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'',
    database:'login_db'
});

// eslint-disable-next-line no-undef
module.exports=connection;