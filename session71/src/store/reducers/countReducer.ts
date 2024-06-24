import { createSlice } from "@reduxjs/toolkit";

const countState:number=0;

const countReducer = createSlice ({
    name: "countReducer",
    initialState: countState,
    reducers: {
        increase:(state)=> state+=1,
        decrease:(state)=> state-=1,
        reset:(state)=> state=0,
    }
});
export const {increase, decrease, reset} = countReducer.actions;

export default countReducer.reducer;