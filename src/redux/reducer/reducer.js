import { combineReducers } from "redux";
import bookingsReducer from "./bookings";

const rootReducers = combineReducers({
    bookings: bookingsReducer
});

export default rootReducers

