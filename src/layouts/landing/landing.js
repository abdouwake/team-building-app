import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import './landing.scss'

export default  function Landing(){
    const [inputValue,setInputValue]=useState(0)
    const counterValue = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return(
        <div className="landing-container">

        </div>
    )
}