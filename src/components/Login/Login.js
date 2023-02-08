import React, { useRef, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    const userFocusRef = useRef()
    const [userName,setUserName] = useState('')
    const [signinPwd,setSigninPwd] = useState('')

    useEffect(() => {
        userFocusRef.current.focus();
    }, [])

    const handleSignIn = (e) => {
        e.preventDefault()
        
    }

    return(
        <div className='flex-container'>
            <section className='section-container'>
                <h1>Sign In</h1>
                <form className='register-form'>
                    <label htmlFor='username' className="form-label">
                    Username:
                    </label>
                    <input
                    type='text'
                    id='username'
                    autoComplete='off'
                    ref={userFocusRef}
                    required
                    onChange={(e)=>{setUserName(e.target.value)}}
                    value={userName}
                    />
                    <label htmlFor='password' className="form-label">
                        Password:
                    </label>
                    <input
                    type='password'
                    id='password'
                    autoComplete='off'
                    required
                    onChange={(e)=>{setSigninPwd(e.target.value)}}
                    value={signinPwd}
                    />
                    <button className='form-button' onClick={(e)=>{handleSignIn(e)}} type='submit' >Sign In</button>
                </form>
                <div>
                    Not Registered?
                    <Link to='/register' className='link'>Sign Up</Link>
                </div>
            </section>
        </div>
    )
}

export default Login;