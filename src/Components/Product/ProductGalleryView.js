import React, { useState } from "react";

// Server-url
import { server } from "../../Constants/server";

// Native-base components
import { Box, Center, HStack, Image, Pressable, VStack } from "native-base";

const ProductGalleryView = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product?.images[0]);

  return (
    <Center mb={10}>
      <VStack>
        <Box minH="300">
          <Image
            h="350"
            w="300"
            borderTopRadius="sm"
            borderBottomRadius="xs"
            opacity="0.8"
            source={{ uri: `${server}/${activeImage}` }}
            alt={product?.productName}
            resizeMode="cover"
          />
        </Box>
        <HStack space={1} w="300" mt={1}>
          {product?.images.map((image, index) => {
            return (
              <Pressable
                h="100"
                w="57"
                key={index}
                onPress={() => setActiveImage(image)}
              >
                <Image
                  w="100%"
                  h="100%"
                  opacity="0.8"
                  source={{ uri: `${server}/${image}` }}
                  alt={`${product?.productName}-image-${index + 1}`}
                  resizeMode="cover"
                  borderRadius="xs"
                />
              </Pressable>
            );
          })}
        </HStack>
      </VStack>
    </Center>
  );
};

export default ProductGalleryView;
