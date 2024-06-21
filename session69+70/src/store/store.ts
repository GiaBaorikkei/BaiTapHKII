import { createStore,combineReducers } from "redux";
import productReducer from "../reducers/reducer";
const rootReducers = combineReducers({
    productReducer,
});
const store = createStore(rootReducers);
export default store;