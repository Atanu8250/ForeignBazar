import { Box, Text, Button, Center, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function NoProduct() {
    const navigate = useNavigate();

  return (
    <Box textAlign="center" py={10} px={6}>
      <Center
        display="inline-block">
        <Image src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"/>
      </Center>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        onClick={() => navigate("/products/products")}
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid">
        Add Some Product
      </Button>
    </Box>
  );
}