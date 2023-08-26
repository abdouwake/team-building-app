import {setPlay, setPartyEnded, setDateEnd} from '../../core/reducers/gameControlSlice'
import {
    getControls,
    getGameplay,
    getUserListAll,
    getUserListForUser,
    updateGamePlay
} from '../../core/services/controls.service'
import {setUserList} from '../reducers/sliderSlice'
import moment from "moment";
import {format} from "../../layouts/admin/modale/modale";

export function getGameControlRequest(){
    return function (dispatch){
        return getGameplay().then(res=>{
            dispatch(setPlay(res.data.data.play))
            dispatch(setDateEnd(res.data.data.endDate))
            dispatch(setPartyEnded(res.data.data.endGame))
        })
    }
}

export function getUsersList(){
    return function (dispatch){
        return getUserListForUser().then(res=>{
            if(res!=undefined){
                dispatch(setUserList(res.data.data))
            }
        })
    }
}

export function RequestGetUserListAll(){
    return function (dispatch){
        return getUserListAll().then(res=>{
            if(res!=undefined){
                dispatch(setUserList(res.data.data))
            }
        })
    }
}



export function RequestUpdateGameplay(play,EndGame,dateEnd){
    // console.log(dateEnd.$d)
    return function (dispatch){
        return updateGamePlay(play,EndGame,dateEnd.$d ).then(res=>{
            dispatch(setPlay(res.data.data.play))
            dispatch(setDateEnd(res.data.data.endDate))
            dispatch(setPartyEnded(res.data.data.endGame))
        })
    }
}

export function RequestGetGameplay(){
    return function (dispatch){
        return getGameplay().then(res=>{
            dispatch(setPlay(res.data.data.play))
            dispatch(setDateEnd(res.data.data.endDate))
            dispatch(setPartyEnded(res.data.data.endGame))
        })
    }
}



