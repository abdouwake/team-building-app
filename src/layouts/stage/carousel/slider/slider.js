import React,{useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.scss'
import { useSelector, useDispatch } from 'react-redux'
import {setSelectedUser} from '../../../../core/reducers/sliderSlice'
const handleDragStart = (e) => e.preventDefault();

const responsive = {
    20: {
        items: 4,
        itemsFit: 'contain'
    },
}

function Slider(props) {
    const userList = useSelector((state) => state.slider.userList)
    const selectedUser = useSelector((state) => state.slider.selectedUser)
    const dispatch = useDispatch()

    let items =userList.map((user)=>{
        return user.discovered ?
            <img onClick={()=>dispatch(setSelectedUser(user.id))} className="avatar-container" src={user.avatar} />
            :
            <img onClick={()=>dispatch(setSelectedUser(user.id))} className="avatar-container"  src="https://images.all-free-download.com/images/graphiclarge/question_mark_icon_vector_281250.jpg"/>
            })
    return (
        <AliceCarousel  disableButtonsControls={true} responsive={responsive} mouseTracking items={items} />
    );
}

export default Slider;