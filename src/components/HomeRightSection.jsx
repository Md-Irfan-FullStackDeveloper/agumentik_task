import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";

const HomeRightSection = () => {
  return (
    <Stack w="50%" m="auto" align="center">
      <Box>
        <Image
          w="70%"
          borderRadius="100%"
          boxShadow="dark-lg"
          h="260px"
          src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261__340.jpg"
        />
      </Box>
      <Flex w="100%" align="center" justify="flex-end">
        <Image
          w="50%"
          borderRadius="100%"
          boxShadow="dark-lg"
          h="260px"
          src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg"
        />
      </Flex>
    </Stack>
  );
};

export default HomeRightSection;
