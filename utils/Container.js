import { Box } from "@chakra-ui/react";
import React from "react";

const Container = ({ children }) => {
  return (
    <Box maxW="1400px" width="100%" margin="auto">
      {children}
    </Box>
  );
};

export default Container;
