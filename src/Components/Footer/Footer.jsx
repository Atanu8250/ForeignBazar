import React, { useContext } from 'react';
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    useColorModeValue,
    Center,
    HStack,
    Image,
    Input,
    Button
} from '@chakra-ui/react';
import { FaPinterestP, FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import style from './Footer.module.css'
import { AuthContext } from '../../Context/AuthContext';


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {

    const {authState} = useContext(AuthContext)

    return (
        <>
            <HStack className={style.email_update} display={authState.isAuth ? "none" : "flex"}>
                <HStack>
                    <Text>Get Email Updates:</Text>
                    <Input borderRadius="none" placeholder='Email Address'/>
                    <Button borderRadius="none">Sign up</Button>
                </HStack>
            </HStack>
            <Box bg='#f9f9f9' color='gray.700' pr="80px">
                <Container as={Stack} maxW={'8.5xl'} py={3}>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg: 6 }} spacing={8}>
                        <Stack className={style.stack} align={'flex-start'}>
                            <ListHeader>Customer Service</ListHeader>
                            <Link href={'#'}>Contact Us</Link>
                            <Link href={'#'}>Order Status</Link>
                            <Link href={'#'}>Shipping</Link>
                            <Link href={'#'}>Return Policy & Exchanges</Link>
                            <Link href={'#'}>Price Adjustments</Link>
                            <Link href={'#'}>Gift Cards</Link>
                            <Link href={'#'}>FAQ</Link>
                            <Link href={'#'}>Product Recalls</Link>
                            <Link href={'#'}>
                                <HStack>
                                    <Image src='https://n.nordstrommedia.com/alias/IN.gif' />
                                    <Text>India</Text>
                                </HStack>
                            </Link>
                        </Stack>

                        <Stack align={'flex-start'} className={style.stack}>
                            <ListHeader>About Us</ListHeader>
                            <Link href={'#'}>All Brands</Link>
                            <Link href={'#'}>Careers</Link>
                            <Link href={'#'}>Corporate Social Responsibility</Link>
                            <Link href={'#'}>Diversity, Inclusion & Belonging</Link>
                            <Link href={'#'}>Get Email Updates</Link>
                            <Link href={'#'}>ForeignBazar Blog</Link>
                            <Link href={'#'}>The Thread</Link>
                            <Link href={'#'}>Nordy Podcast</Link>
                        </Stack>

                        <Stack align={'flex-start'} className={style.stack}>
                            <ListHeader>Stores & Services</ListHeader>
                            <Link href={'#'}>Find a Store</Link>
                            <Link href={'#'}>Free Style Help</Link>
                            <Link href={'#'}>Alterations & Tailoring</Link>
                            <Link href={'#'}>Pop-in Shop</Link>
                            <Link href={'#'}>virtual Events</Link>
                            <Link href={'#'}>Spa ForeignBazar</Link>
                            <Link href={'#'}>ForeignBazar Restaurants</Link>
                            <Link href={'#'}>ForeignBazar Local</Link>
                        </Stack>

                        <Stack align={'flex-start'} className={style.stack}>
                            <ListHeader>ForeignBazar Card & Reward</ListHeader>
                            <Link href={'#'}>The Nordy Club Rewards</Link>
                            <Link href={'#'}>Pay My Bill</Link>
                            <Link href={'#'}>Manage My Nordstrom Card</Link>
                        </Stack>

                        <Stack align={'flex-start'} className={style.stack}>
                            <ListHeader>ForeignBazar, Inc.</ListHeader>
                            <Link href={'#'}>ForeignBazar Rack</Link>
                            <Link href={'#'}>ForeignBazar Canada</Link>
                            <Link href={'#'}>Investor Relations</Link>
                            <Link href={'#'}>Press Releases</Link>
                            <Link href={'#'}>ForeignBazar Media Network</Link>
                        </Stack>

                        <Stack align={'flex-start'}>
                            <ListHeader>
                                <svg width="24px" height="24px" focusable="false" className="nui-icon nui-icon-large-apps ">
                                    <g id="Originals">
                                        <path d="M12.964 21.014v2.485h7.4a.384.384 0 0 0 .374-.394v-2.091h-7.774z"></path>
                                        <path d="M12.964 23.499h7.4a.374.374 0 0 0 .374-.375V.874a.374.374 0 0 0-.374-.375H5.678a.374.374 0 0 0-.374.375v6.115"></path>
                                        <path d="M20.345.499H5.698a.393.393 0 0 0-.394.394v1.745h15.434V.893a.393.393 0 0 0-.393-.394zM11.308 8.668V23H3.762V8.668h7.546m.605-1H3.157a.395.395 0 0 0-.395.395v15.542c0 .218.176.395.395.395h8.756a.395.395 0 0 0 .395-.395V8.063a.395.395 0 0 0-.395-.395z"></path>
                                        <path d="M2.762 21.013v2.592c0 .218.176.395.395.395h8.756a.395.395 0 0 0 .395-.395v-2.592H2.762zM11.913 7.668H3.157a.395.395 0 0 0-.395.395v2.16h9.546v-2.16a.395.395 0 0 0-.395-.395z"></path>
                                        <path d="M13.565 1.586h-1.087a.28.28 0 0 1 0-.558h1.087a.28.28 0 0 1 0 .558zM7.539 22.999a.522.522 0 0 1-.52-.528c0-.291.23-.528.52-.528a.53.53 0 0 1 .536.528.531.531 0 0 1-.536.528zM8.061 9.254H7.009a.27.27 0 0 1 0-.54h1.052a.27.27 0 0 1 0 .54z"></path>
                                    </g>
                                </svg>
                                Install App
                            </ListHeader>
                            <HStack>
                                <Link href={'#'}>
                                    <Center border="1px" borderRadius="50%" p="5px" _hover={{
                                        color: "#84c5fa"
                                    }}><BsInstagram /></Center>
                                </Link>
                                <Link href={'#'}>
                                    <Center border="1px" borderRadius="50%" p="5px" _hover={{
                                        color: "#c72828"
                                    }}><FaPinterestP /></Center>
                                </Link>
                                <Link href={'#'}>
                                    <Center border="1px" borderRadius="50%" p="5px" _hover={{
                                        color: "#16b2fa"
                                    }}><BsTwitter /></Center>
                                </Link>
                                <Link href={'#'}>
                                    <Center border="1px" borderRadius="50%" p="5px" _hover={{
                                        color: "#1977f3"
                                    }}><FaFacebookF /></Center>
                                </Link>
                                <Link href={'#'}>
                                    <Center border="1px" borderRadius="50%" p="5px" _hover={{
                                        color: "grey"
                                    }}><FiPlus /></Center>
                                </Link>
                            </HStack>
                        </Stack>
                    </SimpleGrid>
                </Container>

                <Box
                    borderTopWidth={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}>
                    <Container
                        as={Stack}
                        maxW={'8.5xl'}
                        py={4}
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                        align={{ md: 'flex-start' }}>
                        <Link href='#'>Privacy</Link>
                        <Link href='#'>Do Not Sell My Personal Information</Link>
                        <Link href='#'>Terms & Conditions</Link>
                        <Link href='#'>Interest-Based Ads</Link>
                        <Text>© 2022 ForeignBazar, Inc.</Text>
                    </Container>
                </Box>
            </Box>
        </>
    );
}