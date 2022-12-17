import React from 'react'
import { VStack, Box, Text, Flex, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdStarRate } from 'react-icons/md'

const Card = (props) => {

    const { id, name, brand, images, strikeOfPrice, price, ratings: { rating, count } } = props

    let stars = new Array(5);
    for (let i = 0; i < 5; i++) {
        if (i < rating - 1) stars[i] = 1;
        else stars[i] = 0;
    }

    const percentage = () => {
        return Math.abs((100 * (price - strikeOfPrice)) / strikeOfPrice).toFixed(0)
    }

    // const boxRef = React.useRef();
    const imgRef = React.useRef();

    const firstImage = () => {
        imgRef.current.src = images[0]
    }

    const secondImage = () => {
        imgRef.current.src = images[1];
    }


    return (
        <Flex className='Card'>
            <Box onMouseOver={secondImage} onMouseOut={firstImage}>
                <Image src={images[0]} ref={imgRef} />
                <Button>
                    <svg width="16px" height="16px" focusable="false">
                        <g fill="none" stroke="#393939" strokeLinecap="round" strokeMiterlimit="10">
                            <path d="M14.848 8.121V5.668a.624.624 0 0 0-.624-.624h-13.1a.624.624 0 0 0-.624.624v8.11c0 .345.279.624.624.624h7.16"></path>
                            <path d="M3.931 4.732a3.743 3.743 0 0 1 7.486 0" strokeLinejoin="round"></path>
                            <path d="M12.565 9.141v5.87M9.63 12.076h5.87"></path>
                        </g>
                    </svg>
                </Button>
            </Box>
            <Box>
                <Text>Arrives before Christmas</Text>
                <Text>{rating >= 4 ? "Limited time sale" : ""}</Text>
                <Text>{brand}</Text>
                <Text>{name}</Text>
                <Flex>
                    <Text>INR {price}</Text>
                    <Text>({percentage()}% off)</Text>
                </Flex>
                <Text as='s'>INR {strikeOfPrice}</Text>
                <Flex>
                    {stars?.map((e, i) => <MdStarRate key={i} color={ e === 0 ? "#c3c3c3" : "black"} />)}<Text>({count})</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Card