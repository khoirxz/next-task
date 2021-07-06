import Document, { Html, Head, Main, NextScript } from "next/document";
import { Box } from "@chakra-ui/react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <Box as="body" className="containerApp" bgColor="#FFF5F5">
          <Main />
          <NextScript />
        </Box>
      </Html>
    );
  }
}

export default MyDocument;
