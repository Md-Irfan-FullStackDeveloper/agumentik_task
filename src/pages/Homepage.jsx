import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import HomeLeftSection from "../components/HomeLeftSection";
import HomeRightSection from "../components/HomeRightSection";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";

const Homepage = () => {
  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-r, #121212, #620909)">
      <Navbar />
      <Flex w="85%" h="65vh" m="100px auto">
        <HomeLeftSection />
        <HomeRightSection />
      </Flex>
      <SocialLinks />
    </Box>
  );
};

export default Homepage;
