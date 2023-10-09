import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect } from "vitest";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("should call the submit function that is passed in when the submit is clicked", async () => {
    // create a mock function
    const myMock = vi.fn(() => console.log("Search happens"));
    render(<SearchBar formSubmit={myMock} />);
    const searchBtn = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(searchBtn);
    console.log(myMock);
    expect(myMock).toHaveBeenCalled();
  });

  it("should call the submit function with the value typed into the search bar", async () => {
    const myMock = vi.fn((value) => console.log("Searched for: " + value));
    render(<SearchBar formSubmit={myMock} />);
    const searchBtn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();
    await user.type(input, "hello");
    await user.click(searchBtn);
    expect(myMock).toHaveBeenCalledOnce();
    expect(myMock.mock.calls[0][0].toBe("hello"));
  });

  it("should clear the search bar after the form is submitted", async () => {
    const myMock = vi.fn((value) => console.log("Searched for: " + value));
    render(<SearchBar formSubmit={myMock} />);
    const searchBtn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();
    await user.type(input, "hello");
    expect(input).toHaveValue("hello");
    await user.click(searchBtn);
    expect(input).toHaveValue("");
  });

  it("should call the submit function with the right value, multiple times", async () => {
    const myMock = vi.fn((value) => console.log("Searched for: " + value));
    render(<SearchBar formSubmit={myMock} />);
    const searchBtn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/search/i);
    const user = userEvent.setup();
    await user.type(input, "hello");
    await user.click(searchBtn);
    await user.type(input, "goodbye");
    await user.click(searchBtn);
    expect(myMock).toHaveBeenCalledTimes(2);
    console.log(myMock.mock.calls);
    expect(myMock.mock.calls[0][0]).toBe("hello");
    expect(myMock.mock.calls[1][0]).toBe("goodbye");
  });
});
