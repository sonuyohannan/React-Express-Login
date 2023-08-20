/* eslint-disable @typescript-eslint/no-var-requires */
// express js backend 

// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const cors =  require('cors');

const app= express();
const port = 3001;
app.use(express.json());
app.use(cors());

const users=[
    {userName:'admin',passWord:'password'},
   
];


app.post('/api/login',(req,res)=>{
    const { username, password } = req.body;
    const user = users.find(u => u.userName === username && u.passWord === password);
    if (user) {
        res.json({ message: 'Login successful', user: user.username });
      } else {
        res.status(401).json({ message: 'Login failed' });
      }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });