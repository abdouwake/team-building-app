import React, {useState} from 'react';
import './login.scss'
import cgiLogo from '../../core/statics/cgi.png'
import {Button, TextField} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import {loginRequest} from "../../core/actions/user.action"
import {seEmail,setPassword} from '../../core/reducers/userSlice'
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onLogin=()=>{
        dispatch(loginRequest(email,password,navigateFunction))
    }

    const navigateFunction=()=>{
        navigate("/stage")
    }



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
                <div className="form-control-card">
                    <TextField value={email} onChange={e=>setEmail(e.target.value)} className="input-button-login" id="standard-basic" label="Email" variant="standard" />
                    <br/>
                    <TextField type="password" value={password} onChange={e=>setPassword(e.target.value)}  className="input-button-login" id="standard-basic" label="Mot de passe" variant="standard" />
                    <div className="button-container">
                        <Button variant="contained" onClick={()=>onLogin()}>Login</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;