import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("basic math testing", () => {
  it("finds the sum of a + b", () => {
    const a = 10;
    const b = 30;
    const sum = a + b;
    expect(sum).toBe(40);
  });

  it("finds the times of a * b", () => {
    const a = 10;
    const b = 30;
    const mult = a * b;
    expect(mult).toBe(300);
  });
});
