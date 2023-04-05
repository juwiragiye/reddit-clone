import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { color } from "framer-motion";
import { Search, SearchIcon } from "lucide-react";
import React from "react";

type SearchInputProps = {
  // user
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1}>
      <InputGroup alignItems={"baseline"}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray" strokeWidth={1} spacing={3} />}
        />
        <Input
          type="text"
          placeholder="Search Reddit"
          fontSize={"10pt"}
          bg={"gray.50"}
          height={"40px"}
          borderRadius={"1.25rem"}
          borderColor={"gray.500"}
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
            borderRadius: "1.25em",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "transparent",
            borderTopRadius: "1.25rem",
            borderBottomRadius: "0px",
          }}
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
