import React from "react";

// Native-base components
import { Box, Slider, Text } from "native-base";

const FilterByPriceRange = () => {
  return (
    <Box m={3}>
      <Text fontSize="xl" color="coolGray.500" mb={2}>
        Filter By Price Range
      </Text>

      <Box ml={2} w="100%">
        <Slider
          defaultValue={30000}
          minValue={0}
          maxValue={100000}
          accessibilityLabel="filter by price range"
          step={50}
          size="lg"
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </Box>
  );
};

export default FilterByPriceRange;
