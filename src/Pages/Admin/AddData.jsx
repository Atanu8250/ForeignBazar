import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,
} from '@chakra-ui/react';

import { useRef } from 'react';

export default function AddData() {

    const NameRef = useRef()
    const DescriptionRef = useRef()
    const BrandRef = useRef()
    const TypeRef = useRef()
    const SizeRef = useRef()
    const ImageOneRef = useRef()
    const ImageTwoRef = useRef()
    const PriceRef = useRef()
    const StrikeOfPriceRef = useRef()
    const RatingRef = useRef()
    const CountRef = useRef()
    const categoryRef = useRef()

    const handleSubmit = (e)=>{

        if(NameRef.current.value == "" || DescriptionRef.current.value == "" ||  BrandRef.current.value == "" || TypeRef.current.value == "" || SizeRef.current.value == "" || ImageOneRef.current.value == "" || ImageTwoRef.current.value== "" || StrikeOfPriceRef.current.value == "" || PriceRef.current.value == "" || RatingRef.current.value == "" || CountRef.current.value == "" || categoryRef.current.value == "") return;

        let obj = {
            name: NameRef.current.value,
            description: DescriptionRef.current.value,
            brand: BrandRef.current.value,
            type: TypeRef.current.value,
            gender: categoryRef.current.value,
            size: +(SizeRef.current.value),
            images: [ImageOneRef.current.value, ImageTwoRef.current.value],
            strikeOfPrice: +(StrikeOfPriceRef.current.value),
            price: +(PriceRef.current.value),
            ratings:{
                rating: +(RatingRef.current.value),
                count: +(CountRef.current.value)
            }
        }

        fetch(`http://localhost:3000/Male`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(res=> console.log(res))
        .catch(err => console.log(err))

        // console.log("data transfered")
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Add Product to Our Database</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={2}>

                        <FormControl id="email">
                            <FormLabel>Name</FormLabel>
                            <Input type="text" placeholder='Name' ref={NameRef} />
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel>Description</FormLabel>
                            <Input type="text" placeholder='Description' ref={DescriptionRef} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Brand</FormLabel>
                            <Input type="text" placeholder='Brand' ref={BrandRef} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Type</FormLabel>
                            <Input type="text" placeholder='Type' ref={TypeRef} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Size</FormLabel>
                            <Input type="number" placeholder='Size' ref={SizeRef} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <Select placeholder='Category'  ref={categoryRef}>
                                <option value="common">Common</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Image 1</FormLabel>
                            <Input type="text" placeholder='Image 1' ref={ImageOneRef} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Image 2</FormLabel>
                            <Input type="text" placeholder='Image 2' ref={ImageTwoRef} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Price</FormLabel>
                            <Input type="number" placeholder='Price' ref={PriceRef} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>StrikeOfPrice</FormLabel>
                            <Input type="number" placeholder='StrikeOfPrice' ref={StrikeOfPriceRef} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Rating</FormLabel>
                            <Select placeholder='Rating'  ref={RatingRef}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Count</FormLabel>
                            <Input type="number" placeholder='Count' ref={CountRef} />
                        </FormControl>


                        <Button
                            onClick={handleSubmit}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Submit
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}