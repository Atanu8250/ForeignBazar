import { Box, Button, Divider, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import Loader from '../SinglePage/Loader'
import { TfiGift } from 'react-icons/tfi'
import './Cart.css'
import Item from './Item'
import SmallCard from '../SinglePage/SmallCard'
import NoProduct from './NoProduct'
import { useNavigate } from 'react-router-dom'

let dollarIndianLocale = Intl.NumberFormat('en-IN');
const Cart = () => {

  const navigate = useNavigate()
  const { authState } = useContext(AuthContext);
  const [pageLoading, setPageLoading] = React.useState(false);
  const [smallCardData, setSmallCardData] = React.useState([]);
  const [data, setData] = React.useState([])
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [changeby, setChangeby] = React.useState(false)

  React.useEffect(() => {
    setPageLoading(true);
    axios.get(`/cart?userId=${authState.token}`)
      .then(res => {
        setData(res.data)
        setTotalPrice(res.data.reduce((start, el) => { return start + (el.price * el.quantity) }, 0))
      })
      .catch(err => console.log(err))

    axios.get(`/products`)
      .then(res => setSmallCardData(res.data))
      .catch(err => console.log(err))
      .finally(() => setPageLoading(false));
  }, [changeby])


  console.log('data:', data)

  const random = Math.floor(Math.random() * 10);


  return pageLoading ? <Loader /> : (
    <Box className='Cart'>
      <Box className='Main-Cart'>
        <Heading>Shopping Bag</Heading>
        <Text>Items in your bag are not on hold.</Text>
        <Flex gap="10px">
          <TfiGift />
          Choose gift options when you check out.
        </Flex>
        <Divider />
        <Flex gap="10px">
          <svg width="24px" height="24px" focusable="false">
            <g fill="none" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
              <path d="M6.998 16.372h9.64m3.86 0H23.5v-3.448l-3.9-2.482-1.572-4.744H.5v10.674h2.63"></path>
              <circle cx="5.068" cy="16.371" r="1.931"></circle>
              <circle cx="18.568" cy="16.371" r="1.931"></circle>
            </g>
            <path d="M13.673 13.822v-5.46h-.811v3.391L9.673 8.251v5.436h.81v-3.341l.029.031z" fill="#393939"></path>
          </svg>

          Shipping ({authState.updateCart} items) to India
        </Flex>
        <Text>International Shipping</Text>
        <Divider />

        <Box className='cart-items'>
          {
            totalPrice ? data && data?.map((el, i) => <Item key={i} item={el} setChangeby={setChangeby} changeby={changeby} />) : <NoProduct />
          }
        </Box>

        <Flex className='order-part' flexDirection={['column', 'column', 'column', 'row']}>
          <Box>
            <Text>Accepted Payment Methods</Text>
            <Flex>
              <Box>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png" alt='paytm' />
              </Box>
              <Box>
                <Image src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png" alt='phonepe' />
              </Box>
              <Box>
                <Image src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png" alt='google-pay' />
              </Box>
              <Box>
                <Image src="https://blog.logomyway.com/wp-content/uploads/2022/02/visa-logo-2.jpg" alt='visa' />
              </Box>
              <Box><Image src="https://i.pinimg.com/originals/86/f4/d6/86f4d647b439f5f07e04f6ec15790cd7.png" alt='airtel-payment bank' />
              </Box>
              <Box>
                <Image src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png" alt='mastercard' />
              </Box>
            </Flex>
            <Text>Need help? Call 1.888.282.6060 or chat with US</Text>
            <Text>Shipping Internatinally</Text>
          </Box>
          <Box>
            <HStack>
              <Text>Subtotal</Text>
              <Text>₹{dollarIndianLocale.format(totalPrice)}</Text>
            </HStack>
            <Divider />
            <Button borderRadius="none" disabled={!authState.updateCart} onClick={()=> navigate("/checkout")}> Check Out </Button>
          </Box>
        </Flex>
      </Box>
      <Flex display={["none", "none", "none", "none", "flex"]} ml="50px" className='smallCards'>
        {
          smallCardData?.map((item, i) => {
            if (i >= random && i < random + 3) {
              return <SmallCard key={item.id} {...item} />
            }
          })
        }
      </Flex>
    </Box>
  )
}

export default Cart