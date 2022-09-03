import React from 'react'
import { Link } from 'react-router-dom';
import icono from '../../assets/images/icono.png';
import {Nav, DivUno,ButtonCerrar} from "../../style-components/NavBar/style"
import OptionsAcount from './OptionsAcount';
import OptionsNavBar from "./OptionsNavBar"

const NavBar = () => {
    const dataUser=JSON.parse(window.localStorage.getItem("dataUser"))
    return (
        <div className="fixed w-screen top-0">
            <Nav className="navbar navbar-expand-lg navbar-light">
                <DivUno>
                    <ButtonCerrar className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                        </svg>
                    </ButtonCerrar>
                        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                            <Link to="/bookings">
                                <div className=" flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1">
                                    <img src={icono} className="h-[35px]" alt="" loading="lazy" />
                                    <h1 className="font-bold ml-2">Bolivariano</h1>
                                </div>
                            </Link>
                        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <OptionsNavBar textLi="Create" href="/create"/>
                            <OptionsNavBar textLi="List" href="/bookings"/>
                        </ul>
                    </div>
                    <OptionsAcount dataUser={dataUser}/>
                </DivUno>
            </Nav>
        </div>
    )
}

export default NavBar