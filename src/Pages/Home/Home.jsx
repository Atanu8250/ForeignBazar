import React, { useContext } from 'react'
import ShowSignin from './ShowSignin'
import FirstCarousel from './FirstCarousel'
import Slider from './Slider'
import ShortCard from './ShortCard'
import { Heading, VStack, Link, Text, Center, HStack, Image, Box } from '@chakra-ui/react'
import { AuthContext } from '../../Context/AuthContext'
import './Home.css'
import SecondCarousel from './SecondCarousel'


const Home = () => {

  const { authState } = useContext(AuthContext)

  return (
    <div className='Home'>
      {!authState.isAuth && <ShowSignin />}

      <FirstCarousel />

      <Center className='Bonus-note'>
        <VStack>
          <Heading>Get a $40 Bonus Note!</Heading>
          <Text>An exclusive offer for new Nordstrom credit cardmembers. Restrictions apply.</Text>
          <Link>Apply Now</Link>
        </VStack>
      </Center>


      {/* 1st Slider Container */}
      <Slider serial={1} />

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

      <Image my={["10px", "20px", "30px", "50px"]} src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png" />

      <Heading my={['10px', '25px', '40px', '70px']} textAlign='center' fontSize={['10px', '18px', '2xl']} letterSpacing="1px" fontFamily="'Josefin Sans', sans-serif">GIFTS BY PRICE</Heading>

      <Box>
        <Image src="https://n.nordstrommedia.com/id/a764f8a9-25c5-4e02-a2cf-75953ad9075e.png?h=395&w=1608" />
        <HStack mt={["0px", "-20px"]} justifyContent="space-around" w="full">
          <Center w="full">
            <Heading whiteSpace="nowrap" fontSize={["7px", "18px", "2xl"]}>Stocking Suffers</Heading>
          </Center>
          <Center w="full">
            <Heading fontSize={["8px", "18px", "2xl"]}>Under $50</Heading>
          </Center>
          <Center w="full">
            <Heading fontSize={["8px", "18px", "2xl"]}>Under $100</Heading>
          </Center>
          <Center w="full">
            <Heading fontSize={["8px", "18px", "2xl"]}>Luxe Gifts</Heading>
          </Center>
          <Center w="full">
            <Heading fontSize={["8px", "18px", "2xl"]}>All Gifts</Heading>
          </Center>
        </HStack>
      </Box>

      <Center className='Designer-Clearance'>
        <HStack>
          <Text>Save on the best brands and Styles.</Text>
          <Link>Designer Sale</Link>
        </HStack>
      </Center>

      <Heading my={['10px', '25px', '40px', '70px']} textAlign='center' fontSize={['10px', '18px', '2xl']}  letterSpacing="3px" fontFamily="'Josefin Sans', sans-serif">TRENDING NOW</Heading>

      <SecondCarousel />

      <Image my="50px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png" />

      <Heading my={['10px', '25px', '40px', '70px']} textAlign='center' fontSize={['10px', '18px', '2xl']}  color='gray.500' letterSpacing="4px" fontFamily="'Josefin Sans', sans-serif">SHOP BY CATEGORY</Heading>

      <Box>
        <HStack justifyContent="space-between" w="full">
          <ShortCard img="https://n.nordstrommedia.com/id/8d5e2126-1fca-42f8-b71b-ce9d1a3cc0ab.jpeg" title="Women" />
          <ShortCard img="https://n.nordstrommedia.com/id/fb45282f-b5e1-423b-9894-4a6071e7d3a1.jpeg" title="Men" />
          <ShortCard img="https://n.nordstrommedia.com/id/278ded2f-d53f-4c14-a88c-8bc5ba1efe56.jpeg" title="Kids" />
          <ShortCard img="https://n.nordstrommedia.com/id/1ceda26d-5052-4510-811b-82d30dbd5a23.jpeg" title="Home" />
          <ShortCard img="https://n.nordstrommedia.com/id/a29eca50-eeb5-4d37-a2bf-2932c60746a3.jpeg" title="Beauty & Fragrance" />
          <ShortCard img="https://n.nordstrommedia.com/id/48027591-850a-4544-814e-b458e00d6a51.jpeg" title="Designer" />
        </HStack>
      </Box>

      <Image my="50px" src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png" />

      <Center className='Nordy-Pod'>
        <VStack>
          <Heading>New Episodes Every Other Week</Heading>
          <Text>Go behind the scenes of Nordstrom with Pete Nordstrom and special guests.</Text>
          <HStack>
            <Link>Learn More</Link>
          </HStack>
        </VStack>
      </Center>

      <Box mt={["10px", "40px", "80px", "130px"]}>
        <Heading fontSize="2xl">Here's What Caught Your Eye</Heading>
      </Box>
      {/* Second Slider container */}
      <Slider serial={2} />

    </div>
  )
}

export default Home