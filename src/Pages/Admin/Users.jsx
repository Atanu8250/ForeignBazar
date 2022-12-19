import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Box, TableContainer, Heading, Table, Thead, Tbody, Tr, Th, Td, Button} from '@chakra-ui/react'

const Users = () => {

  const [users, setUsers] = useState([])
  const [change, setChange] = useState(false)
  
  useEffect(() => {
    axios.get(`/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [change])


  const deleteUser = (id) => {
    axios.delete(`/users/${id}`)
    .then(res => {
      setChange(!change)
    })
    .catch(err => console.log(err))
  }

  return (
    <Box>
      <TableContainer w={{ base: '100%', md: '80%' }} my="30px">
        <Heading size="md">Users</Heading>
        <Table variant='striped' colorScheme='blue' size='sm'>
          <Thead>
            <Tr>
              <Th>Sr no</Th>
              <Th>User Id</Th>
              <Th>Name</Th>
              <Th>Tag</Th>
              <Th>Email</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, i) => <Tr key={i}>
              <Td>{i + 1}</Td>
              <Td>{user.userId}</Td>
              <Td>{user.name}</Td>
              <Td>{user.tag}</Td>
              <Td>{user.email}</Td>
              <Td><Button colorScheme="red" disabled={user.tag === 'admin'} onClick={()=>deleteUser(user.id)}>Delete</Button></Td>
            </Tr>)}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Users