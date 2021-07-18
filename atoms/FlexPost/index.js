import React from "react";
import { Box } from "@chakra-ui/react";

const FlexPost = ({ title, description }) => {
  return (
    <Box mb={5}>
      <h1>{title}</h1>
      <p>{description}</p>
    </Box>
  );
};

export default FlexPost;
