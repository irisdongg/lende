import React from "react"
import logo from './lendelogoblack.png';

import './Login.css'

function Login(props) {
    return (

        <div className="Login">
            <div className="content">
                <img src={logo} className='logo-login' alt={'lende logo'} />
                <br/>
                <br/>
                <label>User Name </label>
                <input type="text" data-test="username"/>
                <br/>
                <br/>
                <label> Password  </label>
                <input type="password" data-test="password"/>
                <br/>
                <br/>
                <div className="buttonss" >
                    <button className='button1-login'>
                        Login
                    </button>
                    <button className='button1-login'>
                        Sign Up
                    </button>
                    </div>
            </div>
        </div>
    )

}

export default Login