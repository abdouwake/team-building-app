import React from 'react';
import './profile.scss'
import WorkIcon from '@mui/icons-material/Work';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
function Profile(props) {
    return (
        <div className="profil-container">
            <div className="user-avatar">
                <img className="avatar-pic" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt=""/></div>
            <div className="name-user">
                Belkhiri Abdesselam
            </div>
            <div className="grade-user">
               <WorkIcon style={{marginRight:"5px"}}/> Director, CGI Montreal
            </div>
            <div className="results"> <AutoAwesomeIcon style={{marginRight:"5px"}}/>2/30 found !  </div>
        </div>
    );
}

export default Profile;