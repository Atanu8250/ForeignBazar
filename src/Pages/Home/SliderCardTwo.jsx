import React from 'react'
import { VStack, HStack, Text, Box, Center, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure, Image, Heading, Button, Select, Flex } from '@chakra-ui/react'
import { MdStarRate, MdStarBorder } from 'react-icons/md'
import { BsBagPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const SliderCardTwo = ({ name, description, brand, size, images: [imageOne, imageTwo], price, strikeOfPrice, ratings: { rating, count } }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const stars = new Array(rating).fill(1)
    for (let i = stars.length; i < 5; i++) {
        stars.push(0);
    }

    const parcentage = () => {
        return Math.abs((100 * (price - strikeOfPrice)) / strikeOfPrice).toFixed(2)
    }


    return (
        <>
            <Link>
                <VStack className='Slider-Card-Two'>
                    <Box bgImage={`url(${imageOne})`}>
                        <Center onClick={onOpen}>Quick View</Center>
                    </Box>
                    <Text>{rating === 5 ? "Limited Time sell" : ""}</Text>
                    <Text>{brand}</Text>
                    <Text>INR {price}</Text>
                    <Text>(Up to {parcentage()}% off select items)</Text>
                    <Text as='s'>INR {strikeOfPrice}</Text>
                    <HStack>
                        {stars?.map((e, i) => {
                            return e === 1 ? <MdStarRate key={i} /> : <MdStarBorder key={i} />
                        })}<Text>({count})</Text>
                    </HStack>
                </VStack>
            </Link>

            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDirection={["column", "row"]} alignItems="flex-start" p="50px 20px 20px 20px" gap="10px">
                            <VStack>
                                <Image src={imageOne} />
                                <Image src={imageTwo} />
                            </VStack>
                            <VStack gap="15px" alignItems="flex-start">
                                <HStack gap="0px">
                                    {stars?.map((e, i) => {
                                        return e === 1 ? <MdStarRate key={i} /> : <MdStarBorder key={i} />
                                    })}<Text>({count})</Text>
                                </HStack>
                                <Heading fontSize="25px">{name}</Heading>
                                <Text fontSize="17px">{brand}</Text>
                                <Text>{description}</Text>
                                <HStack>
                                    <Text color="green.600">Price: ₹{price}</Text>
                                    <Text color="red.600">({parcentage()}% off)</Text>
                                </HStack>
                                <Text as='s'>INR {strikeOfPrice}</Text>
                                <Text color="red.600">{rating === 5 ? "Limited Time sell!" : "Don't Lose this Opportunity!"}</Text>

                                <Select placeholder='Choose Size' size='md' variant='flushed' focusBorderColor="black" disabled={size === 1} >
                                    <option value={size}>{size}</option>
                                    <option value={size+1}>{size+1}</option>
                                    <option value={size+2}>{size+2}</option>
                                </Select>

                                <Button borderRadius="none" variant="outline" colorScheme="black" display="flex" alignItems="center" gap="8px"> <BsBagPlusFill /> Add To Cart</Button>
                            </VStack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SliderCardTwo