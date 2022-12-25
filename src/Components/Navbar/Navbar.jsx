import { Box, Center, Flex, Image, Input, HStack, Divider, VStack, Button, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsSearch, BsBag } from 'react-icons/bs'
import {  MdAdminPanelSettings } from 'react-icons/md'
import { TfiGift } from 'react-icons/tfi'
import { TbLogout } from 'react-icons/tb'
import { VscSignIn } from 'react-icons/vsc'
import HoverPart from './HoverPart'
import "./Navbar.css"
import { AuthContext } from '../../Context/AuthContext'
import axios from 'axios'


const HoverAreaData = {
    "Holiday Gifts": [
        ["Holiday Gifts: Get Inspired", "Holiday Decor", "Stocking Stuffers", "Beauty Gifts", "Cozy Gifts", "Toys & Games", "Holiday Pajamas & Slippers", "UGG Shop", "Make it Pop | Pop in @ForeignBazar"],

        ["All Gifts", "Gifts for Her", "Gifts for Him", "Gifts for Teens", "Gifts for Kids", "Gifts for Babies", "Gifts for Pets", "Gifts for Pets", "Gifts for the Home"],

        ["Gifts by Price", "Gifts on Sale", "Gifts Under $50", "Gifts Under $100", "Luxe Gifts"],

        ["Gifts by Recipient", 'For the Party', 'Host', 'For the Foodie', 'For the Jewelry Lover', 'For the Adventurer', 'For the Techie', 'For the Sports Fan', 'For the One Who Has Everything'],

        ["Holiday Help", 'Free Pickup & Delivery', 'Gift Cards', 'Style Help', 'Festive Events', 'Cozy Gift Ideas', 'Gifts for Coffee Lovers', 'Gifts for Dog Lovers'],

        ['https://n.nordstrommedia.com/id/159b6afc-e0c1-43bb-bd4d-06b954808d48.png']
    ],

    "Holiday Deals": [
        ['Holiday Deals: Get Inspired', 'Cozy Deals Under $100', 'Sweaters as Low as $29', 'Boots Up to 60% Off', 'Bestsellters', 'Limited-Time Sale', 'New Markdowns', 'ForeignBazar Made Sale', 'Gifts on Sale'],

        ['Women', 'New Markdowns', 'Clothing', 'Shoes', 'Handbags & Wallets', 'Jewelry', 'Accessories', 'Beauty', 'Contemporary', 'Designer', 'Plus', 'Petite', 'Maternity', 'Juniors'],

        ['Men', 'New Markdowns', 'Clothing', 'Shoes', 'Accessories', 'Groomming & Cologne', 'Advanced Modern', 'Designer'],

        ['Kids', 'New Markdowns', 'Girls', 'Boys', 'Baby', 'Baby Gear & Essentials', 'Shoes', 'Toys'],

        ['Home', 'Bath', 'Bedding', 'Home Decor', 'Luggage & Travel', 'Tabletop & Kitchen', 'Beauty', 'Cold Weather', 'All Sale'],

        ['https://n.nordstrommedia.com/id/695e017d-2aa7-434c-a7a8-e3fa6f8556c1.png']
    ],

    'Women': [
        ['Women: Get Inspired', 'New Arrivals', 'Holiday Deals', 'Black-Owned & Founded Brands', 'contemporary', 'ForeignBazar Made', 'Make it Pop | Pop-in@ForeignBazar', 'Shop by Trend', 'Sustainable Style'],

        ['Clothing', 'Activewear', 'Blazers, Suits & Separates', 'Coats & Jackets', 'Dresses', 'Jeans & Denim', 'Jumpsuits & Rompers', 'Lingerie, Hosiery & shapewear', 'Loungewear', 'Pants & Leggings', 'Skirts', 'Sleepwear & Robes', 'Sweaters', 'Sweaters & Hoddies'],

        ['Shoes', 'Booties', 'Boots', 'Clogs', 'Comfort', 'Dress Shoes', 'Flats', 'Heels', 'Mules & Slides', 'Oxfords & Loafers', 'Running Shoes', 'Sandals', 'Slippers', 'Sneakers & Athletic', 'Snow & Winter', 'Sneaker Release Calendar'],

        ['Handbags', 'Backpacks', 'Belt Bags', 'Clutches & Pouches', 'Crossobdy Bags', 'Designer Bags', 'Shoulder Bags', 'Tote Bags', 'Wallets & Card Cases', 'Language & Travel', 'Belts', 'Gloves & Mittens', 'Hats'],

        ['Jewelry', 'Bracelets', 'Earnings', 'Necklaces', 'Rings', 'Watches', 'Fine Jewelry', 'Engagement & Wedding', 'Experience Fine Jewelry'],

        ['https://n.nordstrommedia.com/id/98107c78-9f0c-45c9-ad92-23e61b8b935b.jpg']
    ],

    'Men': [
        ['Men: Get Inspired', 'New Arrivals', 'Holiday Deals', 'Advanced Modern', 'Black-Owned & - Founded Brands', 'Bestsellers', "Men's Looks", 'New Concepts: Burberry', 'Nordstrom Made', 'Sneaker Release Calendar', 'Sports Fan'],

        ['Clothing', 'Activewear', 'Blazers & Sport Coats', 'Coats & Jackets', 'Dress Shirts', 'Jeans', 'Lounge, Pajamas & Robes', 'Pants', 'Polo Shirts', 'Shirts', 'Suits & Separates', 'Sweaters', 'Sweatshirts & Hoodies', 'Swimwear & Board Shorts', 'T-Shirts'],

        ['Shoes', 'Boots', 'Comfort', 'Dress Shoes', 'Loafers & Slip-Ons', 'Oxfords & Derbys', 'Running Shoes', 'Sandals & Filp-Flops', 'Slippers', 'Sneakers & Athletic', 'Snow & Winter', 'Body Care & Deodorant', 'Cologne'],

        ['Accessories', 'Backpacks', 'Bags', 'Belts', 'Dopp Kits & Toiletry Bags', 'Gloves', 'Hats', 'Scarves', 'Sunglasses & Eyewear', 'Tech', 'accesssories', 'Ties & Accessories', 'Ties & Pocket Squares', 'Wallets & Card Cases'],

        ['Designer', 'Designer Clothing', 'Designer Shoes', 'Designer Accessories', 'AG', 'AllSaints', 'ASOS', 'BOSS', 'Canada Goose', 'Canali', 'Fear of God Essentials', 'PURPLE BRAND', 'TOPMAN'],

        ["https://n.nordstrommedia.com/id/a38273ae-4212-4441-937b-1ba71a7aea2e.jpg"]
    ]
}



