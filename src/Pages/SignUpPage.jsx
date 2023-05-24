import React from 'react'
import { Box, Button, Checkbox, FormControl, Heading, HStack, Input,  Link,  Stack, Text, useColorModeValue } from "@chakra-ui/react";
const SignUpPage = () => {
  return (
    <div>
         <Box  m="auto" mt="30px" width="60%" h="600px">
        <Heading color="#444444" size="lg" textAlign="left">
          Hi, welcome back! 
        </Heading>
        
        <HStack spacing="10" mt="40px">
          <Input
            variant="flushed"
            boxShadow="lg"
            py="25px"
            pl="25px"
            type="email"
            placeholder="Email"
          />
          <Input
            variant="flushed"
            boxShadow="lg"
            py="25px"
            pl="25px"
            type="password"
            placeholder="Password"
          />
        </HStack>
        
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={"start"}
          justify={"space-between"}
        >
          <Checkbox color="#444444" defaultChecked mt="8">
            Keep me sign in
          </Checkbox>
          <Link m="5" color={"blue.400"}>
            Forgot password?
          </Link>
        </Stack>

        <Button 
          rounded={"none"}
          borderRadius="10px"
          w={"45%"}
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
          SIGN IN
        </Button>
       
        <Button w="260px" h="40px" 
      bg="white"
      mt="20px"
       border=" 1px solid black"
       _hover={{bg:"RGBA(0, 0, 0, 0.08)"}}
      >Create Account</Button>
      </Box>



    </div>
  )
}

export default SignUpPage