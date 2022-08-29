import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import {
  _setAllActiveProducts,
  _setFilteredProducts,
} from "../../Redux/Actions";

// APIs
import { api_getAllActiveProducts } from "../../api";

// Dev components
import FilterByCategory from "./FilterByCategory";
import FilterByPriceRange from "./FilterByPriceRange";

// icons
import { MaterialIcons } from "@expo/vector-icons";

// Native-base
import {
  Box,
  Button,
  CheckIcon,
  HStack,
  Icon,
  Pressable,
  Select,
  Text,
} from "native-base";

const ProductsFilter = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const [sortBy, setSortBy] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);

  useEffect(() => {
    const getActiveProducts = async () => {
      setLoadingProducts((prev) => !prev);
      const res = await api_getAllActiveProducts();
      // setActiveProducts(res.data);
      dispatch(_setAllActiveProducts(res.data));
      dispatch(_setFilteredProducts(res.data));
      setLoadingProducts((prev) => !prev);
    };
    getActiveProducts();
  }, []);

  const sortByLatest = () => {
    const sortedByOldest = filteredProducts.sort((a, b) =>
      b.createdAt.split("/").join().localeCompare(a.createdAt.split("/").join())
    );
    dispatch(_setFilteredProducts([]));
    dispatch(_setFilteredProducts(sortedByOldest));
  };

  const sortByOldest = () => {
    const sortedByOldest = filteredProducts.sort((a, b) =>
      a.createdAt.split("/").join().localeCompare(b.createdAt.split("/").join())
    );
    dispatch(_setFilteredProducts([]));
    dispatch(_setFilteredProducts(sortedByOldest));
  };

  const sortByLowPrice = () => {
    const sortedByLowPrice = filteredProducts.sort(
      (a, b) => a.currentPrice - b.currentPrice
    );
    dispatch(_setFilteredProducts([]));
    dispatch(_setFilteredProducts(sortedByLowPrice));
  };

  const sortByHighPrice = () => {
    const sortedByLowPrice = filteredProducts.sort((a, b) => (a < b ? -1 : 1));
    dispatch(_setFilteredProducts([]));
    dispatch(_setFilteredProducts(sortedByLowPrice));
  };

  const sortProductsBy = (value) => {
    setSortBy(value);
    if (value === "latest") {
      sortByLatest();
    }
    if (value === "oldest") {
      sortByOldest();
    }
    if (value === "low_price") {
      sortByLowPrice();
    }
    if (value === "high_price") {
      sortByHighPrice();
    }
  };

  return (
    <Box position="relative">
      <HStack
        justifyContent="space-between"
        pt={3}
        pb={1}
        px={3}
        w="100%"
        bg={"white"}
      >
        <Pressable onPress={() => setShowFilter((prev) => !prev)}>
          <Icon as={<MaterialIcons />} name="filter-list" size="xl" />
        </Pressable>
        <Select
          height="33"
          selectedValue={sortBy}
          minWidth="120"
          accessibilityLabel="Sort By"
          placeholder="Sort By"
          variant="outline"
          customDropdownIconProps={{ size: "3", px: "3" }}
          _selectedItem={{
            bg: "primary.600",
            endIcon: <CheckIcon size="5" color="primary.50" />,
          }}
          onValueChange={(itemValue) => sortProductsBy(itemValue)}
          isDisabled={loadingProducts}
        >
          <Select.Item label="Latest" value="latest" />
          <Select.Item label="Oldest" value="oldest" />
          <Select.Item label="Peice Low-High" value="low_price" />
          <Select.Item label="Price High-Low" value="high-price" />
        </Select>
      </HStack>

      {/* Sidebar filter */}
      <Box
        bg="white"
        minHeight="605"
        opacity={0.9}
        w="200"
        position="absolute"
        zIndex={999}
        display={showFilter ? "flex" : "none"}
        borderBottomRadius={"sm"}
        top={0}
        left={0}
      >
        {/* Filtering top bar */}
        <HStack
          px={2}
          py={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="xl" color="coolGray.500">
            Filter products
          </Text>
          <Icon
            as={<MaterialIcons />}
            name="close"
            size="lg"
            bg="primary.50"
            borderRadius="50"
            ml={1}
            onPress={() => setShowFilter((prev) => !prev)}
          />
        </HStack>

        {/* Filtering by category */}
        <FilterByCategory />

        {/* Filter by price range */}
        <FilterByPriceRange />

        {/* Apply Button */}
        <Box px={3} position="absolute" bottom={5} w="100%" alignItems="center">
          <Button
            size="sm"
            w="90%"
            onPress={() => setShowFilter((prev) => !prev)}
          >
            Apply filter
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsFilter;
