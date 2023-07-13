import React from 'react';
import './ranking.scss'
function RankRow(props) {
    return (
        <div className="rank-container">
            <div className="d-flex">
                <div style={{marginRight:'5px'}} className="rank"><b>#1</b></div>
                <div className="user-name"> Abdesselam Belkhiri</div>
            </div>
           <div className="user-name"> <b>5/30</b></div>
        </div>
    );
}

export default RankRow;