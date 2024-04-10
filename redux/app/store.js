import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "../feature/counter/CounterSlice.js"
const store = configureStore({
    reducer:{
        counter:CounterReducer
    }
})
export default store;