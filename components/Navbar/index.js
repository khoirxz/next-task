import React, { useRef } from "react";
import { Box, Text, Button, useDisclosure } from "@chakra-ui/react";

import Logo from "../../utils/Logo";
import Container from "../../utils/Container";
import Sidnav from "../../atoms/Sidenav";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box as="nav" bgColor="transparent">
      <Container>
        <Box
          w="77%"
          m="auto"
          pt="1em"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          <Box
            as="ul"
            display={["none", "none", "flex"]}
            listStyleType="none"
            p="0"
            m="0"
            alignItems="center"
          >
            <Text as="li" px="2rem" fontWeight="light">
              Resep
            </Text>
            <Text as="li" px="2rem" fontWeight="light">
              Forum
            </Text>
            <Text as="li" px="2rem" fontWeight="light">
              Restoran
            </Text>
            <li>
              <Button colorScheme="red">Login</Button>
            </li>
          </Box>
          <Button
            bgColor="red.500"
            color="white"
            display={["flex", "flex", "none"]}
            ref={btnRef}
            onClick={onOpen}
          >
            Menu
          </Button>
        </Box>
      </Container>
      <Sidnav isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
};

export default Navbar;
