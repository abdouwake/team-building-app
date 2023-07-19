import React from 'react';
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
function Stage(props) {

    const hit = useSelector((state) => state.gameControl.hit)
    const miss = useSelector((state) => state.gameControl.miss)

    return (
        <div className="stage-container">
            <QrDisplay />
            <div id="style-2" className="stage "  style={{marginBottom:'20px'}}>
                <Header/>
                <br/>
                <Profile/>
                <Carousel />
                <br/>
                <RankRow/>
                <RankRow/>
                <RankRow/>
                <RankRow/>
            </div>

            <TemptationResult component={<Hit />} open={hit}/>
            <TemptationResult component={<Miss />} open={miss}/>
        </div>
    );
}

export default Stage;