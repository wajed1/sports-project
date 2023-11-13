import React, {useEffect,useState} from 'react';
import './Login.css'
import axios from "axios"
import { Form, useNavigate} from "react-router-dom"


function Login(){
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const history=useNavigate();
    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                username,pass
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:username}})
                }
                else if(res.data==="notexist"){
                    alert("User did not sign up or the password is wrong")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

    return(
        <div className='cover'>
            <h1 className='Login'>Login</h1>
            <form action='POST'>
            <input className='input-field ' value={username} type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
            <input className='input-field ' value={pass} type="password" placeholder='password' onChange={(e) => setPass(e.target.value)}/>
            <button className='login-button' type='submit' onClick={submit}>Log In</button>
            </form>
                <a className='link' href='/'>Forgot password?</a>
                <a className='link' href='/SignUp'>Sign Up instead</a>   
        </div>
    );
}

export default Login;