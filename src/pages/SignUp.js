import React, {useState} from 'react';
import './SignUp.css'


export default function SignUp(){
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    return(
        <div className='cover'>
            <h1 className='Login'>Login</h1>
            <input className='input-field ' value={username} type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
            <input className='input-field ' value={pass} type="password" placeholder='password' onChange={(e) => setPass(e.target.value)}/>
            <button className='login-button' type='submit'>Log In</button>
            <p className='link'>
                <a href='/'>forgot password ?  </a> Or <a href='/'>Sign Up</a> 
            </p>
        </div>
    );
}