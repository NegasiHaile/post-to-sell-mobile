export const FilterProductsByCategory = (products, categoryId) => {
  const productsByCategory = products?.filter(
    (product) => product.category === categoryId
  );
  return productsByCategory;
};
