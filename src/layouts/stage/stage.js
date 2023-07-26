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
function compare( a, b ) {
    if ( a.nbFound < b.nbFound ){
        return 1;
    }
    if ( a.nbFound > b.nbFound ){
        return -1;
    }
    return 0;
}

function sortUsers(userList){
    var newUserList = [...userList]
    return newUserList.sort(compare)
}

function Stage(props) {

    var play = useSelector((state) => state.gameControl.play)
    var hit = useSelector((state) => state.gameControl.hit)
    var miss = useSelector((state) => state.gameControl.miss)
    var userList = useSelector((state) => state.slider.userList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGameControlRequest())
    }, [dispatch]);


    useEffect(() => {
        dispatch(getUsersList())
    }, [dispatch]);



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
                            <Carousel />
                            <br/>
                            {
                                sortUsers(userList).map((user,index)=>{
                                    return <RankRow total={userList.length} index={index} user={user}/>
                                })
                            }
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