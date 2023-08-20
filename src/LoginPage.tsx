import {useState} from "react";
import './App.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useNavigate } from 'react-router';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LoginPage (){
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
         navigate('/home');
         
         

        }
        else{
            console.log('Login failed');
            
        }
    }

        
 
    
    

    
    return (
        <div className="login-div">
            <h1>
                Login Page
            </h1>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e)=>
                 setUsername(e.target.value)}

                 />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;