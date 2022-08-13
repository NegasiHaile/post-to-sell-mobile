import React from "react";

// Native-base components
import { Box, ScrollView } from "native-base";

const ContentContainer = ({ children }) => {
  return (
    <ScrollView
      _contentContainerStyle={{
        minHeight: "100%",
      }}
    >
      <Box px={3} bg="white" size="full" alignItems="center">
        {children}
      </Box>
    </ScrollView>
  );
};

export default ContentContainer;
