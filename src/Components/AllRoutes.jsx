import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import AddData from './AddData';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/admin' element={<AddData/>}></Route>
    </Routes>
  )
}

export default AllRoutes