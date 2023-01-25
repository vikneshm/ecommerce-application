import React, { useRef, useState } from 'react'
import './register.css'

const Register = () => {
    const userRef = useRef();
    const [user, setUser] = useState('');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    return(
        <div className='flex-container'>
        <section className="container">
             <h1>Register</h1>
            <form>
                <label htmlFor='username'>
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <p className={user ? "instructions" : "offscreen"}>
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>
                <label htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <p className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: !@#$
                </p>
                <label htmlFor="confirm_pwd">
                    Confirm Password:
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required 
                />
                <p className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    Must match the first password input field.
                </p>
                <button>Sign Up</button>
            </form>
            <p>
                Already registered?<br />
                <span>
                    <a href="#">Sign In</a>
                </span>
            </p>
        </section>
        </div>
    )
}

export default Register