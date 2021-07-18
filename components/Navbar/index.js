import React, { useRef } from "react";
import { Box, Text, Button, useDisclosure, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

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
              <Link href="/resep">Resep</Link>
            </Text>
            <Text as="li" px="2rem" fontWeight="light">
              <Link href="/forum">Forum</Link>
            </Text>
            <Text as="li" px="2rem" fontWeight="light">
              Restoran
            </Text>
            <li>
              <Button colorScheme="red">Login</Button>
            </li>
          </Box>
          <IconButton
            bgColor="red.500"
            color="white"
            display={["flex", "flex", "none"]}
            ref={btnRef}
            rounded="xl"
            onClick={onOpen}
            icon={<GiHamburgerMenu />}
          />
        </Box>
      </Container>
      <Sidnav isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
};

export default Navbar;
