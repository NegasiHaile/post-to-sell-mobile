import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { _setCategories } from "../../Redux/Actions";

// APIs
import { api_getAllCategories } from "../../api";

// Dev components
import CategoryItem from "./CategoryItem";

// Native-base components
import { Box, ScrollView } from "native-base";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const findCategories = async () => {
      const res = await api_getAllCategories();
      setCategories(res.data);
      dispatch(_setCategories(res.data));
    };

    findCategories();
  }, []);

  return (
    <Box pt={5}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        autoScroll
      >
        {categories.length > 0 &&
          categories.map((category, index) => {
            return <CategoryItem category={category} key={index} />;
          })}
      </ScrollView>
    </Box>
  );
};

export default CategoriesList;
