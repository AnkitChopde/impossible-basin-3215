import React from 'react'
import { Button } from '@chakra-ui/react'
const AllButton = ({title}) => {
  return (
   <>
      <Button w={{base:"9rem",md:"11rem",lg:"11rem"}} h="2.5rem" 
      bg="white"
      fontSize={{base:"0.7rem",md:"1rem",lg:"1rem"}}
       border=" 1px solid black"
       _hover={{bg:"RGBA(0, 0, 0, 0.08)"}}
      >{title}</Button>
   </>
  )
}

export default AllButton
