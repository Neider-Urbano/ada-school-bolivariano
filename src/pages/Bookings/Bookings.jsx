import React, { useEffect,useState }from 'react'
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/NavBar/Navbar.jsx';
import Table from '../../components/Table/Table';

const Bookings = () => {
    const columns=["id","fecha", "destino"]
    const [dataRender,setDataRender]=useState("");
    const [refresh,setRefresh]=useState(false)

    useEffect(()=>{
        setDataRender(JSON.parse(window.localStorage.getItem("bookings")))
    },[refresh])

    const setRefreshChange=(id)=>{
        var deleteBooking=dataRender.filter((filter)=>filter.id!==id+"")
        window.localStorage.setItem("bookings",JSON.stringify(deleteBooking))
        setRefresh(!refresh)
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
            <Footer />
        </div>
    )
}

export default Bookings