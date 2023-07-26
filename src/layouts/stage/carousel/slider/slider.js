import React,{useState,useEffect,useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.scss'
import { useSelector, useDispatch } from 'react-redux'
import {setSelectedUser} from '../../../../core/reducers/sliderSlice'

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    100 : {
        items: 4,
        itemsFit: 'contain',
    },
}

function Slider(props) {
    const userList = useSelector((state) => state.slider.userList)

    useEffect(()=>{
        dispatch(setSelectedUser(userList[0].id))
    },[])


    const selectedUser = useSelector((state) => state.slider.selectedUser)
    const dispatch = useDispatch()
    var user = JSON.parse(sessionStorage.getItem('user'))

    const onClickUser = (id) => {
        dispatch(setSelectedUser(id))
        props.flipCard(false)
    }

    return (
        <AliceCarousel fadeOutAnimation={true}
                       infinite={true}
                       disableButtonsControls={true}
                       responsive={responsive}
                       mouseTracking
                       >
            {
                userList.filter((u)=>u.id!=user.id).map((user) => {
                    return(
                        <img key={user.id} onClick={(a) => onClickUser(user.id)} className="avatar-container" src={user.discovered ?
                            user.picture:"https://images.all-free-download.com/images/graphiclarge/question_mark_icon_vector_281250.jpg"}/>
                    )
                })
            }

        </AliceCarousel>
            );
}

export default Slider;