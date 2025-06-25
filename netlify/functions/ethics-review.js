exports.handler = async (event, context) => {
  console.log('Function called with method:', event.httpMethod);
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      message: 'Hello from Netlify function',
      method: event.httpMethod,
      timestamp: new Date().toISOString()
    })
  };
};
