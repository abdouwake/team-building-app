import React from 'react';
import {Modal, Box} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {toggleModal} from '../../../core/reducers/sliderSlice'
import QRCode from 'react-qr-code';

function QrDisplay(props) {
    const openQrModal = useSelector((state) => state.slider.openQrModal)
    const dispatch = useDispatch()
    const email = useSelector((state) => state.user.email)
    var user = JSON.parse(sessionStorage.getItem('user'))


    return (
        <Modal style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            open={openQrModal}
            onClose={()=>dispatch(toggleModal(!openQrModal))}
            centered={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div>
                <QRCode
                    // value={btoa(user.email)}
                    value={user.email}
                    bgColor={"white"}
                    // fgColor={'var(--redCgi)'}
                    fgColor={'black'}
                />
            </div>
        </Modal>
    );
}
export default QrDisplay;