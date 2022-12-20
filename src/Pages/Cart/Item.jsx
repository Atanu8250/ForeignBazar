import { Button, Flex, Divider, Heading, Select, Text, Box, Image } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext';
let dollarIndianLocale = Intl.NumberFormat('en-IN');
const Item = ({ item, setChangeby, changeby }) => {
    const { id, name, brand, quantity, images, size, price } = item;
    const { authState, setUpdateCart } = useContext(AuthContext)

    const handleQuantityChange = (e) => {
        axios.patch(`/cart/${item.id}`, {
            ...item,
            quantity: e.target.value ? +(e.target.value) : item.quantity
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setChangeby(!changeby)
    }


    const handleRemoveItem = () => {
        axios.delete(`/cart/${item.id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setUpdateCart(authState.updateCart - 1)
        setChangeby(!changeby)
    }

    return (
        <>
            <Flex className='cart-item' flexDirection={['column', 'column', 'row']}>
                <Box>
                    <Image src={images[0]} />
                </Box>

                <Box>
                    <Text>{brand}</Text>
                    <Text>{name}</Text>
                    <Text>Size: {size}</Text>
                    <Text>Quantity: {quantity}</Text>
                    <Text>Item: {id}</Text>
                    <Text>₹{dollarIndianLocale.format(price * quantity)}</Text>
                    <Select placeholder="Qty" borderRadius="none" onChange={handleQuantityChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Select>
                    <Button variant="link" colorScheme="blue" onClick={handleRemoveItem}>Remove</Button>
                </Box>
                <Box>
                    <Text>Not available for pickup</Text>
                    <Heading>Shipping</Heading>
                    <Text>Internation orders useually arrive within 5-13 business days. We'll give you shipping dates in checkout.</Text>
                </Box>
            </Flex>
            <Divider />
        </>
    )
}

export default Item