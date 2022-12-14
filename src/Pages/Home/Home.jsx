import React from 'react'
import ShowSignin from './ShowSignin'
import FirstCarousel from './FirstCarousel'
import FirstSlider from './FirstSlider'
import {  Heading, VStack, Link, Text, Center, HStack, Image, Box, Spacer } from '@chakra-ui/react'
import './Home.css'


const Home = () => {

  return (
    <div className='Home'>
      <ShowSignin />
      <FirstCarousel />

      <Center className='Bonus-note'>
        <VStack>
          <Heading>Get a $40 Bonus Note!</Heading>
          <Text>An exclusive offer for new Nordstrom credit cardmembers. Restrictions apply.</Text>
          <Link>Apply Now</Link>
        </VStack>
      </Center>


      {/* 1st Slider Container */}
      <FirstSlider/>

      <Center className='Christmas-time'>
        <VStack>
          <Heading>Get It in Time for Christmas</Heading>
          <Text>Order by 8pm ET on December 17 and choose FREE standard shipping.</Text>
          <HStack>
            <Link>Shop Gifts</Link>
            <Link>Shop eGift Carrds</Link>
            <Link>Learn More</Link>
          </HStack>
        </VStack>
      </Center>

      <Image my="50px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608"/>

      <Heading my="70px" textAlign='center' fontSize='2xl' letterSpacing="1px">GIFTS BY PRICE</Heading>

      <Box>
      <Image src="https://n.nordstrommedia.com/id/a764f8a9-25c5-4e02-a2cf-75953ad9075e.png?h=395&w=1608"/>
      <HStack mt="-20px" justifyContent="space-around" w="full" border="1px solid red">
        <Heading fontSize={["8px", "18px", "2xl"]}>Stocking Suffers</Heading>
        <Heading fontSize={["8px", "18px", "2xl"]}>Under $50</Heading>
        <Heading fontSize={["8px", "18px", "2xl"]}>Under $100</Heading>
        <Heading fontSize={["8px", "18px", "2xl"]}>Luxe Gifts</Heading>
        <Heading fontSize={["8px", "18px", "2xl"]}>All Gifts</Heading>
      </HStack>
      </Box>

      Home

    </div>
  )
}

export default Home