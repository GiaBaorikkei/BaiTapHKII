import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "en";

const languageSlice = createSlice({
    name: "language",
    initialState: initialState,
    reducers: {
        changeLanguage: (state) => state === 'en' ? 'vi' : 'en'
    }
})
export const {changeLanguage} = languageSlice.actions;
export default languageSlice.reducer;