import { render, screen } from "@testing-library/react";
import { describe } from "vitest";

describe("JokeList", () => {
  it("should have a heading with the right number of jokes", () => {
    const fakeJokes = [
      { id: 1, joke: "Joke 1" },
      { id: 2, joke: "Joke 2" },
    ];

    const jokeHeading = screen.getByText(/found/i);
  });
});
