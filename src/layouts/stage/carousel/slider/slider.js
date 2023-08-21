import React,{useState,useEffect,useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.scss'
import { useSelector, useDispatch } from 'react-redux'
import {setSelectedUser} from '../../../../core/reducers/sliderSlice'
import  CgiPlaceHolder from '../../../../core/statics/petitUser.png'
const handleDragStart = (e) => e.preventDefault();

const responsive = {
    100 : {
        items: 4,
        itemsFit: 'contain',
    },
}

function Slider(props) {
    const userList = useSelector((state) => state.slider.userList)
    const [selectedKey,setSelectedKey]=useState(-1)


    const selectedUser = useSelector((state) => state.slider.selectedUser)
    const dispatch = useDispatch()
    var user = JSON.parse(sessionStorage.getItem('user'))

    const onClickUser = (id) => {
        dispatch(setSelectedUser(id))
        props.flipCard(false)
    }

    const questionMark =(key,id)=>{
        return(
            <div onClick={() => {
                setSelectedKey(key);
                onClickUser(id)
            }} className={"question-mark-container " +( key==selectedKey ? "selectedKey":"")}>
                <img onClick={(a) => onClickUser(id)}  src={CgiPlaceHolder} className="placeholderpic" />
                {/*<div className={"question-mark-1"}>?</div>*/}
                {/*<div className={"question-mark-2"}>?</div>*/}
                {/*<div className={"question-mark-3"}>?</div>*/}
            </div>
        )
    }

    return (
        <AliceCarousel fadeOutAnimation={true}
                       infinite={true}
                       disableButtonsControls={true}
                       responsive={responsive}
                       mouseTracking
                       >
            {
                userList.filter((u)=>u.id!=user.id).map((user,index) => {
                    return(
                        user.discovered ?
                        <img key={user.id} onClick={(a) => onClickUser(user.id)} className="avatar-container" src={ user.picture}/>
                            : questionMark(index,user.id)
                    )
                })
            }

        </AliceCarousel>
            );
}

export default Slider;