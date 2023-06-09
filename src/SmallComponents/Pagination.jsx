import { Box, Button,Flex } from "@chakra-ui/react";

function Pagination({page,onChange,total}) {
  
    const prev = (
      <Button
        bg="#00A9E0"
        color="#FFFFFF"
        
        isDisabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </Button>
    );
    const btnArr = new Array(total).fill(0).map((a, i) => (
      <Button
        my="2"
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
        isDisabled={page === total}
        onClick={() => onChange(page + 1)}
      >
        Next
      </Button>
    );
    return (
      <div style={{marginBottom:"1rem",width:"90%"}}>
    <Flex gap={3} justifyContent={"center"}>
       {prev}
        {'...'}
        {Array(total).fill('')
        .map((item, index) => {
            return <Button colorScheme={page === index + 1 ? 'cyan' : 'gray'} borderRadius={page === index + 1&&"50%"}
            onClick={() => onChange(index + 1)}
             key={index}>{index + 1}</Button>
        })
        .filter((item, index) => {
           if(index < page + 2 && index > page - 2 ) return true
           return false
        })
        }
        { "..."}
        {Next}
    </Flex>
      </div>
    );
   }

   export default Pagination;