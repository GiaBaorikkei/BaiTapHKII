import { createSlice } from "@reduxjs/toolkit";

const checkFun: boolean = false;

const checkFunReducer = createSlice({
    name: "checkFunReducer",
    initialState: checkFun,
    reducers: {
        functionShow: (state) => !state
    }
}) 
export const {functionShow} = checkFunReducer.actions;
export default checkFunReducer.reducer;