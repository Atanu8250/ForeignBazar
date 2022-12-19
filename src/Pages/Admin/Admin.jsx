import { Box, Text, Heading, Flex, Tabs, TabList, Tab } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import AdminRoutes from '../../Routes/AdminRoutes'
import { AuthContext } from '../../Context/AuthContext'

import './Admin.css'

const Admin = () => {

    const navigate = useNavigate();
    const {setShowAdminPage} = useContext(AuthContext)

    return (
        <Box className='admin-panel' mx={{base:'0px', md:'30px'}}>
            <Flex>
                <Heading onClick={() => {   
                    localStorage.removeItem('show admin page');
                    setShowAdminPage(false)
                    navigate("/")
                }}>Admin Panel</Heading>
                <Text>Atanu Karmakar</Text>
            </Flex>
            <Tabs variant='enclosed'>
                <TabList>
                    <Tab><Link to="/admin/dashboard">Dashboard</Link></Tab>
                    <Tab><Link to="/admin/users">Users</Link></Tab>
                    <Tab><Link to="/admin/products">Products</Link></Tab>
                    <Tab><Link to="/admin/statistics">Statistics</Link></Tab>
                    <Tab><Link to="/admin/aboutme">About me</Link></Tab>
                </TabList>
                    <Outlet/>
                <AdminRoutes/>
            </Tabs>
        </Box>
    )
}

export default Admin