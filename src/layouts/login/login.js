import React, {useState} from 'react';
import './login.scss'
import cgiLogo from '../../core/statics/cgi.png'
import {Button, TextField} from "@mui/material";
function Login(props) {
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    return (
        <div className="page-container">
            <div className="form-container">
                <div className="cgi-logo">
                    <img src={cgiLogo} />
                </div>
                <div className="login-placeholder-text">
                    Connectez vous pour de profiter du jeux !
                    Pas encore inscrit ?
                    <a href="/signin"> crée un compte.</a>
                </div>
                <br/>
                <div className="form-control">
                    <TextField value={email} onChange={e=>setEmail(e.target.value)} className="input-button-login" id="standard-basic" label="Email" variant="standard" />
                    <br/>
                    <TextField value={password} onChange={e=>setPassword(e.target.value)}  className="input-button-login" id="standard-basic" label="Password" variant="standard" />
                    <div className="button-container">
                        <Button variant="contained">Login</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;