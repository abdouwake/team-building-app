import React from 'react';
import {setMiss,setHit} from '../../../../core/reducers/gameControlSlice'
import { useSelector, useDispatch } from 'react-redux'
import {setUserList} from '../../../../core/reducers/sliderSlice'
import QrReader from 'react-qr-scanner'
import {setAnimate, setAnimation, setTentative} from "../../../../core/reducers/gameContextSlice";
import {addDiscoveryRequest, RequestAddTentative} from "../../../../core/actions/Discover.action";



function QrReaderComponent(props) {
    const dispatch = useDispatch()
    const selectedUser = useSelector((state) => state.slider.selectedUser)
    const userList = useSelector((state) => state.slider.userList)
    const userSession = JSON.parse(sessionStorage.getItem('user'))
    const startAnimation=(liste)=>{
        liste.map((item)=>{
            dispatch(setTentative(item))
            setAnimate("moves")
            setTimeout(()=>{
                setAnimate("stops")
                dispatch(setAnimation(false))
            },3000);
                if(item.trouve){
                    setTimeout(()=>{
                        dispatch(setMiss(false))
                    },3000)
                }else{
                    setTimeout(()=>{
                        dispatch(setHit(false))
                    },3000)
                }
        }
        )
    }

    const checkEmail = (email) =>{
        props.hadleClick(false)
        let target = userList.find((u)=>u.id===selectedUser)
        if (target?.email.toLowerCase()==email?.toLowerCase()){
            dispatch(addDiscoveryRequest(userSession.id,target.id))
            let newList = JSON.parse(JSON.stringify([...userList]))
            var idx = newList.findIndex((u)=>u.id==selectedUser)
            var user = newList[idx]
            user.discovered = true
            user.nbFound = user.nbFound+1

            newList[idx]= user
            dispatch(setUserList(newList))
            dispatch(RequestAddTentative(userSession.id,target.id,true))

        }else{
            dispatch(setMiss(true))
            dispatch(RequestAddTentative(userSession.id,userSession.id,false))
        }
    }

    const handleScan=(data)=>{
        if(data!=null){
            let email =data.text
            checkEmail(email)
            try{
            }catch (e){
                console.log(data)
            }
        }
    }

    const handleError=(err)=>{
        console.error(err)
    }

    return (
        <div>
            <QrReader
                delay={500}
                onError={handleError}
                onScan={handleScan}
            />
        </div>

    )
}
export default QrReaderComponent;
