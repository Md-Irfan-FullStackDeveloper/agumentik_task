import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeHeading } from "../redux/appReducer/action";

const Contents = () => {
  const [heading, setHeading] = useState("");
  const dispatch = useDispatch()

  const handleUpdate = () => {
    dispatch(changeHeading(heading))
  };


  return (
    <Box w="100%">
      <Text size="lg" fontSize="1.5rem" fontWeight="500" textAlign="center">
        Manage Landing page contents
      </Text>

      <Box m="1.5rem 0" p="1.5rem 0" border="1px solid red">
        <Text textAlign="center" fontWeight="500">
          Navbar Content
        </Text>

        <Flex w="60%" m="auto" gap="1rem" border="1px solid green">
          <FormControl>
            <FormLabel>Change logo</FormLabel>
            <Input
              onChange={(e) => setHeading(e.target.value)}
              variant="filled"
              border="1px solid blue"
              placeholder="Paste Image URL"
            />
          </FormControl>

          <Flex gap="1rem" align="center" w="50%">
            <FormControl>
              <FormLabel>Change Links</FormLabel>
              <Input
                variant="filled"
                border="1px solid blue"
                placeholder="Paste Image URL"
              />
            </FormControl>
            <Button colorScheme="teal">Add</Button>
          </Flex>

          <Button onClick={handleUpdate}>Update</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contents;
