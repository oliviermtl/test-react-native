export const containsObject = (obj, list) =>
  list.some((elem) => JSON.stringify(elem) === JSON.stringify(obj));
