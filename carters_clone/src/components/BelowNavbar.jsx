import {
  Avatar,
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import Pic1 from "../Images&Logos/Pic1.png";
import Pic3 from "../Images&Logos/Tshirts.png";
import Holiday from "../Images&Logos/Holiday.png";
import AllButton from "../SmallComponents/Button";
import kid1 from "../Images&Logos/kid1.png";
import kid2 from "../Images&Logos/kid2.png";
import kid3 from "../Images&Logos/kid3.png";
import kid4 from "../Images&Logos/kid4.png";
import kid5 from "../Images&Logos/kid5.png";
import kid6 from "../Images&Logos/kid6.png";
import offer6 from "../Images&Logos/offer6.png"
import offer1 from "../Images&Logos/offer1.png"
import offer12 from "../Images&Logos/offer12.png"
import offer40 from "../Images&Logos/offer40.png"
import offer70 from "../Images&Logos/offer70.png"
import new1 from "../Images&Logos/New.png"
import below1 from "../Images&Logos/below1.png"
import below2 from "../Images&Logos/below2.png"
import below3 from "../Images&Logos/below3.png"
import below4 from "../Images&Logos/below4.png"
import ImageSwiper from "../SmallComponents/ImageSwiper";
import Carousal from "../SmallComponents/Carousal";
import { Link } from "react-router-dom";

const images = [kid1, kid2, kid3, kid4, kid5, kid6];
const BelowNavbar = () => {
  return (
    <div>
      <Carousal/>
      <Box bg="#EDFDFD" h={["200px", "180px", "125PX", "150px", "120px"]}>
        <Center>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
              "repeat(5, 1fr)",
              "repeat(6, 1fr)",
            ]}
            gap={4}
            mt={"20px"}
          >
            <GridItem>
              <AllButton title="BABY GIRL" />
            </GridItem>
            <GridItem>
              <AllButton title="BABY BOY" />
            </GridItem>
            <GridItem>
              <AllButton title="TODDLER GIRL" />
            </GridItem>
            <GridItem>
              <AllButton title="TODDLER BOY" />
            </GridItem>
            <GridItem>
              <AllButton title="GIRL" />
            </GridItem>
            <GridItem>
              <AllButton title="BOY" />
            </GridItem>
          </Grid>
        </Center>
      </Box>
      <Box h={["380PX","180px","200px","220px","290px"]} mt="30px">
        <Grid
          templateColumns={[  
            "repeat(3, 1fr)",
            "repeat(6, 1fr)",
            "repeat(6, 1fr)",
            "repeat(6, 1fr)",
          ]}
          gap={4}
          mt={"20px"}
        >
          <GridItem>
            <VStack>
              <Avatar size="4xl" name="" src={images[0]} />
              <Text textDecoration="underline">BABY GIRL</Text>
            </VStack>
          </GridItem>
          <GridItem>
          <VStack>
          <Avatar size="4xl" name="" src={images[1]} />
            <Link to="/products"><Text textDecoration="underline">BABY BOY</Text></Link>
          </VStack>
          </GridItem>
          <GridItem>
            <VStack>
            <Avatar size="4xl" name="" src={images[2]} />
            <Text textDecoration="underline">TODDLER GIRL</Text>
            </VStack>
          </GridItem>
          <GridItem>
           <VStack>
           <Avatar size="4xl" name="" src={images[3]} />
            <Text textDecoration="underline">TODDLER BOY</Text>
           </VStack>
          </GridItem>
          <GridItem>
           <VStack>
           <Avatar size="4xl" name="" src={images[4]} />
            <Text textDecoration="underline">KID GIRL</Text>
           </VStack>
          </GridItem>
          <GridItem>
            <VStack>
            <Avatar size="4xl" name="" src={images[5]} />
            <Text textDecoration="underline">KID BOY</Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
      <Image src={Pic1} alt="" />
      <Image mt={"20px"} src={Pic3} alt="" />
      <Box h={["200px", "180px", "125PX", "150px", "120px"]}>
        <Center>
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
              "repeat(5, 1fr)",
              "repeat(6, 1fr)",
            ]}
            gap={4}
            mt={"20px"}
          >
            <GridItem>
              <AllButton title="BABY GIRL" />
            </GridItem>
            <GridItem>
              <AllButton title="BABY BOY" />
            </GridItem>
            <GridItem>
              <AllButton title="TODDLER GIRL" />
            </GridItem>
            <GridItem>
              <AllButton title="TODDLER BOY" />
            </GridItem>
            <GridItem>
              <AllButton title="GIRL" />
            </GridItem>
            <GridItem>
              <AllButton title="BOY" />
            </GridItem>
          </Grid>
        </Center>
      </Box>
      <Image mt={"12px"} src={Holiday} alt="" />
      <Box h={[ "150px", "120px"]}>
        <Center>
          <Grid  m="auto" 
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={4}
            mt={"20px"}
          >
            <GridItem>
              <AllButton title="VALENTINE'S DAY" />
            </GridItem>
            <GridItem>
              <AllButton title="SAINT PATRICK'S DAY" />
            </GridItem>
            <GridItem>
              <AllButton title="EASTER" />
            </GridItem>
          </Grid>
        </Center>
      </Box>
      <Box h={["400PX","190px","255px","270px","350px"]} mt="10px">
       
       <Heading color="#00A9E0" size="3xl">SHOP OUR FAVES</Heading>
        <Grid
          templateColumns={[  
            "repeat(3, 1fr)",
            "repeat(6, 1fr)",
            "repeat(6, 1fr)",
            "repeat(6, 1fr)",
          ]}
          gap={4}
          mt={"40px"}
        >
          <GridItem>
           
              <Avatar size="4xl" name="" src={new1} />
             
          </GridItem>
          <GridItem>
          
          <Avatar size="4xl" name="" src={offer1} />
           
          </GridItem>
          <GridItem>
           
            <Avatar size="4xl" name="" src={offer6} />
           
          </GridItem>
          <GridItem>
          
           <Avatar size="4xl" name="" src={offer40} />
           
         
          </GridItem>
          <GridItem>
          
           <Avatar size="4xl" name="" src={offer70} />
         
          
          </GridItem>
          <GridItem>
           
            <Avatar size="4xl" name="" src={offer12} />
            
          </GridItem>
        </Grid>
      </Box>
      <Box h={["140px","160px","200px","300px"]} 
      mt={["5px"]}>
       
       
        <Grid
          templateColumns={[   
            "repeat(4, 1fr)",
 ]}  
          mt={["40px","20px","20px","60px"]}
        >
     
          <GridItem>
        
            <Image  src={below4} alt=""/>
           
          </GridItem>
          <GridItem>
          <Image  src={below3} alt=""/>
          </GridItem>
          <GridItem>
          <Image  src={below1} alt=""/>
           
          </GridItem>
          <GridItem>
          <Image  src={below2} alt=""/>
            
          </GridItem>
        </Grid>
      </Box>
      <ImageSwiper/>
      
    </div>
  );
};

export default BelowNavbar;
