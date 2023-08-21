import React, {useState} from 'react';
import './signin.scss'
import cgiLogo from "../../core/statics/cgi.png";
import {Button, TextField} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import QRCode from "react-qr-code";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import  Camera from './Camera'
import { useSelector, useDispatch } from 'react-redux'
import {setFunFact} from '../../core/reducers/userSlice'


function Page2(props) {

    const [openCamera,setOpenCamera] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    return (
        <div className="page-container">
            {
            openCamera ?
                <div className="form-container">
                    <Camera setOpenCamera={setOpenCamera}/>
                </div>
            :
            <div className="form-container">
                <div className="cgi-logo">
                    <img src={cgiLogo} />
                </div>
                <div className="login-placeholder-text">
                    Partagez un FunFact qui sera visible par tout vos collègues, soyez créatifs !
                </div>


                <div style={{textAlign:"center"}}>
                    <TextField style={{width:"80%"}} placeholder="Dites nous tout !"
                               multiline
                               rows={4}
                               maxRows={4} value={props.funFact}
                               onChange={e=>dispatch(setFunFact(e.target.value))}
                               id="standard-basic" label="Dites nous tout !" variant="standard" />
                </div>


                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                    <Button onClick={()=>setOpenCamera(true)} variant="contained"  >  <CameraAltIcon style={{marginRight:"5px"}}/>Prendre un selfie</Button>
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                    <img className="user-picture" src={
                        props.picture!="" ? props.picture :
                            "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                    } style={{height:"100px",width:"100px"}}/>
                </div>




                <div className="form-control-app">
                    <div className="button-container">
                        <Button className="m-2" variant="contained" onClick={()=>props.setPage(1)}>Précédant</Button>
                        <Button variant="contained" onClick={()=>props.login()}>Créer</Button>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default Page2;