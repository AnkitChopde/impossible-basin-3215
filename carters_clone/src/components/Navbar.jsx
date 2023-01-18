import React from "react";
import { Box, Flex, HStack, Image, Spacer,Center, Stack } from "@chakra-ui/react";
import {GrUserManager} from "react-icons/gr"
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"
import { FiHeart } from "react-icons/fi";
import {RxCodesandboxLogo} from "react-icons/rx"
import {BsCart4} from "react-icons/bs"
const Navbar = () => {
  return (
    <div>
      <Box h="170px" >
        <Box border="1px solid gray" h="36px" bg={"RGBA(0, 0, 0, 0.04)"} >
        <Flex>
          <Box>
            <HStack spacing={2} ml="10px" marginTop="-4">
            <Image w="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SGwZKyBY_qwJ5zG-ZDBRu50MWdRaojwx9A&usqp=CAU" alt=""/>
                <Image w="70px" src="data:image/jpeg;base64,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" alt="" />
                <Image w="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvh86OaQfelibJnTIQqeSpcGZKSvGlOHhdNIeTmuTkItj05iz9gAS1CoQDQkkX7J__RDw&usqp=CAU" alt=""/>
                <Image w="50px" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkrJUmnLk4dv6gDwJeov58iI9AHfQjsEQ6A&usqp=CAU" alt=""/>
            </HStack>
          </Box>
          <Spacer />
          <Box mt="7px" className={styles.support}>Free Shipping on $35+ Orders</Box>
         
          <Spacer />
        <Box w="20%" >
            <Flex mt={"6px"} spacing={4} justifyContent={"space-around"} >

                
                   <Flex>
                   <GrUserManager/>
                    <Link >Sign In</Link>
                   </Flex>
                  <Flex>
                  <FiHeart/>
                    <Link>Hearts</Link>
                  </Flex>
                  <Flex>
                    <RxCodesandboxLogo/>
                    <Link>Orders</Link>
                    </Flex>

                <Flex>
                <Link><BsCart4/></Link>
                </Flex>
            </Flex>

        </Box>
        </Flex>
        </Box>
        <Box border="1px solid red" h="100px">
           <Flex>
            <Image src=""/>
           </Flex>

        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
