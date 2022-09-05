import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

// Dev components
import { UserAccount } from "../Components/Dropdowns";

// NativeBase components
import { Box, Button, Icon, Stack, Text } from "native-base";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

const TopNav = () => {
  const navigation = useNavigation();
  const profile = useSelector((state) => state.profile);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  console.warn(profile);
  return (
    <>
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
              onPress={() => setShowAccountDropdown(!showAccountDropdown)}
              borderRadius="50"
              bg="primary.50"
            >
              <Icon
                as={MaterialIcons}
                name="person"
                size="xl"
                color="primary.900"
              />
            </Button>
          ) : (
            <Button
              variant="ghost"
              onPress={() => navigation.navigate("Signin")}
              borderRadius="50"
              px={3}
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
                  Signin
                </Text>
              </Stack>
            </Button>
          )}
        </Stack>
      </Box>

      <UserAccount
        setShowAccountDropdown={setShowAccountDropdown}
        showAccountDropdown={showAccountDropdown}
      />
    </>
  );
};

export default TopNav;
