import React,{useState, useEffect} from 'react'
import dataCitys from "../../utilities/dataCitys.json"
import {Label, Select,Input,DivForm,ButtonCreate } from "../../style-components/Form/style"
import Snippers from "../../components/Snippers/Spinners"
import {validateFormBooking} from "../../utilities/InputsValidaciones"
import useForm from "../../hooks/FormHooks";

const Form = ({setCreateBooking}) => {
  const [dataBooking,setDataBooking]=useState({
    source:"",destiny:"",date:"",time:"", numberofpassengers:""
  })
  const [snipper,setSnipper]=useState(null)
  const [error,setError]=useState("")
  const fecha = new Date();
  const [fechaActual, setFechaActual]=useState();

  useForm(fecha,dataBooking, setDataBooking, setSnipper, snipper,setFechaActual);

  const onChangeDataBooking=(e)=>{
    var {name,value}=e.target;
    setDataBooking(data=>({
      ...data,[name]:value
    }))
    var error=validateFormBooking(name,value,fechaActual);
    setError(error)
  }

  const onSubmitCreate=(e)=>{
    e.preventDefault();
    var error=""
    Object.keys(dataBooking).map((key)=>{
      if(error.length<1){
        error=validateFormBooking(key,dataBooking[key],fechaActual);
      }
    })
    setError(error)
    if(error.length<1){
      setCreateBooking(dataBooking);
      setSnipper(true)
    }
  }

  return (
    <DivForm>
      <h1 className="font-bold mb-5 text-center">Create Booking</h1>
      <form onSubmit={(e)=>{onSubmitCreate(e)}}>
        <div className="md:grid grid-cols-2 gap-4">
          <div className="form-group mb-2">
            <Label htmlFor="exampleInputSource">Source</Label>
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <Select className="form-select" value={dataBooking.source} name="source" aria-label="Default select example"
                  onChange={(e)=>{onChangeDataBooking(e)}}>
                  <option value="city">City</option>
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
                <Select className="form-select" value={dataBooking.destiny} name="destiny" aria-label="Default select example"
                  onChange={(e)=>{onChangeDataBooking(e)}}>
                  <option value="city">City</option>
                    {dataCitys[0].citys.map((city,key)=>{
                      if(city!==dataBooking.source) return <option value={city} key={key+1}>{city}</option>
                    })}
                </Select>
              </div>
            </div>
          </div>
          <div className="form-group mb-2">
            <Label htmlFor="exampleInputNumberOfPassengers">Number of passengers</Label>
            <Input type="number" className="form-control" min="0" name="numberofpassengers" value={dataBooking.numberofpassengers} id="exampleInputNumberOfPassengers" placeholder="Number of Passengers"
              onChange={(e)=>{onChangeDataBooking(e)}} 
            />
          </div>
          <div className="form-group mb-2">
            <Label htmlFor="exampleInputDate">Date</Label>
            <Input type="date" className="form-control" value={dataBooking.date} name="date" id="exampleInputDate" placeholder="Date"
              onChange={(e)=>{onChangeDataBooking(e)}} 
            />
          </div>
          <div className="form-group mb-2">
            <Label htmlFor="exampleInputTime">Time</Label>
            <Input type="time"  value={dataBooking.time}  name="time"  id="exampleInputTime" placeholder="Time"
              onChange={(e)=>{onChangeDataBooking(e)}} 
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-7">
          {error.length>0 &&<p className="text-red-500 ml-4 mb-1">{error}</p>}
          <ButtonCreate type="submit" className="buttonLogin">
            {!snipper ? "Create" : <Snippers />}
          </ButtonCreate>
        </div>
      </form>
    </DivForm>
  )
}

export default Form