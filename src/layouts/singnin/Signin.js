import React, {useState} from 'react';
import './signin.scss'
import cgiLogo from "../../core/statics/cgi.png";
import {Button, TextField} from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Signin(props) {
    const [page,setPage] = useState(0)
    const [nom,setNom] = useState(null)
    const [prenom,setPrenom] = useState(null)
    const [unite,setUnite] = useState(null)
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const navigate = useNavigate();

    return (
        <div className="page-container">

            {
                page===0 &&    <div className="form-container">
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
                        <TextField value={prenom} onChange={e=>setNom(e.target.value)} className="input-button-login" id="standard-basic" label="First name" variant="standard" />
                        <br/>

                        <TextField value={nom} onChange={e=>setPrenom(e.target.value)} className="input-button-login" id="standard-basic" label="Family name" variant="standard" />
                        <br/>
                        <TextField value={unite} onChange={e=>setUnite(e.target.value)} className="input-button-login" id="standard-basic" label="Unity" variant="standard" />
                        <br/>

                        <TextField value={email} onChange={e=>setEmail(e.target.value)} className="input-button-login" id="standard-basic" label="Email" variant="standard" />
                        <br/>
                        <TextField value={password} onChange={e=>setPassword(e.target.value)}  className="input-button-login" id="standard-basic" label="Password" variant="standard" />

                        <div className="button-container">
                            <Button variant="contained"  onClick={()=>setPage(1)}>Next</Button>
                        </div>
                    </div>
                </div>
            }

            {
                page===1 &&    <div className="form-container">
                    <div className="cgi-logo">
                        <img src={cgiLogo} />
                    </div>
                    <div className="login-placeholder-text">
                        Share something fun about yourself, a fun fact, an old funny accident, or a situation that is not frequent for you.
                    </div> <br/>
                    <br/>
                    <br/>
                <div style={{textAlign:"center"}}>
                    <TextField style={{width:"80%"}} placeholder="Tell us everything !"
                                 multiline
                                 rows={4}
                                 maxRows={4} value={email} onChange={e=>setEmail(e.target.value)}  id="standard-basic" label="Tell us everything !" variant="standard" />
                </div>

                    <br/>
                    <br/>
                    <br/>
                    <div className="form-control-app">
                            <div className="button-container">
                                <Button className="m-2" variant="contained" onClick={()=>setPage(0)}>Previous</Button>
                                <Button variant="contained" onClick={()=>navigate('/stage')}>Finish</Button>
                            </div>
                    </div>
                </div>
            }




        </div>
    );
}

export default Signin;