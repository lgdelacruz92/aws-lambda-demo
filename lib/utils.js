export const toParamsURI = (params) => {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
};
