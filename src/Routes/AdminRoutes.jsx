import React from 'react'
import Statistics from '../Pages/Admin/Statistics'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Admin/Dashboard'
import Products from '../Pages/Admin/Products'
import Aboutme from '../Pages/Admin/Aboutme'
import Users from '../Pages/Admin/Users'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/admin/statistics' element={<Statistics/>}></Route>
        <Route path='/admin/aboutme' element={<Aboutme/>}></Route>
        <Route path='/admin/dashboard' element={<Dashboard/>}></Route>
        <Route path='/admin/products' element={<Products/>}></Route>
        <Route path='/admin/users' element={<Users/>}></Route>
    </Routes>
  )
}

export default AdminRoutes