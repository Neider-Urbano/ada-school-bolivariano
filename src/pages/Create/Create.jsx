import React, {useState, useEffect}from 'react'
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Nav from '../../components/NavBar/Navbar.jsx';
import imagenBus from "../../assets/images/login.jpg"

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
          <div className="px-5 flex items-center justify-center flex-col md:flex-row mt-28 mb-10 min-h-[300px]">
              <Form setCreateBooking={setCreateBooking}/>
              <div className="mt-7 w-[80%] md:w-[50%] md:ml-10 md:mt-0 border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <img src={imagenBus} alt="" />
              </div>
          </div>
          <Footer />
      </div>
    )
}

export default Create