import React from 'react'
import Filter from './filter'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text,} from "@chakra-ui/react";
import styles from "./Sidebar.module.css"
const Sidebar = () => {
  return (
  
        <Box mt="-3" border="1px solid grey" borderRight="8px solid grey " width="15%">
          <Accordion allowMultiple  className={styles.posi} >
            <Text py="2" fontSize="20px">Filters</Text>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Clothing Size
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
               <Filter title="P" num="50"/>
               <Filter title="6M" num="50"/>
               <Filter title="9M" num="50"/>
               <Filter title="12M" num="50"/>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Shoe Size
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
               <Filter title="0(Shoe)" num="150"/>
               <Filter title="1(Shoe)" num="50"/>
               <Filter title="1.5(Shoe)" num="150"/>
               <Filter title="2(Shoe)" num="250"/>
               <Filter title="2.5(Shoe)" num="150"/>
               <Filter title="3(Shoe)" num="250"/>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Shop Deals
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
               <Filter title="Doorbusters" num="50"/>
               <Filter title="New Arrivals" num="50"/>
               <Filter title="Clearance" num="50"/>
               <Filter title="Shop Sale" num="50"/>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                   Category
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
               <Filter title="Bottom" num="50"/>
               <Filter title="Pajamas" num="50"/>
               <Filter title="Tops" num="50"/>
               <Filter title="BodySuits" num="50"/>
               <Filter title="One Piece" num="50"/>
               <Filter title="Rompers" num="50"/>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                   Style
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
               <Filter title="Pants" num="50"/>
               <Filter title="Shorts" num="50"/>
               <Filter title="Toys" num="50"/>
               <Filter title="JumpSuits" num="50"/>
               <Filter title="Pant Sets" num="50"/>
               <Filter title="Socks" num="50"/>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Sleeve Length
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
               <Filter title="Long Sleeve" num="50"/>
               <Filter title="Short Sleeve" num="50"/>
               <Filter title="Long Sleeve" num="50"/>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Brand
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
               <Filter title="Carter's" num="50"/>
               <Filter title="Skip Hop" num="50"/>
               <Filter title="Little Planet" num="50"/>
               <Filter title="OshKosh" num="50"/>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                   % Off MSRP 
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} spacing={"3"}>
               <Filter title="Upto 30% off" num="50"/>
               <Filter title="Upto 20% off" num="50"/>
               <Filter title="Upto 50% off" num="50"/>
               <Filter title="Upto 40% off" num="50"/>
               <Filter title="Upto 35% off" num="50"/>
              </AccordionPanel>
            </AccordionItem>
   
          </Accordion>
        </Box>

  )
}

export default Sidebar