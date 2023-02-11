import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import CustomBtn from "./CustomBtn";
import NavLinks from "./NavLinks";

const arr = [
  "Job Seeker",
  "Join Our Team",
  "Community",
  "About Us",
  "career Advice",
  "Contact",
];

const Navbar = () => {
  return (
    <Flex
      w="100%"
      // border="1px solid blue"
      justify="space-between"
      align="center"
      h="70px"
      p="0 3rem"
    >
      {/* navlinks */}
      <Flex gap="2rem" align="center">
        {/* logo */}
        <Box cursor="pointer" pb="0.5rem">
          {/* <Image
            w="60px"
            h="50px"
            borderRadius='100%'
            src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539_960_720.png"
          /> */}
          <Text color="white" fontSize="1.2rem" fontWeight="500">
            <span className="orange">We</span> cruter
          </Text>
        </Box>

        {arr?.map((el, index) => (
          <NavLinks text={el} key={index} />
        ))}
      </Flex>

      <CustomBtn text="Registration" />
    </Flex>
  );
};

export default Navbar;
