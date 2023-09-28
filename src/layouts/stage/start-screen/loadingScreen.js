import React from 'react';
import './loadingScreen.css'
import {BounceLoader} from 'react-spinners'

function LoadingScreen(props) {
    return (
        <div className="loading-stage">
            <span className="loader"></span>
            <div className="loading-text">Veuillez attendre que l'administrateur démarre le jeu.
                <br/>
                <div style={{display:"flex", justifyContent:"center", marginTop:"80px"}}>
                    <BounceLoader
                        color="#5236ab"
                        size={120}
                    />
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;