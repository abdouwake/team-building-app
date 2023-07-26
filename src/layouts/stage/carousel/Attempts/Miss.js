import React, {useState,useLayoutEffect, useEffect} from 'react';
import './ModalStyling.css'
import { useSelector, useDispatch } from 'react-redux'
import ConfettiExplosion from 'react-confetti-explosion';
import {setMiss} from '../../../../core/reducers/gameControlSlice'
function Miss(props) {
    const [animate,setAnimate] = useState("move")
    const dispatch = useDispatch()

    useEffect(() => {
        setAnimate("stop")
        setTimeout(()=>{
            dispatch(setMiss(false))
        },700)
    }, []);


    return (
        <div className="modal-container miss">
            <div className={"text-animation "+animate}>
                <img className="false-error"
                     src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_1280.png" />
            </div>
        </div>
    );
}

export default Miss;
