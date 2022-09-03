import { useState, useEffect } from "react";

export default function useFetch(dataBooking,idBooking,setBooking) {

  async function getData() {
    var bookingExit=dataBooking.filter((data)=>{
        if(data.id===idBooking){
            return data
        }
    })
    setBooking(bookingExit)
  }

  useEffect(() => {
    getData();
  }, []);
}