export const makeRequest = async (method, URL, body = null) => {
  const res = await fetch(URL, {
    method,
    [body ? 'headers' : null]: {
      'Content-Type': 'application/json',
    },
    [body ? body : null]: [body ? body : null],
  });

  return res.json();
};
