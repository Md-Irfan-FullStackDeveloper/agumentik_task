import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { admins } = useSelector((store) => store);
  const toast = useToast();

  const handleLogin = () => {
    if (email && password) {
      if (email === admins[0].email && password === admins[0].password) {
        navigate("/admin", { replace: true });
      } else {
        toast({
          title: "Invalid credentials",
          description: "Please enter valid details",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    } else {
      toast({
        title: "Please enter email or password",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <>
      <Button color="white" variant="ghost" _hover="none" onClick={onOpen}>
        Admin Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Admin Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </FormControl>

            <Button
              onClick={handleLogin}
              m="1rem 0"
              w="100%"
              colorScheme="teal"
            >
              Login
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminLogin;
