const categories = [
  // vehicle category

  {
    _id: 2,
    category: "Houses",
    subCategory: [
      {
        id: 3,
        sub_name: "Villa",
        brands: [
          {
            brand_name: "Sumsung",
            model: ["Note 10", "Edge s12"],
          },
          {
            brand_name: "Iphone",
            models: ["Pro Max 13", "Pro 14", "Pro Max 14"],
          },
        ],
      },
      {
        id: 4,
        sub_name: "Office",
        brands: [
          {
            list_name: "Dell",
            models: ["Dell 10th", "Dell gamming PC"],
          },
        ],
      },
      {
        id: 5,
        sub_name: "Real-State",
        brands: [
          {
            list_name: "HP",
            models: ["HP 10th", "HP gamming PC"],
          },
        ],
      },
      {
        id: 6,
        sub_name: "Condominium",
        brands: [
          {
            list_name: "IPhone",
            models: ["Iphone DXRC1", "Iphone DXRC002"],
          },
        ],
      },
    ],
    createdAt: "2022-04-19T11:06:49.562Z",
    description:
      "All kind of the houses are categorized under this, like Real-states, Villas, condominiums and other related.",
    categoryImage: require("../../assets/Banners/b01.jpg"),
  },
  {
    _id: 2,
    category: "Devices",
    subCategory: [
      {
        id: 3,
        sub_name: "Phone",
        brands: [
          {
            brand_name: "Sumsung",
            model: ["Note 10", "Edge s12"],
          },
          {
            brand_name: "Iphone",
            models: ["Pro Max 13", "Pro 14", "Pro Max 14"],
          },
        ],
      },
      {
        id: 4,
        sub_name: "Laptop",
        brands: [
          {
            list_name: "Dell",
            models: ["Dell 10th", "Dell gamming PC"],
          },
        ],
      },
      {
        id: 5,
        sub_name: "Desktops",
        brands: [
          {
            list_name: "HP",
            models: ["HP 10th", "HP gamming PC"],
          },
        ],
      },
      {
        id: 6,
        sub_name: "Speakers",
        brands: [
          {
            list_name: "IPhone",
            models: ["Iphone DXRC1", "Iphone DXRC002"],
          },
        ],
      },
    ],
    createdAt: "2022-04-19T11:06:49.562Z",
    description:
      "All list of the devices are categorized under this, like phones, laptops, desktops and other accessories.",
    categoryImage: require("../../assets/Banners/b02.jpg"),
  },
  {
    _id: 1,
    category: "Vehicles",
    subCategory: [
      {
        id: 1,
        sub_name: "Car",
        brands: [
          {
            brand_name: "tesla",
            model: ["model X", "model 3"],
          },
          {
            brand_name: "mercedes",
            models: ["B class", "C class", "CLA"],
          },
        ],
      },
      {
        id: 2,
        sub_name: "Trucks",
        brands: [
          {
            list_name: "iveco",
            models: ["astira", "magirus"],
          },
        ],
      },
      {
        id: 2,
        sub_name: "Motorcycles",
        brands: [
          {
            list_name: "iveco",
            models: ["astira", "magirus"],
          },
        ],
      },
      {
        id: 2,
        sub_name: "Three wheeled",
        brands: [
          {
            list_name: "iveco",
            models: ["astira", "magirus"],
          },
        ],
      },
    ],
    createdAt: "2022-04-19T11:06:49.562Z",
    description: "All vehicle type under post to sell",
    categoryImage: require("../../assets/Banners/b00.jpg"),
  },
];

export default categories;
