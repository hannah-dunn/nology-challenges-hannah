export const getCharacter = async () => {
  const response = await fetch("https://swapi.dev/api/");
  if (!response.ok) {
    throw new Error("Failed to fetch Star Wars data");
  }
  const data = await response.json();
  return data;
};
