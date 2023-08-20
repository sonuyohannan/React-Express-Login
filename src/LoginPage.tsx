import {useState} from "react";
import './App.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useNavigate } from 'react-router';
import './LoginPage.css';

interface loginProps{
    username:string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LoginPage (props:loginProps){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const navigate = useNavigate();
    const navigate = useNavigate();

    const[username,setUsername] =   useState('');
    const[password,setPassword] =   useState('');

    const handleLogin =async ()=>{
        // console.log("login with the username and  password",username,password);

        // //save username and password in handle login
        // if(username=='admin' && password=='password'){
        //     localStorage.setItem('username',username);
        //     localStorage.setItem('password',password);

        //     //push to  home page
        //     navigate('/home');
            
        // }else{
        //     console.log('Username and  password required currently:', username,password);
        // }

        // Api 
        const response =await fetch ('http://localhost:3001/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username,password})

        });
        if(response.ok){
         const data =await response.json();

         console.log(data.message);
   
         
         navigate('/home',{state:username});
         
         

        }
        else{
            console.log('Login failed');
            
        }
    }

        
 
    
    

    
    return (
        <div className="container">

       
        <div className="form-container">
            <h1>
                Login Page
            </h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e)=>
                 setUsername(e.target.value)}

                 /> 
          

           
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            
               
            </form>
            <button onClick={handleLogin}>Login</button>
           
        </div>
        </div>
    );
}

export default LoginPage;