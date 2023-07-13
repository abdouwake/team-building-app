import React from 'react';
import './stage.scss'
import Header from "./header/header";
import Profile from "./profil-stage/profile";
import Carousel from "./carousel/carousel";
import RankRow from "./carousel/ranking/rank-row";
function Stage(props) {
    return (
        <div className="stage-container">
            <div className="stage"  style={{marginBottom:'20px'}}>
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
        </div>
    );
}

export default Stage;