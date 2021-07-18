import React from "react";
import { Box, Center, Icon, Text, Button, Flex } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { BsPlusSquare } from "react-icons/bs";

import Container from "../../utils/Container";
import Posts from "../../molecules/Posts";

const Content = ({
  title,
  icon = false,
  loading = false,
  data,
  isSignIn = true,
  isGrid = true,
}) => {
  return (
    <Container>
      <Box
        width="77%"
        margin="auto"
        marginTop={["6rem", "6rem", "8rem"]}
        marginBottom={loading ? "5rem" : "3rem"}
      >
        {icon ? (
          <Center>
            {" "}
            <Icon as={TriangleDownIcon} w={8} h={8} color="red.400" />{" "}
          </Center>
        ) : null}

        {isSignIn ? (
          isGrid ? (
            <Flex flexDir="row-reverse">
              <Button leftIcon={<BsPlusSquare />} colorScheme="red" shadow="md">
                Buat Resepmu
              </Button>
            </Flex>
          ) : (
            <Flex flexDir="row-reverse">
              <Button leftIcon={<BsPlusSquare />} colorScheme="red" shadow="md">
                Ayo diskusi!
              </Button>
            </Flex>
          )
        ) : null}

        <Text as="h1" mt="1rem" mb="3rem" fontSize="xl" fontWeight="normal">
          {title}
        </Text>

        {isGrid ? (
          <Posts data={data} isGrid={isGrid} />
        ) : (
          <Posts data={data} isGrid={isGrid} />
        )}
      </Box>

      {loading ? (
        <Center my="3rem">
          <Button colorScheme="red" shadow="md">
            Lebih bayak lagi
          </Button>
        </Center>
      ) : null}
    </Container>
  );
};

export default Content;
