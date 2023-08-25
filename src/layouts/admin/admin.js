import React, {useEffect, useState} from 'react';
import './admin.scss'
import {Button} from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Timer from "./timer/timer";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import {useDispatch, useSelector} from "react-redux";
import Modale  from "./modale/modale";
import RankRow from "../stage/carousel/ranking/rank-row";
import {RequestGetUserListAll} from "../../core/actions/gameContext.action";

function Admin(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(RequestGetUserListAll())
        setInterval(()=>{
            dispatch(RequestGetUserListAll())
        }, 5000);
    }, []);

    var play = useSelector((state) => state.gameControl.play)
    var partyEnded = useSelector((state) => state.gameControl.partyEnded)
    var [open,setOpen]= useState(false)
    var dateEnd = useSelector((state) => state.gameControl.dateEnd)
    var userList = useSelector((state) => state.slider.userList)

    return (
        <div className="admin-container">
            <Modale open={open} setOpen={setOpen} play={true}/>

            <div className="form-container">
                <div className="header-admin">
                    <img className="logo-cgi" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/2560px-CGI_logo.svg.png"/>
                    <div className="admin-title">
                        <AdminPanelSettingsIcon className="admin-pictogram" />
                        <div>Compte Administrateur</div>
                    </div>
                </div>

                {
                    play && !partyEnded &&
                        <div className="timer" style={{color:"white"}}>
                            {dateEnd != undefined && dateEnd != null && dateEnd != "" && < Timer date={dateEnd} />}
                        </div>
                }

            <div className="actions-container">
                {
                    play ?
                        ""
                        :
                        <div className="action-item">
                            <div className="d-flex align-items-center justify-content-center">
                                <RocketLaunchIcon className="action-item-img"/>
                                <div className="action-item-text">Commencer la partie</div>
                            </div>
                            <Button onClick={()=>setOpen(true)} className="button-violet-cgi" variant="contained">Start</Button>

            </div>
                }

                {
                    play && !partyEnded &&
                        <div className="action-item">
                            <div className="d-flex align-items-center justify-content-center">
                                <DriveFileRenameOutlineIcon className="action-item-img"/>
                                <div>
                                    <div className="action-item-text">Modifier la date</div>
                                    <div className="action-item-text " style={{color:"var(--redCgi)",fontWeight:"900",fontSize:"15px"}}>{dateEnd}</div>
                                </div>
                            </div>
                            <Button className="button-violet-cgi" onClick={()=>setOpen(true)} style={{height:'30px'}} variant="contained">Update</Button>
                        </div>
                }
            </div>
                <div style={{color:"black",paddingLeft:'20px',fontSize:"18px"}}>
                    Total des utilisateurs inscrits : {userList.length}
                </div>

                <div className="participants-container">

                    {
                        userList.map((user,idx)=>{
                            return <RankRow total={userList.length} index={idx} user={user} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Admin;