import { Box, Heading, Text, HStack, useToast, Image, Modal, ModalOverlay, ModalHeader, ModalContent, ModalBody, ModalFooter } from '@chakra-ui/react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Loader from '../SinglePage/Loader'
import React, { useContext } from 'react'
import successSound from "./success.mp3"
import { CiLock } from 'react-icons/ci'
import Delivery from './Delivery'
import Payment from './Payment'
import axios from 'axios'
import './Checkout.css'

const reducer = (state, action) => {
    switch (action.type) {

        case 'totalPrice': {
            return { ...state, totalPrice: +(action.payload) }
        }

        case 'fName': {
            return { ...state, fName: action.payload }
        }

        case 'lName': {
            return { ...state, lName: action.payload }
        }

        case 'Adrs1': {
            return { ...state, Adrs1: action.payload }
        }

        case 'Adrs2': {
            return { ...state, Adrs2: action.payload }
        }

        case 'pin': {
            return { ...state, pin: action.payload }
        }

        case 'city': {
            return { ...state, city: action.payload }
        }

        case 'region': {
            return { ...state, region: action.payload }
        }
            break;

        case 'phone': {
            return { ...state, phone: action.payload }
        }

        case 'location': {
            return { ...state, location: action.payload }
        }

        case 'cardNo': {
            return { ...state, cardNo: action.payload }
        }

        case 'expiaryDate': {
            return { ...state, expiaryDate: action.payload }
        }

        case 'securityCode': {
            return { ...state, securityCode: action.payload }
        }

        default: return state;
    }
}

const play = ()=> {
    new Audio(successSound).play();
}

const Checkout = () => {


    const [state, dispatch] = React.useReducer(reducer, { totalPrice: 0, fName: "", lName: "", Adrs1: "", Adrs2: "", pin: "", city: "", region: "", phone: "", location: "India", cardNo: "", expiaryDate: "", securityCode: "" })
    const { authState, setUpdateCart } = useContext(AuthContext)
    const [paymentModal, setPaymentModal] = React.useState(false);
    const [cartItems, setCartItems] = React.useState(0)
    const [toggle, setToogle] = React.useState(false);
    const [loader, setLoader] = React.useState(false);
    const paymentModalRef = React.useRef();
    const intervalId = React.useRef();
    const navigate = useNavigate()
    const toast = useToast()

    React.useEffect(() => {
        setLoader(true)
        axios.get(`/cart?userId=${authState.token}`)
            .then(res => {
                setCartItems(res.data)
                dispatch({
                    type: "totalPrice",
                    payload: res.data.reduce((start, el) => { return start + (el.price * el.quantity) }, 0)
                })
            })
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
    }, [])


    const handleCheckout = () => {
        setLoader(true)
        let count = 0;
        intervalId.current = setInterval(() => {
            // Pushing Item in orders
            axios.post(`/orders`, { ...cartItems[count] })
                .then(res => {
                    console.log('res from pushIteminOrder', res)
                    axios.delete(`/cart/${cartItems[count].id}`)
                        .then(res => console.log('from deleting the item in cart', res))
                        .catch(err => console.log(err))
                })
                .catch(err => console.log('error from pushIteminOrder', err))
                .finally(() => {
                    count++;
                    if (count >= cartItems.length) {
                        clearInterval(intervalId.current)
                        setUpdateCart(0)
                        setLoader(false)
                        setPaymentModal(true)
                        play();
                        setTimeout(() => {
                            navigate("/")
                        }, 2000)
                    }
                })
        }, 600)
    }


    const toastFunc = (s, t, d) => toast({
        position: 'top-right',
        title: t,
        description: d,
        status: s,
        duration: 5000,
        isClosable: true,
    })

    return loader ? <Loader /> : (
        <Box className='Checkout'>
            <Box>
                <HStack>
                    <CiLock />
                    <Heading>Secure Checkout</Heading>
                    <Text>powered by Borederfree</Text>
                </HStack>
                <Text>Already have a Borderfree account?</Text>
            </Box>

            <Box className='HeadingLine'>
                <HStack>
                    <Text>1</Text>
                    <Heading>Delivery</Heading>
                </HStack>
            </Box>

            <Box overflow="hidden">
                {toggle ? <Payment state={state} dispatch={dispatch} toastFunc={toastFunc} setToogle={setToogle} handleCheckout={handleCheckout} /> : <Delivery toastFunc={toastFunc} dispatch={dispatch} state={state} click={setToogle} />}
            </Box>




            <Modal finalFocusRef={paymentModalRef} isOpen={paymentModal} onClose={() => setPaymentModal(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Image src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif" />
                    </ModalBody>

                    <ModalFooter>
                        <Heading mx="auto" color="green.400">Payment Successful</Heading>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    )
}

export default Checkout