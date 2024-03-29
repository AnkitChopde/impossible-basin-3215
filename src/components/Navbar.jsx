import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Center,
  Text,
  Stack,
  VStack,
  Input,
  InputGroup,
  InputRightAddon,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  Button
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import { GrUserManager } from "react-icons/gr";
import {BiSearchAlt} from "react-icons/bi"
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FiHeart } from "react-icons/fi";
import logo from "../Images&Logos/logo.png"
import { RxCodesandboxLogo } from "react-icons/rx";
import { BsCart4,BsPhone } from "react-icons/bs";
const Navbar = () => {
  const { isOpen, onToggle ,onOpen, onClose} = useDisclosure()
  return (
    <div>
      <Box h="170px">
        <Box  h="36px" display={{base:"none",sm:"none",md:"block",lg:"block"}} bg={"RGBA(0, 0, 0, 0.04)"}>
          <Flex>
            <Box>
              
              <HStack spacing={2} ml="10px">
                <Image
                  w="4rem"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SGwZKyBY_qwJ5zG-ZDBRu50MWdRaojwx9A&usqp=CAU"
                  alt=""
                />
                <Image
                  w="70px"
                  h="30px"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <Image
                  w="70px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvh86OaQfelibJnTIQqeSpcGZKSvGlOHhdNIeTmuTkItj05iz9gAS1CoQDQkkX7J__RDw&usqp=CAU"
                  alt=""
                />
                <Image
                  w="50px"
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkrJUmnLk4dv6gDwJeov58iI9AHfQjsEQ6A&usqp=CAU"
                  alt=""
                />
              </HStack>
            </Box>
            <Spacer />
            <Box mt="7px" className={styles.support}>
              Free Shipping on $35+ Orders
            </Box>

            <Spacer />
            <Box w={{base:"30%",md:"40%",lg:"20%"}}>
              <Flex mt={"6px"} spacing={4} justifyContent={"space-around"}>
                <Flex>
                  <GrUserManager />
                  <Link to="/signin">Sign In</Link>
                </Flex>
                <Flex>
                  <FiHeart />
                  <Link to="/hearts">Hearts</Link>
                </Flex>
                <Flex>
                  <RxCodesandboxLogo />
                  <Link to="/orders">Orders</Link>
                </Flex>

                <Flex>
                  <Link to="/addtocart">
                    <BsCart4 />
                  </Link>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box borderTop="1px solid gray" h={{base:"4rem",md:"4rem",lg:"6rem"}}>
        <Flex justifyContent="space-around" pt="2%">
        <Flex
          flex={{ base: 1, md: '1',lg:"1" }}
          ml={{ base: -2,md:"10" }}
          display={{ base: 'flex', md: 'flex',lg:"none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          </Flex>
          <DrawerComp Open={isOpen} Close={onClose}/>
        <Link to="/" alignItems="center">
           <Image
               width={{base:"75%",md:"50%",lg:"50%"}}
               src={logo}
               alt="logo"
               mt={{base:"0.3rem",sm:"-0.2rem",md:"-0.6rem",lg:"-0.3rem"}}
          />
           </Link>
           <Flex alignItems="center" w="50%" display={{base:"none",md:"none",lg:"flex"}} justifyContent={"space-around"} spacing={12} className={styles.primary3} >
               <Link to="/products">
               <Box  >
                 <Text>Baby</Text>
                 <p className={styles.primary2}>Preemie - 24M</p>
               </Box>
               </Link>
               <Box>
                 {" "}
                 <Text>Toddler</Text>
                 <p className={styles.primary2}>5T - 2T</p>
               </Box>
               <Box>
                 {" "}
                 <Text>Kid</Text>
                 <p className={styles.primary2}>4 - 14</p>
               </Box>
               <Box>
                 {" "}
                 <Text mt="-6">Holidays</Text>
                <p></p>
               </Box>
               <Text>
                 {" "}
                <Text mt="-6">New & Popular</Text>
                 <p></p>
               </Text>
               <Text>
                 {" "}
                 <Text mt="-6">Sale</Text>
               <p></p>
               </Text>
             </Flex>
             <Box w={{base:"100%",md:"20%",lg:"20%"}} mt={{base:"0.2rem",sm:"-0.2rem",md:"0rem",lg:"0rem"}} >
            <InputGroup border="1px solid grey">
             <Input placeholder="Search" htmlSize={6} />
             <InputRightAddon children={<BiSearchAlt/>} bg="none" />
             </InputGroup>
            </Box>
            
        </Flex>
        </Box>
        <Box bg={"RGBA(0, 0, 0, 0.04)"} borderBottom="2px solid #00B5D8 " borderTop="1px solid gray" h="36px" fontWeight="bold">
              <Center mt="5px" className={styles.head}>UP TO 50% OFF SPRING NEW ARRIVALS</Center>
         </Box>
         <Box bg={"RGBA(0, 0, 0, 0.04)"} h="10px">

         </Box>
      </Box>
    </div>
  );
};

export default Navbar;

const DrawerComp = ({Open,Close})=>{
  const firstField = React.useRef()
  return(
    <Drawer
        isOpen={Open}
        placement='left'
        h="100%"
        initialFocusRef={firstField}
        onClose={Close}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box mt="10"width="100%">
          <Accordion allowMultiple  className={styles.posi} >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Baby <span style={{fontSize:"0.6rem"}}>
                      PREEMIE - 24M
                    </span>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  Baby <span style={{fontSize:"0.6rem"}}>
                      2T - 5T
                    </span>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  Baby <span style={{fontSize:"0.6rem"}}>
                      4 - 14
                    </span>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  Shoes
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
            
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  New & Popular
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
              
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Sale
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
              
              </AccordionPanel>
            </AccordionItem>
   
          </Accordion>
          
        </Box>
        <Box>
        <Box  my="3" fontSize={"0.7rem"} h="1.5rem">
              <Center mt="5px" className={styles.head}>UP TO 50% OFF SPRING NEW ARRIVALS</Center>
         </Box>
         <hr/>
         <HStack p="5" spacing={7}>
            <Box>
                <Text><span style={{color:"black",fontWeight:"bold",opacity:"0.6"}}>FREE</span> 1 Hour Pickup</Text>
                <span style={{color:"#4299E1",textDecoration:"underline"}}>Choose Your Store</span>
            </Box>
            <Box>
               <HStack>
                <Box>
                <BsPhone />
                </Box>
              
                 <Box>
                 <Text>Customer Service</Text>
               <Text>(877) 333-0171</Text>
                 </Box>
              
               </HStack>
            </Box>
         </HStack>
         <HStack p="5" spacing={5}>
         <Button leftIcon={<RxCodesandboxLogo />} px="2rem" colorScheme='teal' variant='outline'>
    Orders
  </Button>
  <Button leftIcon={<FiHeart />} px="2rem" colorScheme='teal' variant='outline'>
    Hearts
  </Button>
         </HStack>
        </Box>
        </DrawerContent>
      </Drawer>
    
  )
}

// <Box borderTop="1px solid gray" h="100px">
//           <Flex justifyContent="space-around"mt="5">
//            <Link to="/">
//            <Image
              
             
//               w="55%"
//               src={logo}
//               alt=""
//             />
//            </Link>
//             <HStack spacing={12} className={styles.primary3} >
//               <Link to="/products">
//               <Box  >
//                 <Text>Baby</Text>
//                 <p className={styles.primary2}>Preemie - 24M</p>
//               </Box>
//               </Link>
//               <Box>
//                 {" "}
//                 <Text>Toddler</Text>
//                 <p className={styles.primary2}>5T - 2T</p>
//               </Box>
//               <Box>
//                 {" "}
//                 <Text>Kid</Text>
//                 <p className={styles.primary2}>4 - 14</p>
//               </Box>
//               <Box>
//                 {" "}
//                 <Text mt="-6">Holidays</Text>
//                <p></p>
//               </Box>
//               <Text>
//                 {" "}
//                 <Text mt="-6">New & Popular</Text>
//                 <p></p>
//               </Text>
//               <Text>
//                 {" "}
//                 <Text mt="-6">Sale</Text>
//                <p></p>
//               </Text>
//             </HStack>
//            <Box border="1px solid red" >
//            <InputGroup border="1px solid grey" >
//             <Input placeholder="Find Your Product" htmlSize={6} width={'30%'} />
//             <InputRightAddon children={<BiSearchAlt/>} bg="none" />
//             </InputGroup>
//            </Box>
//           </Flex>
//         </Box>
//         <Box bg={"RGBA(0, 0, 0, 0.04)"} borderBottom="2px solid #00B5D8 " borderTop="1px solid gray" h="36px" fontWeight="bold">
//              <Center mt="5px" className={styles.head}>UP TO 50% OFF SPRING NEW ARRIVALS</Center>
//         </Box>
//         <Box bg={"RGBA(0, 0, 0, 0.04)"} h="10px">

//         </Box>