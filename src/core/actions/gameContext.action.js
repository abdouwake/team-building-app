import {setPlay,setPartyEnded} from '../../core/reducers/gameControlSlice'
import {getControls,getUserListForUser} from '../../core/services/controls.service'
import {setUserList} from '../reducers/sliderSlice'
export function getGameControlRequest(){
    return function (dispatch){
        return getControls().then(res=>{
            if(res!=undefined){
                if(res.data.play){
                    dispatch(setPlay(res.data.play))
                }else if (res.data.endGame){
                    dispatch(setPartyEnded(res.data.endGame))
                }
                //JSON.parse(x)
            }
        })
    }
}

export function getUsersList(){
    return function (dispatch){
        return getUserListForUser().then(res=>{
            if(res!=undefined){
                console.log(res.data)
                dispatch(setUserList(res.data.data))
                //JSON.parse(x)
            }
        })
    }
}

