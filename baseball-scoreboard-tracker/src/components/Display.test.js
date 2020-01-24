import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

describe("Display", () => {
  test("should render without crashing", () => {
    render(<Display />);
  });
  test("should display the balls and strike values at 0 on first render", () => {
    const { getByTestId } = render(<Display />);
    expect(getByTestId("strikes").textContent).toBe("0");
    expect(getByTestId("balls").textContent).toBe("0");
  });
});
