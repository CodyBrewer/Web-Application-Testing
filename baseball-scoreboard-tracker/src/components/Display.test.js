import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

// ClickMe test function is used by passing in the number of clicks that you are wanting to imitate and the item you want to click and then starts a loop that calls the fireEvent.click() fn from the react testing-library package
const clickMe = (numClicks, itemToClick) => {
  for (let i = numClicks; i > 0; i--) {
    fireEvent.click(itemToClick);
  }
};

describe("Display", () => {
  test("should render without crashing", () => {
    render(<Display />);
  });
  test("should display the balls and strike values at 0 on first render", () => {
    const { getByTestId } = render(<Display />);
    expect(getByTestId("strikes").textContent).toBe("0");
    expect(getByTestId("balls").textContent).toBe("0");
  });
  test("should increment the strike to 1 when strike button is clicked once", () => {
    const { getByTestId } = render(<Display />);
    const strikeButton = getByTestId("strike-button");
    clickMe(1, strikeButton);
    expect(getByTestId("strikes").textContent).toBe("1");
  });
  test("should increment the strikes value to 2 when the strike button is clicked twice", () => {
    const { getByTestId } = render(<Display />);
    const strikeButton = getByTestId("strike-button");
    clickMe(2, strikeButton);
    expect(getByTestId("strikes").textContent).toBe("2");
  });
  test("should increment the strikes value to 2 and then back to 0 when the strike button is clicked three times", () => {
    const { getByTestId } = render(<Display />);
    const strikeButton = getByTestId("strike-button");
    clickMe(2, strikeButton);
    expect(getByTestId("strikes").textContent).toBe("2");
    clickMe(1, strikeButton);
    expect(getByTestId("strikes").textContent).toBe("0");
  });
});
