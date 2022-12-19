import React from 'react'
import { VStack, Flex, Image, Text } from '@chakra-ui/react'
import { MdStarRate } from 'react-icons/md'
import { Link } from 'react-router-dom'

let dollarIndianLocale = Intl.NumberFormat('en-IN');
const SliderCardOne = ({id, brand, images: [imageOne], price, ratings: { rating, count } }) => {

  const stars = new Array(rating).fill(1)
  for (let i = stars.length; i < 5; i++) {
    stars.push(0);
  }

  return (
    <Link to={`/products/products/${id}`}>
      <VStack className='Slider-Card-One'>
        <Image src={imageOne} />

        <Text>Arrives before Christmas</Text>
        <Text>{brand}</Text>
        <Text>INR {dollarIndianLocale.format(price)}</Text>
        <Flex>
          {stars?.map((e, i) => <MdStarRate key={i} color={e === 0 ? "#c3c3c3" : "black"} />)}<Text>({count})</Text>
        </Flex>
      </VStack>
    </Link>
  )
}

export default SliderCardOne
