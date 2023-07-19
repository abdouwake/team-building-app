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


function Signin(props) {
    const [page,setPage] = useState(1)

    return (
        <div className="page-container">
            {
              page===1 ? <Page1 setPage={setPage}/> : <Page2 setPage={setPage}/>
            }
        </div>
    );
}

export default Signin;