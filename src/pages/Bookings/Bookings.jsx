import React, { useEffect }from 'react'
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Table from '../../components/Table/Table';

const Bookings = () => {
    const columns=["id","fecha", "destino"]
    const dataRender=JSON.parse(window.localStorage.getItem("bookings"))
    useEffect(()=>{
    },[])
    return (
        <div>
            <Nav/>
            <div className="flex items-center justify-center flex-col mt-10 mb-10 min-h-[300px]">
                <h1 className="font-bold mb-5">List of reserves</h1>
                <Table columns={columns} dataRender={dataRender ? dataRender: []}/>
            </div>
            <Footer />
        </div>
    )
}

export default Bookings