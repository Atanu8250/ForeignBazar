import React from 'react'
import { VStack, HStack, Image, Text } from '@chakra-ui/react'
import { MdStarRate, MdStarBorder } from 'react-icons/md'


const SliderCardOne = ({ brand, images: [imageOne], price, ratings: { rating, count } }) => {

  const stars = new Array(rating).fill(1)
  for (let i = stars.length; i < 5; i++) {
    stars.push(0);
  }

  return (
    <VStack className='Slider-Card-One'>
      <Image src={imageOne} />

      <Text>Arrives before Christmas</Text>
      <Text>{brand}</Text>
      <Text>INR {price}</Text>
      <HStack>
        {stars?.map((e, i) => {
          return e === 1 ? <MdStarRate key={i} /> : <MdStarBorder key={i} />
        })}<Text>({count})</Text>
      </HStack>
    </VStack>
  )
}

export default SliderCardOne
