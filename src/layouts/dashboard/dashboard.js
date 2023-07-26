import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Waiting from './Waiting/waiting'
import Event from './Event/Event'
import video from './motion.mp4'
import './dashboard.scss'
import TemptationResult from '../stage/carousel/Attempts/TemptationResult'

function Dashboard(props) {

    const [waiting,setWaiting] = useState(false)
    const showDiscoverAnimation = useSelector((state) => state.gameContext.showDiscoverAnimation)

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
                <img className="logo-cgi" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/1280px-CGI_logo.svg.png' />

                <div className="ranking">
                    <div className="ranking-row">
                        <div className="rank-side" style={{fontSize:'40px',fontWeight:"600"}} style={{fontSize:'40px',fontWeight:"600"}}>
                            #1
                        </div>
                        <div className="profile-side">
                            <div className="avatar-user">
                                <img className="avatar-user" src="https://img.freepik.com/vecteurs-premium/personnage-avatar-homme-affaires_24877-18284.jpg?w=2000" />
                            </div>
                            <div className="nom-complet">
                                    Abdesselam Belkhiri
                            </div>
                        </div>
                        <div className="stat-side">
                            2/3 Found
                        </div>
                    </div>
                    <div className="ranking-row">
                        <div className="rank-side" style={{fontSize:'40px',fontWeight:"600"}}>
                            #1
                        </div>
                        <div className="profile-side">
                            <div className="avatar-user">
                                <img className="avatar-user" src="https://img.freepik.com/vecteurs-premium/personnage-avatar-homme-affaires_24877-18284.jpg?w=2000" />
                            </div>
                            <div className="nom-complet">
                                Abdesselam Belkhiri
                            </div>
                        </div>
                        <div className="stat-side">
                            2/3 Found
                        </div>
                    </div>
                    <div className="ranking-row">
                        <div className="rank-side" style={{fontSize:'40px',fontWeight:"600"}}>
                            #1
                        </div>
                        <div className="profile-side">
                            <div className="avatar-user">
                                <img className="avatar-user" src="https://img.freepik.com/vecteurs-premium/personnage-avatar-homme-affaires_24877-18284.jpg?w=2000" />
                            </div>
                            <div className="nom-complet">
                                Abdesselam Belkhiri
                            </div>
                        </div>
                        <div className="stat-side">
                            2/3 Found
                        </div>
                    </div>
                    <div className="ranking-row">
                        <div className="rank-side" style={{fontSize:'40px',fontWeight:"600"}}>
                            #1
                        </div>
                        <div className="profile-side">
                            <div className="avatar-user">
                                <img className="avatar-user" src="https://img.freepik.com/vecteurs-premium/personnage-avatar-homme-affaires_24877-18284.jpg?w=2000" />
                            </div>
                            <div className="nom-complet">
                                Abdesselam Belkhiri
                            </div>
                        </div>
                        <div className="stat-side">
                            2/3 Found
                        </div>
                    </div>
                    <div className="ranking-row">
                        <div className="rank-side" style={{fontSize:'40px',fontWeight:"600"}}>
                            #1
                        </div>
                        <div className="profile-side">
                            <div className="avatar-user">
                                <img className="avatar-user" src="https://img.freepik.com/vecteurs-premium/personnage-avatar-homme-affaires_24877-18284.jpg?w=2000" />
                            </div>
                            <div className="nom-complet">
                                Abdesselam Belkhiri
                            </div>
                        </div>
                        <div className="stat-side">
                            2/3 Found
                        </div>
                    </div>
                    <div className="ranking-row">
                        <div className="rank-side" style={{fontSize:'40px',fontWeight:"600"}}>
                            #1
                        </div>
                        <div className="profile-side">
                            <div className="avatar-user">
                                <img className="avatar-user" src="https://img.freepik.com/vecteurs-premium/personnage-avatar-homme-affaires_24877-18284.jpg?w=2000" />
                            </div>
                            <div className="nom-complet">
                                Abdesselam Belkhiri
                            </div>
                        </div>
                        <div className="stat-side">
                            2/3 Found
                        </div>
                    </div>
                    <div className="ranking-row">
                        <div className="rank-side" style={{fontSize:'40px',fontWeight:"600"}}>
                            #1
                        </div>
                        <div className="profile-side">
                            <div className="avatar-user">
                                <img className="avatar-user" src="https://img.freepik.com/vecteurs-premium/personnage-avatar-homme-affaires_24877-18284.jpg?w=2000" />
                            </div>
                            <div className="nom-complet">
                                Abdesselam Belkhiri
                            </div>
                        </div>
                        <div className="stat-side">
                            2/3 Found
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;