import { authModalState } from "@/atoms/authModalAtom";
import { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase/clientApp";

type AuthModelProps = {};

const AuthModel: React.FC<AuthModelProps> = () => {
  const [modelState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  useEffect(() => {
    if (user) handleClose();
    console.log(user);
  }, [user]);

  return (
    <>
      <Modal isOpen={modelState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent textAlign={"center"}>
          <ModalHeader>
            {modelState.view === "login" && "Login In"}
            {modelState.view === "signup" && "Sign Up"}
            {modelState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            pb={4}
          >
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <OAuthButtons />
              <Text color={"gray.500"} fontWeight={"bold"} fontSize={"9pt"}>
                OR
              </Text>
              <AuthInputs />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModel;
