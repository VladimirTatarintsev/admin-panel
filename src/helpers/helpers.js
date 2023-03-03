export const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const xor = (arr, status) => {
  return arr.includes(status)
    ? arr.filter((i) => i !== status)
    : arr.concat(status);
};

export const getTotalPages = (totalCount, limit) => {
  return Math.ceil(Number(totalCount / limit));
};
export const createPages = (pages, totalPages) => {
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }
};
