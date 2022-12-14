import React from 'react'
import { VStack, HStack, Image, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'


const SliderCardOne = ({brand, images:[imageOne], price, ratings:{rating, count}}) => {

    const stars = new Array(rating).fill(0)

  return (
    <VStack className='Slider-Card-One'>
        <Image src={imageOne}/>

        <Text>Arrives before Christmas</Text>
        <Text>{brand}</Text>
        <Text>INR {price}</Text>
        <HStack>
            {stars?.map((e,i)=><StarIcon key={i}/>)}<Text>({count})</Text></HStack>
    </VStack>
  )
}

export default SliderCardOne
