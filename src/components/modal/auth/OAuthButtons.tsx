import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  return (
    <Flex direction={"column"} width={"70%"} mb={4}>
      <Button display={"flex"} variant={"outline"} mb={2}>
        <Image src="/images/googlelogo.png" alt="google" height={"20px"} />
        <Text flexGrow={1}>Continue with Google</Text>
      </Button>
      <Button display={"flex"} variant={"outline"}>
        Some Other Provider
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
