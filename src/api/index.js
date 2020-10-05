const uri = `https://qrng.anu.edu.au/API/jsonI.php?type=uint8`;

/**
 * Request random numbers from the API.
 * @param {Number} length The number of values to request from the API.
 */
export const fetchPoints = async (length) => {
  try {
    // Wait for the response
    const response = await fetch(uri + `&length=${length}`, { method: 'get' });

    // If there are no error networks
    if (response.ok) {
      // Parse the response's body
      const { data } = await response.json();
      // response.data is the collection of values we need
      return data;
    }

    // If there's a network error, throw the response body as an error object
    throw await response.json();
  } catch (err) {
    console.error(err);
    // Action creators always expect a result, so we at least return an empty array
    return [];
  }
};
