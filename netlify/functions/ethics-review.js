exports.handler = async (event, context) => {
  try {
    console.log('Function starting...');
    
    const result = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        message: 'Function working!',
        timestamp: Date.now()
      })
    };
    
    console.log('Returning result:', result);
    return result;
    
  } catch (error) {
    console.log('Function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};
