import { Box, Flex, Heading, Text, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Grid } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FcBusinessman, FcDataProtection, FcCurrencyExchange } from "react-icons/fc";

let dollarIndianLocale = Intl.NumberFormat('en-IN');

const Dashboard = () => {

  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [totalRevenue, setTotalRevenue] = useState(0)


  useEffect(() => {
    axios.get(`/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))

    axios.get(`/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))


    axios.get(`/orders`)
      .then(res => {
        console.log(res.data)
        setTotalRevenue(res.data.reduce((acc, el) => { return acc + (el.quantity * el.price) }, 0))
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <Box className='Dashboard'>
      <Grid gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}>
        <Flex className='sm-card'>
          <Heading>Users <FcBusinessman /></Heading>
          <Text><Text as="samp">{users.length}</Text> Users</Text>
        </Flex>
        <Flex className='sm-card'>
          <Heading>Products <FcDataProtection /> </Heading>
          <Text><Text as="samp">{products.length}</Text> Products</Text>
        </Flex>
        <Flex className='sm-card'>
          <Heading>Total Sale <FcCurrencyExchange /></Heading>
          <Text>₹ <Text as="samp">{dollarIndianLocale.format(totalRevenue)}</Text> /-</Text>
        </Flex>
      </Grid>

      <TableContainer w={{ base: '100%', md: '80%' }}>
        <Heading size="md">Users</Heading>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Sr no</Th>
              <Th>User Id</Th>
              <Th>Name</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, i) => <Tr key={i}>
              <Td>{i + 1}</Td>
              <Td>{user.userId}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
            </Tr>)}
          </Tbody>
        </Table>
      </TableContainer>

      <TableContainer w={{ base: '100%', md: '80%' }}>
        <Heading size="md">Products</Heading>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Sr no</Th>
              <Th>Type</Th>
              <Th>Name</Th>
              <Th>Brand</Th>
              <Th>Category</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, i) => <Tr key={i}>
              <Td>{i + 1}</Td>
              <Td>{product.type}</Td>
              <Td>{product.name}</Td>
              <Td>{product.brand}</Td>
              <Td>{product.gender}</Td>
            </Tr>)}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Dashboard