import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Admins from "../components/Admins";
import AdminSidebar from "../components/AdminSidebar";
import Contents from "../components/Contents";
import SocialMdedia from "../components/SocialMdedia";
import Users from "../components/Users";

const Adminpage = () => {
  const [componentPath, setComponentPath] = useState("");
  const navigate = useNavigate()

  const handleClick = (path) => {
    setComponentPath(path);
  };

  return (
    <Flex gap="1rem" w="100%">
      <AdminSidebar handleClick={handleClick} />

      <Box w="70%" m="100px auto">
        {(componentPath === "admins" && <Admins />) ||
          (componentPath === "users" && <Users />) ||
          (componentPath === "contents" && <Contents />) ||
          (componentPath === "social" && <SocialMdedia />) || (
            componentPath === 'home' && navigate('/', {replace: true})
          )
          
          }
      </Box>
    </Flex>
  );
};

export default Adminpage;
