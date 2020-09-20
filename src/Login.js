import React from "react"
import ReactDOM from "react-dom"
import logo from './lendelogoblack.png';

import './Login.css'

import {
    Container,
    Row,
    Col
} from "reactstrap";

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
                <div className="buttons" >
                    <button className='button1'>
                        Login
                    </button>
                    <button className='button1'>
                        Sign Up
                    </button>
                    </div>
            </div>
        </div>
    )

}

export default Login