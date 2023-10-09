import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

describe("Setup test", () => {
  it("runs our tests", () => {
    expect(true).toBe(true);
    // expect(true).toBe(false);
  });
});

// describe("App", () => {
//   it("Should have Vite + React Heading", () => {
//     render(<App />);
//     const heading = screen.getByText("Vite + React");
//     expect(heading).toBeInTheDocument();
//   });
// });

