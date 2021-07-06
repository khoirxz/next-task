import React from "react";
import Image from "next/image";
import { Box, Grid, Text } from "@chakra-ui/layout";

import Container from "../../utils/Container";

const Section = () => {
  return (
    <Container>
      <Box width="77%" margin="auto" my="8rem">
        <Grid
          width={["full", "full", "75%"]}
          height="full"
          margin="auto"
          bgColor="white"
          templateColumns={["1fr", "1fr", "250px 1fr"]}
          shadow="xl"
        >
          <Box
            maxW="full"
            maxH="full"
            height={["300px", "300px", "full"]}
            position="relative"
          >
            <Image
              alt="Chef Pro"
              src="/assets/section/chef.jpg"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Box padding="2.5rem">
            <Text as="h1" fontSize="3xl" fontWeight="bold" my="2">
              Max Arifudin
            </Text>
            <Text as="h2" fontSize="xl" fontWeight="light" my="1">
              Chef Profesional
            </Text>
            <Text fontWeight="light" fontSize="medium" my="3">
              “ Situs ini membantu saya menjadi chef warkop bintang 6,
              terimakasih atas menunya ”
            </Text>
            <Text fontWeight="bold" fontSize="medium" my="3">
              Warkop Cak Jun, Jl. Pahlawan, Lowokwaru, Malang, Indonesia
            </Text>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default Section;
