import React from "react";
import { Box, Center, Icon, Text, Grid, Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

import Container from "../../utils/Container";
import { Post } from "../../atoms";

const data = [
  {
    id: 1,
    title: "Nasi Gorang Enak",
    imgUrl: "/assets/content/friedrice.jpg",
    tags: ["Mudah", "Top"],
  },
  {
    id: 2,
    title: "Lodeh Ayam Pedas",
    imgUrl: "/assets/content/chikenlodeh.jpg",
    tags: ["Mudah", "Top"],
  },
  {
    id: 3,
    title: "Sandwich",
    imgUrl: "/assets/content/sandwich.jpg",
    tags: ["Menengah", "Top"],
  },
  {
    id: 4,
    title: "Semur Tuna",
    imgUrl: "/assets/content/semurtuna.jpg",
    tags: ["Sulit", "Top"],
  },
];

const Content = () => {
  return (
    <Container>
      <Box width="77%" margin="auto" marginTop={["6rem", "6rem", "8rem"]}>
        <Center>
          {" "}
          <Icon as={TriangleDownIcon} w={8} h={8} color="red.400" />{" "}
        </Center>
        <Text as="h1" mt="1rem" mb="3rem" fontSize="xl" fontWeight="normal">
          Resep Paling dicari
        </Text>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
          {data.map((item) => (
            <Post
              key={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
              tags={item.tags}
            />
          ))}
        </Grid>
      </Box>
      <Center mt="3rem">
        <Button colorScheme="red" shadow="md">
          Lebih bayak lagi
        </Button>
      </Center>
    </Container>
  );
};

export default Content;
