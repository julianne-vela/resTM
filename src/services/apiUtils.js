export const makeRequest = async (method, URL, body) => {
  let response;

  if (method === 'GET') {
    console.log('ran GET request');
    response = await fetch(URL);
  } else {
    response = await fetch(URL, {
      method: method,
      body: body,
      headers: { 'Content-Type': 'application/json' },
    });

    return response;
  }
};
