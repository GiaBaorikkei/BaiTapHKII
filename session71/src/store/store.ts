import { configureStore } from "@reduxjs/toolkit";
import hi from "./reducers/countReducer"
import numbersReducer from "./reducers/array"
import check from "./reducers/toggleTheme";
import mode from "./reducers/listMode"
import functionShow from "./reducers/function"
import changeLanguage from "./reducers/changeLanguage";


export const store:any = configureStore({
    reducer:{
        count:hi,
        numbers: numbersReducer,
        check:check,
        mode:mode,
        functionShow:functionShow,
        changeLanguage: changeLanguage,
    },
});
