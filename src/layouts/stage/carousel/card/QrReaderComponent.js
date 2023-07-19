import React, {useRef,useEffect,useCallback,useState} from 'react';
import Webcam from "react-webcam";
import {setAttemtPicture} from '../../../../core/reducers/gameControlSlice'
import { useSelector, useDispatch } from 'react-redux'
import {Button, TextField} from "@mui/material";
function QrReaderComponent(props) {
    const atemptPicture = useSelector((state) => state.gameControl.atemptPicture)
    const dispatch = useDispatch()

    const handleScan=(result)=>{
        if(result){
            console.log(result)
        }
    }

    return (
        <div className="containerv" style={{display:"flex",justifyContent:"center"}}>
        </div>
    )
}
export default QrReaderComponent;
