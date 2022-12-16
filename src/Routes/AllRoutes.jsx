import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../Pages/Home/Home';
import Login from '../Pages/SignIn-login/Login';
import Signin from '../Pages/SignIn-login/Signin';
import SignIn from '../Pages/SignIn-login/SignInEntry';
import AddData from '../Components/AddData';
import Products from '../Pages/Products/Products';
import Cart from '../Pages/Cart/Cart';
import ProductDetails from '../Pages/SinglePage/ProductDetails';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signin_new' element={<Signin/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin' element={<AddData/>}></Route>
        <Route path='/products/:gender' element={<Products/>}></Route>
        <Route path='/products/:gender/:id' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
    </Routes>
  )
}

export default AllRoutes