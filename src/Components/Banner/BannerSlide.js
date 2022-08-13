import React from "react";

import { SliderBox } from "react-native-image-slider-box";

// Native-Base components
import { Box, Icon, HStack, VStack, Text } from "native-base";

// Constants
import { Colors } from "../../Theme";

// Icons
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const BannerSlide = () => {
  const images = [
    require("../../../assets/Banners/b00.jpg"),
    require("../../../assets/Banners/b01.jpg"),
    require("../../../assets/Banners/b02.jpg"),
  ];

  return (
    <Box position="relative">
      <SliderBox
        images={images}
        dotColor={Colors.primary["500"]}
        inactiveDotColor={Colors.primary["50"]}
        imageLoadingColor={Colors.primary["500"]}
        autoplay
        ImageComponentStyle={{ marginTop: -5, opacity: 0.8 }}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          right: 0,
          padding: 0,
          justifyContent: "space-between",
          margin: 0,
        }}
        //   circleLoop
      />
      <HStack
        bg="white"
        width="73%"
        borderTopRightRadius={27}
        h="50px"
        py={3}
        position="absolute"
        bottom="0"
        justifyContent="space-around"
        alignItems="center"
      >
        <VStack alignItems="center">
          <Box bg="primary.50" borderRadius={"full"} p={1}>
            <Icon
              size="md"
              color="primary.500"
              as={<MaterialCommunityIcons name={"currency-usd"} />}
            />
          </Box>
          <Text fontSize="xs" color="coolGray.500">
            Low post fee
          </Text>
        </VStack>
        <VStack alignItems="center">
          <Box bg="primary.50" borderRadius={"full"} p={1}>
            <Icon
              size="md"
              color="primary.500"
              as={<MaterialIcons name={"local-shipping"} />}
            />
          </Box>
          <Text fontSize="xs" color="coolGray.500">
            Free shipping
          </Text>
        </VStack>
        <VStack alignItems="center">
          <Box bg="primary.50" borderRadius={"full"} p={1}>
            <Icon
              size="md"
              color="primary.500"
              as={<MaterialIcons name={"supervised-user-circle"} />}
            />
          </Box>
          <Text fontSize="xs" color="coolGray.500">
            User to user market
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default BannerSlide;
