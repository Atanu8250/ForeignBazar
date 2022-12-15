import { Box, Button, Heading, Input, Link, Text, VStack, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react'
import './SignIn.css'

const SignInEntry = () => {

  const toast = useToast()
  const inputRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();


  const toastFunc = (s,t,d) => toast({
    position: 'top-right',
    title: t,
    description: d,
    status: s,
    duration: 5000,
    isClosable: true,
  })

  const handleSign = () => {

    if (inputRef.current.value == "") {
      toastFunc('error', 'No Entry !', 'Please enter your Email !');
      return;
    }

    setLoading(true);
    axios.get(`${import.meta.env.VITE_BASE_URL}/Users`)
      .then(res => {
        let flag = 0
        res.data.map((item) => {
          localStorage.setItem("user-email", inputRef.current.value)
          if (item.email == inputRef.current.value) {
            toastFunc('success', 'User found', 'Welcome Back...');
            navigate("/login")
            flag = 1
          }
        })
        if (!flag) {
          toastFunc('warning', 'User not-found !', 'Please Create your account !');
          navigate("/signin_new")
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }

  return (
    <Box className='signin-entry'>
      <VStack>
        <Heading fontSize="2xl" fontWeight="light">Sign In | Create Account</Heading>
        <Text>Enter your email to get started.</Text>
        <Text>Email</Text>
        <Input type="email" borderRadius="none" ref={inputRef} focusBorderColor="gray.200"/>
        <Text>By tapping Next, you agree to our <Link>Privacy Policy</Link> and <Link>Terms & Conditions</Link>.</Text>
        <Button borderRadius="none" isLoading={loading} loadingText="Checking" onClick={handleSign}>Next</Button>
      </VStack>
    </Box>
  )
}

export default SignInEntry