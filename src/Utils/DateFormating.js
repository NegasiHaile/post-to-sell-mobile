export const ShortDateFormat = (longDate) => {
  const shortDate = new Date(longDate).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return shortDate;
};
