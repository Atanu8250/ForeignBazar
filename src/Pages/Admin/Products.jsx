import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Heading, Input, Select, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import AddData from './AddData'

const reducer = (state, action) => {
  switch (action.type) {

    case 'setId': {
      return { ...state, id: action.payload }
    }

    case 'setName': {
      return { ...state, name: action.payload }
    }

    case 'setBrand': {
      return { ...state, brand: action.payload }
    }

    case 'setDescription': {
      return { ...state, description: action.payload }
    }

    case 'setPrice': {
      return { ...state, price: action.payload }
    }

    case 'setStrikeOfPrice': {
      return { ...state, strikeOfPrice: action.payload }
    }

    default:
      return state
  }
}

const Products = () => {

  const [state, dispatch] = React.useReducer(reducer, { id: "", name: "", brand: "", description: "", price: "", strikeOfPrice: "" })
  const [products, setProducts] = React.useState([])
  const [change, setChange] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  React.useEffect(() => {
    axios.get(`/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [change])

  const deleteProduct = (id) => {
    axios.delete(`/products/${id}`)
      .then(res => {
        setChange(!change)
      })
      .catch(err => console.log(err))
  }


  const goForUpdate = (id) => {
    products.map((product) => {
      if (product.id == id) {
        console.log('product for change',product)
        dispatch({
          type: 'setId',
          payload: product.id
        })

        dispatch({
          type: 'setName',
          payload: product.name
        })

        dispatch({
          type: 'setBrand',
          payload: product.brand
        })

        dispatch({
          type: 'setDescription',
          payload: product.description
        })

        dispatch({
          type: 'setPrice',
          payload: product.price
        })

        dispatch({
          type: 'setStrikeOfPrice',
          payload: product.strikeOfPrice
        })
      }
    })

  }

  const updateProduct = () => {
    axios.patch(`/products/${state.id}`, { ...state })
      .then(res => {
        console.log(res)
        setChange(!change)
      })
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    dispatch({
      type: e.target.name,
      payload: e.target.value
    })
  }


  return (
    <Box>
      <TableContainer my="30px">
        <Heading size="md">Products</Heading>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Sr no</Th>
              <Th>Type</Th>
              <Th>Name</Th>
              <Th>Brand</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, i) => <Tr key={i}>
              <Td>{i + 1}</Td>
              <Td>{product.type}</Td>
              <Td>{product.name}</Td>
              <Td>{product.brand}</Td>
              <Td>{product.gender}</Td>
              <Td>{product.price}</Td>
              <Td>
                <Button colorScheme="blue" onClick={() => {
                  goForUpdate(product.id);
                  onOpen();
                }}>Edit</Button>
              </Td>
              <Td>
                <Button colorScheme="red" onClick={() => deleteProduct(product.id)}>Remove</Button>
              </Td>

            </Tr>)}
          </Tbody>
        </Table>
      </TableContainer>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Update Data
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder='Please enter user name'
                  onChange={handleChange}
                  name='setName'
                  value={state.name}
                />
              </Box>

              <Box>
                <FormLabel>Brand</FormLabel>
                <Input
                  type='text'
                  placeholder='Please enter brand'
                  onChange={handleChange}
                  name='setBrand'
                  value={state.brand}
                />
              </Box>

              <Box>
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  placeholder="Please enter description"
                  onChange={handleChange}
                  name='setDescription'
                  value={state.description}
                />
              </Box>

              <Box>
                <FormLabel>Price</FormLabel>
                <Input
                  type='number'
                  placeholder='Please enter price'
                  onChange={handleChange}
                  name='setPrice'
                  value={state.price}
                />
              </Box>

              <Box>
                <FormLabel>Strike of Price</FormLabel>
                <Input
                  type='number'
                  placeholder='Please enter strike of price'
                  onChange={handleChange}
                  name='setStrikeOfPrice'
                  value={state.strikeOfPrice}
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={updateProduct}>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <AddData />
    </Box>
  )
}

export default Products