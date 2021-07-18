import React from "react";
import { Center, Grid, Button, Flex } from "@chakra-ui/react";
import { BsPlusSquare } from "react-icons/bs";

import { Post, FlexPost } from "../../atoms";

const Posts = ({ data, isGrid }) => {
  return isGrid ? (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(4, 1fr)"]}
      gap={6}
    >
      {data ? (
        data.map((item) => (
          <Post
            key={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            tags={item.tags}
          />
        ))
      ) : (
        <Center>
          <Button leftIcon={<BsPlusSquare />} colorScheme="red" shadow="md">
            Buat Resepmu
          </Button>
        </Center>
      )}
    </Grid>
  ) : (
    <Flex flexDir="column">
      {data ? (
        data.map((item) => (
          <FlexPost
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))
      ) : (
        <Center>
          <Button leftIcon={<BsPlusSquare />} colorScheme="red" shadow="md">
            Ayo diskusikan resepmu
          </Button>
        </Center>
      )}
    </Flex>
  );
};

export default Posts;
