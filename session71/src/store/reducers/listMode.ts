import { createSlice } from "@reduxjs/toolkit";

const checkMode: boolean = false

const modeReducer = createSlice({
    name: "modereducer",
    initialState: checkMode,
    reducers: {
        mode: (state) => !state
    }
})
export const {mode} = modeReducer.actions;
export default modeReducer.reducer;
