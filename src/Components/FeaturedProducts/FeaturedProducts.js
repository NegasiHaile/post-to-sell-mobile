import React, { useState, useEffect } from "react";

// Dev components
import { ProductPreview } from "../Product";

// Nativebase Components
import { Center, Flex, Spinner, Text } from "native-base";

// APIs
import { api_getAllFeaturedProducts } from "../../api";
const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      setLoadingProducts((prev) => !prev);
      const res = await api_getAllFeaturedProducts();
      setFeaturedProducts(res.data);
      setLoadingProducts((prev) => !prev);
    };
    getAllProducts();
  }, []);
  return (
    <Flex
      mt={5}
      mb={10}
      flexWrap={"wrap"}
      direction="row"
      justifyContent="space-between"
      minH="200px"
    >
      {!loadingProducts ? (
        featuredProducts.length > 0 ? (
          featuredProducts.map((product, index) => {
            return <ProductPreview key={index} product={product} />;
          })
        ) : (
          <Text textAlign="center"> Featured products not available!</Text>
        )
      ) : (
        <Center w="100%">
          <Spinner size="lg" />
        </Center>
      )}
    </Flex>
  );
};

export default FeaturedProducts;
