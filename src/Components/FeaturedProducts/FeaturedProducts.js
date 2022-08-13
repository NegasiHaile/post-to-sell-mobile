import React from "react";

// Dev components
import { ProductPreview } from "../Product";

// Nativebase Components
import { HStack, Icon, VStack } from "native-base";

const FeaturedProducts = () => {
  return (
    <VStack space={5} mt={5} mb={10}>
      <HStack justifyContent="space-between" space={5}>
        <ProductPreview />
        <ProductPreview />
      </HStack>
      <HStack justifyContent="space-between">
        <ProductPreview />
        <ProductPreview />
      </HStack>
      <HStack justifyContent="space-between">
        <ProductPreview />
        <ProductPreview />
      </HStack>
    </VStack>
  );
};

export default FeaturedProducts;
