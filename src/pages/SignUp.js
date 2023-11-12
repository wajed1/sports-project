import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Login.css'


function SignUp() {
    const history=useNavigate();

    const [username,setUsername]=useState('')
    const [pass,setPass]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                username,pass
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{id:username}})
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
            <h1 className='Login'>SignUp</h1>
            <form action="POST">
            <input className='input-field ' value={username} type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
            <input className='input-field ' value={pass} type="password" placeholder='password' onChange={(e) => setPass(e.target.value)}/>
            <button className='login-button' type='submit' onClick={submit}>Sign Up</button>
            </form>
            <p className='link'>
                 Already have an account? <a href='/Login'>Login</a> 
            </p>
        </div>
    );
}

export default SignUp;