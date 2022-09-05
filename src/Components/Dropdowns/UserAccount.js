import React from "react";
import { useDispatch } from "react-redux";

// Redux Actions
import { _setProfile } from "../../Redux/Actions";

// Native components
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  PresenceTransition,
  Pressable,
  Text,
  VStack,
} from "native-base";

const UserAccount = ({ showAccountDropdown, setShowAccountDropdown }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    setShowAccountDropdown(!showAccountDropdown);
    dispatch(_setProfile({}));
  };

  return (
    <PresenceTransition
      visible={showAccountDropdown}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 250,
        },
      }}
      position="absolute"
      zIndex={9999}
      right={0}
    >
      <Box
        w="150"
        minHeight="200"
        bg="white"
        top={"83"}
        opacity={0.9}
        display={"flex"}
        borderBottomRadius={"sm"}
      >
        <HStack justifyContent="space-between" alignItems="center" p={2} mt={2}>
          <Pressable>
            <Text color="muted.500" bold overflow={"scroll"}>
              Example@gmail.com
            </Text>
          </Pressable>
        </HStack>
        <Divider />
        <VStack p={2}>
          <Button variant="ghost">
            <Text color="muted.500" w="100">
              Change password
            </Text>
          </Button>

          <Button variant="ghost" mb={1}>
            <Text color="muted.500" w="100">
              Notify me on post
            </Text>
          </Button>
          <Divider />
          <Button variant="ghost" mt={1}>
            <Text color="muted.500" w="100">
              Add product
            </Text>
          </Button>
          <Button variant="ghost" mb={1}>
            <Text color="muted.500" w="100">
              My products
            </Text>
          </Button>
          <Divider />
          <Button variant="ghost" mt={1}>
            <Text color="muted.500" w="100">
              Add advert
            </Text>
          </Button>
          <Button variant="ghost">
            <Text color="muted.500" w="100">
              My advert
            </Text>
          </Button>

          <Button mt={2} colorScheme="error" onPress={() => logOut()}>
            Logout
          </Button>
        </VStack>
      </Box>
    </PresenceTransition>
  );
};

export default UserAccount;
