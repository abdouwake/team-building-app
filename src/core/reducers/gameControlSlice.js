import {createSlice} from '@reduxjs/toolkit'


export const gameControlSlice = createSlice({
    name:'gameControl',
    initialState:{
        play:false,
        partyEnded:false,
        temptUser:{
            picture:'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg'},
        atemptPicture:"",
        hit:false,
        miss:false
    },
    reducers: {
        setPlay: (state, action) => {
            state.play = action.payload
        },
        setPartyEnded: (state, action) => {
            state.partyEnded = action.payload
        },
        setHit: (state, action) => {
            state.hit = action.payload
        },
        setMiss: (state, action) => {
            state.miss = action.payload
        },
        setTemptUser: (state, action) => {
            state.temptUser = action.payload
        },
        setAttemptPicture: (state, action) => {
            state.atemptPicture = action.payload
        },
    },
})


export const {setPlay,setPartyEnded,setHit,setMiss,setAttemptPicture}= gameControlSlice.actions

export default gameControlSlice.reducer