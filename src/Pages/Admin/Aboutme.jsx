import { Center, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FcManager, FcLike } from "react-icons/fc";

const Aboutme = () => {
  return (
    <Center>
      <VStack my="50px">
        <HStack><Heading>Hi, I'm Atanu Karmakar </Heading><FcManager fontSize="25px"/></HStack>
        <Text>I'm a student of FW21 batch in Masai ,I've created this Project in Unit-4 with React</Text>
        <FcLike />
        <Image src='https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif'/>
      </VStack>
    </Center>
  )
}

export default Aboutme