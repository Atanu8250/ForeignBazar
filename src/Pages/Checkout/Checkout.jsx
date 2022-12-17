import { Box, Heading, Text, FormControl, FormLabel, Input, Flex } from '@chakra-ui/react'
import { CiLock } from 'react-icons/ci'
import React from 'react'
import './Checkout.css'

const Checkout = () => {
    return (
        <Box className='Checkout'>
            <Box>
                <Flex>
                    <CiLock />
                    <Heading>Secure Checkout</Heading>
                    <Text>powered by Borederfree</Text>
                </Flex>
                <Text>Already have a Borderfree account?</Text>
            </Box>

            <Box>
                <Flex>
                    <Text>1</Text>
                    <Heading>Delivery</Heading>
                </Flex>
            </Box>

            <Box className='form'>
                <Flex>
                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input variant="none" placeholder='First name' />
                    </FormControl>


                    <FormControl isRequired>
                        <FormLabel>Last name</FormLabel>
                        <Input variant="none" placeholder='Last name' />
                    </FormControl>
                </Flex>
                <FormControl isRequired>
                    <FormLabel>Address 1</FormLabel>
                    <Input variant="none" placeholder='Address' />
                </FormControl>
                <Box display='grid' gridTemplateColumns="repeat(2, 1fr)">
                    <FormControl>
                        <FormLabel>Address 2</FormLabel>
                        <Input variant="none" placeholder='Address 2 (Optional)' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Postal Code</FormLabel>
                        <Input variant="none" placeholder='Postal Code' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>City</FormLabel>
                        <Input variant="none" placeholder='city' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Region</FormLabel>
                        <Input variant="none" placeholder='Region (Optional)' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Phone</FormLabel>
                        <Input variant="none" placeholder='Phone' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Location</FormLabel>
                        <Input variant="none" placeholder='Location' />
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

export default Checkout