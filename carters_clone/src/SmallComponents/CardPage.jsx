
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Icon,
    Tooltip,
    chakra,
    HStack,
    VStack
  } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function ProductSimple() {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Brand
            </Text>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              Shirt
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiHeart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
            
          </Flex>
          <Text
              fontSize="sm"
              fontWeight="semibold"
              as="h4" textAlign="left"
              isTruncated>
             What a nice shirt it is
            </Text>
            <Stack direction={'row'} align={'center'}>
              <HStack spacing={"0"}>
              <Text fontWeight={800} fontSize={'xl'} >
                $ 
              </Text>
              <Text ml={"-3"}>57</Text>
              </HStack>
              
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }