export const toProductFilterParams = ({
  searchText,
  orderBy,
  color,
  brand,
  from,
  to,
}) => {
  const filters = [];
  if (searchText) {
    filters.push({
      key: 'name',
      value: searchText,
      type: 'includes',
    });
  }
  if (color) {
    filters.push({
      key: 'specs.color',
      value: color,
      type: 'equal',
    });
  }
  if (brand) {
    filters.push({
      key: 'specs.brand',
      value: brand,
      type: 'equal',
    });
  }
  return {
    filters,
    orderBy,
    from,
    to,
  };
};

export const toFilterItemLabel = ({ key, count }) => {
  return { key, label: `${key} (${count})` };
};
