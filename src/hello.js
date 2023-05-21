"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello From Ravikant G! CICD radhe radhe JI",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
