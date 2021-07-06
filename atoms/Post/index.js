import React from "react";
import { Badge, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const colorBadge = (color) => {
  switch (color.toLowerCase()) {
    case "mudah":
      return "green";
    case "top":
      return "red";
    case "menengah":
      return "yellow";
    case "sulit":
      return "red";
    default:
      return "red";
  }
};

const Post = ({ title, imgUrl, tags }) => {
  return (
    <Box cursor="pointer" w="full" h="280px" bgColor="white" shadow="md">
      <Box maxW="full" maxH="200px" w="full" h="full" position="relative">
        <Image alt={title} src={imgUrl} layout="fill" objectFit="cover" />
      </Box>
      <Box px={2}>
        <Text>
          {tags.map((tag) => (
            <Badge marginRight={4} my={3} colorScheme={colorBadge(tag)}>
              #{tag}
            </Badge>
          ))}
        </Text>
        <Text as="h3" fontSize="18px" fontWeight="bold">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default Post;
