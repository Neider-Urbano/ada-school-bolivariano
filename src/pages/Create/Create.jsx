import React, {useState, useEffect}from 'react'
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Nav from '../../components/NavBar/Navbar.jsx';
import imagenBus from "../../assets/images/login.jpg"
import { useDispatch, useSelector } from "react-redux";
import { postBooking } from "../../redux/actions/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notify from '../../utilities/notify';

const Create = () => {
    const dispatch = useDispatch();
    const setCreateBooking=(dataBooking)=>{
      dispatch(postBooking(dataBooking))
      Notify("Booking Created!",toast)
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
          <ToastContainer />
          <Footer />
      </div>
    )
}

export default Create