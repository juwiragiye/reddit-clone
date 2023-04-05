import { authModalState } from "@/atoms/authModalAtom";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";

type AuthModelProps = {};

const AuthModel: React.FC<AuthModelProps> = () => {
  const [modelState, setModalState] = useRecoilState(authModalState);
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

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
