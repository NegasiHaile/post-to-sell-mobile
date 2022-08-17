import React from "react";

// Dev components
import CategoryItem from "./CategoryItem";

// Native-base components
import { Box, ScrollView } from "native-base";

const data = [
  {
    title: "Vehcles",
    description:
      "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl.",
    imgUrl: require("../../../assets/Banners/b01.jpg"),
  },
  {
    title: "Devices",
    description:
      "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante.",
    imgUrl: require("../../../assets/Banners/b00.jpg"),
  },
  {
    title: "Houses",
    description:
      "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue.s",
    imgUrl: require("../../../assets/Banners/b02.jpg"),
  },
];
const CategoriesList = () => {
  return (
    <Box pt={5}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        autoScroll
      >
        {data.map((item, index) => {
          return <CategoryItem item={item} key={index} />;
        })}
      </ScrollView>
    </Box>
  );
};

export default CategoriesList;
