import React,{useEffect,useState} from 'react'
import {Label, Select,Input} from "../../style-components/Form/style"

const Modal = () => {
    const dataBooking=JSON.parse(window.localStorage.getItem("bookings"))
    const idBooking=window.localStorage.getItem("idbooking")
    const [booking,setBooking]=useState()
    useEffect(()=>{
        // var bookingExit=dataBooking.map((data)=>{
        //     if(data.id===idBooking){
        //         console.log(data)
        //         return data
        //     }
        // })
        // setBooking(bookingExit)
    },[])
    return (
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                    Detail booking
                </h5>
                <button type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body relative p-4">
                <div className="md:grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <Label htmlFor="exampleInputSource" onClick={()=>{console.log(booking)}}>Source</Label>
                        <div className="flex justify-center">
                            <div className="mb-3 xl:w-96" >
                                {/* <Input value={booking.source} name="source" aria-label="Default select example"
                                /> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="form-group mb-6">
                        <Label htmlFor="exampleInputDestiny">Destiny</Label>
                        <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <Select defaultValue={dataBooking.destiny} name="destiny" aria-label="Default select example"
                            onChange={(e)=>{
                                onChangeDataBooking(e)
                            }}  
                            >
                            <option disabled value="city">City</option>
                                {dataCitys[0].citys.map((city,key)=>{
                                if(city!==dataBooking.source) return <option value={city} key={key+1}>{city}</option>
                                })}
                            </Select>
                        </div>
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <Label htmlFor="exampleInputNumberOfPassengers">Number of passengers</Label>
                        <Input type="number" min="0" name="numberofpassengers" defaultValue={dataBooking.numberofpassengers} id="exampleInputNumberOfPassengers" placeholder="Number of Passengers"
                        onChange={(e)=>{
                            onChangeDataBooking(e)
                        }} 
                        />
                    </div>
                    <div className="form-group mb-6">
                        <Label htmlFor="exampleInputDate">Date</Label>
                        <Input type="date" defaultValue={dataBooking.date} name="date" id="exampleInputDate" placeholder="Date"
                        onChange={(e)=>{
                            onChangeDataBooking(e)
                        }} 
                        />
                    </div>
                    <div className="form-group mb-6">
                        <Label htmlFor="exampleInputTime">Time</Label>
                        <Input type="time"  defaultValue={dataBooking.time}  name="time"  id="exampleInputTime" placeholder="Time"
                        onChange={(e)=>{
                            onChangeDataBooking(e)
                        }} 
                        />
                    </div> */}
                </div>
            </div>
            <div
                className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal">
                Close
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Modal