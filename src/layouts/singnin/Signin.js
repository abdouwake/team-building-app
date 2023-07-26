import React, {useState} from 'react';
import './signin.scss'
import cgiLogo from "../../core/statics/cgi.png";
import {Button, TextField} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import QRCode from "react-qr-code";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import  Camera from './Camera'
import { useSelector, useDispatch } from 'react-redux'
import Page1 from './Page1'
import Page2 from './Page2'
import {signinRequest} from '../../core/actions/user.action';

function Signin(props) {

    const [page,setPage] = useState(1)
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const firstName = useSelector((state) => state.user.firstName)
    const lastName = useSelector((state) => state.user.lastName)
    const email = useSelector((state) => state.user.email)
    const password = useSelector((state) => state.user.password)
    const unity = useSelector((state) => state.user.unity)

    const picture = useSelector((state) => state.user.picture)
    const funFact = useSelector((state) => state.user.funFact)

    const login = () =>{
        dispatch(signinRequest(firstName,lastName,unity,email,password,picture,funFact,redirect))
        // navigate('/stage')
    }

    const redirect=()=>{
        navigate('/stage')
    }

    return (
        <div className="page-container">
            {
              page===1 ?
                  <Page1
                      setPage={setPage}
                      firstName={firstName}
                      lastName={lastName}
                      email={email}
                      password={password}
                      unity={unity}
              /> :
                  <Page2
                      picture={picture}
                      funFact={funFact}
                      login={login}
                      setPage={setPage}
                  />
            }
        </div>
    );
}

export default Signin;