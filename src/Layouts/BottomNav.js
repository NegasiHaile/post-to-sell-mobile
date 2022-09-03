import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

// Nativebase components
import { Box, Divider, Icon, Button, Stack, Text } from "native-base";

// Icons
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const BottomNav = () => {
  const navigation = useNavigation();
  const profile = useSelector((state) => state.profile);

  return (
    <Box>
      <Divider />
      <Stack direction="row" justifyContent="space-between" mx={3}>
        <Button variant="ghost" onPress={() => navigation.navigate("Home")}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems={"center"}
          >
            <Icon as={MaterialIcons} name="home" size="lg" />
            <Text textAlign={"center"} fontSize="sm">
              Home
            </Text>
          </Stack>
        </Button>
        <Button variant="ghost" onPress={() => navigation.navigate("Products")}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems={"center"}
          >
            <Icon as={MaterialIcons} name="view-list" size="lg" />
            <Text textAlign={"center"} fontSize="sm">
              Products
            </Text>
          </Stack>
        </Button>

        {"accesstoken" in profile && (
          <Button variant="ghost">
            <Stack
              direction="column"
              justifyContent="center"
              alignItems={"center"}
            >
              <Icon
                as={MaterialCommunityIcons}
                name="advertisements"
                size="lg"
              />
              <Text textAlign={"center"} fontSize="sm">
                Adverts
              </Text>
            </Stack>
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default BottomNav;
