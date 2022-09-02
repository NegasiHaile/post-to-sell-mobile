import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { _setCategories } from "../../Redux/Actions";

// APIs
import { api_getAllCategories } from "../../api";

// Services
import { FilterProductsByCategory } from "../../Services";

// Dev components
import CategoryItem from "./CategoryItem";
import { ProductPreview } from "../Product";

// Native-base components
import {
  Box,
  Center,
  HStack,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "native-base";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const allActiveProducts = useSelector((state) => state.allActiveProducts);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const findCategories = async () => {
      setCategoriesLoading(true);
      const res = await api_getAllCategories();
      setCategories(res.data);
      setCategoriesLoading(false);
      dispatch(_setCategories(res.data));
    };

    findCategories();
  }, []);

  return (
    <Box minH="100">
      {!categoriesLoading ? (
        categories.length > 0 ? (
          <VStack w="100%">
            {categories.map((category, index) => {
              return (
                FilterProductsByCategory(allActiveProducts, category._id)
                  .length >= 3 && (
                  <Box key={index} mt={10}>
                    <CategoryItem category={category} />
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      autoScroll
                      space={2}
                    >
                      <HStack space={2}>
                        {FilterProductsByCategory(
                          allActiveProducts,
                          category._id
                        )
                          .slice(0, 10)
                          .map((product, index) => {
                            return (
                              <ProductPreview product={product} key={index} />
                            );
                          })}
                      </HStack>
                    </ScrollView>
                  </Box>
                )
              );
            })}
          </VStack>
        ) : (
          <Text textAlign="center" fontSize={"lg"}>
            {" "}
            Categories not added yet!
          </Text>
        )
      ) : (
        <Center w="100%">
          <Spinner size="lg" />
        </Center>
      )}
    </Box>
  );
};

export default CategoriesList;
