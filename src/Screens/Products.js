import React from "react";

// Dev components
import { ContentContainer } from "../Components/Containers";
import { FeaturedProducts } from "../Components/FeaturedProducts";

// NativeBase components
import { Box, ScrollView, Text } from "native-base";

const Products = () => {
  return (
    <ContentContainer>
      {/* <Box safeArea> */}
      <FeaturedProducts />
      {/* </Box> */}
    </ContentContainer>
  );
};

export default Products;
