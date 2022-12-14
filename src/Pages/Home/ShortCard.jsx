import React from 'react'
import { Center, Image, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ShortCard = ({ img, title }) => {
    return (
        <Link>
            <Center w="full" flexDirection="column" gap="15px">
                <Image src={img} />
                <Heading
                    fontSize={["8px", "16px", "2xl"]}
                    fontFamily="'Josefin Sans', sans-serif">
                    {title}
                </Heading>
            </Center>
        </Link>
    )
}

export default ShortCard