import React from "react";

// Server base-url
import { server } from "../../Constants/server";

// Native-base components
import { HStack, Pressable, Image, Text } from "native-base";

const ProductPreview = ({ product }) => {
  return (
    <Pressable w="140" borderRadius="sm" my={3}>
      <Image
        h="200"
        w="140"
        borderTopRadius="sm"
        borderBottomRadius="xs"
        opacity="0.8"
        source={{ uri: `${server}/${product.images[0]}` }}
        alt={product.productName}
        resizeMode="cover"
      />
      <HStack justifyContent="space-between" pt={1}>
        <Text fontSize="xs" color="trueGray.500">
          {product.productName}
        </Text>
        <Text fontSize="xs" bold color="trueGray.500">
          {product.currentPrice} ETB
        </Text>
      </HStack>
    </Pressable>
  );
};

export default ProductPreview;
