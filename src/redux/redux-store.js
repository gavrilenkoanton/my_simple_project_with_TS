import {combineReducers, createStore} from "redux";
import mondayReducer from "./monday-reducer";
import settingsReducer from "./settings-reducer";


let reducers = combineReducers({
    settings: settingsReducer,
    monday: mondayReducer

});

let store = createStore(reducers);

export default store;