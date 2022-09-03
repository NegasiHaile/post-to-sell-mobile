import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

// Redux Actions
import { _setProfile } from "../Redux/Actions";

// NativeBase components
import { Box, Button, Icon, Stack, Text } from "native-base";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

const TopNav = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profile = useSelector((state) => state.profile);
  console.warn(profile);
  return (
    <Box pt={8} bg={"primary.900"}>
      <Stack direction="row" justifyContent="space-between" mx={3}>
        <Button variant="none" onPress={() => navigation.navigate("Home")}>
          <Text bold fontSize="2xl" color="primary.50">
            Post-To-Sell
          </Text>
        </Button>
        {"accesstoken" in profile ? (
          <Button
            variant="ghost"
            onPress={() => {
              dispatch(_setProfile({}));
              navigation.navigate("Home");
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems={"center"}
            >
              <Icon
                as={MaterialIcons}
                name="person"
                size="lg"
                color="primary.50"
              />
              <Text textAlign={"center"} fontSize="sm" color="primary.50">
                My Account
              </Text>
            </Stack>
          </Button>
        ) : (
          <Button variant="ghost" onPress={() => navigation.navigate("Signin")}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems={"center"}
            >
              <Icon
                as={MaterialIcons}
                name="person"
                size="lg"
                color="primary.50"
              />
              <Text textAlign={"center"} fontSize="sm" color="primary.50">
                Signin
              </Text>
            </Stack>
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default TopNav;
