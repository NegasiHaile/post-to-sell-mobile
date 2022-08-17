import React from "react";

// Dev components
import { TopNav } from "../Layouts";
import { BannerSlide } from "../Components/Banner";
import { FeaturedProducts } from "../Components/FeaturedProducts";

import { CategoriesList } from "../Components/Categories";

// Nativebase components
import { Box, Button, HStack, Icon, ScrollView, Text } from "native-base";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

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

            <Box pb={10}>
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" color="coolGray.500">
                  Categories
                </Text>
              </HStack>
              <CategoriesList />
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Home;
