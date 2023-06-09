import { Box, Button, Checkbox, Flex, FormControl, Heading, HStack, Input,  Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Form, Link, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Context/AuthContextProvider";

const SignInPage = () => {
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("")
   const {isauth,login}=useContext(AuthContext);

 const handleSubmit = async(e)=>{
  e.preventDefault();
   try{
  let response = await fetch(`https://reqres.in/api/login`,{
    method:"POST",
    body:JSON.stringify({
      email,password
    }),
    headers:{
      "Content-Type":"application/json"
    }
  })
  let data  = await response.json();
  login(data.token);
  console.log(data)
  setEmail("");
  setPassword("");
   }
   catch(err){
    console.log(err)
   }

 }

 if(isauth.isAuth){
  return <Navigate to="/products"/>
 }


  return (
    <div>
      <Navbar />

      <Box  m="auto" mt={{base:"0.5rem",md:"1rem",lg:"2rem"}} width={{base:"90%",md:"80%",lg:"60%"}} h="600px">
        <Heading color="#444444" size="lg" textAlign="left">
          Hi, welcome back! 
        </Heading>
        
        <Flex gap="2rem" flexDirection={{base:"column",md:"row",lg:"row"}} justifyContent={"space-around"} mt="40px">
          <Input
            variant="flushed"
            boxShadow="lg"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            py="25px"
            pl="25px"
            type="email"
            placeholder="Email"
          />
          <Input
            variant="flushed"
            boxShadow="lg"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            py="25px"
            pl="25px"
            type="password"
            placeholder="Password"
          />
        </Flex>
        
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

        <Button onClick={handleSubmit}
          rounded={"none"}
          borderRadius="10px"
          w={{base:"100%",md:"50%",lg:"45%"}}
          mt={8}
          size={"lg"}
          py={"6"}
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
        <Text color="#444444" mt="10" fontSize="lg">
          <i>New to our site or enrolled in My Rewarding Moments™ in store?</i>
        </Text>
        <Link to="/my-account">
        <Button w={{base:"98%",md:"40%",lg:"25%"}}
        py={"6"}
        
      bg="white"
      mt="20px"
       border=" 1px solid black"
       _hover={{bg:"RGBA(0, 0, 0, 0.08)"}}
      >Create Account</Button>
        </Link>
      </Box>

      <Footer />
    </div>
  );
};

export default SignInPage;
