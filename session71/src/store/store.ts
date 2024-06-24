import { configureStore } from "@reduxjs/toolkit";
import hi from "./reducers/countReducer"
import numbersReducer from "./reducers/array"
import check from "./reducers/toggleTheme";
import mode from "./reducers/listMode"

export const store:any = configureStore({
    reducer:{
        count:hi,
        numbers: numbersReducer,
        check:mode,
    },
});
