import React from 'react'
import { Stack, SimpleGrid, Container, Box, Link, HStack, Image, Text } from '@chakra-ui/react'

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};


const HoverPart = ({ data }) => {
    return (
        <Box>
            <Container as={Stack} maxW={'8.5xl'} py={3}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg: 6 }} spacing={8}>
                    {data?.map((item, index) => <Stack key={index} align={'flex-start'}>
                        {item?.map((el, i) => index === data.length - 1 && i === item.length - 1 ? <Image key={i} src={el} /> : <Link key={i} href={'#'}>{el}</Link>)}
                    </Stack>)}
                </SimpleGrid>
            </Container>
        </Box>
    )
}

export default HoverPart
