import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  HStack
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

export default function FirstCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Last Minute Gifts',
      text:
        "Just what they wanted, just in time. Need it now? Buy online and pick up the same day in store.",
      link: ["Stocking Suffers", "Last-Minute-Gifts", "Gift-Cards"],
      image:
        'https://n.nordstrommedia.com/id/29e01f35-6ada-4cd1-9eba-9549432e17dd.jpeg',
    },
    {
      title: '',
      text:
        "Hurry! Prices May Change",
      link: ["Limited-Time Sale"],
      image:
        'https://n.nordstrommedia.com/id/5624b45a-1a99-4ee4-aea1-543e1811e5db.png',
    }
  ];

  return (
    <Container
      fontFamily="'Josefin Sans', sans-serif"
      position={'relative'}
      height={['120px', '160px', '300px', '400px']}
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
            <Container size="container.lg" height={['120px', '160px', '300px', '400px']} position="relative" >
              <Stack
                textAlign="center"
                spacing={5}
                w={'full'}
                maxW={'md'}
                position="absolute"
                top={index === 1 ? '58%' : '40%'}
                transform="translate(0, -50%)">
                <Heading display={['none', 'block']} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text display={['none', 'block']} fontSize={{ base: 'md', lg: 'lg' }} color="GrayText" pl={{ sm: '0', md: index === 1 ? '100px' : '0px' }}>
                  {card.text}
                </Text>
                <HStack
                display={['none', 'block']} justifyContent="space-around" textDecoration="underline" pl={{ sm: '0', md: index === 1 ? '100px' : '0px' }}>
                  {card.link?.map((el, i) => <Link key={i} >{el}</Link>)}
                </HStack>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Container>
  );
}