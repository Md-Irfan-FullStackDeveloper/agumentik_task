import { Box, Text } from "@chakra-ui/react";
import React from "react";

const NavLinks = ({ text = "links" }) => {
  return (
    <Box
      pb="0.5rem"
      boxSize="border-box"
      _hover={{ borderBottom: "1.5px solid #ff4800", cursor: "pointer" }}
    >
      <Text color="white">{text}</Text>
    </Box>
  );
};

export default NavLinks;
