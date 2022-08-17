import React from "react";

import { categories } from "../../Mock";

// Dev components
import CategoryItem from "./CategoryItem";

// Native-base components
import { Box, ScrollView } from "native-base";

const CategoriesList = () => {
  return (
    <Box pt={5}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        autoScroll
      >
        {categories.map((category, index) => {
          return <CategoryItem category={category} key={index} />;
        })}
      </ScrollView>
    </Box>
  );
};

export default CategoriesList;
