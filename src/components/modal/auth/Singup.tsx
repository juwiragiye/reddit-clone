import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/services/firebase/errors";

type SingUpProps = {};

const SingUp: React.FC<SingUpProps> = () => {
  const setModalView = useSetRecoilState(authModalState);
  const [singUpForm, setSingUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");

    if (singUpForm.confirmPassword !== singUpForm.password) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(
      singUpForm.email,
      singUpForm.confirmPassword
    );
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSingUpForm((prev) => ({
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
      <Input
        placeholder="Confirm Password"
        name="confirmPassword"
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

      <Text fontSize={"sm"} color={"red"} m={2} textAlign={"center"}>
        {error ||
          (userError &&
            FIREBASE_ERRORS[userError.message as keyof typeof FIREBASE_ERRORS])}
      </Text>

      <Button
        type="submit"
        width={"100%"}
        bg="red.500"
        height={"40px"}
        _hover={{ bg: "red.400" }}
        isLoading={loading}
      >
        Sign Up
      </Button>

      <Flex justify="center" fontSize={"9pt"} gap={2} mt={2}>
        <Text>Already have an account?</Text>
        <Text
          color={"blue.500"}
          cursor={"pointer"}
          fontWeight={"bold"}
          onClick={() =>
            setModalView((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          Log In
        </Text>
      </Flex>
    </form>
  );
};
export default SingUp;
