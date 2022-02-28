import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import movieReducer from "./movieReducer";
import flightReducer from "./flightReducers";

const rootReducer = combineReducers({
    emp: employeeReducer,
    flights: flightReducer,
    movies: movieReducer
});

export default rootReducer