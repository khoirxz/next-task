import React from "react";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  return (
    <Text
      as="h1"
      fontSize="3xl"
      fontWeight="bold"
      cursor="pointer"
      onClick={() => router.push("/")}
    >
      <Text as="span" color="red.400">
        D
      </Text>
      a
      <Text as="span" color="red.400">
        D
      </Text>
      a
      <Text as="span" color="red.400">
        r
      </Text>
    </Text>
  );
};

export default Logo;
