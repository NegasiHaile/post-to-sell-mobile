import React from "react";

// Server configuration
import { server } from "../../Constants/server";
// Native-base components
import { Box, Button, Icon, Image, Text, HStack } from "native-base";

// Icons
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const CategoryItem = ({ category }) => {
  return (
    <HStack h="120" w="100%" bg="text.100" rounded={5}>
      <Image
        w="40%"
        h="120"
        source={{ uri: `${server}/${category.categoryImage}` }}
        alt="Category image"
        resizeMode="cover"
        roundedLeft={5}
      />
      <Box p={2} width={"60%"}>
        <Text fontSize="xl" mb={1}>
          {category.category}
        </Text>
        <Text fontSize="xs" mb={1}>
          {category.description}{" "}
          {/* {category.subCategory.map((sub, index) => {
            return sub.sub_name + ", ";
          })} */}
        </Text>

        <Button
          size="xs"
          p={1}
          m={1}
          variant="ghost"
          w="60%"
          rightIcon={<Icon as={MaterialIcons} name="arrow-forward" />}
        >
          Show all products
        </Button>
      </Box>
    </HStack>
  );
};

export default CategoryItem;
