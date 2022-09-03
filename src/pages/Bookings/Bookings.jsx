import React, { useEffect,useState }from 'react'
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/NavBar/Navbar.jsx';
import Table from '../../components/Table/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { getBookings,deleteBooking } from "../../redux/actions/actions";
import Notify from '../../utilities/notify';

const Bookings = () => {
    const dispatch = useDispatch();
    const reduxBookings = useSelector((state) => state.bookings.bookings);
    const columns=["id","fecha", "destino"]
    const [dataRender,setDataRender]=useState("");
    const [refresh,setRefresh]=useState(false)

    useEffect(()=>{
        dispatch(getBookings())
        setDataRender(reduxBookings)
        setRefresh(true)
    },[refresh])

    const setRefreshChange=(id)=>{
        dispatch(deleteBooking(id))
        setRefresh(!refresh)
        Notify('Booking Deleted!',toast)
    }

    return (
        <div>
            <Nav/>
            <div className="px-5 flex items-center justify-center flex-col md:flex-row  mb-10 min-h-[300px] pt-[130px]">
                <Table 
                    columns={columns} 
                    dataRender={dataRender ? dataRender: []} 
                    setRefreshChange={setRefreshChange}
                />
                <div className="mt-7 w-[80%] md:w-[50%] md:ml-10 md:mt-0 border border-gray-300 rounded-lg overflow-hidden shadow-md">
                    <img src="https://oorainbowoo.tokyo/wp-content/uploads/2022/09/news_20220902200510-780x470.jpg" alt="" />
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    )
}

export default Bookings