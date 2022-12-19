import React, { useContext, useRef } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { Heading, Image, Box, Flex, Text, FormControl, FormLabel, Select, Button, HStack, useToast, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { MdStarRate } from 'react-icons/md'
import { BsFillBagPlusFill } from 'react-icons/bs'
import ReactImageMagnify from 'react-image-magnify'
import { AuthContext } from "../../Context/AuthContext"
import './ProductDetails.css'
import SmallCard from './SmallCard'
import Loader from './Loader'

let dollarIndianLocale = Intl.NumberFormat('en-IN');
const ProductDetails = () => {

    const toast = useToast()
    const { gender, id } = useParams()
    const selectRef = useRef()
    const { authState, setUpdateCart } = useContext(AuthContext)
    const navigate = useNavigate();
    const [data, setData] = React.useState({})
    const [smallCardData, setSmallCardData] = React.useState([])
    const [img, setImg] = React.useState(null)
    const [btnLoading, setBtnLoading] = React.useState(false);
    const [pageLoading, setPageLoading] = React.useState(false);

    const toastFunc = (s, t, d) => toast({
        position: 'top-right',
        title: t,
        description: d,
        status: s,
        duration: 5000,
        isClosable: true,
    })

    const getProductDetails = () => {
        setPageLoading(true);
        axios.get(`/${gender}/${id}`)
            .then(res => {
                setData(res.data)
                setImg(res.data.images[0])
            })
            .catch(err => console.log(err));


        axios.get(`/products`)
            .then(res => setSmallCardData(res.data))
            .catch(err => console.log(err))
            .finally(() => setPageLoading(false));
    }

    React.useEffect(() => {
        getProductDetails();
    }, [])

    // console.log(data)
    const handleMouseHover = (image) => {
        setImg(image)
    }

    let stars = new Array(5);
    for (let i = 0; i < 5; i++) {
        if (i < data?.ratings?.rating - 1) stars[i] = 1;
        else stars[i] = 0;
    }

    const parcentage = () => Math.abs((100 * (data.price - data.strikeOfPrice)) / data.strikeOfPrice).toFixed(2)

    const handleAddToCart = () => {
        if (authState.isAuth) {
            setBtnLoading(true);

            axios.post(`/cart`, {
                ...data,
                id: Date.now(),
                size: selectRef.current.value || data.size,
                userId: authState.token,
                quantity: 1
            })
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                .finally(() => setBtnLoading(false))

                setUpdateCart(Number(authState.updateCart) + 1)
            toastFunc('success', 'Congrats', 'Item Added to the Cart')
        } else {
            toastFunc('warning', 'Alert ⚠', 'Please Log in First..!')
            navigate("/signin")
        }
    }

    const random = Math.floor(Math.random() * 10);

    return pageLoading ? <Loader /> : (
        <>
            <Breadcrumb m="20px" className='Breadcrumb'>
                <BreadcrumbItem>
                    <Link to="/">Home</Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link to={`/products/${gender}`}>{gender}</Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink>Products</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
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
                            {stars?.map((e, i) => <MdStarRate key={i} color={e === 0 ? "#c3c3c3" : "black"} />)}<Text>({data?.ratings?.count})</Text>
                        </Flex>
                        <Heading fontSize={['xl', '26px']}>{data.name}</Heading>
                        <Text>{data.brand}</Text>
                        <Text>INR {dollarIndianLocale.format(data.price)}</Text>
                        <Text>(Up to {parcentage()}% off select items)</Text>
                        <Text as="s" >INR {data.strikeOfPrice}</Text>
                        <Text>Limited-Time Sale</Text>
                        <Text>{data.description}</Text>
                        <FormControl>
                            <FormLabel zIndex="0"><Text as="samp">Fit:</Text> True to Size</FormLabel>
                            <Select disabled={data.size === 1} borderRadius="none" placeholder='Select Size' ref={selectRef}>
                                <option> {data.size} </option>
                                <option> {data.size + 1} </option>
                                <option> {data.size + 2} </option>
                                <option> {data.size + 3} </option>
                                <option> {data.size + 4} </option>
                            </Select>
                        </FormControl>
                        <Text><Text as="b">{data?.ratings?.count}</Text> People viewing</Text>
                        <Button borderRadius="none" onClick={handleAddToCart} isLoading={btnLoading} spinnerPlacement='end' loadingText="Adding Item to Cart">
                            <HStack>
                                <BsFillBagPlusFill />
                                <Text>Add to Bag</Text>
                            </HStack>
                        </Button>
                    </Flex>
                </Box>
                <Flex display={["none", "none", "none", "none", "flex"]} className='smallCards'>
                    {
                        smallCardData.map((item, i) => {
                            if (i >= random && i < random + 2) {
                                return <SmallCard key={item.id} {...item} />
                            }
                        })
                    }
                </Flex>
            </Box>
        </>
    )
}

export default ProductDetails