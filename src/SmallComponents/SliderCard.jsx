
import {
    Box,
    Image,
    useColorModeValue,
    HStack,
    Text,
    Center,
  } from '@chakra-ui/react';
  
  function SliderCard({title,num,src}) {
    return (
        <Box bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow=""
        pb="12"
        h="250px"
       
        boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
       >
         <Image p="5" pt="2"  borderBottom="2px dashed grey" src={src} alt=""/>
        <Center>
        <HStack color="#444444" fontSize="xl" mt="2">
         <Text  >{title}</Text>
            <Text  opacity={"0.5"}>({num})</Text>

         </HStack>
        </Center>
        </Box>
    
    );
  }
  
  export default SliderCard;