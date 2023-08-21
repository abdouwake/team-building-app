import React, {useState,useLayoutEffect, useEffect} from 'react';
import './ModalStyling.css'
import { useSelector, useDispatch } from 'react-redux'
import {setMiss} from '../../../../core/reducers/gameControlSlice'
import {setAnimate} from "../../../../core/reducers/gameContextSlice";
function Miss(props) {
    const dispatch = useDispatch()
    var animate = useSelector((state) => state.gameContext.animate)

    const animateMiss=()=>{
        dispatch(setAnimate("stop"))
        setTimeout(()=>{
            dispatch(setMiss(false))
        },3000)
    }

    useEffect(() => {
        animateMiss();
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
