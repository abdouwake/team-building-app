import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../core/reducers/counterSlice";
export default configureStore({
    reducer: {
        counter:counterReducer
    },
})