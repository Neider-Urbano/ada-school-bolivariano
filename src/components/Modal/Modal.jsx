import React,{useEffect,useState} from 'react'
import {Label, Select,Input} from "../../style-components/Form/style"
import {ButtonCerrar, DivModal,H3} from "../../style-components/Modal/style"
import { Button} from "../../style-components/Login/style"
import dataCitys from "../../utilities/dataCitys.json"
import useFetch from "../../hooks/ModalHooks";


const Modal = ({idBooking,setModalTrue}) => {
    const dataBooking=JSON.parse(window.localStorage.getItem("bookings"))
    const [booking,setBooking]=useState([])
    useFetch(dataBooking,idBooking, setBooking);

    return (
        <DivModal id="authentication-modal" tabindex="-1" aria-modal="true" role="dialog" className="h-modal">
            {booking.length>0 && <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border border-gray-300">
                        <ButtonCerrar type="button" data-modal-toggle="authentication-modal"
                            onClick={()=>{setModalTrue(false)}}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </ButtonCerrar>
                        <div className="py-6 px-6 lg:px-8">
                            <H3>Detail Booking</H3>
                            <div>
                                <div className="md:grid grid-cols-2 gap-4">
                                    <div className="form-group mb-2">
                                        <Label htmlFor="exampleInputSource">Source</Label>
                                        <div className="flex justify-center">
                                            <div className="mb-3 xl:w-96">
                                                <Select className="form-select" defaultValue={booking[0].source} name="source" aria-label="Default select example" disabled>
                                                    <option disabled value="city">City</option>
                                                    {dataCitys[0].citys.map((city,key)=>{
                                                        return <option value={city} key={key+1}>{city}</option>
                                                    })}
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <Label htmlFor="exampleInputDestiny">Destiny</Label>
                                        <div className="flex justify-center">
                                            <div className="mb-3 xl:w-96">
                                                <Select className="form-select" defaultValue={booking[0].destiny} name="destiny" aria-label="Default select example" disabled>
                                                <option disabled value="city">City</option>
                                                    {dataCitys[0].citys.map((city,key)=>{
                                                    if(city!==dataBooking.source) return <option value={city} key={key+1}>{city}</option>
                                                    })}
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <Label htmlFor="exampleInputNumberOfPassengers">Number of passengers</Label>
                                        <Input type="number" className="form-control" min="0" name="numberofpassengers" defaultValue={booking[0].numberofpassengers} id="exampleInputNumberOfPassengers" placeholder="Number of Passengers" disabled/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <Label htmlFor="exampleInputDate">Date</Label>
                                        <Input type="date" className="form-control" defaultValue={booking[0].date} name="date" id="exampleInputDate" placeholder="Date" disabled/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <Label htmlFor="exampleInputTime">Time</Label>
                                        <Input type="time"  defaultValue={booking[0].time}  name="time"  id="exampleInputTime" placeholder="Time" disabled/>
                                    </div>
                                </div>
                                <Button className="buttonLogin mt-10" onClick={()=>{setModalTrue(false)}}>
                                    Aceptar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
        }
        </DivModal>
    )
}

export default Modal