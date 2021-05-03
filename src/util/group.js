export const groupExtrasItems = (data = []) => {
  const key = "category";
  const groupedResult = data
    ? data.reduce((rv, x) => {
        (rv[x[key]?._id] = rv[x[key]?._id] || []).push(x);
        return rv;
      }, {})
    : {};
  return groupedResult;
};
