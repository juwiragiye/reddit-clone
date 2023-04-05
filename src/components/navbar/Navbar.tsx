import { Flex, Image } from "@chakra-ui/react";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align={"center"}>
        <Image src="/images/redditFace.svg" height="30px" />
      </Flex>
    </Flex>
  );
};
export default Navbar;