const Navbar = () => {

    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const { authState, logout, setShowAdminPage } = useContext(AuthContext)
    const userName = authState.isAuth ? user?.name?.split(" ")[0] : "";
    // console.log('user:', user)

    useEffect(() => {
        axios.get(`/users`)
            .then(res => {
                res.data.map(item => {
                    if (item.userId == authState.token) {
                        setUser(item)
                    }
                })
            })
            .catch(err => console.log(err))
    }, [authState.isAuth])


    return (
        <>
            <Box className='Navbar'>
                <Center className='upperNav' maxW="9xl" >
                    <Box>There's still time to shop! Find the best gifts, all in one place. <Link as="a" href='https://www.nordstrom.com/browse/customer-service/international-orders?jid=j011535-13614&cid=00000&cm_sp=merch-_-multi-div_13614_j011535-_-swptcos_corp_persnav_info&#anchor-link-shipping-charges'> Shop Gifts</Link></Box>
                </Center>
                <Flex className='lowerNav' maxW="8xl">
                    <Link to="/">
                        <Image src="https://i.ibb.co/9Gm36ZL/FOREIGNBAZAR.png" />
                    </Link>

                    <HStack>
                        <BsSearch />
                        <Input placeholder='Search Products or brands' variant="unstyled" />
                    </HStack>

                    <HStack>
                        {userName ? <Box className='userbox'>
                            <Link>Hi, {userName}</Link>
                            <VStack position="absolute">
                                {user.tag == "admin" && <Button colorScheme="red" onClick={() => {
                                    localStorage.setItem('show admin page', true)
                                    setShowAdminPage(true);
                                    navigate("/admin/dashboard");

                                }}><HStack><MdAdminPanelSettings /><Text>Admin Panel</Text></HStack></Button>}
                                <Button colorScheme="red" onClick={() => {
                                    setUser({})
                                    logout()
                                }}><HStack><Text>Log Out</Text> <TbLogout /></HStack></Button>
                            </VStack>
                        </Box>
                            : <Link to="/signin">
                                <VscSignIn />
                                <span>Sign In</span>
                            </Link>}
                        <Link to="/products/male">
                            <svg width="24px" height="24px" focusable="false">
                                <g fill="none" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                    <path d="M.756.75h22.488v20.309H.756z"></path>
                                    <path d="M7.573 20.988v-4.813h8.854v4.849M12 20.952v-4.633"></path>
                                </g>
                                <path d="M14.42 11.854V5.248h-.982v4.103L9.58 5.113v6.578h.979V7.649l.036.037z" fill="#393939"></path>
                            </svg>
                            <span>Stores</span>
                        </Link>
                        <Link href='#'>
                            <svg width="24px" height="24px" focusable="false">
                                <g fill="none" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                    <path d="m23.5 18.785v-13.413l-11.5 4.401v13.227z"></path>
                                    <path d="m12 23-11.5-4.11v-13.518l11.5 4.401"></path>
                                    <path d="m23.5 5.372-11.5-4.372-5.461 2.104-6.039 2.268"></path>
                                    <path d="m17.711 7.547-11.422-4.349"></path>
                                </g>
                            </svg>
                            <span>Purchases
                            </span>
                        </Link>
                        <Link to="./cart">
                            <BsBag />
                            <span>{authState.updateCart}</span>
                        </Link>
                    </HStack>
                </Flex>
                <Divider />


                <Flex className='Navbar-Hover'>

                    <Box>
                        <Link href='#'><TfiGift /> Holiday Gifts </Link>
                        <HoverPart data={HoverAreaData['Holiday Gifts']} />
                    </Box>

                    <Box>
                        <Link href='#'> Holiday Deals </Link>
                        <HoverPart data={HoverAreaData['Holiday Deals']} />
                    </Box>

                    <Box>
                        <Link to="/products/female"> Women </Link>
                        <HoverPart data={HoverAreaData['Women']} />
                    </Box>

                    <Box>
                        <Link to="/products/male"> Men </Link>
                        <HoverPart data={HoverAreaData['Men']} />
                    </Box>

                    <Box>
                        <Link href='#'> Kids </Link>
                        <HoverPart data={HoverAreaData['Holiday Gifts']} />
                    </Box>

                    <Box>
                        <Link href='#'> Young Adult </Link>
                        <HoverPart data={HoverAreaData['Holiday Gifts']} />
                    </Box>

                    <Box>
                        <Link href='#'> Activewear </Link>
                        <HoverPart data={HoverAreaData['Holiday Gifts']} />
                    </Box>

                    <Box>
                        <Link href='#'> Home </Link>
                        <HoverPart data={HoverAreaData['Holiday Gifts']} />
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar