import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <Box borderRadius={"md"} pos="relative">
      <InputGroup>
        <InputLeftElement children={<BsSearch color="#6454f0" />} />
        <Input
          type="text"
          outline="none"
          placeholder="What are you looking for?"
          backgroundColor={"#ffffff"}
          border={"2px solid #6454f0"}
          _focus={{
            boxShadow: "none",
            border: "2px solid #6ee2f5",
            outline: "none",
          }}
        />
      </InputGroup>
    </Box>
  );
}

export default SearchBar;
