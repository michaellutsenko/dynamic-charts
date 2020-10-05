const uri = `https://qrng.anu.edu.au/API/jsonI.php?type=uint8`;

export const fetchPoints = async (length) => {
  const response = await fetch({
    uri: uri + `&length=${length}`,
    options: { method: 'get' },
  });

  if (response.ok) {
    return await response.json();
  }

  throw await response.json();
};
