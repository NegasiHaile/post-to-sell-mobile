import React, { useState } from "react";

// Dev components
import { ContentContainer } from "../Components/Containers";
import { FeaturedProducts } from "../Components/FeaturedProducts";
import { ProductGalleryView } from "../Components/Product";

// Native-base components
import { Box, Button, HStack, Icon, Text, VStack } from "native-base";

// Icons
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const ProductDetail = ({ route, navigation }) => {
  const product = route.params;

  return (
    <ContentContainer>
      <Box mt={10} w="90%">
        <ProductGalleryView product={product} />

        <Box py={3} >
          <Text>Product-Name : This is name</Text>

          <Box>
            <Text fontSize={'lg'} color='muted.500' my={2}>Contacts </Text>
            <HStack justifyContent={'space-between'} w='100%' >
              <VStack alignItems="center" w="50%">
          <Button size="xs"p={2} my={1}  borderRadius="full" bg="success.700" w="90%"
          leftIcon={<Icon as={MaterialIcons}  name="call"  />}
          > +251936373144 </Button>
          <Button size="xs"p={2} my={1} borderRadius="full" bg="success.400" w="90%"
           leftIcon={<Icon as={MaterialCommunityIcons}  name="whatsapp"  />} textAlign="left"> Whatsapp </Button>
          </VStack>
          <VStack alignItems="center"  w="50%">
          <Button size="xs"p={2} my={1}  borderRadius="full" bg="success.700"  w="90%"> +251936373144 </Button>
          <Button size="xs"p={2} my={1} borderRadius="full" bg="success.400" w="90%"> Whatsapp </Button>
          </VStack>
          </HStack>
          </Box>
        </Box>

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
        {/* Featured products list */}
        <FeaturedProducts />
      </Box>
    </ContentContainer>
  );
};

export default ProductDetail;
