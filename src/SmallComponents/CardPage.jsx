
import {
    Box,
    Center,
    useColorModeValue,
    Text,
    Stack,
    Image,
    Flex,
    Icon,
    Tooltip,
    chakra,
   
  } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
  
 
  
  export default function ProductSimple({image,name,price,cprice,brand,desc,}) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'290px'}
          w={'full'}
          
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            >
            <Image
              rounded={'lg'}
              height={230}
              width={250}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10}>
            <Text color={'gray.500'} fontSize={'10px'} textTransform={'uppercase'}>
              {brand}
            </Text>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="sm"
              color="#444444"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {name}
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
              width="80%"
              isTruncated>
            {desc}
            </Text>
            <Stack direction={'row'} align={'center'}>           
              <Text fontWeight={800} color="#444444" fontSize={'18px'} >
                ${price}
              </Text>
              <Text textDecoration={'line-through'} color="#444444" fontSize={'11'} >
                $ {cprice}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }