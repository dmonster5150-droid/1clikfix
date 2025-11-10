// Placeholder webhook verification. Replace with real signature verification.
exports.handler = async function(event) {
  // event.body contains webhook payload
  return {
    statusCode: 200,
    body: JSON.stringify({ verified: true })
  };
};
