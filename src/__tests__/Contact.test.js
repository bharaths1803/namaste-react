import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact Us Page Test Cases", () => {
  beforeAll(() => {
    console.log("Before all");
  });

  afterAll(() => {
    console.log("After all");
  });

  beforeEach(() => {
    console.log("Before each");
  });

  afterEach(() => {
    console.log("After each");
  });

  it("Should load Contact Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input inside Contact Component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });

  it("Should load 2 input inside Contact Component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
