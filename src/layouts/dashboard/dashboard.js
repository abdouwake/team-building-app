import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Waiting from './Waiting/waiting'
import Event from './Event/Event'
import video from './motion.mp4'
import './dashboard.scss'
import TemptationResult from '../stage/carousel/Attempts/TemptationResult'
import RowEvent from "./row-event/row-event";
import {RequestGetTentatives} from "../../core/actions/Discover.action";
import {RequestGetUserListAll} from "../../core/actions/gameContext.action";

function Dashboard(props) {

    const [waiting,setWaiting] = useState(false)
    const showDiscoverAnimation = useSelector((state) => state.gameContext.showDiscoverAnimation)
    const tentatives = useSelector((state) => state.gameContext.tentatives)
    var userList = useSelector((state) => state.slider.userList)
    const dispatch = useDispatch()

    // RequestGetTentatives
    useEffect(() => {
        dispatch(RequestGetTentatives())
        dispatch(RequestGetUserListAll())
        setInterval(()=>{
            dispatch(RequestGetTentatives())
            dispatch(RequestGetUserListAll())

        }, 10000);
    }, []);


    return (
        <div className="dashboard-scene">
            <TemptationResult component={<Event />} open={showDiscoverAnimation}/>

            <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4"/>
            </video>

            <div className="content">
                {
                    waiting && <Waiting/>
                }

                <div className="ranking">
                    {
                        [...userList]?.sort((a, b) => b.nbFound-a.nbFound).slice(0,3).map((user,idx)=>{
                            return(
                                <div className="ranking-row">
                                    <div className="rank-side" style={{fontSize:'40px',fontWeight:"600"}}>
                                        {"#"+parseInt(idx+1)}
                                    </div>
                                    <div className="profile-side">
                                        <div className="avatar-user">
                                            <img className="avatar-user" src={user.picture==="" ? "https://ui-avatars.com/api/?name="+user.completeName:user.picture} />
                                        </div>
                                        <div className="nom-complet">
                                            {user.completeName}
                                        </div>
                                    </div>
                                    <div className="stat-side">
                                        {user.nbFound + "/"+userList.length+" Found"}
                                    </div>
                                </div>

                            )

                        })
                    }
                </div>

                <div className="row-event-container">
                    {
                        tentatives.map((item)=>{
                            return <RowEvent trouve={item.trouve} nomComplet1={item.nomComplet1} nomComplet2={item.nomComplet2}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Dashboard;