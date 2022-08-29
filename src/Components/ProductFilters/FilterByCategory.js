import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux actions
import { _setFilteredProducts } from "../../Redux/Actions";

// Services
import { CountProductsByCategory } from "../Services";

// Native-base components
import { Box, Checkbox, Text } from "native-base";

const FilterByCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const allActiveProducts = useSelector((state) => state.allActiveProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // console.log(allActiveProducts);

  const onSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);

    if (categoryId !== "all") {
      const productsByCategory = allActiveProducts?.filter(
        (product) => product.category === categoryId
      );
      dispatch(_setFilteredProducts(productsByCategory));
    } else {
      dispatch(_setFilteredProducts(allActiveProducts));
    }
  };

  return (
    <Box m={3}>
      <Text fontSize="xl" color="coolGray.500" mb={2}>
        Filter by category
      </Text>

      <Box ml={2} w="100%">
        <Checkbox
          value={"all"}
          primary
          colorScheme="primary"
          my={2}
          color="coolGray.500"
          checkboxSize={40}
          CheckboxIconSize={40}
          isChecked={selectedCategory === "all"}
          onChange={() => onSelectCategory("all")}
        >
          All
        </Checkbox>
        {categories.length > 0 ? (
          categories.map((category, index) => {
            return (
              <Checkbox
                value={category._id}
                primary
                colorScheme="primary"
                my={2}
                color="coolGray.500"
                key={index}
                checkboxSize={40}
                CheckboxIconSize={40}
                isChecked={selectedCategory === category._id}
                onChange={() => onSelectCategory(category._id)}
              >
                {`${category.category} (${CountProductsByCategory(
                  allActiveProducts,
                  category._id
                )})`}
              </Checkbox>
            );
          })
        ) : (
          <Text>Categories not available</Text>
        )}
      </Box>
    </Box>
  );
};

export default FilterByCategory;
