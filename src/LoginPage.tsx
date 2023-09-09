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

    const register =async ()=>{
    console.log("inside the register");
    

        // Api 
        const response =await fetch ('http://localhost:3001/api/register',{
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
            console.log('Regsiter failed');
            alert("Register Failed - Feild empty");
            
        }
    }

    const handleLogin =async ()=>{

        console.log("inside the login");
        // Api 
        const response =await fetch ('http://localhost:3001/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username,password})

        });
        console.log("Printing the response",response);
        
        if(response.ok){
         const data =await response.json();

         console.log(data.message);
   
         
         navigate('/home',{state:username});
         
         

        }
        else{
            console.log('Login attempt failed');
            alert("Login Failed");
            
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
             <br />
             <br />

            <button onClick={register}>Regsiter</button>
           
        </div>
        </div>
    );
}

export default LoginPage;