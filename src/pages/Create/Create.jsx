import React, {useState, useEffect}from 'react'
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Nav from '../../components/NavBar/Navbar.jsx';

const Create = () => {
    const [dataRender,setDataRender]=useState("");

    useEffect(()=>{
        setDataRender(JSON.parse(window.localStorage.getItem("bookings")))
    },[])
    
    const setCreateBooking=(dataBooking)=>{
      var idMax=0;
      var newBooking=[];
      dataRender?.map((data)=>{
        if(parseFloat(data.id)>idMax){
          idMax=parseFloat(data.id)
        }
        newBooking.push(data)
      })
      dataBooking.id=idMax+1+"";
      newBooking.push(dataBooking);
      window.localStorage.setItem("bookings",JSON.stringify(newBooking))
    }
    return (
      <div>
          <Nav /> 
          <div className="flex items-center justify-center flex-col mt-28 mb-10 min-h-[300px]">
              <h1 className="font-bold mb-5">Create Booking</h1>
              <Form setCreateBooking={setCreateBooking}/>
          </div>
          <Footer />
      </div>
    )
}

export default Create