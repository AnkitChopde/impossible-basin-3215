import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,

  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Select,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { ChevronRightIcon } from "@chakra-ui/icons";
import Sidebar from "../SmallComponents/Sidebar";
import { Link } from "react-router-dom";

import ImageSlider from "../SmallComponents/ImageSlider";
import ProductSimple from "../SmallComponents/CardPage";
import Pagination from "../SmallComponents/Pagination";


const getData = (order,page) => {
 
  return fetch(`http://localhost:8080/products?_limit=16&_page=${page}&_sort=price&_order=${order}`).then((res) => res.json());
};
const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order,setOrder] = useState("asc");
  const [page,setPage] = useState(1)
  let limit=16;
  let total=Math.floor(data.length/limit)
  useEffect(() => {
    fetchAndUpdate();
  }, [order,page]);

  const fetchAndUpdate = async () => {
    setLoading(true);

    try {
      let res = await getData(order,page);
      console.log(res);
      setData(res);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  const onChange=(val)=>{
    setPage(val)
  }
   


  return (
    <div>
      <Navbar />
      <Box h="40px" pt="8px" mt="12px" mx="4" bg="#00A8E1" color="#FFFFFF">
        <Heading size="md">FAST & FREE: 1-HOUR PICKUP!</Heading>
      </Box>

      <Box ml="4" mt="10px">
        <Breadcrumb
          spacing="8px"
          fontSize="sm"
          color="#444444"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Baby</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Baby Boy</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Shop All Baby Boy Cloths</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box as="h1" mt="30px" textAlign="right" w="30%">
        <VStack>
          <Heading fontWeight="none" color="#444444">
            Shop All Baby Items
          </Heading>
          <Text color="#444444">
            Stock up on all the essentials in baby boy cloths with our SW+
          </Text>
        </VStack>
      </Box>
      <Box ml="4">
        <Box my="3" h="290px" borderTop="2px" borderBottom="2px">
          <ImageSlider />
        </Box>
        <Flex>
          <Sidebar />
          <VStack>
            <Center>
              <Box border="2px solid grey" borderRadius="10px">
                <Select placeholder="Sort By | Featured" value={order} onChange={(e)=>setOrder(e.target.value)}>
                  <option value="asc">Price Low To High</option>
                  <option value="desc">Price High To Low</option>
                  <option value="option3">Featured</option>
                  <option value="option3">Top Rated</option>
                  <option value="option3">Most Popular</option>
                </Select>
              </Box>
            </Center>
            <Box>
              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
               
                {data.map((prod)=>(
                <Link to={`/products/${prod.id}`}>
                <GridItem key={prod.id}>
                   <Skeleton isLoaded={!loading}>
                   <ProductSimple image={prod.image} desc={prod.desc}
                  name={prod.name} brand={prod.brand} price={prod.price} cprice={prod.crossPrice}/>
                   </Skeleton>           
                </GridItem>
                </Link>
              ))}
              </Grid>
            </Box>
            <Pagination page={page} onChange={onChange} total={total}/>
          </VStack>
        </Flex>
      </Box>

      <Footer />
    </div>
  );
};

export default ProductsPage;
