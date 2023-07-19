import {createSlice} from '@reduxjs/toolkit'


export const gameControlSlice = createSlice({
    name:'gameControl',
    initialState:{
        play:false,
        partyEnded:false,
        atemptPicture:"",
        hit:false,
        miss:false,
    },
    reducers: {
        setPlay: (state, action) => {
            state.play = action.payload
        },
        setPartyEnded: (state, action) => {
            state.partyEnded = action.payload
        },
        setHit: (state, action) => {
            state.setHit = action.payload
        },
        setMiss: (state, action) => {
            state.miss = action.payload
        },
        setAttemtPicture: (state, action) => {
            state.atemptPicture = action.payload
        },
    },
})


export const {setPlay,setPartyEnded,setHit,setMiss,setAttemtPicture}= gameControlSlice.actions

export default gameControlSlice.reducer