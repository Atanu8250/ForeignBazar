import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    HStack,
    Flex
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function SecondCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server

    /*
    

 



    */ 

    const cards = [
        {
            title: 'Turn Up the Temp',
            text:
                "Weatherproof your wardrobe with these cozy essentials.",
            link: ["Men's Cold WeatherWomen's Cold Weather"],
            image:
                'https://n.nordstrommedia.com/id/46e5fdd4-68db-419a-8986-15d79dd9033d.jpeg',
        },
        {
            title: 'Need Now: Puffy Boots',
            text:
                "Stay Warm, dry and chic in trending styles from Jeffrey Campbell and more.",
            link: ["Snow & Winter Boots"],
            image:
                'https://n.nordstrommedia.com/id/e0a83ddd-e465-443a-ac82-94038dca939d.jpeg',
        },
        {
            title: 'Simply Sexy',
            text:
                "See and be Seen in Effortlessy chic style",
            link: ["Holiday Night Out"],
            image:
                'https://n.nordstrommedia.com/id/e0a83ddd-e465-443a-ac82-94038dca939d.jpeghttps://n.nordstrommedia.com/id/4039c0ab-964b-4a62-b4b8-909523fb7c0c.jpeg',
        },
        {
          title: 'Altogether Cozy ',
          text:
            "Festive Pajamas for the whole family",
          link:["Kid's Pajamas & Robes"],
          image:
            'https://n.nordstrommedia.com/id/4e990e80-324e-4641-91fc-f2b02ce7c8e9.jpeg',
        }
    ];

    return (
        <Container
            fontFamily="'Josefin Sans', sans-serif"
            position={'relative'}
            height={['150px', '250px', '450px', '600px']}
            maxW='9xl'
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BsChevronLeft fontSize={{ sm: '20px', md: "40px" }} />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BsChevronRight fontSize={{ sm: '20px', md: "40px" }} />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                    key={index}
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="100% 100%"
                    backgroundImage={`url(${card.image})`}>
                    {/* This is the block you need to change, to customize the caption */}
                    <Container size="container.lg" height={['150px', '250px', '450px', '600px']} position="relative" left="30%">
                      <Stack
                        textAlign="left"
                        spacing={5}
                        w={'3xl'}
                        maxW={'md'}
                        position="absolute"
                        top="30%"
                        right="5%"
                        transform="translate(0, -50%)">
                        <Heading display={['none', 'block']} fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                          {card.title}
                        </Heading>
                        <Text display={['none', 'block']} fontSize={{ base: 'md', lg: 'lg' }} color="GrayText" >
                          {card.text}
                        </Text>
                      <HStack 
                      display={['none', 'block']}justifyContent="flex-start" textDecoration="underline" >
                        {card.link?.map((el, i)=><Link key={i} >{el}</Link>)}
                      </HStack>
                      </Stack>
                    </Container>
                  </Box>
                ))}
            </Slider>
        </Container>
    );
}