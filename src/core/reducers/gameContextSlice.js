import {createSlice} from "@reduxjs/toolkit";

export const gameContextSlice = createSlice({
    name:'context',
    initialState:{
        showDiscoverAnimation:true
    },
    reducers: {
        setAnimation: (state,action)=>{
            state.showDiscoverAnimation = action.payload
        }
    }
})

export const {setAnimation}= gameContextSlice.actions
export default gameContextSlice.reducer