import {combineReducers}  from 'redux';
import isLoggedInReducer from "./isLoggedInReducer";
import counterReducer from "./counterReducer";


const allReducers = combineReducers({
    isLoggedIn: isLoggedInReducer,
    counterReducer : counterReducer
});

export default allReducers;