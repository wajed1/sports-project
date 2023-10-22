import React, {useState} from 'react';
import './SignUp.css'


export default function SignUp(){
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    return(
        <div className='cover'>
            <h1 className='Login'>Login</h1>
            <input value={username} type="text" placeholder='username'/>
            <input value={pass} type="password" placeholder='password'/>
            <button type='submit'>Log In</button>
        </div>
    );
}