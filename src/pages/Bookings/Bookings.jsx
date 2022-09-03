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
            <div className="flex items-center flex-col min-h-[400px] pt-[130px]">
                <div>
                </div>
                <div className="border border-gray-300 text-center">
                    <h1 className="font-bold mb-5 mt-2">List of reserves</h1>
                    <Table 
                        columns={columns} 
                        dataRender={dataRender ? dataRender: []} 
                        setRefreshChange={setRefreshChange}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bookings