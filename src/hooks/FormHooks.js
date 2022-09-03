import { useState, useEffect } from "react";

export default function useForm(fecha,dataBooking, setDataBooking, setSnipper, snipper) {

  async function getData() {
    const hoy = parseFloat(fecha.getDate())<10?"0"+(fecha.getDate()+1):fecha.getDate()+1;
    const mesActual = parseFloat(fecha.getMonth() + 1)<10?"0"+fecha.getMonth():fecha.getMonth(); 
    const dataBookingCopy=dataBooking;
    dataBookingCopy.date=fecha.getFullYear()+"-"+mesActual+"-"+hoy;
    dataBookingCopy.time=(parseFloat(fecha.getHours())<10?"0"+fecha.getHours():fecha.getHours())+":"+(parseFloat(fecha.getMinutes())<10?"0"+fecha.getMinutes():fecha.getMinutes());
    dataBookingCopy.destiny="city";
    dataBookingCopy.source="city";
    dataBookingCopy.numberofpassengers="";
    setDataBooking(dataBookingCopy)
    setSnipper(false)
  }

  useEffect(() => {
    getData();
  }, [snipper]);
}