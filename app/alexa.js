// app/alexa.js

exports.handler = function(request, callback) {
  // Populate this with your own application id
  if (request.session.application.applicationId !==
    "amzn1.ask.skill.08456690-5174-4506-8696-40dc5a046dec")
    callback("Invalid application id!");
  
  if (request.request.type === "LaunchRequest")
    createResponse("You invoked this skill with a launch request.", callback);
  else if (request.request.type === "IntentRequest")
    createResponse("You invoked this skill with " +
      request.request.intent.name + ".", callback);
  else
    createResponse("You invoked this skill with an unknown request.", callback);
}

function createResponse(text, callback) {
  callback({
    "version": "1.0",
    "response": {
      "shouldEndSession": true,
      "outputSpeech": {
        "type": "PlainText",
        "text": text
      }
    }
  });
}