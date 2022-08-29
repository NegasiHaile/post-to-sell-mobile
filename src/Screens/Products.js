import React from "react";
import { useSelector } from "react-redux";

// Dev components
import { ContentContainer } from "../Components/Containers";
import { ProductsFilter } from "../Components/ProductFilters";
import { ProductPreview } from "../Components/Product";

// NativeBase components
import { Box, Divider, Flex, Text } from "native-base";

const Products = () => {
  const filteredProducts = useSelector((state) => state.filteredProducts);
  // const [loadingProducts, setLoadingProducts] = useState(false);

  console.warn(filteredProducts);
  return (
    <>
      <ProductsFilter />
      <Divider />
      <ContentContainer>
        <Box Box w="90%">
          <Flex
            mt={5}
            mb={10}
            flexWrap={"wrap"}
            direction="row"
            justifyContent="space-between"
            minH="200px"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => {
                return <ProductPreview key={index} product={product} />;
              })
            ) : (
              <Text textAlign="center" w="100%">
                Products not available!
              </Text>
            )}
          </Flex>
        </Box>
      </ContentContainer>
    </>
  );
};

export default Products;
