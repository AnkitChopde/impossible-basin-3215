import React from 'react'
import { Button } from '@chakra-ui/react'
const AllButton = ({title}) => {
  return (
   <>
      <Button w="180px" h="40px" 
      bg="white"
       border=" 1px solid black"
       _hover={{bg:"RGBA(0, 0, 0, 0.08)"}}
      >{title}</Button>
   </>
  )
}

export default AllButton
