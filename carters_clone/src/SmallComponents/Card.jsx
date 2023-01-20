import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Divider,
  } from '@chakra-ui/react';
  import { FiHeart } from 'react-icons/fi';
  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    numReviews: 34,
  };

  function Card() {
    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          h="420px"
          w="-moz-fit-content"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          <Box>

          </Box>
          <Image h="300px"
            src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw24a47475/productimages/1N961810.jpg?sw=470"
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
          <Box borderTop={"dashed 2px grey"} mt="3" p="6">
            <Box d="flex" alignItems="baseline">
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {data.name}
              </Box>
              <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiHeart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
             
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  £
                </Box>
                {data.price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default Card;
