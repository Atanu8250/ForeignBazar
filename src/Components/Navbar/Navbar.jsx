import { Container, Box,  Center, Flex, Image, Input, HStack, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch, BsBag } from 'react-icons/bs'
import { TfiGift } from 'react-icons/tfi'
import { VscSignIn } from 'react-icons/vsc'
import HoverPart from './HoverPart'
import "./Navbar.css"


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
    ]
}



const Navbar = () => {
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
                        <Link to="/signin">
                            <VscSignIn/>
                        <span>Sign In</span>
                        </Link>
                        <Link href='#'>
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
                        <Link href='#'>
                            <BsBag />
                            <span>0</span>
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
                        <Link href='#'> Women </Link>
                        <HoverPart data={HoverAreaData['Women']} />
                    </Box>

                    <Box>
                        <Link href='#'> Men </Link>
                        <HoverPart data={HoverAreaData['Holiday Gifts']} />
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

                    <Box>
                        <Link href='#'> Beauty </Link>
                        <HoverPart data={HoverAreaData['Holiday Gifts']} />
                    </Box>

                    <Box>
                        <Link href='#'> Designer </Link>
                        <HoverPart data={HoverAreaData['Holiday Gifts']} />
                    </Box>

                    <Box>
                        <Link href='#'> The Thread </Link>
                        <HoverPart data={HoverAreaData['Holiday Gifts']} />
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar