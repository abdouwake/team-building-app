import React, {useState} from 'react';
import './card.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {Button} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import ReactCardFlip from 'react-card-flip';
import QrReaderComponent from './QrReaderComponent'

function Card(props) {
    const dispatch = useDispatch()
    const selectedUser = useSelector((state) => state.slider.selectedUser)
    const userList = useSelector((state) => state.slider.userList)
    const [isFlipped,hadleClick]=useState(false)
    const [data, setData] = useState('No result');

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div>
                <div className="card-container">
                    <FormatQuoteIcon style={{fontSize:"50px"}}/>
                    <div className="quote-text">
                        {userList.find((u)=>u.id==selectedUser)?.message}
                    </div>
                    <div style={{width:"100%",textAlign:"center"}}>
                        <Button onClick={()=>hadleClick(!isFlipped)} style={{marginBottom:"20px"}}variant="contained">I Know you !</Button>
                    </div>
                </div>

            </div>

            <div>
                <div className="card-container">
                    {
                        isFlipped && <QrReaderComponent />
                    }
                    <div style={{width:"100%",textAlign:"center"}}>
                        <Button  onClick={()=>hadleClick(!isFlipped)} style={{marginBottom:"20px"}}variant="contained">Return!</Button>
                    </div>
                </div>

            </div>
        </ReactCardFlip>


    );
}

export default Card;
