import {api} from '../../config'
import {errorHandler} from '../error-handler/ErreurHandler'

export function getControls(){
    return api.get("gameplay/all").catch((e)=>errorHandler(e))
}

export function getUserListForUser(){
    var user = JSON.parse(sessionStorage.getItem('user'))
    return api.get("discover/userListForUser/"+user.id).catch((e)=>errorHandler(e))
}