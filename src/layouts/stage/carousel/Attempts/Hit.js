import React, {useEffect, useState} from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import './ModalStyling.css'
import { useSelector, useDispatch } from 'react-redux'
import {setHit} from '../../../../core/reducers/gameControlSlice'

function Hit(props) {
    const [animate,setAnimate] = useState("move")
    const dispatch = useDispatch()
    var hit = useSelector((state) => state.gameControl.hit)

    const userList = useSelector((state) => state.slider.userList)
    const selectedUser = useSelector((state) => state.slider.selectedUser)
    const target = userList.filter((u)=>u.id===selectedUser)[0]


    useEffect(() => {
        setAnimate("stop")
        setTimeout(()=>{
            dispatch(setHit(false))
        },2000)
    }, []);


    return (
        <div className="modal-container miss">
            <ConfettiExplosion  duration={2000} particleSize={12} zIndex={99999}/>
            <div className={"text-animation "+animate}>
                <img className="user-picture" src={target.picture} />
            </div>
        </div>
    );
}

export default Hit;
