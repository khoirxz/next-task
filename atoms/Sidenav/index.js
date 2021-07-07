import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Sidnav = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody mt={["5rem", "5rem", "10rem"]}>
          <Center
            margin="auto"
            as={motion.button}
            fontSize="3xl"
            fontWeight="bold"
            color="blackAlpha.600"
            _hover={{ color: "blackAlpha.700" }}
            my={3}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Resep
          </Center>
          <Center
            margin="auto"
            as={motion.button}
            fontSize="3xl"
            fontWeight="bold"
            color="blackAlpha.600"
            _hover={{ color: "blackAlpha.700" }}
            my={3}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Forum
          </Center>
          <Center
            margin="auto"
            as={motion.button}
            fontSize="3xl"
            fontWeight="bold"
            color="blackAlpha.600"
            _hover={{ color: "blackAlpha.700" }}
            my={3}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Restoran
          </Center>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidnav;
