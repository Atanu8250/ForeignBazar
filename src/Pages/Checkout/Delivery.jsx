import React from 'react'
import { FormControl, FormLabel, Input, Box, Flex, Button, Text, Heading } from '@chakra-ui/react'

const Delivery = ({click, dispatch, state, toastFunc}) => {

    const handleOnChange = (e) => {
        dispatch({
            type: e.target.name,
            payload: e.target.value
        })
    }

    const gotoPayment = () => {
        if( state.fName == "" || state.lName == "" || state.Adrs1 == "" || state.pin == "" || state.city == "" || state.phone == "" || state.location == "" ){
            toastFunc('warning', "Can't Go ahead!", 'Please fill all the required fields')
            return;
        }
        click(true)
    }

    return (
        <Box className='Delivery'>
            <Box className='form'>
                <Flex>
                    <FormControl isRequired className='my-form-control'>
                        <FormLabel>First name</FormLabel>
                        <Input variant="none" placeholder='First name' name='fName' value={state.fName} onChange={handleOnChange} />
                    </FormControl>


                    <FormControl isRequired className='my-form-control'>
                        <FormLabel>Last name</FormLabel>
                        <Input variant="none" placeholder='Last name' value={state.lName} onChange={handleOnChange} name='lName' />
                    </FormControl>
                </Flex>
                <FormControl isRequired className='my-form-control'>
                    <FormLabel>Address 1</FormLabel>
                    <Input variant="none" placeholder='Address' value={state.Adrs1} onChange={handleOnChange} name='Adrs1' />
                </FormControl>
                <Box display='grid' gridTemplateColumns="repeat(2, 1fr)">
                    <FormControl className='my-form-control'>
                        <FormLabel>Address 2</FormLabel>
                        <Input variant="none" placeholder='Address 2 (Optional)' value={state.Adrs2} onChange={handleOnChange} name='Adrs2' />
                    </FormControl>

                    <FormControl isRequired className='my-form-control'>
                        <FormLabel>Postal Code</FormLabel>
                        <Input variant="none" placeholder='Postal Code' value={state.pin} onChange={handleOnChange} name='pin' />
                    </FormControl>

                    <FormControl isRequired className='my-form-control'>
                        <FormLabel>City</FormLabel>
                        <Input variant="none" placeholder='city' value={state.city} onChange={handleOnChange} name='city' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Region</FormLabel>
                        <Input variant="none" placeholder='Region (Optional)' value={state.region} onChange={handleOnChange} name='region' />
                    </FormControl>

                    <FormControl isRequired className='my-form-control'>
                        <FormLabel>Phone</FormLabel>
                        <Input variant="none" placeholder='Phone' value={state.phone} onChange={handleOnChange} name='phone' />
                    </FormControl>

                    <FormControl isRequired className='my-form-control'>
                        <FormLabel>Location</FormLabel>
                        <Input variant="none" placeholder='Location' value={state.location} onChange={handleOnChange} name='location' />
                    </FormControl>
                </Box>
            </Box>

            <Button borderRadius="none"  className='btn' onClick={gotoPayment}>Continue</Button>

            <Box className='HeadingLine'>
                <Flex>
                    <Text>2</Text>
                    <Heading>Payment</Heading>
                </Flex>
            </Box>
        </Box>
    )
}

export default Delivery