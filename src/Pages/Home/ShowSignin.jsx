import { Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ShowSignin = () => {
  return (
    <Container maxW='9xl' padding='20px'>
        <Flex w='100%' justifyContent='space-between' alignItems='center'>
            <Image src='https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536' w="35%"/>
            <Flex direction='column' alignItems="center" gap='10px' >
                <Text whiteSpace="nowrap" fontWeight="bolder" fontSize={['5px', '8px', '10px', '15px']}>Shop what you love—faster and easier.</Text>
                <Link className='signinlink' style={{textDecoration:"underline"}}  to='/signin'>Sign In or Create an Account</Link>
            </Flex>
            <Image src='https://n.nordstrommedia.com/id/01471914-5c74-4e79-a258-af5f398b1a73.png?h=22&w=536' w="35%"/>
        </Flex>
    </Container>
  )
}

export default ShowSignin