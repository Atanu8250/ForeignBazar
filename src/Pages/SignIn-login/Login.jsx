import React, { useContext } from 'react';
import { Box, Button, Heading, Input, Link, Text, VStack, useToast, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import axios from 'axios';
import "./Signin.css"
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {

    const {login} = useContext(AuthContext)

    const toast = useToast()
    const inputRef = React.useRef()
    const [loading, setLoading] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false);
    let emailFromLS = localStorage.getItem("user-email")
    const navigate = useNavigate();

    const showPWDHandle = () => {
        setShowPassword(!showPassword)
    }

    const toastFunc = (s, t, d) => toast({
        position: 'top-right',
        title: t,
        description: d,
        status: s,
        duration: 5000,
        isClosable: true,
    })

    const handlelogin = () => {

        if (inputRef.current.value == "") {
            toastFunc('error', 'No Entry !', 'Please enter Password !');
            return;
        }

        setLoading(true);
        axios.get(`${import.meta.env.VITE_BASE_URL}/Users`)
            .then(res => {
                let flag = 0
                res.data.map((item) => {
                    if (item.password == inputRef.current.value && item.email == emailFromLS) {
                        toastFunc('success', 'Credential Matched', 'Login Successful');
                        login(item.userId)
                        navigate("/")
                        flag = 1
                    }
                })
                if (!flag) {
                    toastFunc('warning', 'Password not matched !', 'Please enter correct Password !')
                    inputRef.current.value = "";
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }


    return (
        <Box className='login'>
            <VStack>
                <Heading fontSize="2xl" fontWeight="light">Sign Up </Heading>
                <Text>Enter your email to get started.</Text>
                <VStack alignItems="flex-start" w="full">
                    <Text>Email</Text>
                    <Input type="email" borderRadius="none" value={emailFromLS} disabled />
                </VStack>
                <VStack alignItems="flex-start" w="full">
                    <Text>Password</Text>
                    <HStack>
                        <Input type={showPassword ? "text" : "password"} borderRadius="none" ref={inputRef} placeholder="Enter Password" focusBorderColor="white"/>
                        {showPassword ? <FaEyeSlash onClick={showPWDHandle} /> : <FaEye onClick={showPWDHandle} />}
                    </HStack>
                </VStack>
                <Text>By tapping Next, you agree to our <Link>Privacy Policy</Link> and <Link>Terms & Conditions</Link>.</Text>
                <Button borderRadius="none" isLoading={loading} loadingText="Submitting" onClick={handlelogin}>Next</Button>
            </VStack>
        </Box>
    )
}

export default Login