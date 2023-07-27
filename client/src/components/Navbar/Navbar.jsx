import {
  Box,
  Flex,
  HStack,
  // Link,
  IconButton,
  Button,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { ReactComponent as Logo } from "../../assets/Logo/MainLogo.svg";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsBag, BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./Navbar.scss";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="Nav-box" px={5}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            background={"-webkit-linear-gradient(#6ee2f5, #6454f0)"}
            className="toggle-btn-cls"
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Logo />
            </Box>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href={"/Mens"}
                className="nav-link-text"
              >
                Men
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href={"/Mens"}
                className="nav-link-text"
              >
                Women
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href={"/Mens"}
                className="nav-link-text"
              >
                Kids
              </Link>
              <Link
                to="/all-categories"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                className="nav-link-text"
              >
                Categories
              </Link>
            </HStack>
            <Box
              minWidth={"35%"}
              width="80%"
              display={{ base: "none", lg: "block" }}
            >
              <SearchBar />
            </Box>
          </HStack>
          <HStack spacing={5} alignItems={"center"}>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <BsPerson fontSize={"1.6rem"} color="#6454f0" />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to={"/authentication"}>Sign Up</Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link to={"/authentication"}>Sign In</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Link to="#">
              <Flex alignItems={"bottom"}>
                <Text marginBottom={0}>
                  <AiOutlineHeart fontSize={"1.8rem"} color="#6454f0" />
                </Text>
              </Flex>
            </Link>
            <Link to="/cart">
              <Flex align={"center"} pos="relative">
                <Text marginBottom={0}>
                  <BsBag
                    fontSize={"1.5rem"}
                    className="shop-cart-bag"
                    color="#6454f0"
                  />
                </Text>
                <Box
                  justify={"center"}
                  align="center"
                  pos={"absolute"}
                  top="-5px"
                  right="-12px"
                  width="20px"
                  height="20px"
                  color="white"
                  borderRadius={"50%"}
                  className="cart-text"
                >
                  <Text align={"center"} fontWeight={500} marginBottom={0}>
                    7
                  </Text>
                </Box>
              </Flex>
            </Link>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href={"/Mens"}
                className="nav-link-text"
              >
                Men
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href={"/Mens"}
                className="nav-link-text"
              >
                Women
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href={"/Mens"}
                className="nav-link-text"
              >
                Kids
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                to={"/all-categories"}
                className="nav-link-text"
              >
                Categories
              </Link>
            </Stack>
          </Box>
        ) : null}
        <Box padding={"8px"} display={{ lg: "none" }} width="90%" margin="auto">
          <SearchBar />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
