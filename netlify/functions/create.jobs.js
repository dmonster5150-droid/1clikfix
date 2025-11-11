exports.handler = async (event, context) => {
  try {
    const job = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Job created!", job }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ success: false, error: err.message }) };
  }
};
