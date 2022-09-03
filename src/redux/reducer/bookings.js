import {
    GET_BOOKINGS, DELETE_BOOKING, ADD_BOOKING
  } from "../actions/actions";
  
  
  const initialState = {
    bookings: [],
    booking: []
  };
  
  const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKINGS:
            return {
            ...state,
            bookings: action.payload,
            };
        case DELETE_BOOKING:
            return {
                ...state,
                bookings: action.payload,
            };
        case ADD_BOOKING:
            return {
                ...state,
                bookings: action.payload,
            };
      default:
        return state;
    }
  };
  
  export default bookingsReducer;