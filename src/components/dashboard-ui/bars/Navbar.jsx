import React from 'react';
import { Link as RouterLink} from "react-router-dom";

import  {
          Box,
          Container,
          Avatar,
          Text,
          HStack,
          Flex,
          Spacer,
          Link,
        } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box py='2' bgColor='blackAlpha.300'>
      <Container maxW='container.lg' w='container.lg'>
        <Flex align='center'>
          <Box>
           <HStack gap='2'>
            <Avatar />
            <Text>Hello, Johnny</Text>
           </HStack>
          </Box>
          <Spacer />
            <Box maxW='sm' w='sm'>
              <Flex justify='space-evenly' align='end'>
                <Link as={RouterLink} to='/financial-settings'>Your Finances</Link>
                <Link as={RouterLink} to='/user-settings'>User Settings</Link>
              </Flex>
            </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;