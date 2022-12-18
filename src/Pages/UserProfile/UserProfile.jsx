import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const UserProfile = () => {

    const {logout} = useContext(AuthContext)

  return (
    <Button onClick={logout}> Log out </Button>
  )
}

export default UserProfile