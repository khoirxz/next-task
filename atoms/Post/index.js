import React from "react";
import { Badge, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./Post.module.css";

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
    <Box
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      cursor="pointer"
      w="full"
      h="280px"
      _hover={{
        shadow: "xl",
      }}
      shadow="sm"
      backgroundColor="white"
      rounded="xl"
    >
      <Box
        maxW="full"
        maxH="200px"
        w="full"
        h="full"
        position="relative"
        className={styles.postImage}
      >
        <Image alt={title} src={imgUrl} layout="fill" objectFit="cover" />
      </Box>
      <Box px={2}>
        <Text>
          {tags.map((tag, i) => (
            <Badge key={i} marginRight={4} my={3} colorScheme={colorBadge(tag)}>
              #{tag}
            </Badge>
          ))}
        </Text>
        <Text
          as="h3"
          fontSize="18px"
          fontWeight="bold"
          title={title.length >= 21 ? title : ""}
        >
          {title.length >= 21 ? title.slice(0, 20) + "..." : title}
        </Text>
      </Box>
    </Box>
  );
};

export default Post;
