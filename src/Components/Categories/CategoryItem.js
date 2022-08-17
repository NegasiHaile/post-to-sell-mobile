import React from "react";

// Native-base components
import { Box, Icon, Image, Text } from "native-base";

// Icons
import { Entypo } from "@expo/vector-icons";

const CategoryItem = ({ item, index }) => {
  return (
    <Box h="305 " w="150px" bg="text.100" rounded={5} mr={5}>
      <Image
        w="100%"
        h="140"
        source={item.imgUrl}
        alt="Category image"
        resizeMode="cover"
        roundedTop={5}
      />
      <Box p={1}>
        <Text fontSize="lg" mb={1}>
          {item.title}
        </Text>
        <Text fontSize="xs" mb={1}>
          {item.description}
        </Text>
        <Box ml={1}>
          <Text fontSize="xs" bold color="muted.700" alignItems="center">
            <Entypo name="dot-single" size={12} />
            First sub-category
          </Text>
          <Text fontSize="xs" bold color="muted.700">
            <Entypo name="dot-single" size={12} />
            Second sub-category
          </Text>
          <Text fontSize="xs" bold muted color="muted.700">
            <Entypo name="dot-single" size={12} />
            Thrid sub-category
          </Text>
          <Text fontSize="xs" bold muted color="muted.700">
            <Entypo name="dot-single" size={12} />
            Fourth sub-category
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryItem;
