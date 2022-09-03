import React,{useState, useEffect} from 'react'
import dataCitys from "../../utilities/dataCitys.json"
import {Label, Select,Input} from "../../style-components/Form/style"

const Form = ({setCreateBooking}) => {
  const [dataBooking,setDataBooking]=useState({
    source:"city",destiny:"city",date:"",time:"", numberofpassengers:""
  })
  const [error,setError]=useState("")
  const fecha = new Date();

  useEffect(()=>{
    const hoy = parseFloat(fecha.getDate())<10?"0"+(fecha.getDate()+1):fecha.getDate()+1;
    const mesActual = parseFloat(fecha.getMonth() + 1)<10?"0"+fecha.getMonth():fecha.getMonth(); 
    const dataBookingCopy=dataBooking;
    dataBookingCopy.date=fecha.getFullYear()+"-"+mesActual+"-"+hoy;
    dataBookingCopy.time=(parseFloat(fecha.getHours())<10?"0"+fecha.getHours():fecha.getHours())+":"+(parseFloat(fecha.getMinutes())<10?"0"+fecha.getMinutes():fecha.getMinutes());
    setDataBooking(dataBookingCopy)
  })

  const onChangeDataBooking=(e)=>{
    var {name,value}=e.target;
    setDataBooking(data=>({
      ...data,[name]:value
    }))
    var error=validateFormBooking(name,value);
    setError(error)
  }

  const validateFormBooking=(name,value)=>{
    var error="";
    if(value==="city" || value==="0"){
      value="";
    }
    if(value===""){
      error=name+" required"
    }
    return error;
  }

  const onSubmitCreate=(e)=>{
    e.preventDefault();
    var error=""
    Object.keys(dataBooking).map((key)=>{
      if(error.length<1){
        error=validateFormBooking(key,dataBooking[key]);
      }
    })
    setError(error)
    if(error.length<1){
      setCreateBooking(dataBooking);
    }
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm md:max-w-md">
      <form onSubmit={(e)=>{onSubmitCreate(e)}}>
        <div className="md:grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <Label htmlFor="exampleInputSource">Source</Label>
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <Select className="form-select" defaultValue={dataBooking.source} name="source" aria-label="Default select example"
                  onChange={(e)=>{
                    onChangeDataBooking(e)
                  }}>
                    <option disabled value="city">City</option>
                      {dataCitys[0].citys.map((city,key)=>{
                        return <option value={city} key={key+1}>{city}</option>
                      })}
                </Select>
              </div>
            </div>
          </div>
          <div className="form-group mb-6">
            <Label htmlFor="exampleInputDestiny">Destiny</Label>
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <Select className="form-select" defaultValue={dataBooking.destiny} name="destiny" aria-label="Default select example"
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
            <Input type="number" className="form-control" min="0" name="numberofpassengers" defaultValue={dataBooking.numberofpassengers} id="exampleInputNumberOfPassengers" placeholder="Number of Passengers"
              onChange={(e)=>{
                onChangeDataBooking(e)
              }} 
            />
          </div>
          <div className="form-group mb-6">
            <Label htmlFor="exampleInputDate">Date</Label>
            <Input type="date" className="form-control" defaultValue={dataBooking.date} name="date" id="exampleInputDate" placeholder="Date"
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
          </div>
        </div>
        <div className="flex items-center">
          <button type="submit" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Create
          </button>
          {error.length>0 &&<p className="text-red-500 ml-4">{error}</p>}
        </div>
      </form>
    </div>
  )
}

export default Form