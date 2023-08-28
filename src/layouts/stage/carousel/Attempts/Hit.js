import React, {useEffect, useState} from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import './ModalStyling.css'
import { useSelector, useDispatch } from 'react-redux'
import {setHit, setMiss} from '../../../../core/reducers/gameControlSlice'
import {setAnimate} from "../../../../core/reducers/gameContextSlice";

function Hit(props) {
    const dispatch = useDispatch()
    var animate = useSelector((state) => state.gameContext.animate)

    const userList = useSelector((state) => state.slider.userList)
    const selectedUser = useSelector((state) => state.slider.selectedUser)
    const target = userList.filter((u)=>u.id===selectedUser)[0]

    const animateHit=()=>{
        dispatch(setAnimate("stop"))
        setTimeout(()=>{
            dispatch(setHit(false))
        },3000)
    }

    useEffect(() => {
        animateHit();
    }, []);

    return (
        <div className="modal-container miss">
            <ConfettiExplosion  duration={2000} particleSize={12} zIndex={99999}/>
            <div className={"text-animation "+animate}>
                <img className="user-picture" src={target.picture==="" ? "https://ui-avatars.com/api/?name="+target.completeName:target.picture} />
            </div>
        </div>
    );
}

export default Hit;
