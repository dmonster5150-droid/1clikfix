// Placeholder createPaymentLink. In production replace with Square SDK and use SQUARE_ACCESS_TOKEN from env.
exports.handler = async function(event) {
  // expected POST payload: { providerId, amountCents, currency, redirectUrl }
  // For now return the Square subscription page URL as a stub.
  return {
    statusCode: 200,
    body: JSON.stringify({ url: "https://1clikfixsquare.square.site/" })
  };
};
