import { createSlice } from "@reduxjs/toolkit";

interface NumbersState {
  numbers: number[];
}

const initialState: NumbersState = {
  numbers: [],
};

const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    generateNumbers: (state) => {
      state.numbers.splice(0, state.numbers.length, ...Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)));
    },
  },
});

export const { generateNumbers } = numbersSlice.actions;
export default numbersSlice.reducer;
