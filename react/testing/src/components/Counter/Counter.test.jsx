import { screen, render } from "@testing-library/react";
import Counter from "./Counter";
import { expect } from "vitest";

describe("Counter", () => {
  it("should render a heading", () => {
    render(<Counter />);
    const heading = screen.getByText(/count/i);
    expect(heading).toBeInTheDocument();
  });

  it("should render count as 0 when not passed as props", () => {
    render(<Counter />);
    const count = screen.getByTitle("count");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("0");
  });

  it("should render count with an intial value passed on prop", () => {
    render(<Counter initalCount={10} />);
    const count = screen.getByTitle("count");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("10");
  });

  it("should increase count when increase button is clicked", async () => {
    render(<Counter />);
    const count = screen.getByTitle("count");
    expect(count).toHaveTextContent("0");
    const btn = screen.getByTestId("increaseButton");
    const user = userEvent.setup();
    await user.click(btn);
    expect(count).toHaveTextContent("1");
  });

  it("should decrease count when decrease button is clicked", async () => {
    render(<Counter initialCount={5} />);
    const count = screen.getByTitle("count");
    expect(count).toHaveTextContent("5");
    const btn = screen.getByTestId("decreaseButton");
    const user = userEvent.setup();
    await user.click(btn);
    expect(count).toHaveTextContent("4");
    await user.click(btn);
    expect(count).toHaveTextContent("3");
  });

  it("should default to 0 on bad prop input", () => {
    render(<Counter initialCount={null} />);
    const count = screen.getByTitle("count");
    expect(count).toHaveTextContent("0");
  });

  it("should not allow count to be decreased below 0", async () => {
    render(<Counter />);
    const count = screen.getByTitle("count");
    expect(count).toHaveTextContent("0");
    const btn = screen.getByTestId("decreaseButton");
    expect(btn).toHaveAttribute("disabled");
    const user = userEvent.setup();
    await user.click(btn);
    expect(count).toHaveTextContent("0");
  });

  it("should reset count to initial value on reset", async () => {
    render(<Counter initialCount={5} />);
    const count = screen.getByTitle("count");
    expect(count).toHaveTextContent("0");
    const btn = screen.getByTestId("decreaseButton");
    expect(btn).toHaveAttribute("disabled");
    const user = userEvent.setup();
    await user.click(btn);
  });
});
