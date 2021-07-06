import { Box, Text, Grid, Center } from "@chakra-ui/react";
import React from "react";

import Container from "../../utils/Container";

const Footer = () => {
  return (
    <Box as="footer" bgColor="red.500" color="white">
      <Box bgColor="red.400">
        <Container>
          <Grid
            w="77%"
            margin="auto"
            templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
            gap="30"
            rowGap="30"
            p={10}
          >
            <Box>
              <Text as="h1" fontSize="xl" fontWeight="bold">
                DaDar
              </Text>
              <Text mt={2}>dada@food.com</Text>
              <Text mt={1}>085123456789</Text>
              <Text mt={1}>
                JL. Tugu Ikan, Sawah Valley, Tuban City East Jawa, Indonesia
              </Text>
            </Box>
            <Box>
              <Box
                as="ul"
                display="flex"
                flexDirection={["column-reverse", "column-reverse", "row"]}
                listStyleType="none"
                justifyContent="space-between"
                p={0}
                m={0}
              >
                <Text as="li">Resep</Text>
                <Text as="li">Forum</Text>
                <Text as="li">Restoran</Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Center p={4} fontWeight="thin">
        2021 @ Copyright Rizqi K.
      </Center>
    </Box>
  );
};

export default Footer;
