import LoginForm from '../components/forms/LoginForm';
import SignUpForm from '../components/forms/SignUpForm';
import ColorModeToggler from '../components/dashboard-ui/togglers/ColorModeToggler';
import { 
  Box, 
  Flex, 
  useColorMode, 
  useColorModeValue, 
} from '@chakra-ui/react';

const LoginAndRegistrationRoute = () => {
 
  const bg = useColorModeValue('brand.lightmode.primary.base', 'brand.darkmode.primary.base');
  
  return (
    <Flex 
      h={{ sm: '100vh', md: '100vh', lg: '100vh'}} 
      bg={bg} 
      justify='center'
      align='center'
      direction='column'>
      <Flex 
        gap={4}
        py={8}
        direction={['column', null, null, 'row', 'row']}
        justify='center'
        align='center'>
        <Box w={['80%','container.sm', 'container.md']} alignSelf={{md: 'start'}}>
          <LoginForm />
          <Box
             w={['78%', '78%', '78%', '72%', '72%']}
             pt={{base: '2px',  sm: '2px'}}
             pb={{base: '16px', sm: '16px'}}
             mt='50px'>
          <ColorModeToggler route='/' />
          </Box>
        </Box>
        <Box w={['80%','container.sm', 'container.md']}>
          <SignUpForm h='100%' />
        </Box>
      </Flex>
    </Flex>
  );
}

export default LoginAndRegistrationRoute;