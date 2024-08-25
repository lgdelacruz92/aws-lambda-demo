const axios = require("axios");

exports.handler = async (event) => {
  try {
    // Example of making a GET request with Axios
    const response = await axios.get("https://api.example.com/data");

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
