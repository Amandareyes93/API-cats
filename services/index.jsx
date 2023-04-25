export const getFactService = async (URL) => {
  const response = await fetch(URL);
  const { fact } = await response.json();

  return fact;
};

export const getImageService = async (URL, threeWords) => {
  const response = await fetch(`${URL}${threeWords}?size=50&color=red&json=true`);
  const { url } = await response.json();
  return url;
};
