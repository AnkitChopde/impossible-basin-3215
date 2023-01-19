import React from "react";
import girl from "../Images&Logos/child2.png"
import { Heading, Image,Text,Box } from '@chakra-ui/react'
import styles from "./Girl.module.css"
const Girl = () => {
  return (
    
      <div className={styles.img} >
        <Image src={girl} alt="" />
        <Box className={styles.child} >
          <Heading className={styles.heading} mb="-40px">UP TO</Heading>
          
          <Heading className={styles.heading} mt="-20px"><h1 style={{fontSize:"175px"}}>50%</h1>OFF</Heading>
          <Heading fontSize="60px" className={styles.heading1}>
            SPRING PREVIEW SALE
          </Heading>
          <Heading ml={"21%"} size="lg" className={styles.heading2}>
            Save on wear-now styles +100s of new arrivals
          </Heading>
        </Box>
      </div>
 
  );
};

export default Girl;
