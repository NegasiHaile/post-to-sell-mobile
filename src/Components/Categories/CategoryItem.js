import React from "react";

// Native-base components
import { Box, Button, Image, Text } from "native-base";

// Icons
import { Entypo } from "@expo/vector-icons";

const CategoryItem = ({ category }) => {
  return (
    <Box h="340 " w="150px" bg="text.100" rounded={5} mr={5}>
      <Image
        w="100%"
        h="140"
        source={category.categoryImage}
        alt="Category image"
        resizeMode="cover"
        roundedTop={5}
      />
      <Box p={1}>
        <Text fontSize="lg" mb={1}>
          {category.category}
        </Text>
        <Text fontSize="xs" mb={1} h="60">
          {category.description}
        </Text>
        <Box ml={1}>
          {category.subCategory.map((sub, index) => {
            return (
              <Text
                key={index}
                fontSize="xs"
                bold
                color="muted.700"
                alignItems="center"
              >
                <Entypo name="dot-single" size={12} />
                {sub.sub_name}
              </Text>
            );
          })}
        </Box>

        <Button size="sm" m={1} variant="outline">
          Show all
        </Button>
      </Box>
    </Box>
  );
};

export default CategoryItem;
