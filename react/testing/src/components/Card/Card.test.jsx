import { render, screen } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import Card from "./Card";
import { expect, it } from "vitest";

describe("Card Component", () => {
  it("should render a heading based on props", () => {
    render(<Card heading="Hello world" content="test" />);
    const heading = screen.getByText(/hello world/i);
    expect(heading).toBeInTheDocument();
  });

  it("should show content by default", () => {
    render(<Card heading="Hello world" content="test" />);
    const content = screen.getByText(/test content/i);
    expect(content).toBeInTheDocument();
  });

  it("should render a button", () => {
    render(<Card heading="Hello world" content="test" />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("should render a 'Hide' button when the content is shown", () => {
    render(<Card heading="Hello world" content="test" />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    // screen.getByText('show');
    expect(btn).toHaveTextContent(/hide/i);
  });

  it("Should toggle the content on button click", async () => {
    render(<Card heading="Hello world" content="test" />);
    const btn = screen.getByRole("button");
    const user = userEvent.setup();
    console.log("before clicking");
    screen.debug();
    const content = screen.getByText(/test content/i);
    expect(content).toBeInTheDocument;
    await user.click(btn);
    console.log("after click");
    screen.debug();
    expect(content).not.toBeInTheDocument;
  });

  it("Should toggle the button text on button click", async () => {
    render(<Card heading="Hello world" content="test" />);
    const btn = screen.getByRole("button");
    const user = userEvent.setup();
    expect(btn).toHaveTextContent(/hide/i);
    await user.click(btn);
    const content = screen.getByText(/show/i);
    await user.click(btn);
    expect(content).not.toBeInTheDocument;
  });
});
