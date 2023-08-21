import React,{useEffect} from 'react';
import './stage.scss'
import Header from "./header/header";
import Profile from "./profil-stage/profile";
import Carousel from "./carousel/carousel";
import RankRow from "./carousel/ranking/rank-row";
import QrDisplay from './qr-display/qr-display'
import {toggleModal} from '../../core/reducers/sliderSlice'
import TemptationResult from './carousel/Attempts/TemptationResult'
import { useSelector, useDispatch } from 'react-redux'
import Hit from './carousel/Attempts/Hit'
import Miss from './carousel/Attempts/Miss'
import LoadingScreen from '../stage/start-screen/loadingScreen'
import {getGameControlRequest,getUsersList} from '../../core/actions/gameContext.action'
import {INTERVAL} from '../../config'
import {compare,sortUsers} from '../../utilities'

function Stage(props) {

    var play = useSelector((state) => state.gameControl.play)
    var hit = useSelector((state) => state.gameControl.hit)
    var miss = useSelector((state) => state.gameControl.miss)
    var userList = useSelector((state) => state.slider.userList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersList())
        setInterval(()=>{
            dispatch(getUsersList())
        }, 5000);
    }, []);



    return (
        <div className="stage-container">
            {
                play ?
                    <div>
                        <QrDisplay />
                        <div id="style-2" className="stage "  style={{marginBottom:'20px'}}>
                            <Header/>
                            <br/>
                            <Profile/>
                            <br/>
                            <div style={{textAlign:"center"}}>
                                Continuer ton profil !

                            </div>
                            <Carousel />
                            <br/>
                        </div>
                        <TemptationResult component={<Hit />} open={hit}/>
                        <TemptationResult component={<Miss />} open={miss}/>
                    </div>

                    : <LoadingScreen />
            }

        </div>
    );
}

export default Stage;