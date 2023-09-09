/* eslint-disable @typescript-eslint/no-var-requires */
// express js backend 

// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const cors =  require('cors');
// eslint-disable-next-line no-undef
const connection = require('./db');
// eslint-disable-next-line no-undef
const bcrypt =require('bcrypt');
  
const app= express();
const port = 3001;
app.use(express.json());
app.use(cors());

// const users=[
//     {userName:'admin',passWord:'password'},
   
// ];


app.post('/api/login',(req,res)=>{
  console.log("inside the api/login")
    const { username, password } = req.body;
    console.log("username",username);
    console.log("password",password);
    console.log(res);

    const sql= 'SELECT * FROM users WHERE username=?';
    console.log("show sql",sql);
    connection.query(sql, [username], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Login failed' });
      } else {
        if (results.length === 1) {
          const user = results[0];
          const storedPasswordHash = user.password; // Assuming the password hash is stored in the 'password' field
  
          // Compare the provided password with the stored password hash
          bcrypt.compare(password, storedPasswordHash, (compareErr, passwordMatch) => {
            if (compareErr) {
              console.error(compareErr);
              res.status(500).json({ message: 'Login failed..' });
            } else if (passwordMatch) {
              // Passwords match, user is authenticated
              res.json({ message: 'Login successful', user: user.username });
            } else {
              // Passwords don't match
              res.status(401).json({ message: 'Invalid password' });
            }
          });
        } else {
          res.status(401).json({ message: 'User not found' });
        }
      }
    });
   
    // connection.query(sql,[username],(err,results)=>{
    //   if(err){
    //     console.error(err);
    //     res.status(500).json({message:'Login failed'});
    //   }else if(results.length===1){
    //       const user=results[0];
    //       //compare password 
    //       bcrypt.compare(password,user.password,(hashErr,hashResult)=>{
    //         if(hashErr){
    //           console.error(hashErr);
    //           res.status(500).json({message:'Login Failed'});
    //         }else if(hashResult){
    //           res.json({message:'Login successful',user:user.username});
    //         }else{
    //           res.status(401).json({message:'Invalid username and password'});
    //         }
    //       });
    //     }else{
    //       res.status(401).json({message:'Invalid username and password'});
    //     }
      
    //   });


} );

app.post('/api/register',(req,res)=>{
  const { username, password } = req.body;
  const sql='INSERT INTO users (username,password) VALUES (?,?)';
  console.log("after the sql operation");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connection.query(sql,[username,password],(err,result)=>{
    if(err){
      console.error(err);
      res.status(500).json({
        message:'Registration failed'
      });
    }else{
      res.json({message:'Registration successful'})
    }
  })
 
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });