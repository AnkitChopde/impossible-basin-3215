import { Heading, Image,Text,Box } from '@chakra-ui/react'
import React from 'react'
import child1 from "../Images&Logos/child1.png"

import styles from "./Carousal.module.css"
const Carousal = () => {
    
  return (
    <div>
      <div className={styles.img}>
      <Image src={child1} alt=""/>
      <Box className={styles.child}>
          <Heading className={styles.heading}>UP TO 40% OFF</Heading>
          <Heading fontSize="60px" className={styles.heading1}>VALENTINE'S DAY</Heading>
          <Heading className={styles.heading1} size="sm">SHOP VALENTINE'S DAY</Heading>
      </Box>
    </div>
    </div>
  )
}

export default Carousal