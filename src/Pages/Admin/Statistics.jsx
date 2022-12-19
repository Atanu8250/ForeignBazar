import { Box, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

let dollarIndianLocale = Intl.NumberFormat('en-IN');

const Statistics = () => {

  const [totalRevenue, setTotalRevenue] = React.useState(0)
  const [orders, setOrders] = React.useState([])

  React.useEffect(() => {
    axios.get(`/orders`)
      .then(res => {
        setOrders(res.data)
        setTotalRevenue(res.data.reduce((acc, el) => { return acc + (el.quantity * el.price) }, 0))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Box>
      <Heading my="30px">Total Sale: {dollarIndianLocale.format(totalRevenue)} /-</Heading>

      <TableContainer w={{ base: '100%', md: '80%' }} my="30px">
        <Heading size="md">Users</Heading>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Sr no</Th>
              <Th>User Id</Th>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order, i) => <Tr key={i}>
              <Td>{i + 1}</Td>
              <Td>{order.userId}</Td>
              <Td>{order.name}</Td>
              <Td>{order.type}</Td>
              <Td>₹ {dollarIndianLocale.format(order.price * order.quantity)} /-</Td>
            </Tr>)}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Statistics