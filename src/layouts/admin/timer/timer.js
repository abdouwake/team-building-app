import React from 'react';
import './timer.scss'
import Countdown from 'react-countdown';
import moment from "moment";
import { Statistic } from 'antd';
import {useDispatch} from "react-redux";
import {updateGamePlay} from "../../../core/services/controls.service";
import {RequestUpdateGameplay} from "../../../core/actions/gameContext.action";

const Completionist = () => <span>The game is over ! </span>;

function Timer(props) {
    const { Countdown } = Statistic;
    const dispatch = useDispatch()

    let date = Date.parse(moment(props.date))
    const onFinish = () => {
        //do something about it
        dispatch(RequestUpdateGameplay(false,true,date))
    };

    return (
        <div className="countdown-container">
            <Countdown style={{color:"black"}} value={date} onFinish={()=>onFinish()} />
        </div>
    );
}

export default Timer;