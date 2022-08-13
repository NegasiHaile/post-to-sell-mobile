import React from "react";
import { useNavigation } from "@react-navigation/native";

// NativeBase components
import { Box, Button, Icon, Stack, Text } from "native-base";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

const TopNav = () => {
  const navigation = useNavigation();
  return (
    <Box pt={8} bg={"primary.900"}>
      <Stack direction="row" justifyContent="space-between" mx={3}>
        <Button variant="none" onPress={() => navigation.navigate("Home")}>
          <Text bold fontSize="2xl" color="primary.50">
            Post-To-Sell
          </Text>
        </Button>
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
      </Stack>
    </Box>
  );
};

export default TopNav;
