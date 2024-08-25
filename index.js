import axios from "axios";
import utils from "./lib/utils";

const api_gateway = "https://ql1eg57p67.execute-api.us-east-1.amazonaws.com";
const authorize_route = `${api_gateway}/default/pax-user-authorize`;

exports.handler = async (event) => {
  try {
    const queryParams = event.queryStringParameters;
    const response = await axios.get(
      `${authorize_route}?${utils.toParamsURI(queryParams)}`
    );

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
