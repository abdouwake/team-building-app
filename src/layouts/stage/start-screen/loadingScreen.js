import React from 'react';
import './loadingScreen.css'
function LoadingScreen(props) {
    return (
        <div className="loading-stage">
            <span className="loader"></span>
            <div className="loading-text">Please wait for the administrator to start the game.</div>
        </div>
    );
}

export default LoadingScreen;