import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const setModalView = useSetRecoilState(authModalState);

  const onSubmit = () => {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="Email"
        name="email"
        type="email"
        mb={2}
        onChange={onChange}
        required
        border={"1px solid"}
        borderColor={"gray.500"}
        borderRadius={"1.25rem"}
        fontWeight={"bold"}
        bg={"gray.50"}
        _placeholder={{ color: "gray.500", fontWeight: "normal" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "gray.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "transparent",
        }}
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        mb={2}
        onChange={onChange}
        required
        border={"1px solid"}
        borderColor={"gray.500"}
        borderRadius={"1.25rem"}
        fontWeight={"bold"}
        bg={"gray.50"}
        _placeholder={{ color: "gray.500", fontWeight: "normal" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "gray.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "transparent",
        }}
      />
      <Button
        type="submit"
        width={"100%"}
        bg="red.500"
        height={"40px"}
        _hover={{ bg: "red.400" }}
      >
        Log In
      </Button>

      <Flex justify="center" fontSize={"9pt"} gap={2} mt={2}>
        <Text>New here?</Text>
        <Text
          color={"blue.500"}
          cursor={"pointer"}
          fontWeight={"bold"}
          onClick={() =>
            setModalView((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
