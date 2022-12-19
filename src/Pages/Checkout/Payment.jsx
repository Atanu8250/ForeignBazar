import { Box, Button, Checkbox, Flex, Heading, HStack, Text, Input, Image, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure, Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody, PinInput, PinInputField, ModalFooter, Center } from '@chakra-ui/react'
import React from 'react'

let dollarIndianLocale = Intl.NumberFormat('en-IN');

const Payment = ({ state: { totalPrice, fName, lName, Adrs1, pin, city, region, phone, location, cardNo, expiaryDate, securityCode }, dispatch, setToogle, handleCheckout }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const finalRef = React.useRef(null)
    const [modal, setModal] = React.useState(false)

    const handleChange = (e) => {
        dispatch({
            type: e.target.name,
            payload: e.target.value
        })
    }

    const placeOrder = () => {
        if (cardNo == "" || expiaryDate == "" || securityCode == "") return;
        onOpen()
    }

    const enterOTP = () => {
        onClose();
        setModal(true)
    }


    return (
        <Box className='Payment'>
            <Box className='show-address'>
                <Box>
                    <Text>DELIVERY ADDRESS: <Button variant="link" onClick={() => setToogle(false)}>Change</Button></Text>
                    <Heading>{fName} {lName}</Heading>
                    <Heading>{Adrs1}</Heading>
                    <Heading>{city}, {region} {pin}</Heading>
                    <Heading>{location}</Heading>
                </Box>

                <Box>
                    <Text>DELIVERY METHOD:</Text>
                    <Heading>STANDARD</Heading>
                    <Heading>NO ADDITIONAL IMPORT CHARGES AT DELIVERY</Heading>
                    <Heading>11-21 BUSINESS DAYS</Heading>
                </Box>
            </Box>

            <Box>
                <Box className='HeadingLine'>
                    <Flex gap="5px">
                        <Text>2</Text>
                        <Heading>Payment</Heading>
                    </Flex>
                </Box>

                <Box className='payment'>
                    <Checkbox defaultChecked colorScheme="blackAlpha" mt="30px">My billing address is the same as my delivery address</Checkbox>

                    <Flex className='cards'>
                        <Box>
                            <Image src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png" alt='mastercard' />
                        </Box>
                        <Box>
                            <Image src="https://blog.logomyway.com/wp-content/uploads/2022/02/visa-logo-2.jpg" alt='visa' />
                        </Box>
                    </Flex>

                    <Input borderRadius="none" type="number" placeholder='Card Number' name='cardNo' value={cardNo} onChange={handleChange} size='md' />
                    <HStack>
                        <Input borderRadius="none" placeholder='MM / YY' name='expiaryDate' value={expiaryDate} onChange={handleChange} size='md' />
                        <Input borderRadius="none" type="password" placeholder='Security Code' name='securityCode' value={securityCode} onChange={handleChange} size='md' />
                    </HStack>
                </Box>

                <Button borderRadius="none" className='btn' onClick={placeOrder} disabled={!totalPrice}>Place Order ( ₹{dollarIndianLocale.format(totalPrice)} )</Button>
            </Box>



            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Purchase Products
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You want to Purchase this Items.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='green' onClick={enterOTP} ml={3}>
                                Pay ₹{dollarIndianLocale.format(totalPrice)}
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>


            <Modal finalFocusRef={finalRef} isOpen={modal} onClose={() => setModal(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter OTP</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>A 4-digit otp is send to your registered mobile no {phone}</Text>
                        <Center>
                            <HStack>
                                <PinInput otp>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                            </HStack>
                        </Center>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            setModal(false)
                            handleCheckout();
                        }}>
                            Enter OTP
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    )
}

export default Payment