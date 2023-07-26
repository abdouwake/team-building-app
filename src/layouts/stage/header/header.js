import React from 'react';
import './header.scss'
import QrCode2Icon from '@mui/icons-material/QrCode2';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useSelector, useDispatch } from 'react-redux'
import {toggleModal} from '../../../core/reducers/sliderSlice'

function Header(props) {
    const dispatch = useDispatch()

    return (
        <div className="header-stage">
            <div className="qr-code" onClick={()=>dispatch(toggleModal(true))}>
                <QrCode2Icon style={{color:'gold',fontSize:"30px",marginRight:"5px"}}/>
                <div style={{color:'white'}}>Display QR </div>
            </div>

            <div className="classement">
                <StarHalfIcon style={{color:'gold',fontSize:"30px",marginRight:"5px"}}/>
                <div style={{color:'white'}}>
                    My Ranking : n/30
                </div>
            </div>
        </div>
    );
}

export default Header;