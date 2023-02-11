import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CustomBtn from "./CustomBtn";

const HomeLeftSection = () => {
  return (
    <Stack w="50%" pr="2.5rem" justify="space-between">
      <Heading lineHeight="tall" color="white" size="3xl">
        We Make Recruitment <br /> Simple &{" "}
        <span className="head-postfix">10X Faster</span>
      </Heading>

      {/* desciption */}
      <Text color="gray">
        The largest company providing professionally managed recruiting services
        for companies throughout the world. We are the fastest growing and are
        widely recognized as the highest quality of the Indian global recruiting
        companies.
      </Text>

      <Flex gap="2rem">
        <CustomBtn text="Search Job" color="red" />
        <CustomBtn text="Post Job" />
      </Flex>
    </Stack>
  );
};

export default HomeLeftSection;
