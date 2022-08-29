import React from "react";

// Dev components
import { TopNav } from "../Layouts";
import { BannerSlide } from "../Components/Banner";
import { FeaturedProducts } from "../Components/FeaturedProducts";

import { CategoriesList } from "../Components/Categories";

// Nativebase components
import { Box, Button, HStack, Icon, ScrollView, Text } from "native-base";

// Icons
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <>
      <TopNav />
      <BannerSlide />
      <ScrollView
        contentContainerStyle={{
          minHeight: "60%",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Box px={3} py={5} bg="white" size="full" alignItems="center">
          <Box w="90%">
            <Box>
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" color="coolGray.500">
                  Featured Products
                </Text>
                <Button
                  variant="outline"
                  leftIcon={<Icon as={MaterialIcons} name="list" />}
                  onPress={() => navigation.navigate("Products")}
                >
                  Show all
                </Button>
              </HStack>
              {/* Featured products list */}
              <FeaturedProducts />
            </Box>

            <Box pb={10} mt={10}>
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" color="coolGray.500">
                  Categories
                </Text>

                <Button
                  variant="outline"
                  leftIcon={<Icon as={MaterialIcons} name="list" />}
                  onPress={() => navigation.navigate("Products")}
                >
                  All products
                </Button>
              </HStack>
              <CategoriesList />
            </Box>

            <Box mb={10}>
              <Text
                fontSize="2xl"
                color="coolGray.500"
                mb={3}
                textAlign="center"
              >
                Why should you Sell and Purchase here?
              </Text>
              <HStack justifyContent="space-around" alignItems="center" my={3}>
                <Box alignItems="center" w="50%" px={2}>
                  <Box bg="primary.50" borderRadius={"full"} p={1}>
                    <Icon
                      size="3xl"
                      color="primary.500"
                      as={<MaterialCommunityIcons name={"currency-usd"} />}
                    />
                  </Box>
                  <Text fontSize="sm" bold color="coolGray.500">
                    Low post fee
                  </Text>
                  <Text textAlign="center" fontSize="xs">
                    Here, You are allowed to post and sell your products is very
                    low cost.{" "}
                  </Text>
                </Box>
                <Box alignItems="center" w="50%" px={2}>
                  <Box bg="primary.50" borderRadius={"full"} p={1}>
                    <Icon
                      size="3xl"
                      color="primary.500"
                      as={<MaterialIcons name={"local-shipping"} />}
                    />
                  </Box>
                  <Text fontSize="sm" bold color="coolGray.500">
                    Free shipping
                  </Text>
                  <Text textAlign="center" fontSize="xs">
                    Here, You are allowed to post and sell your products is very
                    low cost.{" "}
                  </Text>
                </Box>
              </HStack>
              <HStack justifyContent="space-around" alignItems="center" my={3}>
                <Box alignItems="center" w="50%" px={2}>
                  <Box bg="primary.50" borderRadius={"full"} p={1}>
                    <Icon
                      size="3xl"
                      color="primary.500"
                      as={<MaterialIcons name={"supervised-user-circle"} />}
                    />
                  </Box>
                  <Text fontSize="sm" bold color="coolGray.500">
                    User to user market
                  </Text>
                  <Text textAlign="center" fontSize="xs">
                    Here, You are allowed to post and sell your products is very
                    low cost.{" "}
                  </Text>
                </Box>
                <Box alignItems="center" w="50%" px={2}>
                  <Box bg="primary.50" borderRadius={"full"} p={1}>
                    <Icon
                      size="3xl"
                      color="primary.500"
                      as={
                        <MaterialCommunityIcons name="book-variant-multiple" />
                      }
                    />
                  </Box>
                  <Text fontSize="sm" bold color="coolGray.500">
                    Everything availabe
                  </Text>
                  <Text textAlign="center" fontSize="xs">
                    Here, You are allowed to post and sell your products is very
                    low cost.{" "}
                  </Text>
                </Box>
              </HStack>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Home;
