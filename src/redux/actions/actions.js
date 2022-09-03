export const GET_BOOKINGS = "GET_BOOKINGS";
export const DELETE_BOOKING = "DELETE_BOOKING";
export const ADD_BOOKING = "ADD_BOOKING";

export const getBookings = () => {
    return async function (dispatch) {
        const bookings=JSON.parse(window.localStorage.getItem("bookings"))
        dispatch({
                type: GET_BOOKINGS,
                payload: bookings,
        });
    };
};

export const deleteBooking = (id) => {
    const bookings=JSON.parse(window.localStorage.getItem("bookings"))
    var deleteBooking=bookings.filter((filter)=>filter.id!==id+"")
    window.localStorage.setItem("bookings",JSON.stringify(deleteBooking))
    return async function (dispatch) {
        dispatch({
                type: DELETE_BOOKING,
                payload: deleteBooking,
        });
    };
};

export const postBooking = (dataBooking) => {
    var idMax=0;
    var newBooking=[];
    var dataRender=JSON.parse(window.localStorage.getItem("bookings"));
    dataRender?.map((data)=>{
        if(parseFloat(data.id)>idMax){
          idMax=parseFloat(data.id)
        }
        newBooking.push(data)
    })
    dataBooking.id=idMax+1+"";
    newBooking.push(dataBooking);
    window.localStorage.setItem("bookings",JSON.stringify(newBooking))

    return async function (dispatch) {
        dispatch({
                type: ADD_BOOKING,
                payload: newBooking,
        });
    };
};