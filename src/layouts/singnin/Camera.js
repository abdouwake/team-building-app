import React, {useRef,useCallback,useState} from 'react';
import Webcam from "react-webcam";
import './Camera.css'
import {Button, TextField} from "@mui/material";
import {setPicture} from '../../core/reducers/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import './Camera.css'
const Camera = (props) =>{
    const dispatch = useDispatch()
    const picture = useSelector((state) => state.user.picture)
    const navigate = useNavigate();
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setPicture(imageSrc));
    }, [webcamRef]);


    return (
        <div className="container" style={{display:"flex",justifyContent:"center"}}>
            <div className="title-message">Take a picture !</div>
            {
                picture==="" ?
                    <Webcam  height={300} width={300} ref={webcamRef} >
                        {({ getScreenshot }) => (
                            <Button variant="contained"  onClick={capture}>Take</Button>
                        )}
                    </Webcam>
                    :
                    <div style={{textAlign:"center"}}>
                        <img className="user-picture"  src={picture} />
                        <div>
                            <Button style={{margin:"20px"}} variant="contained"  onClick={()=>dispatch(setPicture(""))}>Retake</Button>
                            <Button variant="contained" onClick={()=> {
                                props.setOpenCamera(false)
                            }} >Save</Button>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Camera;
