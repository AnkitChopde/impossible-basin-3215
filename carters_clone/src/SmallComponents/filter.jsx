import { Checkbox, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Filter = ({title,num}) => {
  return (
    <div>
      <HStack borderBottom={"1px dashed grey"} py="2">
        <Checkbox size="lg">
         <HStack>
            <Text>{title}</Text>
            <Text opacity={"0.5"}>({num})</Text></HStack>
        </Checkbox>
      </HStack>
    </div>
  );
};

export default Filter;
