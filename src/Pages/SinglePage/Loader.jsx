import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Center bgColor={'whiteAlpha.400'} w="100%" h="100vh">
      <Spinner
        thickness='6px'
        speed='0.70s'
        color='black'
        size='xl'
      />
    </Center>
  )
}

export default Loader