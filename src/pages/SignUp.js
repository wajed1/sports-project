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
                    history("/hero",{state:{id:username}})
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
        <section>
        <div className='cover'>
            <h1 className='Login'>Sign Up</h1>
            <form action="POST">
            <input className='input-field ' value={username} type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
            <input className='input-field ' value={pass} type="password" placeholder='password' onChange={(e) => setPass(e.target.value)}/>
            <button className='login-button' type='submit' onClick={submit}>Sign Up</button>
            </form>
            <p> Already have an account?</p>
            <a className='link' href='/'>Login</a> 
        </div>
        <div class='footer'>
        <li class='quick'>
            <h1>Quick Links</h1>
            <a href="/home">Home Page</a>
            <a href="/about">About Us</a>
            <a href="/">Log In</a>
        </li>
        <li class='contact'>
            <h1>Contact Members</h1>
            <ul>
                <li>Hadi Ghandour +96170711506</li>
                <li>Wajed basbous +96176045923</li>
                <li>Ahmad Dia +96170054234</li>
                <li>Jad Abdallah +96171333931</li>
            </ul>
        </li>
        <div class='follow'>
            <h1>Follow us on</h1>
            <ul>
            <a href=''>Instagram</a>
            <a href=''>Facebook</a>
            </ul>
        </div>
    </div>
    </section>
    );
}

export default SignUp;
