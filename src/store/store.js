import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../core/reducers/sliderSlice'
import userReducer from '../core/reducers/userSlice'
import gameControlReducer from '../core/reducers/gameControlSlice'
export default configureStore({
    reducer: {
        slider:sliderReducer,
        user:userReducer,
        gameControl:gameControlReducer
    },
})