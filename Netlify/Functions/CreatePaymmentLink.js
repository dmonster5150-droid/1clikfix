// Placeholder serverless function for Square payment link creation.
// Set SQUARE env vars in Netlify (SQUARE_ACCESS_TOKEN, SQUARE_APPLICATION_ID, SQUARE_LOCATION_ID)
// Replace with secure implementation when ready.

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Square createPaymentLink placeholder. Implement server logic using Square SDK here.' })
  }
}
