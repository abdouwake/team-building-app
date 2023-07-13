import React from 'react';
import './card.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {Button} from "@mui/material";
function Card(props) {
    return (
        <div className="card-container">
                <FormatQuoteIcon style={{fontSize:"50px"}}/>
            <div className="quote-text">
                Aujourd'hui, je reçois les résultats des rattrapages de mes partiels. Ma note a bien augmenté, mais ce n'est toujours pas suffisant pour avoir mon année. Il me manque 0,044 points. VDM
            </div>
            <div style={{width:"100%",textAlign:"center"}}>
                <Button style={{marginBottom:"20px"}} variant="contained">I know you ! </Button>
            </div>
        </div>
    );
}

export default Card;