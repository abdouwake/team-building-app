import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount} from '../../core/reducers/counterSlice'
import './landing.scss'

export function Landing(){
    const [inputValue,setInputValue]=useState(0)
    const counterValue = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return(
        <div className="landing-container">
            <div> count : {counterValue}</div>
            <div style={{display:"flex"}}>
                <button onClick={()=>dispatch(increment())}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>decrement</button>
            </div>

            <br/>

            <div style={{display:"flex"}}>
                <input value={inputValue} onChange={e=>setInputValue(Number(e.target.value))} placeholder="increment value"/>
                <button onClick={()=>dispatch(incrementByAmount(inputValue))}> increment</button>
                <button onClick={()=>dispatch(decrementByAmount(inputValue))}> increment</button>
            </div>
        </div>
    )
}