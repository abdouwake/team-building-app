import React, {useRef,useCallback,useState} from 'react';
import Webcam from "react-webcam";
import './Camera.css'
import {Button} from "@mui/material";
import {setPicture} from '../../core/reducers/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import './Camera.css'
const Camera = (props) =>{
    const dispatch = useDispatch()
    const picture = useSelector((state) => state.user.picture)
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        props.setOpenCamera(false)
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setPicture(imageSrc));
    }, [webcamRef]);


    return (
        <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            {
                picture === "" ?
                    <Webcam  height={300} width={300} ref={webcamRef} >
                        {({ getScreenshot }) => (
                            <div className="form-control-app">
                                <div class="buttons-container">
                                    <Button variant="contained" onClick={capture}>Prise</Button>
                                </div>
                            </div>
                        )}
                    </Webcam>
                :
                    <div className="form-control-app">
                        <img className="user-picture" src={picture} />
                        <div class="buttons-container">
                            <Button variant="contained" onClick={()=>dispatch(setPicture(""))}>Réessayer</Button>
                        </div>

                    </div>
            }
        </div>
    );
}

export default Camera;
