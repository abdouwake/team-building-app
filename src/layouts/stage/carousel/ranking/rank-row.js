import React from 'react';
import './ranking.scss'
function RankRow(props) {
    return (
        <div className="rank-container">
            <div className="d-flex">
                <div style={{marginRight:'5px'}} className="rank"><b>{"#"+props.index}</b></div>
                <div className="user-name"> {props.user.completeName }</div>
            </div>
           <div className="user-name"> <b>{props.user.nbFound+"/" +props.total} found</b></div>
        </div>
    );
}

export default RankRow;