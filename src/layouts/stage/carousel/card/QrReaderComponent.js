import React, {useRef,useEffect,useCallback,useState} from 'react';
import Webcam from "react-webcam";
import {setAttemtPicture,setMiss,setHit} from '../../../../core/reducers/gameControlSlice'
import { useSelector, useDispatch } from 'react-redux'
import {Button, TextField} from "@mui/material";
import {setAttemptPicture} from '../../../../core/reducers/gameControlSlice'
import {setUserList} from '../../../../core/reducers/sliderSlice'

import QrReader from 'react-qr-scanner'



function QrReaderComponent(props) {
    const dispatch = useDispatch()

    const selectedUser = useSelector((state) => state.slider.selectedUser)
    const userList = useSelector((state) => state.slider.userList)

    const checkEmail = (email) =>{
        props.hadleClick(false)
        let target = userList.find((u)=>u.id===selectedUser)
        if (target?.email.toLowerCase()==email?.toLowerCase()){
            dispatch(setHit(true))
            let newList = JSON.parse(JSON.stringify([...userList]))
            var idx = newList.findIndex((u)=>u.id==selectedUser)
            var user = newList[idx]
            user.discovered = true
            user.nbFound = user.nbFound+1

            newList[idx]= user
            dispatch(setUserList(newList))
        }else{
            dispatch(setMiss(true))
        }
    }

    const handleScan=(data)=>{
        if(data!=null){
            let email =data.text
            checkEmail(email)
             try{
            }catch (e){
                console.log(data)
            }
        }
    }

    const handleError=(err)=>{
        console.error(err)
    }

    return (
        <div>
            <QrReader
                delay={1000}
                onError={handleError}
                onScan={handleScan}
            />
        </div>

    )
}
export default QrReaderComponent;
