import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
} from '@chakra-ui/react'
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";
import { MdLocalShipping } from "react-icons/md";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const { image, desc, crossPrice, price, name, brand } = product;
  return (
    <div>
      <Navbar />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                Jackets
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${price}.00 USD
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  Baby 1-Piece Striped Snug Fit Cotton Footie PJs
                </Text>
                <Text fontSize={"lg"}>
                  Designed to be all day comfort from sleeping to playing, this
                  cuddly and super soft 1-piece is perfect for playtime, tummy
                  time or anytime!
                </Text>
              </VStack>
              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("#00A9E0", "gray.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Add to cart
              </Button>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <HStack>
                      <Image width="30px" src={"https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.283/on/demandware.static/-/Sites-Carters-Library/default/dw9aca6380/keyfeatureicons/100cotton.svg?yocs=4G_"} alt={""}/>
                    <ListItem> Cool, cotton jersey</ListItem>
                    </HStack>
                   <HStack>
                   <Image width="30px" src={"https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.283/on/demandware.static/-/Sites-Carters-Library/default/dw9aca6380/keyfeatureicons/100cotton.svg?yocs=4G_"} alt={""}/>
                    <ListItem>100% cotton</ListItem>
                   </HStack>
                  </List>
                  <List spacing={2}>
                  <HStack>
                  <Image width="30px" src={"https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.283/on/demandware.static/-/Sites-Carters-Library/default/dw04bcd9d3/keyfeatureicons/wardrobeessentials.svg?yocs=4G_"} alt={""}/>
                    <ListItem> Stock up style</ListItem>
                  </HStack>
                   <HStack>
                   <Image width="30px" src={"https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.283/on/demandware.static/-/Sites-Carters-Library/default/dw7c656999/keyfeatureicons/outfitmaker.svg?yocs=4G_"} alt={""}/>
                    <ListItem>Instant outfit maker!</ListItem>
                   </HStack>
                  </List>
                </SimpleGrid>
              </Box>
              <Accordion allowToggle borderTop="2px dashed grey">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                       Product Details
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  Designed to be all day comfort from sleeping to playing, this cuddly and super soft 1-piece is perfect for playtime, tummy time or anytime!
                  </AccordionPanel>
                  <AccordionPanel pb={4}>
                  Style # V_1L961810
                  </AccordionPanel>
                  <AccordionPanel pb={4}>
                  Fabric & Care:
                  STANDARD 100 by OEKO-TEX®20.HUS.39362
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Footer />
    </div>
  );
}

export default SingleProductPage;
