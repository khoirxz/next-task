import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box as="div" fontFamily="Open Sans">
      <Head>
        <title>DaDar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
    </Box>
  );
};

export default Layout;
