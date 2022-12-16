import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Heading, Image, Box, Flex, Text, FormControl, FormLabel, Select, Button, HStack, VStack } from '@chakra-ui/react'
import { MdStarRate, MdStarBorder } from 'react-icons/md'
import { BsFillBagPlusFill } from 'react-icons/bs'
import ReactImageMagnify from 'react-image-magnify'
import './ProductDetails.css'
import SliderCardTwo from '../Home/SliderCardTwo'

const ProductDetails = () => {

    const { gender, id } = useParams()
    const [data, setData] = React.useState({})
    const [img, setImg] = React.useState(null)


    const getProductDetails = () => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/${gender}/${id}`)
            .then(res => {
                setData(res.data)
                setImg(res.data.images[0])
            })
            .catch(err => console.log(err));
    }

    React.useEffect(() => {
        getProductDetails();
    }, [])

    console.log(data)
    const handleMouseHover = (image) => {
        setImg(image)
    }

    const stars = [1, 1, 1, 0, 0]

    return (
        <Box className='ProductDetails'>
            <Box className='Product'>
                <Flex className='left'>
                    <Flex className="left_1">
                        {data.images && data?.images.map((image, i) => (
                            <Box key={i} className='img_wrap' onMouseOver={() => handleMouseHover(image)}>
                                <Image src={image} alt="" />
                            </Box>
                        ))}
                    </Flex>
                    <Box className="left_2" >
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img,
                            },
                            largeImage: {
                                src: img,
                                width: 1200,
                                height: 1600
                            },
                            enlargedImageContainerDimensions: {
                                width: '200%',
                                height: '100%'
                            },
                            // Uncomment this line to get different lense style
                            // shouldUsePositiveSpaceLens: true
                        }} />
                    </Box>
                </Flex>
                <Flex className='right'>
                    <Flex>
                        {stars?.map((e, i) => <MdStarRate key={i} color={e === 0 ? "#c3c3c3" : "black"} />)}<Text>(213)</Text>
                    </Flex>
                    <Heading fontSize={['xl', '26px']}>The Crew Long Sleeve T-Shirt</Heading>
                    <Text>TRAVISMATHEW</Text>
                    <Text>INR 4,118.84 - INR 6,147.06</Text>
                    <Text>(Up to 33% off select items)</Text>
                    <Text as="s" >INR 6,147.86</Text>
                    <Text>Limited-Time Sale</Text>
                    <Text>No matter what the day brings your way, keep your smart-casual look on point in a classic long-sleeve T-shirt crafted with plenty of stretch.</Text>
                    <FormControl>
                        <FormLabel zIndex="0"><Text as="samp">Fit:</Text> True to Size</FormLabel>
                        <Select borderRadius="none" placeholder='Select Size'>
                            <option> 8 </option>
                            <option> 9 </option>
                            <option> 10 </option>
                            <option> 11 </option>
                            <option> 12 </option>
                        </Select>
                    </FormControl>
                    <Text><Text as="b">10</Text> People viewing</Text>
                    <Button borderRadius="none">
                        <HStack>
                            <BsFillBagPlusFill />
                            <Text>Add to Bag</Text>
                        </HStack>
                    </Button>
                </Flex>
            </Box>
            <Box className='smallCards'>
                
            </Box>
        </Box>
    )
}

export default ProductDetails