import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import {Section, Input, Button,ButtonDanger} from "../../style-components/Login/style"
import "../../style-components/Login/style.css"
import icono from '../../assets/images/icono.png';
import Snippers from "../../components/Snippers/Spinners"
import  {validarLoginDos} from '../../utilities/InputsValidaciones';

const Login = () => {
    const navigate = useNavigate();
    const [dataUser, setDataUser]=useState("")
    const [error, setError]=useState("")
    const [snipper,setSnipper]=useState(false)

    const onChangeUserName=(e)=>{
        const {value,name}=e.target;
        setDataUser(value)
        setError(validarLoginDos(value))
    }

    const onClickLogin=()=>{
        setError(validarLoginDos(dataUser))
        if(error==="" && dataUser.length>0){
            setSnipper(true);
            window.localStorage.setItem("dataUser", JSON.stringify({username:dataUser,contact:"", email:""}))
            setTimeout(()=>{
                navigate("/bookings")
            },200) 
        }
    }

    return (
        <Section>
            <div className="container py-12 px-6 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="xl:w-10/12">
                        <div className="block bg-white shadow-lg rounded-lg">
                            <div className="lg:flex lg:flex-wrap g-0">
                                <div className="lg:w-6/12 px-4 md:px-0">
                                    <div className="md:p-12 md:mx-6">
                                        <div className="text-center pt-5">
                                            <img className="mx-auto w-20" src={icono} alt="logo"/>
                                            <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">BOLIVARIANO S.A.S</h4>
                                        </div>
                                        <div>
                                            <p className="mb-4">Please enter some username</p>
                                            <div className="mb-4">
                                                <Input type="text" id="exampleFormControlInput1" placeholder="Username"
                                                    value={dataUser} onChange={(e)=>{onChangeUserName(e)}}
                                                />
                                                {error.length>0 && <p className="text-red-600">{error}</p>}
                                            </div>
                                            <div className="text-center pt-1 mb-12 pb-1">
                                                <Button className="buttonLogin" data-mdb-ripple="true" data-mdb-ripple-color="light"
                                                    onClick={()=>{onClickLogin()}}>
                                                    {!snipper ? "Log in" : <Snippers />}
                                                </Button>
                                                <a className="text-gray-500" href="#!">Forgot password?</a>
                                            </div>
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Don't have an account?</p>
                                                <ButtonDanger data-mdb-ripple="true" data-mdb-ripple-color="light">
                                                    Danger
                                                </ButtonDanger>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttonLogin lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                        <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Login