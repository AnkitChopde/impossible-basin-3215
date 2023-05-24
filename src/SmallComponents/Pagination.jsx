import { Box, Button } from "@chakra-ui/react";

function Pagination({page,onChange,total}) {
  
    const prev = (
      <Button
        bg="#00A9E0"
        color="#FFFFFF"
        mr="7"
        isDisabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </Button>
    );
    const btnArr = new Array(total).fill(0).map((a, i) => (
      <Button
        my="2"
        mx="1"
        onClick={() => onChange(i + 1)}
        color={page === i + 1 && "#FFFFFF"}
        borderRadius={page === i + 1 && "50%"}
        bg={page === i + 1 && "#00A9E0"}
      >
        {i + 1}
      </Button>
    ));
    const Next = (
      <Button
        bg="#00A9E0"
        color="#FFFFFF"
        ml="7"
        isDisabled={page === total}
        onClick={() => onChange(page + 1)}
      >
        Next
      </Button>
    );
    return (
      <div>
        <Box>
          {prev}
          {btnArr}
          {Next}
        </Box>
      </div>
    );
   }

   export default Pagination;