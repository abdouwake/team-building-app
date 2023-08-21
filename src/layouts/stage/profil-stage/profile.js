import React from 'react';
import './profile.scss'
import WorkIcon from '@mui/icons-material/Work';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useSelector, useDispatch } from 'react-redux'
import banner from '../../../core/statics/CGIBanner.jpg'
import {Progress} from "antd";
import QRCode from "react-qr-code";

function Profile(props) {
    const userList = useSelector((state) => state.slider.userList)
    var user = JSON.parse(sessionStorage.getItem('user'))
    const showQr = useSelector((state) => state.gameContext.showQr)
    var SIZE= Math.round((userList.filter((u)=>u.discovered).length / userList.length )* 100)


    return (
        <div className="profil-container">
            <div className="content-area">
                {
                    showQr ?
                        <QRCode
                            // value={btoa(user.email)}
                            value={user.email}
                            bgColor={"white"}
                            // fgColor={'var(--redCgi)'}
                            fgColor={'black'}
                        />
                        :
                        <Progress  size={250} type="circle" percent={SIZE} strokeColor={{ '0%': 'var(--violetCgi)', '100%': 'var(--redCgi)' }} />
                }
                {/*{*/}
                {/*    true ?*/}
                {/*        :""*/}
                {/*}*/}
            </div>
            {/*<div className="user-avatar">*/}
                {/*<div className="banner-container">*/}
                {/*    <img className="avatar-pic" src={user.picture} alt=""/>*/}
                {/*    <img className="banner-pic" src={banner} alt=""/>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="name-user" >*/}
                {/*{user.completeName}*/}
            {/*</div>*/}
            {/*<div className="grade-user">*/}
               {/*<WorkIcon style={{color:"var(--violetCgi)",marginRight:"5px"}}/> {user.unit}*/}
            {/*</div>*/}
            {/*<div className="results"> <AutoAwesomeIcon style={{marginRight:"5px",color:"var(--violetCgi)"}}/>*/}
            {/*    {*/}
            {/*        userList.filter((u)=>u.discovered).length*/}
            {/*        +"/"+userList.length+" !"*/}
            {/*    }   </div>*/}
        </div>
    );
}

export default Profile;