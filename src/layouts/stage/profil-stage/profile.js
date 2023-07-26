import React from 'react';
import './profile.scss'
import WorkIcon from '@mui/icons-material/Work';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useSelector, useDispatch } from 'react-redux'

function Profile(props) {
    const userList = useSelector((state) => state.slider.userList)
    var user = JSON.parse(sessionStorage.getItem('user'))


    return (
        <div className="profil-container">
            <div className="user-avatar">
                <img className="avatar-pic" src={user.picture} alt=""/></div>
            <div className="name-user">
                {user.completeName}
            </div>
            <div className="grade-user">
               <WorkIcon style={{marginRight:"5px"}}/> {user.unit===null ? "Information Non disponible":user.unit}
            </div>
            <div className="results"> <AutoAwesomeIcon style={{marginRight:"5px"}}/>
                {
                    userList.filter((u)=>u.discovered).length
                    +"/"+userList.length+" !"
                }   </div>
        </div>
    );
}

export default Profile;