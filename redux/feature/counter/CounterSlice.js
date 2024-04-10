import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const CounterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increase: state => state + 1,
        decrease: state => state - 1,
        reset: state => initialState 
    }
});

export const { increase, decrease, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
