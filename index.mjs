import axios from "axios";
import utils from "./lib/utils.mjs";

const api_gateway = "https://pax-buyers.auth.us-east-1.amazoncognito.com";
const authorize_route = `${api_gateway}/oauth2/authorize`;

export const handler = async (event) => {
  try {
    const queryParams = event.queryStringParameters;
    const url = encodeURI(
      `${authorize_route}?${utils.toParamsURI(queryParams)}`
    );

    const response = await axios.get(url);
    // Return the successful response
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    // Handle errors
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error.message,
      }),
    };
  }
};
