'use strict';

module.exports.helloFromLambda = async (event,context,callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: event.queryStringParameters && event.queryStringParameters.displaymessage != "" ?
         `Hello ${event.queryStringParameters.displaymessage} from lambda!` : 
         'Hello Bohdan Robota from lambda!',
        input: event,
      },
      null,
      2
    ),
  };

  callback(null, response);
};
