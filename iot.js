exports.handler = async (event) => {

    console.log("Event: ", event);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v4! Your function executed successfully!",
      }),
    };
  };
  