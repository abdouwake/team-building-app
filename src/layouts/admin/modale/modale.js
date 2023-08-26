import React, {useEffect, useState} from 'react';
import {Button} from '@mui/material';
import './modale.scss'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { RequestGetGameplay, RequestUpdateGameplay} from "../../../core/actions/gameContext.action";
import {useDispatch, useSelector} from "react-redux";
import {setDateEnd} from "../../../core/reducers/gameControlSlice";
import moment from "moment";
import {Modal} from 'antd'

export const format = "YYYY-MM-DDTHH:mm:ss";
function Modale(props) {
    var play = useSelector((state) => state.gameControl.play)
    var endGame = useSelector((state) => state.gameControl.partyEnded)
    // var dateEnd = useSelector((state) => state.gameControl.dateEnd)

    const [date,setDate]= useState(null)

    const dispatch = useDispatch()
    const startParty=()=>{
        dispatch(RequestUpdateGameplay(true,false,date))
        props.setOpen(false)
    }

    const updateDateParty=()=>{
        dispatch(RequestUpdateGameplay(play,endGame,date))
        props.setOpen(false)
    }

    useEffect(() => {
        dispatch(RequestGetGameplay())
        setInterval(()=>{
            dispatch(RequestGetGameplay())
        }, 5000);
    }, []);

    return (
        <Modal
            open={props.open}
            footer={[
                <Button key="back" onClick={()=>props.setOpen(false)}>
                    Return
                </Button>,
                <Button key="submit" type="primary"  onClick={ ()=>{
                    if(!play){
                        startParty()
                    }else{
                        updateDateParty()}
                }}>
                    {
                        !play ?
                             'Commencer la partie' :
                            'Modifier'
                            // <Button className="button-violet-cgi" onClick={()=>startParty()}> Commencer la partie !</Button>:
                            // <Button className="button-violet-cgi" onClick={()=>updateDateParty()}> Modifier la date de la partie.</Button>
                    }
                </Button>
            ]}
            onCancel={()=>props.setOpen(false)}
            centered={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{textAlign:"center",padding:"30px"}}>
                    <div style={{marginBottom:"20px",color:"black"}}>
                                <div>
                                   <div>
                                       {
                                           !play ?
                                               "Vous êtes sur le point de démarer le jeux, veuillez fixer une heure d'arrête automatique de la partie.":
                                               "Vous êtes sur le point de modifier la date de fin de la partie"
                                       }
                                   </div>
                                    <br/>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            onChange={(NewDate)=> {
                                                setDate(NewDate)
                                            }}
                                            value={date}
                                            disablePast
                                            // format={"YYYY-MM-DD HH:mm"}
                                            views={['year', 'month', 'day', 'hours', 'minutes']}
                                        />
                                    </LocalizationProvider>
                                </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default Modale;