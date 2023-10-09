export const getJokesBySearch = async (searchValue) => {
  if (searchValue.trim === "") {
    throw new Error("Must search for a value");
  }

  const response = await fetch(
    "https://icanhazdadjoke.com/search?term=" + searchValue,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Jokes");
  }
  const data = await response.json();
  if (data.results.lenght === 0) {
    throw new Error("No jokes found for" + searchValue);
  }
  return data.results;
};
