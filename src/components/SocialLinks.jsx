import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <Flex
      //   border="2px solid red"
      w="100%"
      gap="1rem"
      mt="-10px"
      pb="2rem"
      align="center"
      justify="center"
      bgGradient="linear(to-r, #121212, #620909)"
    >
      <Link>
        <ImFacebook2 color="white" fontSize="2rem" />
      </Link>
      <Link>
        <ImLinkedin color="white" fontSize="2rem" />
      </Link>
      <Link>
        <FaTwitterSquare color="white" fontSize="2.2rem" />
      </Link>
    </Flex>
  );
};

export default SocialLinks;
