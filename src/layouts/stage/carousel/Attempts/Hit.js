import React from 'react';
import './ModalStyling.css'
import { useSelector, useDispatch } from 'react-redux'
import ConfettiExplosion from 'react-confetti-explosion';

function Hit(props) {
    return (
        <div className="modal-container hit">
            <ConfettiExplosion zIndex={9999999} force={0.5} particleCount={400} duration={5000} class="confetti-effect" />
        </div>
    );
}

export default Hit;
