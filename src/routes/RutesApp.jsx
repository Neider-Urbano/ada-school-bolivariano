import React from 'react'
import { Route, Routes } from "react-router-dom";
import Bookings from '../pages/Bookings/Bookings';
import Create from '../pages/Create/Create';
import Detail from '../pages/Detail/Detail';
import Login from '../pages/Login/Login';
import Page404 from '../pages/Page404/Page404';

const RutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/bookings" element={<Bookings />}/>
      <Route path="/create" element={<Create />}/>
      <Route path="/detail" element={<Detail />}/>
      <Route path="/*" element={<Page404 />}/>
    </Routes>
  )
}

export default RutesApp