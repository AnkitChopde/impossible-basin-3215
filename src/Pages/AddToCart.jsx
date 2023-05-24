import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiLock } from "react-icons/fi";
import {CiTurnR1} from "react-icons/ci"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EmptyCart from "../SmallComponents/EmptyCart";

const AddToCart = () => {
  return (
    <div>
      <Navbar />
      {/* <EmptyCart/> */}
      <Box>
        <Box h="60px" boxShadow="md">
          <Center>
            <HStack mt="25px">
              <Text color="#00A9E0" fontWeight="900">
                CURBSIDE PICKUP{" "}
              </Text>
              <Text> only in the app! or</Text>
              <Text color="#00A9E0" fontWeight="900">
                {" "}
                IN STORE PICKUP
              </Text>
              <Text>super fast + free</Text>
              <Link color="#00A9E0" fontWeight="900">
                {" "}
                get the details
              </Link>
            </HStack>
          </Center>
        </Box>
        <Box w="80%" m="auto" h="600px">
          <Text
            p="20px"
            textAlign="left"
            fontWeight="900"
            color="#444444"
            fontSize="xl"
          >
            Your Cart()
          </Text>
          <HStack>
            <Box w="70%" h="500px">
              <HStack spacing="3" pl="3">
                <Button
                  rounded={"none"}
                  borderRadius="10px"
                  w={"48%"}
                  mt={0}
                  size={"md"}
                  bg="#00A9E0"
                  color="white"
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  {" "}
                  Ship to address
                </Button>
                <Button
                  rounded={"none"}
                  borderRadius="10px"
                  w={"48%"}
                  mt={8}
                  size={"md"}
                  bg="#00A9E0"
                  color="white"
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Free pickup in store
                </Button>
              </HStack>
              <Text
                p="20px"
                textAlign="left"
                fontWeight="600"
                color="#444444"
                fontSize="xl"
              >
                Arrives in 3 to 10 days
              </Text>

              <Box w="100%" h="130px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <HStack>
                  <Box width="128px" h="128px" >
                    <Image w="80%" src="https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw84402156/productimages/1O541210.jpg?sw=140&sh=175&sfrm=jpg" alt=""></Image>
                  </Box>
                  <Box>
                    <Flex w="" gap="8">
                      <Box
                        textAlign="left"
                        p="10px"
                        color="#444444"
                        w="250px"
                        h="130px"
                      >
                        <Text>Carter's</Text>
                        <Text fontSize="lg">
                          Baby two piece hooded bodysuit pant set
                        </Text>
                        <Text fontSize="sm">Size:3M</Text>
                        <Text fontSize="sm">Color:Multi</Text>
                      </Box>
                      <Box w="100px" h="130px" pt="10px">
                        <Select placeholder="Qnty">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                        </Select>
                      </Box>
                      <Box w="240px" h="130px" p="10px">
                        <Text textAlign="right">$15.00</Text>
                        <Text textAlign="right">$14.00</Text>
                        <HStack
                          textDecoration="underline"
                          color="blue"
                          ml="45px"
                          mt="30px"
                          fontSize="13px"
                        >
                          <Link>Edit |</Link>
                          <Link>Remove |</Link>
                          <Link>Save for later</Link>
                        </HStack>
                      </Box>
                    </Flex>
                  </Box>
                </HStack>
              </Box>
            </Box>
            <Box p="15px" w="30%" h="500px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
              <Text
                textAlign="left"
                fontWeight="600"
                color="#444444"
                fontSize="xl"
              >
                Order Summary
              </Text>
              <HStack mt="4" borderBottom="2px solid grey" pb="10px">
                <Input placeholder="Promo Code" size="lg" />
                <Button
                  w="100px"
                  h="40px"
                  bg="white"
                  border=" 1px solid black"
                  _hover={{ bg: "RGBA(0, 0, 0, 0.08)" }}
                >
                  Apply
                </Button>
              </HStack>
              <Flex
                color="#444444"
                mt="4"
                fontSize="lg"
                justifyContent="space-between"
              >
                <Text>Subtotal</Text>
                <Text fontSize="mg">$15.00</Text>
              </Flex>
              <Flex mt="4" fontSize="lg" justifyContent="space-between">
                <Text>Shipping</Text>
                <Text fontSize="md">$15.00</Text>
              </Flex>
              <Flex mt="4" fontSize="lg" justifyContent="space-between">
                <Text>Estimated tax</Text>
                <Text fontSize="md">-</Text>
              </Flex>

              <Flex
                mt="4"
                fontWeight="900"
                fontSize="xl"
                justifyContent="space-between"
              >
                <Text>Order Total</Text>
                <Text fontSize="md">-</Text>
              </Flex>
              <Button
                
                rounded={"none"}
                w={"100%"}
                mt={8}
                size={"lg"}
                py={"5"}
                bg="#00A9E0"
                color="white"
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                <FiLock /> CHECKOUT
              </Button>
              <Text mt="15px" fontSize="md" color="#444444">
              Exact shipping and taxes are calculated at checkout.
              </Text>

             <Center>
             <HStack ml="-10px">
                <CiTurnR1/>
              <Text mt="5px" fontWeight="900" fontSize="lg" color="#444444">  Share Cart</Text>
              </HStack>
             </Center>
            
            </Box>
          </HStack>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default AddToCart;
