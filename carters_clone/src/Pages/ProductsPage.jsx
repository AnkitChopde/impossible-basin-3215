import { Box, Breadcrumb,BreadcrumbItem, BreadcrumbLink, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductSimple from "../SmallComponents/CardPage";
import {ChevronRightIcon} from "@chakra-ui/icons"
import Sidebar from "../SmallComponents/Sidebar";
import { Link } from "react-router-dom";

import ImageSlider from "../SmallComponents/ImageSlider";

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <Box h="40px" pt="8px" mt="12px" mx="4" bg="#00A8E1" color="#FFFFFF">
        <Heading size="md">FAST & FREE: 1-HOUR PICKUP!</Heading>
      </Box>

      <Box ml="4" mt="10px">
      <Breadcrumb
          spacing="8px"
          fontSize="sm" color="#444444"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink ><Link to="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Baby</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem >
            <BreadcrumbLink href="#">Baby Boy</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Shop All Baby Boy Cloths</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box as="h1" mt="30px" textAlign="right" w="30%" >
          <VStack >
            <Heading fontWeight="none" color="#444444">Shop All Baby Items</Heading>
            <Text color="#444444" >Stock up on all the essentials in baby boy cloths with our SW+</Text>
          </VStack>
      </Box>
      <Box ml="4">
      <Box my="3" h="290px" borderTop="2px" borderBottom="2px" >
                    <ImageSlider/>
            </Box>
        <Flex>
          <Sidebar />
          <VStack>
          <Box>
            <ProductSimple />
            <ProductSimple />
            <ProductSimple />
            <ProductSimple />
            <ProductSimple />
          </Box>
          </VStack>
        </Flex>
      </Box>

      <Footer />
    </div>
  );
};

export default ProductsPage;
