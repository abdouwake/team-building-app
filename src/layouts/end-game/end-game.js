import React, {useEffect} from 'react';
import './end-game.scss'
import {useDispatch, useSelector} from "react-redux";
import {RequestGetUserListAll} from "../../core/actions/gameContext.action";
import RankRow from "../stage/carousel/ranking/rank-row";

function EndGame(props) {
    const dispatch = useDispatch()
    var partyEnded = useSelector((state) => state.gameControl.partyEnded)
    var userList = useSelector((state) => state.slider.userList)


    useEffect(() => {
        dispatch(RequestGetUserListAll())
        setInterval(()=>{
            dispatch(RequestGetUserListAll())
        }, 5000);
    }, []);

    return (
        <div className="admin-container">
            {
                userList.map((user,index)=>{
                    return(
                        <RankRow index={index} user={user}/>
                    )
                })
            }
        </div>
    );
}

export default EndGame;