import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

// Nativebase components
import { Box, Divider, Icon, Button, Stack, Text } from "native-base";

// Icons
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

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
            <Icon as={Ionicons} name="home-outline" size="lg" />
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
            <Icon as={Ionicons} name="images-outline" size="lg" />
            <Text textAlign={"center"} fontSize="sm">
              All products
            </Text>
          </Stack>
        </Button>

        {"accesstoken" in profile && (
          <>
            <Button variant="ghost">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems={"center"}
              >
                <Icon as={Ionicons} name="folder-outline" size="lg" />
                <Text textAlign={"center"} fontSize="sm">
                  My products
                </Text>
              </Stack>
            </Button>
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
                  My Adverts
                </Text>
              </Stack>
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default BottomNav;
