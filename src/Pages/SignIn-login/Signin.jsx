import React, { useContext } from 'react';
import { Box, Button, Heading, Input, Link, Text, VStack, HStack, useToast } from '@chakra-ui/react'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { BsCreditCard2Front } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Signin.css"
import { AuthContext } from '../../Context/AuthContext';

const Signin = () => {

    const { login } = useContext(AuthContext)

    const toast = useToast()
    const fnameRef = React.useRef()
    const lnameRef = React.useRef()
    const pwdRef = React.useRef()
    const [loading, setLoading] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    let emailFromLS = localStorage.getItem("user-email")

    const toastFunc = (s, t, d) => toast({
        position: 'top-right',
        title: t,
        description: d,
        status: s,
        duration: 5000,
        isClosable: true,
    })


    const showPWDHandle = () => {
        setShowPassword(!showPassword)
    }

    const handleSignin = () => {

        if (fnameRef.current.value === "" || lnameRef.current.value === "" || pwdRef.current.value === "") {
            toastFunc('error', 'Incorrect Input !', 'Please fill all required fields')
            return;
        }

        let x = pwdRef.current.value;
        console.log('x:', x)
        let number = '0123456789';
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'
        let flag = 0;

        for (let n of number) {
            if (x.includes(n)) {
                flag++;
                break;
            }
        }

        for (let char of alphabet) {
            if (x.includes(char)) {
                flag++;
                break;
            }
        }


        if (flag < 2 && x.length < 6) {
            console.log('flag:', flag, x.length)
            toastFunc('warning', 'Warning ⚠', 'Password should have atleast one Number and one alphabet with more than 5 digit');
            return;
        }

        setLoading(true)
        let obj = {
            userId: fnameRef.current.value + "_" + Date.now(),
            name: fnameRef.current.value + " " + lnameRef.current.value,
            email: emailFromLS,
            password: pwdRef.current.value,
            tag: "user"
        }

        axios({
            baseURL: import.meta.env.VITE_BASE_URL,
            url: `/users`,
            method: 'post',
            data: obj
        })
            .then(res => {
                // console.log(res)
                login(res.data.userId)
                navigate("/")
                toastFunc('success', 'Congrats', 'Log-in Successful')
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

        // console.log(obj)
    }

    // console.log({authState})

    return (
        <Box className='signin'>
            <VStack>
                <HStack>
                    <BsCreditCard2Front />
                    <Text>Checkout Faster</Text>
                </HStack>
                <HStack>
                    <svg width="26" height="16" focusable="false" ><g transform="translate(1 1)" stroke="#393939" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M6.998 11.372h9.64m3.86 0H23.5V7.924l-3.9-2.482L18.028.698H.5v10.674h2.63"></path><circle cx="5.068" cy="11.371" r="1.931"></circle><circle cx="18.568" cy="11.371" r="1.931"></circle></g></svg>
                    <Text>Track orders easily</Text>
                </HStack>
                <HStack>

                    <svg width="24px" height="24px" focusable="false"><path d="M19.942 11.07c-.459-3.702-3.61-6.57-7.436-6.57a7.5 7.5 0 0 0-6.878 4.512 5.243 5.243 0 0 0 .114 10.487v.001h13.526v-.002a4.24 4.24 0 0 0 .674-8.428z" fill="none" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></path><path d="M14.993 16.825V8.984h-1.164v4.87L9.25 8.825v7.805h1.161v-4.797l.042.045z" fill="#393939"></path></svg>
                    <Text>Use one Sign-in accross our brands</Text>
                </HStack>
            </VStack>
            <VStack>
                <Heading fontSize="2xl" fontWeight="light"> Create Account</Heading>
                <VStack alignItems="flex-start" w="full">
                    <Text>First Name<span className='rqrd'>*</span></Text>
                    <Input type='text' borderRadius="none" placeholder='Enter First Name' ref={fnameRef} focusBorderColor="gray.200" />
                </VStack>
                <VStack alignItems="flex-start" w="full">
                    <Text>Last Name<span className='rqrd'>*</span></Text>
                    <Input type="text" placeholder='Enter Last Name' borderRadius="none" ref={lnameRef} focusBorderColor="gray.200" />
                </VStack>

                <VStack alignItems="flex-start" w="full">
                    <Text>Password<span className='rqrd'>*</span></Text>
                    <HStack>
                        <Input type={showPassword ? "text" : "password"} borderRadius="none" ref={pwdRef} placeholder="Create Password" focusBorderColor="white" />
                        {showPassword ? <FaEyeSlash onClick={showPWDHandle} /> : <FaEye onClick={showPWDHandle} />}
                    </HStack>
                </VStack>
                <Text>By tapping Next, you agree to our <Link>Privacy Policy</Link> and <Link>Terms & Conditions</Link>.</Text>
                <Button borderRadius="none" isLoading={loading} loadingText="Signing in" onClick={handleSignin}>Next</Button>
            </VStack>
        </Box>
    )
}

export default Signin