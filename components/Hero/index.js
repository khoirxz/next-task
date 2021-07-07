import React from "react";
import Image from "next/image";
import { Box, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Container from "../../utils/Container";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Container>
      <Box
        display="flex"
        width="77%"
        margin="auto"
        flexDirection={["column", "column", "row"]}
        marginTop={["2rem", "2rem", "4rem"]}
        justifyContent="space-between"
      >
        <Box
          textAlign={["center", "center", "left"]}
          marginBottom={["3rem", "3rem", "0"]}
          padding="3"
        >
          <Text
            background="white"
            p="3"
            display="inline-block"
            borderRadius="35px"
            shadow="md"
            fontSize="14px"
          >
            Nyari resep makanan ?
          </Text>
          <Text fontWeight="bold" fontSize="35px" mt="4">
            Semua resep ada disini
          </Text>
          <Text fontWeight="bold" fontSize="40px">
            <Text as="span" color="red.400">
              Da
            </Text>
            ta{" "}
            <Text as="span" color="red.400">
              Da
            </Text>
            pu
            <Text as="span" color="red.400">
              r
            </Text>
          </Text>
          <Text fontSize="20px" fontWeight="light" my="4">
            Dari resep masakan bintang 5 sampai masakan rumahan, semua gratis !
            Ayo langsung coba!
          </Text>
          <Button
            as={motion.button}
            animate={{ scale: 1.1 }}
            colorScheme="red"
            shadow="md"
          >
            Cari Resep
          </Button>
        </Box>
        <Box maxW="500px" maxH="400px" width="100%">
          <Box
            height={["200px", "200px", "100%"]}
            margin="auto"
            background="white"
            padding="2rem"
            borderTopRightRadius="100px"
            borderBottomLeftRadius="100px"
          >
            <Box
              as="div"
              width="100%"
              height="100%"
              margin="auto"
              position="relative"
              className={styles.customHero}
            >
              <Image
                src="/assets/images/heroImage.jpg"
                alt="hero image"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
