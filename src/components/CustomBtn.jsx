import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const CustomBtn = ({ text, color }) => {
  return (
    <Box>
      <Button
        colorScheme={color}
        borderRadius="none"
        display="flex"
        align="center"
        gap="1rem"
      >
        {text} <MdArrowForwardIos />
      </Button>
    </Box>
  );
};

export default CustomBtn;
