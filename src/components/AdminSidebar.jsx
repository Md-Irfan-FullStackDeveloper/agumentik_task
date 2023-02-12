import { Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { SiContentful } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { MdAdminPanelSettings, MdMediation } from "react-icons/md";

const AdminSidebar = ({ handleClick }) => {

  return (
    <Stack p="2rem 1rem" spacing="1rem" bg="blue.600" h="100vh" w="20%">
      <Heading color="gray.100" textAlign="center" size="md">
        Admin Dashboard
      </Heading>

      <Divider orientation="horizontal" />

      <Flex
        cursor="pointer"
        p="0.5rem"
        borderRadius="8px"
        _hover={{ background: "blue" }}
        align="center"
        color="gray.100"
        gap="0.5rem"
        onClick={() => handleClick('home')}
      >
        <RiDashboardFill size="1.2rem" />
        <Text fontSize="1.2rem">Back to Home</Text>
      </Flex>

      <Flex
        cursor="pointer"
        p="0.5rem"
        borderRadius="8px"
        _hover={{ background: "blue" }}
        align="center"
        color="gray.100"
        gap="0.5rem"
        onClick={() => handleClick("admins")}
      >
        <MdAdminPanelSettings size="1.2rem" />
        <Text fontSize="1.2rem">Admin</Text>
      </Flex>

      <Flex
        cursor="pointer"
        p="0.5rem"
        borderRadius="8px"
        _hover={{ background: "blue" }}
        align="center"
        color="gray.100"
        gap="0.5rem"
        onClick={() => handleClick("users")}
      >
        <HiUsers size="1.2rem" />
        <Text fontSize="1.2rem">Users</Text>
      </Flex>

      <Flex
        cursor="pointer"
        p="0.5rem"
        borderRadius="8px"
        _hover={{ background: "blue" }}
        align="center"
        color="gray.100"
        gap="0.5rem"
        onClick={() => handleClick("contents")}
      >
        <SiContentful size="1.2rem" />
        <Text fontSize="1.2rem">Contents</Text>
      </Flex>

      <Flex
        cursor="pointer"
        p="0.5rem"
        borderRadius="8px"
        _hover={{ background: "blue" }}
        align="center"
        color="gray.100"
        gap="0.5rem"
        onClick={() => handleClick("social")}
      >
        <MdMediation size="1.2rem" />
        <Text fontSize="1.2rem">Social Media Links</Text>
      </Flex>
    </Stack>
  );
};

export default AdminSidebar;
