import React from "react";

// Native-base components
import { Box, HStack, Image, Text } from "native-base";

const ProductPreview = () => {
  return (
    <Box w="140" borderRadius="sm">
      <Image
        h="200"
        w="140"
        borderTopRadius="sm"
        opacity="0.8"
        source={require("../../../assets/Products/product-1.jpg")}
        alt="Alternate Text"
        resizeMode="cover"
      />
      <HStack justifyContent="space-between" pt={1}>
        <Text fontSize="xs" color="trueGray.500">
          Cotext T-Shirt{" "}
        </Text>
        <Text fontSize="xs" bold color="trueGray.500">
          {" "}
          3450 ETB
        </Text>
      </HStack>
    </Box>
  );
};

export default ProductPreview;
