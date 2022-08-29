import React, { useState } from "react";

// Dev components
import { ContentContainer } from "../Components/Containers";
import { FeaturedProducts } from "../Components/FeaturedProducts";
import { ProductGalleryView } from "../Components/Product";

// Native-base components
import { Box, Button, HStack, Icon, Text } from "native-base";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

const ProductDetail = ({ route, navigation }) => {
  const product = route.params;

  return (
    <ContentContainer>
      <Box mt={10} w="90%">
        <ProductGalleryView product={product} />

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
    </ContentContainer>
  );
};

export default ProductDetail;
