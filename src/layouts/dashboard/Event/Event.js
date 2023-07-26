import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ConfettiExplosion from 'react-confetti-explosion';
import {setAnimation} from '../../../core/reducers/gameContextSlice'
import './Event.scss'
function Event(props) {
    const dispatch = useDispatch()
    const [animate, setAnimate] = useState((true))

    useEffect(() => {
        setAnimate("moves")
        setTimeout(()=>{
            setAnimate("stops")
            dispatch(setAnimation(false))
        },3000)
    }, []);


    return (
        <div className=" " style={{width:'800px',textAlign:"center"}} >
            <ConfettiExplosion  style={{marginLeft:'200px'}} force={0.8}  width={1600}particleCount={250} duration={3000} particleSize={20} zIndex={99999}/>
            <div className="discover-text">
                Alain Discovered Gerrard !
            </div>
            <div className={"text-animation "+animate}>
                <img className="user-picture1" src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png" />
                <img className="user-picture2" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" />
            </div>
        </div>
    );
}

export default Event;