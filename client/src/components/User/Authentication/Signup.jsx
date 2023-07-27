import React, { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, ButtonGroup, mergeThemeOverride } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../../features/auth/authSlice";
import axios from "axios";
// import { ViewIcon } from "@chakra-ui/icons";
const Signup = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.auth);
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);
  //password event
  const handleclick = () => {
    setShow(!show);
  };

  const postDetails = async (pic) => {
    console.log(pic);
    setLoading(true);
    if (pic === undefined) {
      toast({
        title: "Please select an Image",
        status: "warning",
        duration: 6000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "Image_preset");
      // data.append("cloud_name", "dxj5xo1no");
      await axios
        .post("https://api.cloudinary.com/v1_1/dxj5xo1no/image/upload", {
          body: data,
        })
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please select an Image",
        status: "warning",
        duration: 6000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
  };

  //post
  const submitHandler = () => {
    if (!pic) {
      console.log("no pic selected");
    }
    console.log(username, mobilenumber, email, password);
    // dispatch(registerUser({ username, mobilenumber, email, password }));
    // console.log("state", state);
  };

  return (
    <>
      <VStack>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            // size="sm"
            type={"text"}
            placeholder="Enter Your Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            // size="sm"
            type={"email"}
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              // size="sm"
              type={show ? "text" : "password"}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement alignItems={"center"}>
              <Button size="xs" onClick={handleclick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="mobilenumber" isRequired>
          <FormLabel>Mobile Number</FormLabel>
          <Input
            // size="sm"
            type={"text"}
            placeholder="Enter mobile number"
            onChange={(e) => setMobilenumber(e.target.value)}
          />
        </FormControl>
        <FormControl id="pic">
          <FormLabel>Upload your picture</FormLabel>
          <Input
            type="file"
            p={1.5}
            mb={3}
            placeholder="Upload profile pic"
            onChange={(e) => postDetails(e.target.files[0])}
            accept="image/*"
          />
        </FormControl>
        <Button
          colorScheme="teal"
          width="100%"
          onClick={submitHandler}
          isLoading={loading}
        >
          Sign Up
        </Button>
      </VStack>
    </>
  );
};

export default Signup;
