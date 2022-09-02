import React from "react";
import { Linking, Platform } from "react-native";
import { useSelector } from "react-redux";

//Service provider functions
import {
  filterCategoryName,
  filterSubCategoryName,
  filterBrandName,
} from "../Services/FilterCategoryName";

// Utility functions
import { ShortDateFormat } from "../Utils";

// Dev components
import { ContentContainer } from "../Components/Containers";
import { FeaturedProducts } from "../Components/FeaturedProducts";
import { ProductGalleryView } from "../Components/Product";

// Native-base components
import { Box, Button, HStack, Icon, Text, VStack } from "native-base";

// Icons
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ProductDetail = ({ route, navigation }) => {
  const product = route.params;
  const categories = useSelector((state) => state.categories);

  const onPressMobileNumberClick = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }

    Linking.openURL(phoneNumber);
  };

  const onPressOpenWhatsapp = (number, productName) => {
    const sampleMessage = `Hi, I see your product named as ${productName} in post-to-sell, Is it available now?`;
    Linking.openURL(`whatsapp://send?phone=${number}&text= ${sampleMessage}`);
  };

  return (
    <ContentContainer>
      <Box mt={10} w="90%">
        <Box mb={20}>
          <ProductGalleryView product={product} />

          <Box py={3}>
            <Box py={2}>
              <Text fontSize={"lg"} color="muted.500" my={2}>
                Product detial
              </Text>

              <Text>{product ? ShortDateFormat(product.createdAt) : ""}</Text>
              <HStack justifyContent="space-between" alignItems="center">
                <Text bold>
                  Name:{" "}
                  {product?.productName ? product?.productName : "Unnamed"}
                </Text>
                <Text bold>
                  Price:{" "}
                  {product?.currentPrice
                    ? `${product?.currentPrice} ETB`
                    : "$ Call me"}
                </Text>
              </HStack>
              <Text bold py={1}>
                {(categories, product.model)}{" "}
                {filterBrandName(categories, product.brand)}{" "}
                {filterSubCategoryName(categories, product.subCategory)}{" "}
                {filterCategoryName(categories, product.category)}
              </Text>
              <Box my={2}>
                {product?.discription && (
                  <Text py={2}>{product?.discription}</Text>
                )}
              </Box>
            </Box>
            <Box py={2}>
              <Text fontSize={"lg"} color="muted.500" my={2}>
                Contacts
              </Text>
              <HStack justifyContent={"space-between"} w="100%">
                <VStack alignItems="center" w="50%">
                  <Button
                    size="xs"
                    p={2}
                    my={1}
                    borderRadius="full"
                    bg="success.700"
                    w="90%"
                    leftIcon={<Icon as={MaterialIcons} name="call" />}
                    onPress={() =>
                      onPressMobileNumberClick(product.contacts.phoneNumber)
                    }
                  >
                    {product.contacts.phoneNumber}
                  </Button>
                  <Button
                    size="xs"
                    p={2}
                    my={1}
                    borderRadius="full"
                    bg="success.500"
                    w="90%"
                    leftIcon={
                      <Icon as={MaterialCommunityIcons} name="whatsapp" />
                    }
                    textAlign="left"
                    onPress={() =>
                      onPressOpenWhatsapp(
                        product.contacts.whatsapp,
                        product.productName
                      )
                    }
                  >
                    Whatsapp
                  </Button>
                </VStack>
                <VStack alignItems="center" w="50%">
                  <Button
                    size="xs"
                    p={2}
                    my={1}
                    borderRadius="full"
                    bg="blue.700"
                    w="90%"
                    leftIcon={<Icon as={MaterialIcons} name="facebook" />}
                    onPress={() => Linking.openURL("https://facebok.com/")}
                  >
                    facebook
                  </Button>
                  <Button
                    size="xs"
                    p={2}
                    my={1}
                    borderRadius="full"
                    bg="blue.400"
                    w="90%"
                    leftIcon={<Icon as={FontAwesome5} name="telegram" />}
                    onPress={() =>
                      Linking.openURL(
                        `https://t.me/${product.contacts?.telegram}`
                      )
                    }
                  >
                    telegram
                  </Button>
                </VStack>
              </HStack>
            </Box>
          </Box>
        </Box>
        {/* Featured products list */}
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl" color="coolGray.500">
            Featured Products
          </Text>
          <Button
            variant="outline"
            leftIcon={<Icon as={MaterialIcons} name="list" />}
            onPress={() => navigation.navigate("Products")}
          >
            Show all
          </Button>
        </HStack>
        <FeaturedProducts />
      </Box>
    </ContentContainer>
  );
};

export default ProductDetail;
