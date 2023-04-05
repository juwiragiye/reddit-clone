import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import RightContent from "./rightContent/RightContent";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      bg="white"
      height="48px"
      padding="6px 12px"
      align={"center"}
      justify={"space-between"}
      gap={2}
    >
      <Flex align="center">
        <Image src="/images/redditFace.svg" alt="logo" height={30} />
        <Image
          src="/images/redditText.svg"
          alt="logo"
          height={46}
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  );
};
export default Navbar;
