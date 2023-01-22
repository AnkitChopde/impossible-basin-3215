import React from "react";
import styles from "./Footer.module.css";
import {
  Box,
  HStack,
  VStack,
  Link,
  Stack,
  Text,
  Container,
  SimpleGrid,
  InputGroup,
  Input,
  InputRightAddon,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { FiChevronsRight } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"900"} fontSize={"lg"} mb={0.5}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <div>
      <Box height="690px" >
        <HStack h="500px" bg={"RGBA(0, 0, 0, 0.04)"} borderTop="1px solid grey">
          <Box w="50%" h="100%" pl={"4"}>
            <Container as={Stack} maxW={"6xl"} py={6}>
              <SimpleGrid
                templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
                spacing={0} className={styles.support}
                w="100%"
              >
                <Stack align={"flex-start"} w="max-content">
                  <ListHeader>SUPPORT</ListHeader>
                  <Link href={"#"}>Customer Service</Link>
                  <Link href={"#"}>Accessibility Support</Link>
                  <Link href={"#"}>Shipping</Link>
                  <Link href={"#"}>Returns</Link>
                  <Link href={"#"}>Gifts Cards</Link>
                  <Link href={"#"}>Today's Deals</Link>
                  <Link href={"#"}>Size Chart</Link>
                  <Link href={"#"}>My Account</Link>
                  <Link href={"#"}>LittleCart's Credit Card</Link>
                  <Link href={"#"}>My Rewarding Moments</Link>
                  <Link href={"#"}>Contact Us</Link>
                </Stack>

                <Stack align={"flex-start"}></Stack>

                <Stack align={"flex-start"} w="max-content">
                  <ListHeader>ABOUT US</ListHeader>
                  <Link href={"#"}>LittleCart's Inc.</Link>
                  <Link href={"#"}>Life with kids</Link>
                  <Link href={"#"}>Baby of the Month Contest</Link>
                  <Link href={"#"}>All Store Locations</Link>
                  <Link href={"#"}>Join LittleCart's Affiliate Program</Link>
                  <Link href={"#"}>Investor Relations</Link>
                  <Link href={"#"}>Careers</Link>
                  <Link href={"#"}>Raise The Future</Link>
                </Stack>
              </SimpleGrid>
            </Container>
          </Box>
          <Box w="50%" h="90%">
            <Stack spacing={5} mt="0px" ml="20%">
              <InputGroup w="90%" size="lg" className={styles.addon}>
                <Input placeholder="Savings delivered right to your inbox" className={styles.support} />
                <InputRightAddon
                  children={<FiChevronsRight />}
                  bg={"RGBA(0, 0, 0, 0.08)"}
                />
              </InputGroup>
              <InputGroup w="90%" size="lg" className={styles.addon}>
                <Input placeholder="Enter zip code to find a store" className={styles.support} />
                <InputRightAddon
                  children={<BiSearchAlt />}
                  bg={"RGBA(0, 0, 0, 0.08)"}
                />
              </InputGroup>
            </Stack>
            <br />
            <br />
            <Box mt={"50px"} ml="55%">
              <Box ><Wrap>
                <WrapItem _hover={{backgroundColor:"teal"}}>
                  <Avatar   name="Kent Dodds" src="https://assets.dryicons.com/uploads/icon/svg/8302/32be1848-5173-4cfb-b88d-26c09aee1a8f.svg" />
                </WrapItem>
                <WrapItem _hover={{backgroundColor:"teal"}}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://assets.dryicons.com/uploads/icon/svg/8342/e6cdf37c-04bc-4eb0-a49f-f50c0c435f97.svg"
                  />
                </WrapItem>
                <WrapItem _hover={{backgroundColor:"teal"}}>
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://assets.dryicons.com/uploads/icon/svg/8382/f71d8297-cac4-46ea-b097-bed28aead71f.svg"
                  />
                </WrapItem>
                <WrapItem _hover={{backgroundColor:"teal"}}>
                  <Avatar
                    name="Christian Nwamba"
                    src="https://assets.dryicons.com/uploads/icon/svg/8414/ee78b8b6-1a29-4318-95a5-fb450f636555.svg"
                  />
                </WrapItem>
                <WrapItem _hover={{backgroundColor:"teal"}}>
                  <Avatar
                    name="Segun Adebayo"
                    src="https://assets.dryicons.com/uploads/icon/svg/8326/cbb634c3-f9d6-4ec0-99b9-f2c1083fca4d.svg"
                  />
                </WrapItem>
              </Wrap></Box>
              <HStack className={styles.primary} fontSize={"14px"}>
                <p>Ship To: </p>
                <img width="30px" src="data:image/png;base64,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" alt=""/>
                <p>United States | <span style={{cursor:"pointer", textDecoration:"underline"}}>Change</span>
                </p>
              </HStack>
            </Box>
          </Box>
        
        </HStack>
        <Box borderBottom="1px solid grey" bg={"RGBA(0, 0, 0, 0.04)"} textAlign="right" pb={"10px"} >
          <Text mr="2.5%" className={styles.primary}>© 2023 LittleCart's, Inc. All rights reserved.</Text>
          <HStack className={styles.secondary} ml={"30.5%"}>
            <p>Google Ad Price Policy |</p>
            <p>Terms and Conditions |</p>
            <p>Privacy Statements |</p>
            <p>Coupen Policy |</p>
            <p>Product Recalls |</p>
            <p>Site Map |</p>
            <p>Do Not Sell Or Share My Personal Information |</p>
            <p>UK Tax Strategy |</p>
            <p>International Sites |</p>
            <p>Accessibility.</p>
          </HStack>
        </Box>
        <Box textAlign="left" ml="3" w="90%" lineHeight="8" className={styles.primary}>
         <Text>*EXCLUSIONS AND DISCLAIMERS.</Text>
         <Text>UP TO 50% OFF: Savings based on MSRP. Excludes Select New Arrivals, LITTLE PLANET®, Sneak Peek, Treasure Box, Licensed Styles, SKIP HOP®, Doorbusters, and Clearance. Other exclusions may apply.</Text>
         <Text>UP TO 70% OFF CLEARANCE: Savings based on MSRP.</Text>
         <Text lineHeight="1">*MSRP is our Manufacturer’s Suggested Retail Price at which we suggest our collections be initially offered. We list an MSRP on our products that we sell ourselves and that sell through our wholesale partners. Our wholesale partners are free to use our MSRP or set a different selling price. We generally introduce our new collections at MSRP on our website. Since MSRP is a suggested price, actual sales may or may not have been made at MSRP in any certain area or in all areas. Prices may vary by channel or location. </Text>
         <Text>Many of our collections have a DOB (Date of Birth) on the price tag or on their website product page. This is the date that this item or a similar item was originally offered for sale at the MSRP.</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
