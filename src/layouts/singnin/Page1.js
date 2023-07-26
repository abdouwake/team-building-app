import React, {useState} from 'react';
import './signin.scss'
import cgiLogo from "../../core/statics/cgi.png";
import {Button, TextField} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import QRCode from "react-qr-code";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import  Camera from './Camera'
import { useSelector, useDispatch } from 'react-redux'
import {setFirstName,setLastName,setPassword,setUnity,setEmail} from '../../core/reducers/userSlice'

function Page1(props) {
    const [openCamera,setOpenCamera] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()



    return (
        <div className="form-container">
            <div className="cgi-logo">
                <img src={cgiLogo} />
            </div>
            <div className="login-placeholder-text">
                Inscrivez vous pour de profiter du jeux !
                déjà inscrit ?
                <a href="/login"> connecte toi !</a>
            </div>
            <br/>
            <div className="form-control-app">
                <TextField value={props.firstName} onChange={e=>dispatch(setFirstName(e.target.value))} className="input-button-login" id="standard-basic" label="First name" variant="standard" />
                <br/>
                <TextField value={props.lastName} onChange={e=>dispatch(setLastName(e.target.value))} className="input-button-login" id="standard-basic" label="Family name" variant="standard" />
                <br/>
                <TextField value={props.unity} onChange={e=>dispatch(setUnity(e.target.value))} className="input-button-login" id="standard-basic" label="Unity" variant="standard" />
                <br/>
                <TextField value={props.email} onChange={e=>dispatch(setEmail(e.target.value))} className="input-button-login" id="standard-basic" label="Email" variant="standard" />
                <br/>
                <TextField type="password" value={props.password} onChange={e=>dispatch(setPassword(e.target.value))}  className="input-button-login" id="standard-basic" label="Password" variant="standard" />
                <div className="button-container">
                    <Button variant="contained"  onClick={()=>props.setPage(2)}>Next</Button>
                </div>
            </div>
        </div>
    );
}

export default Page1;