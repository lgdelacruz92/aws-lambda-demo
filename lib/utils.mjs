const toParamsURI = (params) => {
  return Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");
};

export default {
  toParamsURI,
};
